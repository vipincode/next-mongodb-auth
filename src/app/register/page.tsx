'use client';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const initial = { userName: '', email: '', password: '' };

export default function Register() {
  const [user, setUser] = useState({ ...initial });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', user);
      alert(response.data.message);
    } catch (error) {
      alert('Something went wrong');
    }
  };

  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='w-[500px] mx-auto bg-white p-5 my-5 rounded-md'>
        <div className='py-4 border-b-2 border-gray-200 '>
          <h1 className='text-center text-2xl font-semibold capitalize text-gray-600'>
            Register
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            id='userName'
            name='userName'
            label='User Name'
            placeholder='Enter username'
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            error={user.userName.length === 0 ? 'User name is required' : ''}
            required
          />
          <Input
            type='email'
            id='email'
            name='email'
            label='User email'
            placeholder='Enter email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            error={user.email.length === 0 ? 'Email is required' : ''}
            required
          />
          <Input
            type='password'
            id='password'
            name='password'
            label='Password'
            placeholder='Enter password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            error={user.password.length === 0 ? 'Password is required' : ''}
            required
          />
          <div className='my-5 flex justify-between items-center'>
            <Button intent='primary'>Register</Button>
            <Link
              className='text-gray-400 text-sm'
              href='/login'
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
