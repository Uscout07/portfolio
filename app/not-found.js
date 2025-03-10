"use client";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Header from './components/header';

export default function GlobalError({ error, reset }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen ibm-plex-mono-regular md:scale-125'>
        <Icon icon="fluent-emoji-flat:name-badge" className="text-6xl text-red-500 mb-4" />
        <h2 className="text-3xl font-bold mb-2">Something went wrong!</h2>
        <p className="mb-4 text-center max-w-md">
          An unexpected error occurred.
        </p>
        <Link
          href='/'
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          Go Back
        </Link>
    
    </div>
  );
}