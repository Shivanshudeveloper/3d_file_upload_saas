const Contracts_Model = require("../../models/Contracts");

module.exports.addcontracts = async (req, res) => {
  try {
    const Contracts = new Contracts_Model(req.body);

    await Contracts.save();
    res.status(200).send(Contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

module.exports.getcontracts = async (req, res) => {
  try {
    const contracts = await Contracts_Model.find();

    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.updatecontract = async(req, res) => {
  const { id, status, remarks, signUrl,commercialContract1,commercialContract2,employementContract} = req.body;
  try {
    const contract = await Contracts_Model.findOne({ _id: id });
    contract.status = status;
    contract.remarks = remarks;
    contract.signUrl = signUrl;
    contract.commercialContract1=commercialContract1;
    contract.commercialContract2=commercialContract2;
    contract.employementContract=employementContract;
    await contract.save();
    res.send(contract);
  } catch (err) {
    res.send(err);
  }
}
module.exports.getfinalizecontracts=async(req,res)=>{

  try {
    const contracts = await Contracts_Model.find({status:"Approved"});

    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
}
module.exports.getnotfinalizecontracts=async(req,res)=>{

  try {
    const contracts = await Contracts_Model.find({status:"Not Approved"});

    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
}
module.exports.getcontract=async(req,res)=>{
  const {workEmail}=req.params;

  try {
    const contract = await Contracts_Model.find({workEmail:workEmail});

    res.status(200).send(contract);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
}
module.exports.removecontract = (req, res) => {
  Contracts_Model.deleteOne({ _id: req.params.id }, (err, docs) => {
    if (!err) {
      res.status(200).send(docs);
    } else {
      res.status(400).json(`Error: ${err}`);
    }
  });
};