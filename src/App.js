import { useContext } from 'react';
import { GlobalState } from './store/global/global.state';

import AuthPage from './components/AuthPage';
import './App.css';

function App() {
  const { theme, setLightTheme, setDarkTheme } = useContext(GlobalState);

  return (
    <div className={`${theme === 'light' ? 'lightTheme' : 'darkTheme'} App`}>
      <div className="toggleTheme">
        <p>Toggle Theme</p>
        <button onClick={setLightTheme}>Light</button>
        <button onClick={setDarkTheme}>Dark</button>
      </div>
      <AuthPage></AuthPage>
    </div>
  );
}

export default App;
