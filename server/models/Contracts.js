const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema({
  AggrementType: {
    type: String,
  },
  AggrementFor: {
    type: String,
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
  workEmail: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  workCountry: {
    type: String,
    required: true,
  },
  otherValidity: {
    type: String,
    required: true,
  },
  jobRequiresVisa: {
    type: String,
    required: true,
  },
  trialPeriod: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  grossSalary: {
    type: String,
    required: true,
  },
  paymentCycle: {
    type: String,
    required: true,
  },
  vacationsDays: {
    type: String,
    required: true,
  },
  sickLeave: {
    type: String,
    required: true,
  },
  transportation: {
    type: String,
    required: true,
  },
  BonusPlan: {
    type: String,
    required: true,
  },
  startOfWork: {
    type: Date,
    required: true,
  },
  ContractEndDate: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  employeeInformation: {
    type: String,
  },
  scopeOfWork: {
    type: String,
  },
  salaryandDetails: {
    type: String,
  },
  status: {
    type: String,

    default: "",
  },
  signUrl: {
    type: String,
    default: "",
  },
  remarks: {
    type: String,
    default: "",
  },
  commercialContract1: {
    type: String,
    default: "",
  },
  commercialContract2: {
    type: String,
    default: "",
  },
  employementContract: {
    type: String,
    default: "",
  },
});
const Contracts = mongoose.model("Contracts", ContractSchema);
module.exports = Contracts;
