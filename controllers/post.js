const { model } = require('mongoose');
const Post = require('../models/post');

module.exports.Post = function(req,res){
    return res.render('home',{
        title:'Post'
    })
}