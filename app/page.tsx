"use client"

import React, { useState, useEffect } from 'react';
import Homepage from "./landingpage/landingpage"
import TweetsPage from "./tweets/tweetpage";
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: session, status } = useSession();

  useEffect(() => {
    // Simulate authentication
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false)
    }, 400);
  }, []);

  useEffect(() => {
    // Update isLoggedIn state when session changes
    setIsLoggedIn(session !== null);
  }, [session]);

  if (isLoading) {
    return (
      <div className='h-screen absolute top-0 w-screen bg-bgDark flex items-center justify-center '>
        <Image src="/images/dogieHead.svg" width={130} height={130} alt="Loading" />
      </div>
    );
  }

  return (
    <main>
      {isLoggedIn && isAuthenticated ? <TweetsPage /> : <Homepage />}
    </main>
  );
}
