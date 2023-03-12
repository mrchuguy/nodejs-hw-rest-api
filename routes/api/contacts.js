const express = require("express");
const cntrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, cntrl.listContacts);

router.get("/:contactId", authenticate, isValidId, cntrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.postSchema),
  cntrl.addContact
);

router.delete("/:contactId", authenticate, isValidId, cntrl.removeContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.putSchema),
  cntrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  cntrl.updateStatusContact
);

module.exports = router;
