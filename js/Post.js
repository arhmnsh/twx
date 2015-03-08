var $ = require('jquery');
var React = require('react');

var Post = React.createClass({
  render: function() {
    return (
      <div className="post">
        <h3 className="post-user">{this.props.post.screen_name}</h3>
        <p className="post-content">{this.props.post.post_content}</p>
        <span className="post-postDate">{this.props.post.created_at}</span>
      </div>
    );
  }
});

module.exports = Post;