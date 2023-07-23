
import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';

const College = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch("/college.json")
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div className='mt-14 bg-slate-200 lg:p-16 rounded'> 
        <h2 className='text-3xl font-extrabold text-center pb-8'>Top Three College</h2>
            {
                colleges.map(college => <CollegeCard
                key={college._id}
                college={college}
                ></CollegeCard>)
            } 
        </div>
    );
};

export default College;