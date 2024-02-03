import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const getClassNames = (isActive) => {
    return isActive
      ? 'block w-full p-4 py-2 rounded-full mb-1 bg-blue-500 text-white'
      : 'block w-full p-4 py-2 rounded-full mb-1 bg-gray-200 hover:bg-blue-500 hover:text-white';
  };
  return (
    <div className='h-screen bg-gray-100 w-full max-w-[200px] p-2 py-4 divide-y-2'>
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
  );
};

export default Sidebar;
