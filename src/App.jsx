import './App.css';
import { Outlet } from 'react-router';
import Sidebar from './components/Sidebar';
import useApp from './hooks/useApp';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const { state } = useApp();

  useEffect(() => {
    if (!state.user) navigate('/register');
  }, [navigate, state.user]);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='grow p-4'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
