import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.back();
    }, 2000);

    return () => clearTimeout(redirectTimer); // Cleanup the timer on component unmount
  }, [router]);

  return <div>PageNotFound</div>;
}