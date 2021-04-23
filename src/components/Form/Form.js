import { useState } from 'react';
import T from 'prop-types';
// import shortid from 'shortid';
import s from './Form.module.css'

function Form({ onSubmit }) {


    const [name, setName] = useState('');
    const [message, setMessage] = useState('');



    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'message':
                setMessage(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, message);
        resetInput();
    };

    const resetInput = () => {
        setName('');
        setMessage('');
    };
    return (
        <form id="contact" onSubmit={handleSubmit}>
            <label>
                Name
        <input
                    className="input-field"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="John Dows"
                />
            </label>
            <br />
            <label>
                Message
        <textarea
                    className="input-field"
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    placeholder="Add message"
                />
            </label>

            <button type="submit" className="submit-button">
                Add comment
      </button>
        </form>
    );
}
Form.propTypes = {
    onSubmit: T.func.isRequired,
};

export default Form;