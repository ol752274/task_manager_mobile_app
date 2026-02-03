const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  getActions,
  createAction,
  toggleComplete,
  deleteAction
} = require("../controllers/actionController");

router.get("/", auth, getActions);
router.post("/", auth, createAction);
router.patch("/:id/toggle", auth, toggleComplete);
router.delete("/:id", auth, deleteAction);

module.exports = router;
