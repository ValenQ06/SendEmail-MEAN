import user from "../models/user.js";


const existingUser = async (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send({ message: "Incomplete data" });
  const existingUser = await user.findOne({ email: req.body.email });
  return existingUser
    ? res.status(400).send({ message: "The user is already registered" })
    : next();
};

//Validacion de que el rol que se da en el id sea admin y no user

export default { existingUser };