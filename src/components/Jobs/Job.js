import React from 'react';

const Job = ({ job, handleTag }) => {
    const { id, logo, tools, languages, location, contract, postedAt, level, role, position, featured, isNew, company } = job;
    return (
        <div className={`flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center lg:justify-between md:justify-between sm:items-start items-start gap-y-10 bg-white py-5 px-8 shadow-lg shadow-[#d0f5f5] rounded ${featured && "border-l-[6px] border-[#5BA4A4]"}`}>
            <div className='flex lg:flex-row md:flex-row flex-col gap-x-8 lg:items-center md:items-center'>
                <div>
                    <img className="lg:w-20 md:w-16 w-14 -mt-12 lg:mt-0 md:mt-0" src={logo} alt="" />
                </div>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex gap-x-4'>
                        <h4 className='text-[#5BA4A4] text-lg'>{company}</h4>
                        <div className='flex text-white gap-x-4'>
                            <h4 className={`${isNew && "bg-[#5BA4A4] lg:px-[10px] px-2 py-[2px] rounded-xl"}`}>{isNew && "NEW!"}</h4>
                            <h4 className={`${featured && "bg-[#2C3A3A] lg:px-[10px] py-[2px] px-2 rounded-xl"}`}>{featured && "FEATURED"}</h4>
                        </div>
                    </div>
                    <div>
                        <h3 className='lg:text-2xl md:text-xl text-lg text-[#2C3A3A]'>{position}</h3>
                    </div>
                    <div className='flex lg:gap-x-4 md:gap-x-2 gap-x-1 items-center justify-start text-[#2C3A3A] text-opacity-50'>
                        <h4>{postedAt}</h4>
                        <span className='text-xs'>🔘</span>
                        <h4>{contract}</h4>
                        <span className='text-xs'>🔘</span>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 text-[#5BA4A4] flex-wrap'>
                <button onClick={(e) => handleTag(e)} className='bg-[#EFFAFA] px-2 py-1 rounded hover:bg-[#5BA4A4] hover:text-[#EFFAFA] hover:cursor-pointer'>{role}</button>
                <button onClick={(e) => handleTag(e)} className='bg-[#EFFAFA] px-2 py-1 rounded hover:bg-[#5BA4A4] hover:text-[#EFFAFA] hover:cursor-pointer'>{level}</button>
                {
                    languages?.map((language, i) => <button key={i} onClick={(e) => handleTag(e)} className='bg-[#EFFAFA] px-2 py-1 rounded hover:bg-[#5BA4A4] hover:text-[#EFFAFA] hover:cursor-pointer'>{language}</button>)
                }
                {
                    tools?.map((tool, i) => <button key={i} onClick={(e) => handleTag(e)} className='bg-[#EFFAFA] px-2 py-1 rounded hover:bg-[#5BA4A4] hover:text-[#EFFAFA] hover:cursor-pointer'>{tool}</button>)
                }
            </div>
        </div>
    );
};

export default Job;