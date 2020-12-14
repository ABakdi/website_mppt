//here I define a scheme that is going to be used a lot!
//all titles whether they are menu title, article title or any title in this project 
import mongoose from 'mongoose'

const _Title_Content_Schema = new mongoose.Schema(
  {
    ar: String,
    en: String,
    fr: String
  }
)


export default _Title_Content_Schema
