const express = require('express');
const router = express.Router();
const dotenv = require("dotenv");
const v2 = require("cloudinary");
const { cloudinary } = require("../utils/cloudinary");
const Course = require("../models/course");



// const videoUploader = async (req, res) => {
//     try {
//         const file = req.body.data;
//         console.log(file);
//         const resp = await cloudinary.uploader.upload(file, {
//             upload_preset: "ml_default",
//             resource_type: "video",
//         });
//         console.log(resp);
//         const course = {
//             title: req.body.title,
//             tag: req.body.tag,
//             download_link: resp.playback_url, // Ensure this property exists in resp
//             secured_link: resp.secure_url, // Ensure this property exists in resp
//             link: resp.url // Ensure this property exists in resp
//         };

//         const newCourse = new Course(course);
//         await newCourse.save();
//         return res.json({ msg: "Successfully uploaded Video" });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ err: "Error uploading video !" });
//     }
// };


router.post('/video-upload', async (req, res) => {
    try {
        console.log(req.body);
        const file = req.body.data;
        // console.log(file);
        const resp = await cloudinary.uploader.upload(file, {
            upload_preset: "ml_default",
            resource_type: "video",
        });
        console.log(resp);
        const course = {
            title: req.body.title,
            tag: req.body.tag,
            download_link: resp.playback_url, // Ensure this property exists in resp
            secured_link: resp.secure_url, // Ensure this property exists in resp
            link: resp.url // Ensure this property exists in resp
        };

        const newCourse = new Course(course);
        await newCourse.save();
        return res.json({ msg: "Successfully uploaded Video" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ err: "Error uploading video !" });
    }
}
);


router.get("/get-all-courses", async (req, res) => {

    try {

        console.log("GET QUERY");

        const reqQuery = { ...req.query };
        const removeFields = ['select', 'sort', 'limit', 'page'];
        removeFields.forEach(param => delete reqQuery[param]);

        let queryStr = JSON.stringify(reqQuery);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
        query = Course.find(JSON.parse(queryStr));

        if (req.query.select) {
            const fields = req.query.select.split(',').join(' ');
            query = query.select(fields);
        }

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        }

        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10000;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await Course.countDocuments(query);

        query = query.skip(startIndex).limit(limit);
        const pagination = {};
        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit
            }
        }
        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit
            }
        }

        const course = await query;
        if (!course) {
            return res.status(401).json({ success: false, msg: "There are no courses" });
        }
        return res.status(200).json({ success: true, count: total, pagination, data: course });

    } catch (error) {
        console.log(`${error.message} (error)`.red);
        return res.status(400).json({ success: false, msg: error.message });
    }

});

module.exports = router;