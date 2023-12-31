const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    contact:{
        type :String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{
    timestamps:true
})

const Post = mongoose.model('Post',postSchema);
module.exports=Post;