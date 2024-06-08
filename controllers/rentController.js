const RentModel = require("../models/rentModel");

// create a rent
const createRent = async (req, res) => {
  const {
    reservation_id,
    pickup_time,
    return_time,
    discount,
    first_name,
    last_name,
    email,
    phone,
    vehicle_id,
    total_price,
    additional_charges,
  } = req.body;
  try {
    const book = await RentModel.create({
      reservation_id,
      pickup_time,
      return_time,
      discount,
      first_name,
      last_name,
      email,
      phone,
      vehicle_id,
      total_price,
      additional_charges,
    });
    res.status(200).json({
      status: 200,
      message: "Rent Book Successfully!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createRent };
