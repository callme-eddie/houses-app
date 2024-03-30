import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesApi.js';

export default class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        try {
            const houses = await housesApi.get();
            this.setState({ houses });
        } catch (error) {
            console.error('Error fetching houses:', error);
        }
    };

    updateHouse = async (updatedHouse) => {
        try {
            await housesApi.put(updatedHouse);
            this.fetchHouses();
        } catch (error) {
            console.error('Error updating house:', error);
        }
    };

    render() {
        return (
            <div className="house-list">
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        );
    }
}

