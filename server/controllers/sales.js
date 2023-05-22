const OverallStat = require("../models/OverallStat");

const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();
    res.status(200).json(overallStats[0]);
  } catch (ex) {
    res.status(404).json({ message: ex.message });
  }
};

module.exports = { getSales };
