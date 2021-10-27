const db = require("../models");

module.exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await db.User.findAll();
    res.send(allUsers);
  } catch (error) {
    console.error("Something went wrong");
    res.send({
      error: "Something went wrong",
    });
  }
};

// Return User
module.exports.getUserById = async (req, res) => {
  try {
    const user = await db.User.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(user);
  } catch (error) {
    console.error("ERROR");
    res.send({
      error: "ERROR",
    });
  }
};

module.exports.createUser = async (req, res) => {
  const { email, firstName, lastName } = req.body;

  try {
    const newUser = await db.User.create({
      email,
      firstName,
      lastName,
    });

    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.send({
      error: "Something went wrong",
    });
  }
};

// Updated User
module.exports.updateUser = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;
    const { id } = req.params;

    await db.User.update({ email }, { where: { id } });

    res.status(204).send("Succes!");
  } catch (error) {
    console.error("ERROR");
    res.send({ error });
  }
};

// Nothing
module.exports.deleteUser = (req, res) => {};
