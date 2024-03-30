import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');

    const handleAreaInput = (e) => {
        const value = e.target.value;
        setArea(value >= 0 ? value : '');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area && !isNaN(area)) {
            props.addNewRoom({ name, area: parseInt(area, 10) });
            setName('');
            setArea('');
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='number'
                    placeholder='area'
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type='submit'>Add Room</button>
            </form>
        </div>
    );
};
