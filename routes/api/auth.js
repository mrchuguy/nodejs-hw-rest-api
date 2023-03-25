const express = require("express");
const cntrl = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { authSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validateBody(authSchema), cntrl.registrer);

router.post("/login", validateBody(authSchema), cntrl.login);

router.get("/current", authenticate, cntrl.getCurrent);

router.post("/logout", authenticate, cntrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  cntrl.updateAvatar
);

module.exports = router;
