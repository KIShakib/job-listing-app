import React from 'react';
import Job from './Job';

const Jobs = ({ jobs, handleTag }) => {

    return (
        <div className='flex flex-col gap-y-5' style={{ fontFamily: "'League Spartan', sans-serif" }}>
            {
                jobs?.map(job =>
                    <Job key={job.id} job={job} handleTag={handleTag} />
                )
            }
        </div>
    );
};

export default Jobs;