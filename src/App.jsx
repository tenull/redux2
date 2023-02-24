
import './App.css';
import { useEffect,useContext } from 'react';
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books';

function App() {
 
  const {fetchBooks} = useContext(BooksContext);


  useEffect(() => {
    fetchBooks();
  }, []);


  return (
    <div className="App">
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
