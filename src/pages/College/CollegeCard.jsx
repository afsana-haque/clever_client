import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
    const {_id, college_Name, college_image, admission_dates, events,research_history, sports} = college;
    // console.log(college);
  
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-10 mb-12">
            <figure><img src={college_image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{college_Name}</h2>
                <p><span className='font-bold'>Admission Dates:</span> {admission_dates}</p>
                <p><span className='font-bold'>Events: </span>{events}</p> 
                <p className='lg:pe-80'><span className='font-bold'>Research History: </span>{research_history}</p> 
                <p> <span className='font-bold'>Sports: </span>{sports}</p> 
                <div className="card-actions justify-end">
                    <Link to={`/collegeDetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;