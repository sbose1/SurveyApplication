const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const UserProfile = require('../controllers/profile');
const checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

// profile
router.get("/profile",checkAuth, UserProfile.getProfile);

router.put("/profile/submit",checkAuth,UserProfile.saveResponse);
router.get("/profile/showresult",checkAuth, UserProfile.getResult);

//admin profile: show user list
router.get("/profile/showusers",checkAuth, UserProfile.getUserList);


router.put("/profile/edit",checkAuth,UserProfile.editProfile);

router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;
