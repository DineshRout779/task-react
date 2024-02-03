import { NavLink } from 'react-router-dom';
import useApp from '../hooks/useApp';
import { logout } from '../context/actions';

const Sidebar = () => {
  const { dispatch } = useApp();
  const getClassNames = (isActive) => {
    return isActive
      ? 'block w-full p-4 py-2 rounded-full mb-1 bg-blue-500 text-white'
      : 'block w-full p-4 py-2 rounded-full mb-1 bg-gray-200 hover:bg-blue-500 hover:text-white';
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
  };
  return (
    <div className='h-screen sticky top-0 bg-gray-100 w-full max-w-[200px] p-4 flex flex-col justify-between'>
      <div className=''>
        <h1 className='text-2xl mb-4 ml-2'>Logo🚀</h1>
        <NavLink
          to='/dashboard'
          className={({ isActive }) => getClassNames(isActive)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='/blogs'
          className={({ isActive }) => getClassNames(isActive)}
        >
          Blogs
        </NavLink>
      </div>
      <button
        onClick={handleLogout}
        className='p-4 py-2 rounded-full w-full text-left bg-gray-200 hover:bg-red-500 hover:text-white'
      >
        Logout &rarr;
      </button>
    </div>
  );
};

export default Sidebar;
