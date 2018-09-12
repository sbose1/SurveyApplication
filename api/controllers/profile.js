var mongoose = require('mongoose');
const User = require("../models/user");
const jwt = require("jsonwebtoken");

//get User profile
module.exports.getProfile = function(req, res){
  const id=req.userData.userId;
  if (!id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(id)
      .exec(function(err, user) {
        res.status(200).json(
        user
       // {message:"Request successful",
        //user:user,
        //status:200}
        )
      });
  }
};

//submit and save response to questions for each user
module.exports.saveResponse = function(req,res){
  const id=req.userData.userId;
  User.findByIdAndUpdate(
    id,
    {
      $set:{
        survey:req.body.survey,

        //calculate score and save to db ??



        score: 22
      }
    },
    {new: true},
    function(err,result){
    if(err){
      console.log(err);
      res.status(500).json({
        error:err,
        status:500
      });
    }else{
      console.log(result);
      res.status(200).json(
    //  message:"Request successful",
      result
      //status:200
      );
     // console.log(result);
    }
    });

};

//get User result score
module.exports.getResult = function(req, res){
  const id=req.userData.userId;
  if (!id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(id)
      .exec(function(err, user) {


        res.status(200).json(

       // {message:"Request successful",
        //user:user,
        //status:200}

        {

        //check ??
        score:score,
        status:200
        }

        )
      });
  }
};


//fetch all user list for admin to see in profile landing page
module.exports.getUserList = function(req,res){
  const id=req.userData.userId;
  User.find(
    id,
    {
      $set:{
        name:req.body.name,
        age:req.body.age,
        weight:req.body.weight,
        address:req.body.address
      }
    },
    {new: true},
    function(err,result){
    if(err){
      console.log(err);
      res.status(500).json({
        error:err,
        status:500
      });
    }else{
      console.log(result);
      res.status(200).json(
    //  message:"Request successful",
      result
      //status:200
      );
     // console.log(result);
    }
    });

};




module.exports.editProfile = function(req,res){
  const id=req.userData.userId;
  User.findByIdAndUpdate(
    id,
    {
      $set:{
        name:req.body.name,
        age:req.body.age,
        weight:req.body.weight,
        address:req.body.address
      }
    },
    {new: true},
    function(err,result){
    if(err){
      console.log(err);
      res.status(500).json({
        error:err,
        status:500
      });
    }else{
      console.log(result);
      res.status(200).json(
    //  message:"Request successful",
      result
      //status:200
      );
     // console.log(result);
    }
    });

};
