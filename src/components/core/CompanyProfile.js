
import React, { useState } from 'react';
import { Core } from '..';
import imgUrgentlyRequired from "../../assets/images/urgently-required.png"

function CompanyProfile({ data, pageType }) {
    const [status, setStatus] = useState("");
    console.log("data", data)
    console.log("status", status)
    return (
        <Core.Card className={`pt-[30px] ${pageType === "edit" ? 'pb-[70px]' : 'pb-[30px]'} px-[60px]`}>
            <div className='flex justify-between border-b-[4px] pb-7'>
                <div className='w-[200px]'>
                    <div className='flex justify-center items-center w-[130px] h-[130px] bg-gray-7 rounded-[20px]'>
                        <img src={data?.logo} alt="company logo" />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full h-full flex justify-between items-end'>
                        <div>
                            <h6 className='text-[22px] leading-[20px] font-semibold mb-3'>{data?.name}</h6>
                            <p className='text-gray-6 text-[14px] leading-[20px] max-w-[280px]'>{data?.status}</p>
                        </div>
                        <div className={`${pageType === "view" && "self-start"}`}>
                            {pageType === "view" && <img src={imgUrgentlyRequired} alt="company logo" />}
                            {pageType === "edit" && <Core.Button>Save Changes</Core.Button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between pt-7'>
                <div className='w-[200px]'></div>
                <div className='w-full'>
                    <div className='flex justify-between items-start'>
                        <h6 className='text-[18px] leading-[28px] font-medium mb-2'>Overview</h6>
                        <span className='text-gray-13 text-[14px] leading-[20px]'>250 / 250</span>
                    </div>
                    {data?.overview.map(value => {
                        return (
                            <p key={value * 5} className='text-gray-6 text-[14px] leading-[20px] font-medium mb-4'>
                                {value}
                            </p>
                        )
                    })}
                    <h6 className='text-[18px] leading-[28px] font-medium'>Video</h6>
                    <div className='overflow-hidden w-[700px] max-w-[700px]'>
                        <div className='max-w-[700px] overflow-x-scroll pt-3'>
                            <div className='w-[max-content] flex justify-start items-start gap-x-3'>
                                {/* {data?.videos.map()} */}
                                <div className='max-w-[336px] h-full max-h-[190px] rounded-[8px] overflow-hidden'>
                                    {/* <Core.VideoPlayer src={video1} /> */}
                                </div>
                                {/* <div className='max-w-[336px] h-full max-h-[190px] rounded-[8px] overflow-hidden'>
                        <Core.VideoPlayer src={video2} />
                    </div> */}
                                {/* <div className='max-w-[336px] h-full max-h-[190px] rounded-[8px] overflow-hidden'>
                        <Core.VideoPlayer src={video3} />
                    </div> */}
                                {/* <div className='max-w-[336px] h-full max-h-[190px] rounded-[8px] overflow-hidden'>
                        <Core.VideoPlayer src={video1} />
                    </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-start items-start flex-wrap gap-x-2 gap-y-8 pt-10 pb-8'>
                        {data?.stats.map((value, index) => {
                            return (
                                <>
                                    <div key={value * 6} className='w-[30%]'>
                                        <h6 className='text-[18px] leading-[28px] font-medium'>{value?.title}</h6>
                                        {typeof (value?.value) === 'object' ?
                                            <Core.Dropdown2 options={value?.value} setState={setStatus} />
                                            :
                                            <span className={`
                                            text-gray-6
                                            ${(value?.value).toLowerCase() === "activated" && 'text-green-4'}
                                            ${(value?.value).toLowerCase() === "deactivated" && 'text-red-2'}
                                             text-[14px] leading-[20px] font-medium`}>
                                                {value?.value}
                                            </span>
                                        }
                                    </div>
                                    {index === 4 && <div className='w-[30%]'></div>}
                                </>
                            )
                        })}
                        {/* <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Company size</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>85,464 employees</span>
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Followers</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>7,611,760 followers</span>
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Status</h6>
                            dddd
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Hired candidate</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>23</span>
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Published jobs count</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>78</span>
                        </div>
                        <div className='w-[30%]'>

                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Language</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>English</span>
                        </div>
                        <div className='w-[30%]'>
                            <h6 className='text-[18px] leading-[28px] font-medium'>Website link</h6>
                            <span className='text-gray-6 text-[14px] leading-[20px] font-medium'>www.us.pg.com</span>
                        </div> */}

                    </div>
                    {pageType === "edit" &&
                        <div className='flex justify-start gap-x-3'>
                            <Core.Button
                                // onClick={handleNext}
                                type="narrow">Save Chagnes</Core.Button>
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white">Cancel</Core.Button>
                        </div>
                    }
                </div>
            </div>
        </Core.Card>
    )
}

export default CompanyProfile