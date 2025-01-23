import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Routing from './components/Routing/Routing'
import { jwtDecode } from 'jwt-decode';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    try{
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      setUser(jwtUser);
    }catch(error){} 
  }, []);  
 


  return (
    
    <div className='app'>
        <Navbar user={user}/>
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App
