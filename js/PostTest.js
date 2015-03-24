// var $ = require('jquery');
var Post = require('./Post');
var React = require('react');

$.ajax({
  url: '../json/posts.json'
}).then(function (posts) {
  // Log the data so we can inspect it in the developer console.
  console.log('posts', posts);
  // Use a fake rank for now.
  React.render(<Post post={posts[0]}/>, $('#content')[0]);
});