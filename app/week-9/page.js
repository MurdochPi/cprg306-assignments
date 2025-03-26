"use client";

import { useUserAuth } from './_utils/auth-context';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>Login with GitHub</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => router.push('week-9/shopping-list')}>Go to Shopping List</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
