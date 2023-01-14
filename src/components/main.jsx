import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NavBar from './NavBar.jsx'
import SearchBar from './SearchBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full'>
      <SearchBar/>
      <div className='md:flex mt-5'>
        <NavBar/>
        <App />
      </div>
    </div>
  </React.StrictMode>,
)
