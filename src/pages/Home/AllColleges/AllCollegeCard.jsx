import React from 'react';
import { Link } from 'react-router-dom';

const AllCollegeCard = ({allCollege}) => {
    const {_id, college_Name, college_image, admission_dates, rating, research} = allCollege;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">
        <figure><img className='w-full h-[300px]' src={college_image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{college_Name}</h2>
          <p> <span className='font-bold'>Admission Dates:</span> {admission_dates}</p>
          <p> <span className='font-bold'>Rating: </span>{rating}</p>
          <p> <span className='font-bold'>Research: </span>{research}</p>
          <div className="card-actions justify-end">
          <Link to={`/collegeDetail/${_id}`}><button className="btn btn-info text-white">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default AllCollegeCard;