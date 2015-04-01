// var $ = require('jquery');
var React = require('react');

var Post = React.createClass({
  render: function() {
    var postTitleMarkup = this.props.post.post_title;
    var postBodyMarkup = this.props.post.post_body;

    return (
      <div className="post">
        <h4 className="post-user">{this.props.post.screen_name}</h4>
        <h2 className="post-title" dangerouslySetInnerHTML={{__html: postTitleMarkup}}></h2>
        <p className="post-body" dangerouslySetInnerHTML={{__html: postBodyMarkup}}></p>
        <span className="post-postDate">{this.props.post.created_at}</span>
      </div>
    );
  }
});

module.exports = Post;