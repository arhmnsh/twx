// var $ = require('jquery');
var PostList = require('./PostList');
var React = require('react');

setInterval(function() {

  // $.ajax({
  //   url: 'http://localhost:3010/getTweets'
  // }).then(function (posts) {
  //   React.render(<PostList posts={posts} />, $('#content')[0]);
  // });

  var request = new XMLHttpRequest(), self = this;
  request.open('GET', 'http://localhost:3010/getPosts', true);
  request.onload = function() {
    //if everything is cool...
    if(request.status >= 200 && request.status < 400) {
      React.render(<PostList posts={JSON.parse(request.responseText)} />, document.getElementById('content'));
    }
  }

  request.send();

}, 1000);
