import './App.css';
import {
  Switch,
  Route,
  NavLink,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import { useState } from 'react';

function App({ bookFacade }) {
  console.log(bookFacade);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={bookFacade} />
        </Route>
        <Route path='/find-book'>
          <FindBook bookFacade={bookFacade} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

function Header() {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/find-book">Find Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>

  )
}

const NoMatch = () => {
  return (
    <h4>No Match</h4>
  )
}

function Home() {
  return (
    <h2>Home</h2>
  )
}

function Products({ bookFacade }) {
  let { path, url } = useRouteMatch();
  const books = bookFacade.getBooks().map((book) => {
    return (
      <div>
        <li key={book.id}>
          {book.title}
          <Link to={`${url}/${book.id}`}>details</Link>
        </li>
      </div>
    )
  });


  return (
    <div>
      <h2>Products</h2>
      <ul>
        {books}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h4>Details</h4>
        </Route>
        <Route path={`${path}/:bookId`}>
          <Details bookFacade={bookFacade} />
        </Route>
      </Switch>
    </div>
  )
}

function AddBook({ bookFacade }) {
  const initialValue = {
    id: 0,
    title: '',
    info: ''
  }

  const [book, setBook] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setBook({ ...book, [name]: value });
  }

  const onSubmit = event => {
    bookFacade.addBook(book);
    console.log(bookFacade.getBooks());
    event.preventDefault();
  }

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={onSubmit} >
        <input name='title' placeholder='title' onChange={handleChange} />
        <br />
        <input name='info' placeholder='info' onChange={handleChange} />
        <br />
        <input type='submit' value='save' />
      </form>
    </div>
  )
}

function Details({ bookFacade }) {
  let { bookId } = useParams();
  const books = bookFacade.getBooks();
  // eslint-disable-next-line
  let book = books.find(book => book.id == bookId);
  return (
    <div>
      {book.info}
    </div>
  )
}

function FindBook({ bookFacade }) {
  let [id, setId] = useState();
  let [book, setBook] = useState();
  const onSubmit = event => {
    const book = bookFacade.findBook(id);
    setBook(book);
    console.log(book);
    event.preventDefault();
  }

  const display = (book === undefined) ? <h2>insert a ID</h2> : <div>
    <br />
    id: {book.id} <br /> <br />
    title: {book.title} <br /> <br />
    info: {book.info} <br /> <br />
    <button onClick={bookFacade.deleteBook(book.id)}>Delete Book</button>
  </div> 

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder='Enter book id...' onChange={ (event) => setId(event.target.value)} />
        <input type='submit' value='Find book' />
      </form>
      {display}
    </div>
  )
}



function Company() {
  return (
    <h2>Company</h2>
  )
}
export default App;
