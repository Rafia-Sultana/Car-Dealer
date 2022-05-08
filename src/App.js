
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AddItem from './components/AddItem/AddItem';
import ManageItem from './components/ManageItem/ManageItem';
import MyItem from './components/MyItem/MyItem';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import InventoryCard from './components/InventoryCard/InventoryCard';
import CardUpdate from './components/CardUpdate/CardUpdate';
import ErrorPage from './components/ErrorPage/ErrorPage';


function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/myitem' element={
          <PrivateRoute>
            <MyItem></MyItem>
          </PrivateRoute>
        }></Route>
        <Route path='/inventory/:id' element={<CardUpdate></CardUpdate>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}  ></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
