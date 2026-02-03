const Action = require("../models/Action");

exports.getActions = async (req, res) => {
  const actions = await Action.find({ userId: req.userId });
  res.json(actions);
};

exports.createAction = async (req, res) => {
  const action = await Action.create({
    title: req.body.title,
    priority: req.body.priority,
    userId: req.userId
  });
  res.json(action);
};

exports.toggleComplete = async (req, res) => {
  const action = await Action.findOne({
    _id: req.params.id,
    userId: req.userId
  });
  action.completed = !action.completed;
  await action.save();
  res.json(action);
};

exports.deleteAction = async (req, res) => {
  await Action.deleteOne({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Deleted" });
};
exports.createAction = async (req, res) => {
  const action = await Action.create({
    title: req.body.title,
    priority: req.body.priority,
    scheduledAt: req.body.scheduledAt, // ✅
    userId: req.userId
  });
  res.json(action);
};
