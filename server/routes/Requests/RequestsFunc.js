const Requests_Model = require("../../models/Requests");

module.exports.addrequest = async (req, res) => {
  const { type, request } = req.body;
  try {
    const Request = new Requests_Model({
      type: type,
      request: request,
    });
    await Request.save();
    res.send(Request);
  } catch (err) {
    res.send(err);
  }
};
module.exports.getrequests = async (req, res) => {
  const { email } = req.params;
  try {
    const Request = await Requests_Model.find({ email: email });

    res.send(Request);
  } catch (err) {
    res.send(err);
  }
};
module.exports.removerequest = (req, res) => {
  Requests_Model.deleteOne({ _id: req.params.id }, (err, docs) => {
if (!err) {
res.status(200).send(docs);
} else {
res.status(400).json(`Error: ${err}`);
}
});
};