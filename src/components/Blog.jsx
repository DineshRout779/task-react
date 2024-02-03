/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  // console.log(blog);
  return (
    <li>
      <Link
        to={`/blogs/${blog?.id}`}
        className='w-full block my-4 bg-gray-100 p-4 rounded-md max-w-[768px] hover:bg-gray-200 cursor-pointer'
      >
        <h2 className='text-xl font-semibold'>{blog?.title}</h2>
        <p>
          {blog?.body.length > 200
            ? blog.body.slice(0, 200) + '...'
            : blog.body}
        </p>
      </Link>
    </li>
  );
};
export default Blog;
