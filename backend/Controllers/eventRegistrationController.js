import EventRegistrationUser from "../Models/EventRegistrationUser.js";

export async function getRegistrations(req, res) {
  try {
    const registrations = await EventRegistrationUser.find({}, { __v: 0 });
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  };
};

export async function createNewRegistration(req, res) {
  const { firstName, lastName, email, age } = req.body;
  try {
    const newRegistration = new EventRegistrationUser({
      firstName,
      lastName,
      email,
      age
    });

    await newRegistration.save();
    res.json(newRegistration);

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  };
};

export async function updateRegistration(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email, age } = req.body;

  try {
    const registration = await EventRegistrationUser.findById(id);

    if (!registration) {
      res.status(404).json({ message: "Registration does not exist" });
      return;
    };

    registration.firstName = firstName;
    registration.lastName = lastName;
    registration.email = email;
    registration.age = age;

    await registration.save();
    res.json(registration);

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  };
};

export async function deleteRegistration(req, res) {
  const { id } = req.params;
  try {
    const deleteRegistration = await EventRegistrationUser.findByIdAndDelete(id);

    if (!deleteRegistration) {
      res.status(404).json({ message: "Registration does not exist" });
      return;
    };

    res.json(deleteRegistration);

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  };
};