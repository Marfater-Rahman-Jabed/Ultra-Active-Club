import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
import './Body.css'
const Body = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className='gridding'>
            <div className='firstDiv'>
                <h1>Daily Activities</h1><br />
                <h3>Select your Activity</h3>
                <div className='FirstInSecondDiv'>
                    {
                        card.map(data => <Card data={data}></Card>)
                    }
                </div>
            </div>
            <div className='SecondDiv'>
                <div className='SecondInDiv'>
                    <img src="jabed.jpg" alt="" />
                    <div>
                        <p>Marfater Rahman Jabed</p>

                    </div>
                </div>
                <div className='info'>
                    <div>
                        <div className='inline'><h1>75</h1></div>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1>5.5</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1>25</h1>
                        <p>Age</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Body;