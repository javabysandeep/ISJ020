import { useState } from 'react';

function StudentForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <div>
            <h1>Student Form</h1>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />
            </form>
            <h2>Student Information</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
}

export default StudentForm;