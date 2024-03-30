import React, { Component } from 'react';
import HousesList from './Components/HousesList'; // Note the change here

class App extends Component {
    render() {
        return (
            <div>
                <HousesList />
            </div>
        );
    }
}

export default App;
