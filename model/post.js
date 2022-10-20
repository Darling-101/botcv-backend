const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostsSchema = new Schema({
  workName: { type: String, default: "", require: true },
  workAddress: { type: String, default: "", require: true },
  deadline: { type: String, require: true },
  salary: { type: Number, require: true },
  hinhThucLamViec: { type: String, require: true },
  sex: { type: String, require: true },
  amount: { type: String, require: true },
  level: { type: String, require: true },
  exp: {type: String, require: true}
})

module.exports = mongoose.model('post', PostsSchema)