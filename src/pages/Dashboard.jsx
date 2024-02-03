import useApp from '../hooks/useApp';

const Dashboard = () => {
  const {
    state: { user },
    dispatch,
  } = useApp();

  return (
    <div className=''>
      <h1 className='text-2xl'>Dashboard</h1>

      <div className='flex justify-center items-center min-h-screen'>
        <div className='text-center'>
          <img
            src='https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg'
            alt=''
            className='w-36 h-36 object-contain aspect-square '
          />
          <h2 className='text-xl'>{user.fullName}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
