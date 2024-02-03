import { useEffect, useState } from 'react';
import useApp from '../hooks/useApp';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const {
    state: { user },
    // dispatch,
  } = useApp();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [navigate, user]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${user?.id}`
        );
        const data = await res.json();

        console.log(data);
        data && setPosts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className=''>
      <h1 className='text-2xl'>Dashboard</h1>

      <div className=''>
        <img
          src='https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg'
          alt=''
          className='w-36 h-36 object-contain aspect-square '
        />
        <div className='flex items-center gap-2'>
          <h2 className='text-xl font-semibold'>{user?.fullName}</h2>
          <small>({user?.gender})</small>
        </div>
        <p>
          {user?.city}, {user?.stateName}, {user?.country}
        </p>
        <p>{user?.email}</p>

        <p>
          Total posts:{' '}
          <Link to={`/blogs`} className='text-blue-600 underline'>
            {posts.length}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
