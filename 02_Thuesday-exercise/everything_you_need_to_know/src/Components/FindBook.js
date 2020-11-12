import {useState} from 'react';

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
                <input placeholder='Enter book id...' onChange={(event) => setId(event.target.value)} />
                <input type='submit' value='Find book' />
            </form>
            {display}
        </div>
    )
}

export default FindBook;