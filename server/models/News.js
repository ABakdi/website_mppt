import mongoose from 'mongoose'
import _Title_Content_Schema from './_Title_Content.js'
const NewsSchema = mongoose.Schema(
  {
    title: {
      type: _Title_Content_Schema
    },
    content: {
      type: _Title_Content_Schema
    },
    imageUrl: {
      type: string
    }
  }
)

const News = mongoose.model('Peek', NewsSchema)

export default News
