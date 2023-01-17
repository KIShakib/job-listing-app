import React from 'react';
import Job from './Job';

const Jobs = ({ jobs, handleTag }) => {

    return (
        <div className='flex flex-col lg:gap-y-5 md:gap-y-5 gap-y-10' style={{ fontFamily: "'League Spartan', sans-serif" }}>
            {
                jobs?.map(job =>
                    <Job key={job.id} job={job} handleTag={handleTag} />
                )
            }
        </div>
    );
};

export default Jobs;