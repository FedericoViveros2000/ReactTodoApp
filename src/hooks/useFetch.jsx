import { useEffect, useState } from "react";
import { useSearch } from "./useSearch.jsx";

const useFetch = () => {
    
    const [todo, setTodos] = useState([]);
    const [isFetching, setFetching] = useState(false);
    let { searchTodo, wordSearch, wordSearchHandle, filterTodo } = useSearch(todo);
    
    const get = async () => {
        try {
            setFetching(true);
            let response = await fetch("https://jsonplaceholder.typicode.com/todos");
            let data = await response.json();
            setTodos(data);
        } catch (err) {
            console.log(err);
        }finally{
            setFetching(false);
        }
    }

    useEffect(() => {
        console.log(wordSearch);
        if(todo.length === 0) get()
        if (wordSearch) filterTodo() 
    }, [todo, wordSearch])

    return {
        setTodos,
        todo, 
        isFetching
    }
}

export {
    useFetch
}