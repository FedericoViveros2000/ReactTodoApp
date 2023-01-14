import {useFetch} from "../hooks/useFetch.jsx"
import TodoCard from "./TodoCard.jsx";
import { ReactSortable } from "react-sortablejs";
import { useSearch } from "../hooks/useSearch.jsx";
import { useEffect } from "react";

function App() {
  
  let {todo, isFetching, setTodos} = useFetch();
  let {searchTodo, wordSearch} = useSearch();

  
  if (isFetching) {
    return <p>Cargando...</p>
  }
  
  /* useEffect(() => {
    console.log(searchTodo);
  }, [searchTodo]) */

  return (
    <>
      <ReactSortable list={todo} setList={setTodos} animation={500} swap multiDrag className="grid md:grid-cols-3 grid-cols-1 gap-3 w-full place-items-center md:px-5">
          {
            !wordSearch ?
            <p>Cargando</p> : 
            todo.map(tod => 
            <TodoCard todo={tod}  key={tod.id}>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full mt-3" >Ver Conversacion</button>
                </div>
            </TodoCard>)
          }
      </ReactSortable>
      </> 
  )
}

export default App
