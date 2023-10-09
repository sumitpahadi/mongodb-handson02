const client = require("../mongodb/connection");
const db = client.db("Human_resource");
const employe_data = require("../data/data");
const collection = db.collection("Employee");

const insertdata = async (req, res) => {
  try {
    collection.deleteMany();
    const data = await collection.insertMany(employe_data);
    console.log(`${data.insertedCount} employee records inserted`);
    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log("Error while inserting data", error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//find User
async function getalluserdata(req, res) {
  try {
    const data = await collection.find().toArray();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
}

const getsalaryabove30000 = async (req, res) => {
  try {
    const data = await collection.find({ salary: { $gt: "30000" } }).toArray();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const getexprienceabove2 = async (req, res) => {
  try {
    const data = await collection.find({ overallExp: { $gt: "2" } }).toArray();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const getgraduatedata = async (req, res) => {
  try {
    const data = await collection
      .find({ overallExp: { $gt: "1" }, yearGrad: { $gt: "2015" } })
      .toArray();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const getsalary = async (req, res) => {
  try {
    const data = await collection.updateOne(
      { salary: "70000" },
      { $set: { salary: "65000" } }
    );
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteEmp = async (req, res) => {
  try {
    const data = await collection.deleteOne({ lastCompany: "Y" });
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = {
  insertdata,
  getalluserdata,
  getsalaryabove30000,
  getexprienceabove2,
  getgraduatedata,
  getsalary,
  deleteEmp,
};
