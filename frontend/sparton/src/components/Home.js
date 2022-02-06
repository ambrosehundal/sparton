import React, { useEffect, useState } from 'react';


const Home = () => {

    const [message, setMessage] = useState("Yo");

    const [courses, setCourses] = useState("");


    useEffect(() => {
        fetch('http://localhost:3000/api/home')
        .then(response => response.json())
        .then(json => setMessage(json));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/api/courses')
        .then(response => response.json())
        .then(json => setCourses(json));
    }, []);



    return(
        <div>
            <p>Welcome to the best place to learn and develop MMA skills</p>
            <p>{message}</p>
            <p>{courses}</p>
        </div>
    )
}

export default Home;