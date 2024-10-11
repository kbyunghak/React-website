import React, {useState} from 'react';

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const {name, email, tel} = inputs;

    const userUpdate = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setInputs({
            ...inputs,
            [id]: value,
        });        
    };

    return (
        <div>
            <div>
                <label>Name</label>
                <input type="text" id="name" value={inputs.name} onChange={userUpdate}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" id="email" value={email} onChange={userUpdate}/>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="tel" id="tel" value={tel} onChange={userUpdate}/>
            </div>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Phone Number : {tel}</p>
        </div>
    );
};

export default Input2;
