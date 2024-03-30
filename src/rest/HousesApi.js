const HOUSES_ENDPOINT = 'https://66076670be53febb857f78b7.mockapi.io/houses';

class HousesApi {
    async get() {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('Oops, looks like fetchHouses had an issue.', e);
        }
    }

    async put(house) {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like updating houses had an issue.', e);
        }
    }
}

export const housesApi = new HousesApi();
