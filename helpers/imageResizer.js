const Jimp = require("jimp");

const imageResizer = async (imageURL) => {
  console.log("imageURL= ", imageURL);

  await Jimp.read(imageURL)
    .then((image) => {
      return image
        .resize(250, 250) // resize
        .quality(60) // set JPEG quality
        .write(imageURL); // save
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = imageResizer;