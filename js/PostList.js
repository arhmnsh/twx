var _ = require('lodash');
var Post = require('./Post');
var React = require('react');

var PostList = React.createClass({
  render: function() {
    return(
      <div className="postList">
        <div className = "postList-posts">
          {_(this.props.posts).map(function (post, index) {
            return <Post key={post.post_id} post={post} />
          }.bind(this)).value()}
        </div>
      </div>
    );
  }
});



module.exports = PostList;