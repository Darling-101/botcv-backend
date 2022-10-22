const express = require("express");
const Router = express.Router();
const PostSchema = require("../model/post");

Router.post("/create", async (req, res) => {
  const data = req.body;

  try {
    if (!data) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Tạo bài tuyển dụng không thành công",
        });
    }
    const newPost = new PostSchema(data);
    await newPost.save();
    return res
      .status(200)
      .json({
        success: true,
        message: "Tạo bài tuyển dụng thành công",
        post: newPost,
      });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ success: false, message: "Tạo bài tuyển dụng không thành công" });
  }
});

//get post by id

Router.post("/get-post", async (req, res) => {
  const postId = req.body.postId;

  try {
    const post = await PostSchema.findById(postId);
    if (!post) {
      return res
        .status(400)
        .json({
          success: true,
          message: "Không tìm thấy bài đăng tuyển dụng này",
        });
    }

    return res.status(200).json({ success: true, post: post });
  } catch (err) {
    console.log(err);
  }
});

module.exports = Router;
