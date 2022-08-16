import './App.css';
import { Login } from './pages/login/Login';
import { useAuth } from './hook/UseAuth';
import { Private } from './Private';


function App() {
  const {token} = useAuth()

  if (token) {
    return <Private />
  } 
  
    return <Login />

	
}

export default App;
