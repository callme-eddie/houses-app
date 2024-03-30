import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    };

    const addNewRoom = (room) => {
        const updatedRooms = house.rooms || []; // Initialize as empty array if undefined
        updateHouse({ ...house, rooms: [...updatedRooms, room] });
    };
    
    const rooms = () => {
        if (!house.rooms) {
            return null; 
        }
        return (
            <ul>
                {house.rooms.map((room, index) => (
                    <li key={index}>
                        <label>{`${room.name} Area: ${room.area}`}</label>
                        <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <h1>{house.name}</h1>
            {rooms()}
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};
