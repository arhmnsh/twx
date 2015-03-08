var $ = require('jquery');
var PostList = require('./PostList');
var React = require('react');

$.ajax({
  url: 'http://localhost:3010/getTweets'
}).then(function (posts) {
  React.render(<PostList posts={posts} />, $('#content')[0]);
});