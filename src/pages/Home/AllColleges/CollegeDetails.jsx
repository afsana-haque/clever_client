import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const { id } = useParams();

    const [details, setDetails] = useState([]);
    const detail = details?.find(d => d?._id === id);
    console.log(detail);



    useEffect(() => {
        fetch(`http://localhost:5000/allColleges`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                // console.log(data)   

            })
    }, [])
    return (
        <div className='my-12 flex justify-center items-center '>
            <div className="card w-96 bg-blue-100 text-black">
                <div className="card-body">
                    <div>
                    <h3 className='text-xl font-bold'>College events: </h3>
                    <p>1. {detail?.events[0]}</p>
                    <p>2. {detail?.events[1]}</p>
                    <p>3. {detail?.events[2]}</p>
                    <p>4. {detail?.events[3]}</p>
                    </div>
                    <div>
                    <h3 className='text-xl font-bold'>College sports: </h3>
                    <p>1. {detail?.sports[0]}</p>
                    <p>2. {detail?.sports[1]}</p>
                    <p>3. {detail?.sports[2]}</p>
                    <p>4. {detail?.sports[3]}</p>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;