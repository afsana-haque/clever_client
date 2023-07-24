import React, { useEffect, useState } from 'react';
import AllCollegeCard from './AllCollegeCard';

const AllColleges = () => {
    const [allColleges, setAllColleges] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allColleges")
        .then(res => res.json())
        .then(data => setAllColleges(data))
    },[])
    return (
        <div className='my-10 ml-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
            allColleges.map(allCollege => <AllCollegeCard
            key={allCollege._id}
            allCollege={allCollege}
            ></AllCollegeCard>)
           }
            </div>
        </div>
    );
};

export default AllColleges;