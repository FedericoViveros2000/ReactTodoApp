//import {useFetch} from "../hooks/useFetch.jsx";
import { /* useEffect, */ useState } from "react";

const useSearch = (todo) => {
    let [searchTodo, setSearchTodo] = useState([]);
    let [wordSearch, setWordSearch] = useState('');
    
    const filterTodo = () => {
        let searchTodo = todo.filter((tod) => {
            return tod.title.toLowerCase().split(' ').join('').includes(wordSearch.toLowerCase().split(' ').join(''));
        });
        setSearchTodo(searchTodo);
    }

    const wordSearchHandle = (value) => {
        console.log(value);
        setWordSearch(value);
    }

    /* useEffect(() => {
        filterTodo();
    }, [wordSearch]) */

    return {
        searchTodo,
        wordSearch,
        wordSearchHandle,
        filterTodo
    }

}

export {
    useSearch
}