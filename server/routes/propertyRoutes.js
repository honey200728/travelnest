const express = require("express");

const router = express.Router();

const {
  getProperties,
  getPropertyById,
  addProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

// Get all properties
router.get("/", getProperties);

// Add property
router.post("/", addProperty);
router.get("/:id", getPropertyById);
// Update property
router.put("/:id", updateProperty);

// Delete property
router.delete("/:id", deleteProperty);

module.exports = router;