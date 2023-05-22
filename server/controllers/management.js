const User = require("../models/User");
const Transaction = require("../models/Transaction");
const mongoose = require("mongoose");

const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (ex) {
    res.status(404).json({ message: error.message });
  }
};

const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;
    //aggregate calls
    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" },
    ]);

    console.log("data", userWithStats);

    const saleTransaction = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );

    const filteredSaleTransactions = saleTransaction.filter(
      (transaction) => transaction != null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (ex) {
    res.status(404).json({ message: ex.message });
  }
};

module.exports = { getAdmins, getUserPerformance };
