const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: { type: String },
  cate: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  url: { type: String },
  date: { type: String },
  content: { type: String },
  audited: { type: String, default: '0' },
}, {
  timestamps: true
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
