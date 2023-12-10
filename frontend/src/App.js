import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home"
import CreateBook from "./Pages/Createbooks.jsx"
import Deletebook from "./Pages/Deletebook.jsx"
import Editbook from "./Pages/EditBook.jsx"
import Showdetail from "./Pages/Showdetail"

function App() {
  return (
    
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/books/create' element={<CreateBook />} />
    <Route path='/books/details/:id' element={<Showdetail />} />
    <Route path='/books/edit/:id' element={<Editbook />} />
      <Route path='/books/delete/:id' element={<Deletebook />} />
   </Routes>
  );
}

export default App;
