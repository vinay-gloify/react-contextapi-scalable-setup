import { useContext } from 'react';
import { GlobalState } from '../store/global/global.state';

function AuthPage() {
  const { isLoggedIn, login, logout } = useContext(GlobalState);

  return (
    <div className="authPage">
      <div>{isLoggedIn ? 'Welcome back' : 'Please login'}</div>
      <button onClick={login}>Login</button>
      <button onClick={logout}> Logout </button>
    </div>
  );
}

export default AuthPage;
