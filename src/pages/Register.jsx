import { useEffect, useState } from 'react';
import useApp from '../hooks/useApp';
import { register } from '../context/actions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    country: '',
    state: '',
    city: '',
  });
  const { email, fullName, password } = values;

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormsubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(
        register({ id: Math.floor(Math.floor(Math.random() * 11)), ...values })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (state.user) {
      navigate('/dashboard');
    }
  }, [navigate, state.user]);

  return (
    <div className='flex justify-center items-center flex-col min-h-screen'>
      <form
        onSubmit={handleFormsubmit}
        className='w-[90%] p-8 shadow-xl border rounded-lg max-w-[480px] mx-auto'
      >
        <h1 className='text-2xl font-semibold my-4'>Register to get started</h1>

        <div className='mb-4'>
          <label htmlFor='fullName'>Full name</label>
          <input
            type='text'
            placeholder='Enter full name'
            name='fullName'
            id='fullName'
            value={fullName}
            onChange={handleInputChange}
            className='block w-full my-2 p-2 border border-gray-300 rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Enter email'
            name='email'
            id='email'
            value={email}
            onChange={handleInputChange}
            className='block w-full my-2 p-2 border border-gray-300 rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            name='password'
            id='password'
            value={password}
            onChange={handleInputChange}
            className='block w-full my-2 p-2 border border-gray-300 rounded-md'
          />
        </div>
        <div className='mb-4'>
          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded-md w-full'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
