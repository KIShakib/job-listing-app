import React from 'react';

const Job = ({ job, handleTag }) => {
    const { id, logo, tools, languages, location, contract, postedAt, level, role, position, featured, isNew, company } = job;
    return (
        <div className={`flex items-center justify-between bg-white py-5 px-10 shadow-lg shadow-[#d0f5f5] rounded font- ${featured && "border-l-[6px] border-[#5BA4A4]"}`}>
            <div className='flex gap-x-8 items-center'>
                <div>
                    <img className="w-20" src={logo} alt="" />
                </div>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex gap-x-4'>
                        <h4 className='text-[#5BA4A4] text-lg'>{company}</h4>
                        <div className='flex text-white gap-x-4'>
                            <h4 className={`${isNew && "bg-[#5BA4A4] px-[10px] py-[2px] rounded-xl"}`}>{isNew && "NEW!"}</h4>
                            <h4 className={`${featured && "bg-[#2C3A3A] px-[10px] py-[2px] rounded-xl"}`}>{featured && "FEATURED"}</h4>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl text-[#2C3A3A]'>{position}</h3>
                    </div>
                    <div className='flex gap-x-4 items-center justify-start text-[#2C3A3A] text-opacity-50'>
                        <h4>{postedAt}</h4>
                        <span className='text-xs'>🔘</span>
                        <h4>{contract}</h4>
                        <span className='text-xs'>🔘</span>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 text-[#5BA4A4]'>
                <button onClick={(e) => handleTag(e)} className='bg-[#EFFAFA] px-2 py-1 rounded hover:bg-[#5BA4A4] hover:text-[#EFFAFA] hover:cursor-pointer'>{role}</button>
                <button onClick={(e) => handleTag(e)} className='bg-[#EFFAFA] px-2 py-1 rounded hover:bg-[#5BA4A4] hover:text-[#EFFAFA] hover:cursor-pointer'>{level}</button>
                {
                    languages?.map(language => <button onClick={(e) => handleTag(e)} className='bg-[#EFFAFA] px-2 py-1 rounded hover:bg-[#5BA4A4] hover:text-[#EFFAFA] hover:cursor-pointer'>{language}</button>)
                }
                {
                    tools?.map(tool => <button onClick={(e) => handleTag(e)} className='bg-[#EFFAFA] px-2 py-1 rounded hover:bg-[#5BA4A4] hover:text-[#EFFAFA] hover:cursor-pointer'>{tool}</button>)
                }
            </div>
        </div>
    );
};

export default Job;