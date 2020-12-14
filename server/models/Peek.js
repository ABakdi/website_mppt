import mongoose from 'mongoose'
import _Title_Content_Schema from './_Title_Content.js'
const PeekSchema = mongoose.Schema(
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

const Peek = mongoose.model('Peek', PeekSchema)

export default Peek
