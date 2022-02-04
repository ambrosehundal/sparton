import React, { useEffect, useState } from 'react';


const Home = () => {

    const [message, setMessage] = useState("Yo");


    useEffect(() => {
        fetch('http://localhost:3000/api/home')
        .then(response => response.json())
        .then(json => setMessage(json));
    }, []);
    return(
        <div>
            <p>Welcome to the best place to learn and develop MMA skills</p>
            <p>{message}</p>
        </div>
    )
}

export default Home;