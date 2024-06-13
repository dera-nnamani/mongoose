const express = require("express");
const connectDB = require("./config/dbConnect.js");
const { createPeople, createPerson } = require("./tasks/createOperations.js");
const {
  findPersonByName,
  findOnePersonByFavFood,
  findOnePersonById,
} = require("./tasks/readOperations.js");
const {
  updateFavFood,
  updatePersonAge,
} = require("./tasks/updateOperations.js");
const { deletePerson, deleteAllMary } = require("./tasks/deleteOperations.js");
const { whoLikeburritos } = require("./tasks/combinedOperations.js");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

const startApp = async () => {
  try {
    await connectDB(); // connect to database

    // call  functions to execute operations
    await createPerson();
    await createPeople();
    await findPersonByName();
    await findOnePersonByFavFood();
    await findOnePersonById();
    await updateFavFood();
    await updatePersonAge();
    await deletePerson();
    await deleteAllMary();
    await whoLikeburritos();
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
