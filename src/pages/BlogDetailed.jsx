import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetailed = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        const data = await res.json();

        data && setBlog(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getBlog();
  }, [id]);

  if (isLoading) {
    return <p>Loading... Please wait!</p>;
  }

  return (
    <div>
      <h1 className='text-2xl font-semibold my-4 capitalize'>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
};
export default BlogDetailed;
