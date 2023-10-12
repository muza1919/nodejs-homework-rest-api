const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const data = await Contact.find();
  res.json(data);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findById(contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

const add = async (req, res) => {
  const data = await Contact.create(req.body);
  res.status(201).json(data);
};

const updateById = async (req, res) => {
  const { name, phone, email } = req.body;
  const { contactId } = req.params;
  const newContact = Object.assign(
    {},
    name && { name },
    phone && { phone },
    email && { email }
  );

  const data = await Contact.findByIdAndUpdate(contactId, newContact, {
    new: true,
  });

  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  console.log(contactId);
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
};

const deleteById = async (req, res) => {
  const data = await Contact.findByIdAndRemove(req.params.contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteById: ctrlWrapper(deleteById),
};