'use client';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useCallback, useState } from 'react';
import Link from 'next/link';

const initial = { email: '', password: '' };

export default function Login() {
  const [user, setUser] = useState({ ...initial });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='w-[500px] mx-auto bg-white p-5 my-5 rounded-md'>
        <div className='py-4 border-b-2 border-gray-200 '>
          <h1 className='text-center text-2xl font-semibold capitalize text-gray-600'>
            Login
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
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
            <Button intent='primary'>Login</Button>
            <Link
              className='text-gray-400 text-sm'
              href='/register'
            >
              Already have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
