import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Profile } from 'Pages/Profile';
import { Button } from 'Components/Button';

import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { logout, user, loginWithRedirect, isLoading } = useAuth0();

  const handleLogin = useCallback(async () => {
    loginWithRedirect();
    setIsLogin(true);
  }, [loginWithRedirect]);

  const handleLogout = useCallback(() => {
    logout();
    setIsLogin(false);
  }, [logout]);

  const authButton = useMemo(() => {
    return isLogin ? <Button onClick={handleLogout}>Logout</Button> : <Button onClick={handleLogin}>Login</Button>;
  }, [handleLogin, handleLogout, isLogin]);

  useEffect(() => {
    let isActive = true;

    if (user) {
      if (isActive) {
        setIsLogin(true);
      }
    }

    return () => {
      isActive = false;
    };
  }, [isLogin, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {authButton}
      {isLogin ? <Profile user={user} /> : 'User is not login'}
    </div>
  );
};

export default App;
