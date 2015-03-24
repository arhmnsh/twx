var React = require('react');
var PostEditor = require('./PostEditor');

// setInterval(function() {

//   var request = new XMLHttpRequest(), self = this;
//   request.open('GET', 'http://localhost:3010/getPosts', true);
//   request.onload = function() {
//     //if everything is cool...
//     if(request.status >= 200 && request.status < 400) {
//       React.render(<PostList posts={JSON.parse(request.responseText)} />, document.getElementById('content'));
//     }
//   }

//   request.send();

// }, 1000);


React.render(
  <PostEditor />,
  document.getElementById('post-editor')
);