import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

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

export default Products;