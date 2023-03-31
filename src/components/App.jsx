import './App.css';
import {NavBar} from './NavBar/Navbar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer';
export function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Welcome, stranger'}/>
    </div>
  );
}


