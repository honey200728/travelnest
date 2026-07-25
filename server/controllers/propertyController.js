const Property = require("../models/Property");

// ================= GET ALL =================

const getProperties = async (req, res) => {
  try {

    const properties = await Property.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      properties,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

// ================= ADD =================

const addProperty = async (req, res) => {
  try {

    const property = await Property.create(req.body);

    res.status(201).json({
      success: true,
      property,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

// ================= UPDATE =================

const updateProperty = async (req, res) => {
  try {

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      property,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

// ================= DELETE =================

const deleteProperty = async (req, res) => {
  try {

    await Property.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Property Deleted",
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

// ================= GET SINGLE PROPERTY =================

const getPropertyById = async (req, res) => {

  try {

    const property = await Property.findById(req.params.id);

    if (!property) {

      return res.status(404).json({
        success: false,
        message: "Property Not Found",
      });

    }

    res.status(200).json({
      success: true,
      property,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  getProperties,
  getPropertyById,
  addProperty,
  updateProperty,
  deleteProperty,
};