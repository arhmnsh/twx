var React = require('react');

var PostEditor = React.createClass({
  submitPost: function(e) {
    e.preventDefault();
    // console.warn('post submitted!!');
    // console.log('Post Heading: ', document.querySelector('#post-editor-form .post-title').innerHTML);
    // console.log('Post Heading: ', document.querySelector('#post-editor-form .post-body').innerHTML);
    // return;

    var postData = {};
    postData.post_content = {};
    postData.post_content.title = document.querySelector('#post-editor-form .post-title').innerHTML;
    postData.post_content.body = document.querySelector('#post-editor-form .post-body').innerHTML;
    postData.user_id = 1;
    console.log(JSON.stringify(postData));

    var postRequest = new XMLHttpRequest();   // new HttpRequest instance 
    postRequest.open('POST', 'http://localhost:3010/submitPost', true);
    postRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    postRequest.send(JSON.stringify(postData));
  },
  render: function() {
    return(
      <form id="post-editor-form" onSubmit={this.submitPost}>
        <h1 className="post-title editable">Heading...</h1>
        <div className="post-body editable">Post...</div>

        <button type="submit">Post</button>
      </form>
    );
  }
});

module.exports = PostEditor;