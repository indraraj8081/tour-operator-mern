const express = require("express");

const router = express.Router();

const {createTour} = require("../controllers/tourController");

const {isLoggedIn} = require("../middleware/authMiddleware");

const {isAdmin} = require("../middleware/roleMiddleware");

router.post("/",isLoggedIn,isAdmin,

createTour

);