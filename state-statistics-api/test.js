const testApi = async () => {
    try {
        const baseUrl = 'http://localhost:3005';
        console.log('--- Testing API Endpoints ---');

        // 1. GET /states
        let res = await fetch(`${baseUrl}/states`);
        let data = await res.json();
        console.log(`GET /states - Total states: ${data.length}`);

        // 2. GET /states/highest-gdp
        res = await fetch(`${baseUrl}/states/highest-gdp`);
        data = await res.json();
        console.log(`GET /states/highest-gdp - Highest GDP State: ${data.name}`);

        // 3. POST /states
        res = await fetch(`${baseUrl}/states`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "New State",
                population: 1000000,
                literacyRate: 99.9,
                annualBudget: 50000,
                gdp: 200000
            })
        });
        data = await res.json();
        console.log(`POST /states - Created State ID: ${data.id}, Name: ${data.name}`);

        // 4. PUT /states/:id/budget
        res = await fetch(`${baseUrl}/states/1/budget`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ annualBudget: 999999 })
        });
        data = await res.json();
        console.log(`PUT /states/1/budget - New Budget for state 1: ${data.annualBudget}`);

        // 5. PATCH /states/:id/literacy
        res = await fetch(`${baseUrl}/states/1/literacy`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ literacyRate: 100 })
        });
        data = await res.json();
        console.log(`PATCH /states/1/literacy - New Literacy Rate for state 1: ${data.literacyRate}`);

        // 6. DELETE /states/name/:stateName
        res = await fetch(`${baseUrl}/states/name/gujarat`, { method: 'DELETE' });
        console.log(`DELETE /states/name/gujarat - Status code: ${res.status}`);

        // 7. GET /states to verify deletion
        res = await fetch(`${baseUrl}/states`);
        data = await res.json();
        const gujaratExists = data.some(s => s.name.toLowerCase() === 'gujarat');
        console.log(`GET /states - Gujarat exists? ${gujaratExists}`);

        // 8. DELETE /states/low-literacy/:percentage
        res = await fetch(`${baseUrl}/states/low-literacy/70`, { method: 'DELETE' });
        data = await res.json();
        console.log(`DELETE /states/low-literacy/70 - Deleted count: ${data.deletedCount}`);

        console.log('--- All tests completed successfully ---');
    } catch (e) {
        console.error('Test failed:', e.message);
    }
};

testApi();
