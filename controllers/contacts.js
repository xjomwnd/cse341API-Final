const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
  try {
    const contacts = await mongodb.getDb().db().collection('contacts').find().toArray();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingle = async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json('Invalid contact id');
  }

  try {
    const contact = await mongodb.getDb().db().collection('contacts').findOne({ _id: new ObjectId(id) });
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createContact = async (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const contact = { firstName, lastName, email, favoriteColor, birthday };

  try {
    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    res.status(201).json(response.ops[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateContact = async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json('Invalid contact id');
  }

  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const contact = { firstName, lastName, email, favoriteColor, birthday };

  try {
    const response = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: new ObjectId(id) }, contact);
    if (response.modifiedCount === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact = async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json('Invalid contact id');
  }

  try {
    const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: new ObjectId(id) });
    if (response.deletedCount === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
};
