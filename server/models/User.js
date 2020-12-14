//here I define the user, there 2 types of users admin and maintainer
//they both can sign in to the control panel the diffrence is that the admin
//can add users and and the maintainer can't

import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String
    },
    passhash: {
      type: String
    },
    privilege: {
      type: String,
      enum: ['admin', 'maintainer']
    }
  }
)

const User = mongoose.model('User', UserSchema)

export default User
