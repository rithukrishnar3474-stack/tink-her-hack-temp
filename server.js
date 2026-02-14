const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ---- Fake Database ---- //
let hospitals = [
  {
    id: 1,
    name: "City General",
    location: "Downtown",
    department: "Cardiology",
    doctorsAvailable: 4,
    waitTime: 45,
    currentToken: 100
  }
];

let bookings = [];

// ---- Routes ---- //

// Get hospitals
app.get("/hospitals", (req, res) => {
  res.json(hospitals);
});

// Book token
app.post("/book", (req, res) => {
  const { hospitalId } = req.body;

  const hospital = hospitals.find(h => h.id === hospitalId);

  if (!hospital) {
    return res.status(404).json({ message: "Hospital not found" });
  }

  hospital.currentToken++;

  const booking = {
    bookingId: bookings.length + 1,
    hospitalId,
    tokenNumber: hospital.currentToken,
    status: "BOOKED"
  };

  bookings.push(booking);

  res.json(booking);
});

// Cancel booking
app.post("/cancel", (req, res) => {
  const { bookingId } = req.body;

  const booking = bookings.find(b => b.bookingId === bookingId);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  booking.status = "CANCELLED";

  res.json({ message: "Booking cancelled. Refund initiated." });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
