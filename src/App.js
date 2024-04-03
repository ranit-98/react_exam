import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './CommonComponents/NavBar';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import AllBlogs from './Components/AllBlogs';
import BlogDetails from './Components/BlogDetails';
import Category from './Components/Category';
import CategoryDetails from './Components/CategoryDetails';

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<LogIn/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/all-blogs' element={<AllBlogs/>} />
    <Route path='/blog-details/:id' element={<BlogDetails/>} />
    <Route path='/category' element={<Category/>} />
    <Route path='/category-details/:id' element={<CategoryDetails/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
