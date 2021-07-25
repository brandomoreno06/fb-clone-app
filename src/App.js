import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import Widget from './Components/Widget/Widget';
import { useUserContextValue } from './Components/ContextProvider';


const App = () => {

  const [{user}, dispatch] = useUserContextValue();

  
  return (
    <div className="app">
      {!user ? 
        <Login /> : 
        <div>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
