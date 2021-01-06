import Api from './Api';

const BlogPostApi = {
  postBlogpost(payload) {
    return Api().post('/blogposts/', payload);
  },
  getBlogposts() {
    return Api().get('/blogposts/');
  },
  getBlogpost(payload) {
    return Api().get('/blogposts/' + payload.blogpostId);
  },
  patchBlogpost(payload) {
    return Api().patch('/blogposts/' + payload.blogpostId, payload.data);
  },
  delBlogpost(payload) {
    return Api().delete('/blogposts/' + payload.blogpostId);
  },
};

export default BlogPostApi;
