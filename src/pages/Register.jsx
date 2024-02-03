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
    gender: 'male',
    country: '',
    stateName: '',
    city: '',
  });
  const { email, fullName, password, phone, gender, country, stateName, city } =
    values;
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormsubmit = (e) => {
    e.preventDefault();

    try {
      if (
        email &&
        fullName &&
        password &&
        phone &&
        gender &&
        country &&
        stateName &&
        city
      ) {
        dispatch(
          register({
            id: Math.floor(Math.floor(Math.random() * 11)),
            ...values,
          })
        );
      } else {
        setError('All fields are required!');
      }
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
        className='w-[90%] p-4 my-8 px-8 shadow-xl border rounded-lg max-w-[480px] mx-auto'
      >
        <h1 className='text-2xl font-semibold my-4'>Register to get started</h1>

        {/* full name */}
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

        {/* email */}
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

        {/* password */}
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

        {/* phone */}
        <div className='mb-4'>
          <label htmlFor='phone'>Phone number</label>
          <input
            type='text'
            placeholder='Enter phone number'
            name='phone'
            id='phone'
            value={phone}
            onChange={handleInputChange}
            className='block w-full my-2 p-2 border border-gray-300 rounded-md'
          />
        </div>

        {/* gender */}
        <div className='mb-4'>
          <label htmlFor='gender'>Gender</label>
          <select
            name='gender'
            id='gender'
            value={gender}
            onChange={handleInputChange}
            className='block w-full my-2 p-2 border border-gray-300 rounded-md'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>

        {/* country */}
        <div className='mb-4'>
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            placeholder='Enter country'
            name='country'
            id='country'
            value={country}
            onChange={handleInputChange}
            className='block w-full my-2 p-2 border border-gray-300 rounded-md'
          />
        </div>

        {/* state */}
        <div className='mb-4'>
          <label htmlFor='stateName'>State</label>
          <input
            type='text'
            placeholder='Enter state'
            name='stateName'
            id='stateName'
            value={stateName}
            onChange={handleInputChange}
            className='block w-full my-2 p-2 border border-gray-300 rounded-md'
          />
        </div>

        {/* city */}
        <div className='mb-4'>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            placeholder='Enter city'
            name='city'
            id='city'
            value={city}
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

        <p className='text-center text-red-500'>{error ? error : ''}</p>
      </form>
    </div>
  );
};

export default Register;
