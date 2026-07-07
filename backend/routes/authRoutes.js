const express = require("express");
const router = express.Router();


const {register,login} = require("../controllers/authController");

const {isLoggedIn} = require("../middleware/authMiddleware");
router.get("/profile", isLoggedIn, (req, res) => {

    res.json({

        success: true,

        user: req.user

    });

});


router.post("/register", register);
router.post("/login", login);

module.exports = router;