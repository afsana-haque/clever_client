import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CollageOneDetails = () => {
    const { id } = useParams();
    // console.log(id)
    const [details, setDetails] = useState([]);
    const detail = details?.find(d => d?._id === id);
    console.log(detail);
 
   

    useEffect(() => {
        fetch(`/college.json`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                // console.log(data)   

            })
    }, [])
    return (
        <div className='bg-slate-200 p-16 rounded'>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure><img src={detail?.college_image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{detail?.college_Name}</h2>
                    <p><span className='font-bold'>Admission Process: </span>{detail?.admission_process}</p> 
                    <p><span className='font-bold'>Events Details: </span>{detail?.events_details}</p> 
                    <p><span className='font-bold'>Research Works: </span>{detail?.research_works}</p> 
                    <p><span className='font-bold'>Sports Categories: </span>{detail?.sports_categories}</p> 
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
              
              
            </div>
        </div>
    );
};

export default CollageOneDetails;