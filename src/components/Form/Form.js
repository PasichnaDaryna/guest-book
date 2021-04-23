import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function Form(props) {
    const [person, setPerson] = useState("");

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        props.handleSubmit(person);
        setPerson('')
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Add new contact"
                onChange={handleChange}
                value={person.name} />
            <textarea />
            <button type="submit" >Add</button>
        </form>
    );

}

export default Form;