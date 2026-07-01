import { useState, useEffect } from 'react';

function StudentTracker() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => setUsers(data.users))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h2>Student Tracker</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {users.map(user => (
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
        </div>
    );
}

export default StudentTracker;