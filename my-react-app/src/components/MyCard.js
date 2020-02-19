import React, { useState, useEffect } from "react";
import axios from 'axios';

const MyCard = props => {
    const [user, setUser] = useState()
    useEffect(() => {
        const getMyData = () => {
            axios
            .get('https://api.github.com/users/CoinOperatedGuy')
            .then((response) => {
                const myData = response.data;
                console.log(myData);
            })
            .catch((err) => {
            console.log(err);
            });
        }
        getMyData();
    }, []);
    
    return (
        <div></div>
    );
}

export default MyCard;