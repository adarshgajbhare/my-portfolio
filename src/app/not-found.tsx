"use client"

import Head from 'next/head';
import Lottie from 'lottie-react';

function NotFoundPage() {
  return (
    <div className='flex justify-center items-center py-8'>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <Lottie animationData={animationJson} loop={true} />
    </div>
  );
}

const animationJson = require('@/lib/404-animation.json')

export default NotFoundPage;