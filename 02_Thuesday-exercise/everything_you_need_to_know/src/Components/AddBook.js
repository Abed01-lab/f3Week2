import {useState} from 'react';

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

export default AddBook;