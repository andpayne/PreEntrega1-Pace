import NavBar from "./NavBar/NavBar";
import ItemCount from "./ItemCount/ItemCount";
export function App() {
  return (
    <div>
      <NavBar /> 
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
    </div>
  );
}


