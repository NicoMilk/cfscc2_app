import React from 'react';
import BlogpostApi from '../apis/Blogpost';

class Blog extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const blogposts = await BlogpostApi.getBlogposts();
    // console.log(blogposts);
    if (blogposts) {
      this.setState({
        posts: blogposts.data,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Blog page</h1>
        {this.state.posts.map((post) => (
          <>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </>
        ))}
      </div>
    );
  }
}

export default Blog;
