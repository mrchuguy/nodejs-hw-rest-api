const express = require("express");
const cntrl = require("../../controllers/auth");
const { validateBody, authenticate } = require("../../middlewares");
const { authSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validateBody(authSchema), cntrl.registrer);

router.post("/login", validateBody(authSchema), cntrl.login);

router.get("/current", authenticate, cntrl.getCurrent);

router.post("/logout", authenticate, cntrl.logout);

module.exports = router;
