import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='flex flex-col gap-y-5' style={{ fontFamily: "'League Spartan', sans-serif" }}>
            {
                jobs?.map(job =>
                    <Job key={job.id} job={job} />
                )
            }
        </div>
    );
};

export default Jobs;