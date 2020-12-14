//for the sake of making this wabsite as dynamic as possible
//I define a MenuShema meaning that the MenuBar can be modefied from
//a control panel.

import mongoose from 'mongoose'
import _Title_Content_Schema from './_Title_Content.js'

//every item in every menu has a title, a subMunu possibly, and an action
//the action is what is going to happen when Clicked.
const _item_Schema = new mongoose.Schema(
  {
    title: {
      type: _Title_Content_Schema,
      required: true
    },
    action:{
      type: String
    }
  }
)

//Every menu has a title and itemes, but it's possible for it to be empty.
const MenuSchema = new mongoose.Schema(
  {
    title: {
      type: _Title_Contant_Schema,
      required: true,
    },
    itemes:{
      type: [_item_Schema]
    }

  }
)

const Menu = mongoose.model('Menu', MenuSchema)
export  default Menu
