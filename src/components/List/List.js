import React from 'react';

import Form from "../Form/Form"



import T from 'prop-types';

function List({ contacts }) {
    return (
        <ul className="contact-list">
            {contacts.map(({ id, name, message }) => (
                <li key={id}>
                    <p>
                        <b>{name} </b>

                        <em>{message}</em>
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

        }),
    )
};

export default List