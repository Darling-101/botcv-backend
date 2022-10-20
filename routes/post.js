const express = require("express");
const Router = express.Router();
const PostSchema = require("../model/post");

Router.post("/create", async (req, res) => {
  const data = req.body;

  try {
    if (!data) {
      return res
      .status(400)
      .json({ success: false, message: "Tạo bài tuyển dụng không thành công" });
    }
    const newPost = new PostSchema(data)
    await newPost.save();
    return res
      .status(200)
      .json({ success: true, message: "Tạo bài tuyển dụng thành công" });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ success: false, message: "Tạo bài tuyển dụng không thành công" });
  }
});

module.exports = Router;
