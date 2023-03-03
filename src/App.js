import Home from './home'
import {About} from './about'
import {Navbar} from './navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Counter from './counter';
import { Studetails } from './studetails';
function App() {
  return (
    <>
     
     <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Studetails/>}/>
          <Route path='/about' element={[<Navbar/>,<About/>]}/>
        </Routes>
     </BrowserRouter>
      
    </>
  
  );
}

export default App;