const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  workEmail: {
    type: String,
    required: true,
    unique:true
  },
  workFirstName: {
    type: String,
    required: true,
  },
  workLastName: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  position: {
    type: String,
  },
  scopeOfWork: {
    type: String,
  },
  grossSalary: {
    type: String,
  },
  bankName: {
    type: String,
  },
  bankAddress: {
    type: String,
  },
  bankNumber: {
    type: String,
  },
  AccountNumber: {
    type: String,
  },
  aggrementStatus:{
          type:String,
          default:"Under Process"
  },
  photo: {
    type: String,
  },
  resume: {
    type: String,
  },
  taxForm: {
    type: String,
  },
  employmentForm: {
    type: String,
  },
  
});
const Offers = mongoose.model("Offers", OfferSchema);
module.exports = Offers;
