import React from 'react';

import Form from "../Form/Form"



import T from 'prop-types';

function List({ contacts }) {
    return (
        <ul className="contact-list">
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <p>
                        <b>{name} </b>

                        <em>{number}</em>
                    </p>



                </li>
            ))
            }
        </ul >
    );
}

List.propTypes = {
    contacts: T.arrayOf(
        T.shape({
            id: T.string.isRequired,
            name: T.string.isRequired,
            number: T.string.isRequired,
        }),
    ),
    onDeleteContact: T.func.isRequired,
};

export default List