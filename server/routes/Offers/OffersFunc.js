const Offers_Model = require("../../models/Offers");

module.exports.addoffer = async (req, res) => {
  try {
    const Offers = new Offers_Model(req.body);
    await Offers.save();
    res.status(200).send(Offers);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

module.exports.getoffers = async (req, res) => {
  try {
    const Offers = await Offers_Model.find();

    res.status(200).send(Offers);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.getcompletedoffers = async (req, res) => {
  try {
    const Offers = await Offers_Model.find({ aggrementStatus: "Completed" });

    res.status(200).send(Offers);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.updateoffer = async (req, res) => {
  Offers_Model.findOneAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { useFindAndModify: false },
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send(doc);
    }
  );
};
module.exports.removeoffer = (req, res) => {
  Offers_Model.deleteOne({ _id: req.params.id }, (err, docs) => {
    if (!err) {
      res.status(200).send(docs);
    } else {
      res.status(400).json(`Error: ${err}`);
    }
  });
};
