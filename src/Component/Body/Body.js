import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
import './Body.css'
const Body = () => {
    const [card, setCard] = useState([]);
    const [arry, setArry] = useState([]);
    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    const AddTOClick = (card) => {
        const newArray = [...arry, card];
        setArry(newArray);
        // console.log(arry);

    }
    let total = 0;
    for (const data of arry) {
        console.log(data);
        total = total + data.time
    }



    return (
        <div className='gridding'>
            <div className='firstDiv'>
                <h1>Daily Activities</h1><br />
                <h3>Select your Activity</h3>
                <div className='FirstInSecondDiv'>
                    {
                        card.map(data => <Card data={data} handle={AddTOClick} key={data.id}></Card>)
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
                        <div className='inline'><h1>62</h1></div>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1>5.5</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1>22</h1>
                        <p>Age</p>
                    </div>
                </div>
                <div>
                    <br /><br />
                    <h2>Add A Break</h2>
                    <div className='info'>
                        <div >10s</div>
                        <div>20s</div>
                        <div>30s</div>
                        <div>40s</div>
                    </div>
                </div>
                <div>
                    <br /><br />
                    <h2>Excercise Details</h2>
                    <div>
                        <br />
                        <h5>Excercise Time: <small className='color'>{total} minutes</small></h5>
                        <br />
                        <h5>Break Time: <small className='color'>00 Seconds</small></h5>
                    </div>
                </div><br /><br />
                <button className='btn-activity' >Activity Compleated</button>
            </div>
        </div >
    );
};

export default Body;