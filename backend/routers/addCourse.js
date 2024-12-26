const express = require("express");

const router = express.Router();

const AddCourse = require("../models/Addcourse");

const redis = require("redis");
const util = require("util");
const Addcourse = require("../models/Addcourse");
const e = require("express");

router.get("/", async (req, res) => {
    try {
        const addCourse = await Addcourse.find();
        res.status(200).json({data : addCourse});
    } catch (error) {
        res.status(500).json({message : `Server error : ${error}`});
    }
})