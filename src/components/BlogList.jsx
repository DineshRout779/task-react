/* eslint-disable react/prop-types */
import Blog from './Blog';

const BlogList = ({ blogs }) => {
  return (
    <ul className='my-8'>
      {blogs.length === 0 ? (
        <p>No blogs found!</p>
      ) : (
        blogs.map((blog) => <Blog blog={blog} key={blog.id} />)
      )}
    </ul>
  );
};
export default BlogList;
