import {persons} from './file2';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePersons (props) {
    const {firstName, lastName, email} = props.person;
    return <p> {firstName}, {lastName}, {email} </p>;
}

function MultiWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />
            <WelcomePersons person={persons[0]} />
            <WelcomePersons person={persons[1]} />
            <WelcomePersons person={persons[2]} />

            {persons.map((element) => <WelcomePersons person={element}/>)}
        </div>
    );
}
export default MultiWelcome;