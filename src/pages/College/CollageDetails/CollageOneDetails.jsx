import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CollageOneDetails = () => {
    const { id } = useParams();
    // console.log(id)
    const [details, setDetails] = useState([]);
    const detail = details?.find(d => d?._id === id);
    console.log(detail);
    const {college_image, college_Name, admission_process, events_details, research_works, sports_categories} = detail;
   

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
                {/* <figure><img src={college_image} alt="Album" /></figure> */}
                {/* <div className="card-body">
                    <h2 className="card-title">{college_Name}</h2>
                    <p><span className='font-bold'>Admission Process: </span>{admission_process}</p> 
                    <p><span className='font-bold'>Events Details: </span>{events_details}</p> 
                    <p><span className='font-bold'>Research Works: </span>{research_works}</p> 
                    <p><span className='font-bold'>Sports Categories: </span>{sports_categories}</p> 
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div> */}
                {college_Name}
              
            </div>
        </div>
    );
};

export default CollageOneDetails;