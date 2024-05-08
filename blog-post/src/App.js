import './App.css';
import BlogList from './components/BlogList';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <BlogList />
    </>
  );
}

export default App;
