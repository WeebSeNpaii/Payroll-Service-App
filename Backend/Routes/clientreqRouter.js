const router = require('express').Router();
const clientSchema = require('../Model/clientSchema');

router.post('/', async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required",
        success: false
      });
    }

    // Create new document
    const newClient = new clientSchema({
      name,
      phone,
      email,
      subject,
      message
    });

    // Save to DB
    const savedClient = await newClient.save();

    // Respond
    res.status(201).json({
      message: 'Client data saved successfully',
      data: savedClient,
      success: true
    });

  } catch (error) {
    console.error('Error saving client data:', error);
    res.status(500).json({
      message: 'Failed to save client data',
      error: error.message,
      success: false
    });
  }
});

module.exports = router;
