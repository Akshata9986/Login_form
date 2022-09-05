import React, { useState } from 'react'
import "./Register.css"

function Register() {
    let [user, setUser] = useState({
        fName: "",
        lName: "",
        gender: "",
        age: "",
        password: ""
    });

    const handleInput = (e) => {
        const userCopy = { ...user };
        userCopy[e.target.name] = e.target.value;
        setUser(userCopy);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }


    return (
        <main>
            <div className="container border mt-3">
                <h1>Register Form</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="fname" className="form-label">First Name:</label>
                        <input type="text" name="fName" className="form-control" value={user.fName} onChange={handleInput} />

                        <label for="lname" className="form-label">Last Name:</label>
                        <input type="text" name="lName" className="form-control" value={user.lName} onChange={handleInput} />
                    </div>
                    <div className="mb-3" >
                        <label className="form-label"> Gender:
                            <label for="male">Male</label>
                            <input type="radio" name="gender" className="form-control" value={user.gender} onChange={handleInput} />

                            <label for="female">Female</label>
                            <input type="radio" name="gender" className="form-control" value={user.gender} onChange={handleInput} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label for="age" className="form-label">Age:</label>
                        <input type="text" name="age" className="form-control" value={user.age} onChange={handleInput} />
                    </div>
                    <div className="mb-3" >
                        <label for="pwd" className="form-label">Password:</label>
                        <input type="password" name="password" className="form-control" value={user.password} onChange={handleInput} />
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        </main>
    )
}
export default Register