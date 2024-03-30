House API


Description
The House API is a simple RESTful API that allows users to manage houses and rooms within those houses. Users can add new houses, add rooms to existing houses, and update house information.

Installation
To use the House API, follow these steps:

Clone the repository: git clone https://github.com/your-username/house-api.git
Install dependencies: npm install
Start the server: npm start
Usage
Adding a House
To add a new house, send a POST request to /houses with the following JSON body:

{
  "name": "House Name",
  "address": "House Address"
}

Adding a Room
To add a room to a house, send a POST request to /houses/{houseId}/rooms with the following JSON body:

{
  "name": "Room Name",
  "area": 100
}

Updating a House
To update a house, send a PUT request to /houses/{houseId} with the updated house information in the JSON body.

Deleting a House
To delete a house, send a DELETE request to /houses/{houseId}.

Contributing
Contributions are welcome! If you'd like to contribute to the House API, please follow these steps:

Fork the repository
Create a new branch (git checkout -b feature-branch)
Make your changes
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature-branch)
Create a new Pull Request
Credits
This project was created by [Your Name].

License
This project is licensed under the MIT License. See the LICENSE file for details.
