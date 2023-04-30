import Index from "./pages/Index";
import Recipe from "./pages/Recipes";
import Contact from "./pages/Contact";
import {  Routes, Route  } from "react-router-dom";
function App() {
  return (
   <div>
    
    <Routes>
      <Route path='/' element={<Index/>} />  
      <Route path='/Recipes'element={<Recipe/>} />  
      <Route path="/Contact" element={<Contact/>}/>

       </Routes>
      {/* <Index/>
      <Recipe/>
      <Contact/>  */}
       
  

  
    
  

  
  
    </div>
    );
}

export default App;
