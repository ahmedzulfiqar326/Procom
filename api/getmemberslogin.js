const path = require('path')
const express = require('express')
const db = require('../connection/database')
var bodyParser = require('body-parser');
const emailverifier = require('email-verifier')

const app = express()
const locat = path.join(__dirname,'../public')
// const viewspath = path.join(__dirname,'../Templating')
app.set('view engine', 'ejs')
app.use(express.static(locat))
app.use(bodyParser.urlencoded({ extended: true }));

const getmemberslogin = (req,res)=>{
    if(req.session.admin)
    res.redirect('/admin')
    else if(req.session.member)
    res.redirect('/member')
    else
    res.render('memberslogin')
}
module.exports = getmemberslogin