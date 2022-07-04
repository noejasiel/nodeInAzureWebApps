const mongoose = require("mongoose");

const dbConnect = (app) => {
  mongoose
    .connect(
      `mongodb+srv://jasiel:${process.env.PASSWORD_BBDD}@development.eu72k.mongodb.net/firstDBMongo?retryWrites=true&w=majority`
    )
    .then((result) => {
      console.log(`me conecte`);
      const PORT = process.env.PORT;
      app.listen(PORT, () => {
        console.log(`escuchando en el puerto ${PORT}`);
      });
    })
    .catch((error) => console.log(error));
};

module.exports = dbConnect;
