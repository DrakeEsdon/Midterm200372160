const Resource = require('../models/ArcadeGame');
const mongoose = require('mongoose');

exports.index = (req, res) => {};


exports.show = (req, res) => {
    
    const path = (req.path === '/') ? '/home' : req.path;

    //render the path
    res.render(`arcade${path}`); //ex. views/pages/about.pug
};


exports.new = (req, res) => {
    
    res.render('arcade/new', {
        title: 'New game'
    });
    
};


exports.edit = (req, res) => {
    
    
};


exports.create = async (req, res) => {
    
    
    
};


exports.update = (req, res) => {
    
};


exports.destroy = (req, res) => {
    
    
    
};