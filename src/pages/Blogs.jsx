import { useEffect, useState } from 'react';
import useApp from '../hooks/useApp';
import BlogShimmer from '../components/BlogShimmer';
import BlogList from '../components/BlogList';

const Blogs = () => {
  const {
    state: { user },
  } = useApp();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${user?.id}`
        );
        const data = await res.json();

        // console.log(data);

        data && setBlogs(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (user) {
      getBlogs();
    }
  }, [user]);

  return (
    <div>
      <h1 className='text-2xl'>Blogs</h1>

      <section>
        {isLoading ? (
          <div className='space-y-4 my-8'>
            {Array.from({ length: 6 }).map((_, i) => (
              <BlogShimmer key={i} />
            ))}
          </div>
        ) : (
          <BlogList blogs={blogs} />
        )}
      </section>
    </div>
  );
};

export default Blogs;
