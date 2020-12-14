//here I define the slide-show model: title, content, image
//making it dynamic meaning we can modify the slides and change them from a control panel
import mongoose from 'mongoose'
import _Title_Content_Schema from './_Title_Content.js'
const SlideSchema = mongoose.Schema(
  {
    title: {
      type: _Title_Content_Schema
    },
    content: {
      type: _Title_Content_Schema
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
)

const Slide = mongoose.model('Slide', SlideSchema)

export default Slide
