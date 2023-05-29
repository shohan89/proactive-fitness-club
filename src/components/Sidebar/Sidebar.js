import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Sidebar = ( { exerciseTime } ) => {
  // console.log( exerciseTime );
  const [ breakTime, setBreakTime ] = useState(0);
  
  const handleAddToBreak = seconds =>{
    setBreakTime( ( prevBreakTime )=> prevBreakTime + seconds );
    
  }
  return (
    <div className='bg-slate-100 p-5'>
      {/* personal info start */}
      <div className='personal-info flex gap-5'>
        <img className='mask mask-circle w-16' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="avater" srcset="" />
        <div className="text-info">
          <h4 className='text-3xl font-bold'>Sharoar Hossain</h4>
          <p>
          <FontAwesomeIcon style={ { marginRight: '0.5rem' } } icon={ faMapPin }></FontAwesomeIcon> 
            Sydney, Australia
          </p>
        </div>
      </div>
      {/* personal info end */}
      {/* Body info start */}
      <div className="body-info mt-5 p-5 bg-slate-200 rounded-lg flex justify-around">
        <div className="weight">
          <p><span className='text-4xl font-semibold'>65</span>kg</p>
          <p>Weight</p>
        </div>
        <div className="height">
          <p className='text-4xl font-semibold'>5.5</p>
          <p>Height</p>
        </div>
        <div className="age">
          <p><span className='text-4xl font-semibold'>25</span>yrs</p>
          <p>Age</p>
        </div>
      </div>
      {/* Body info end */}
      <h3 className='text-2xl font-semibold mt-5 mb-5'>Add A Break</h3>
      {/* Break Btn start */}
      <div className="break-btn p-5 bg-slate-200 rounded-lg flex justify-around mb-10">
        <button onClick={ ()=> handleAddToBreak(20) } className='btn btn-primary mr-4 rounded-full bg-white border-none'>20s</button>
        <button onClick={ ()=> handleAddToBreak(10) } className='btn btn-primary mr-4 rounded-full bg-white border-none'>10s</button>
        <button onClick={ ()=> handleAddToBreak(30) } className='btn btn-primary mr-4 rounded-full bg-white border-none'>30s</button>
        <button onClick={ ()=> handleAddToBreak(40) } className='btn btn-primary mr-4 rounded-full bg-white border-none'>40s</button>
      </div>
      {/* Break btn end */}
      <h3 className='text-2xl font-semibold mt-5 mb-5'>Exercise Details</h3>
      {/* break deails start */}
      <div className="break-details">
        <div className="exercise-time flex justify-between bg-slate-200 pt-4 pb-4 pr-4 pl-4 rounded-lg mb-4">
          <h4 className='text-xl font-bold'>Exercise Time: </h4>
          <p>{ exerciseTime } seconds</p>
        </div>
        <div className="break-time flex justify-between bg-slate-200 pt-4 pb-4 pr-4 pl-4 rounded-lg">
          <h4 className='text-xl font-bold'>Break Time: </h4>
          <p>{ breakTime } seconds</p>
        </div>
      </div>
      {/* break deails end */}
      <button className='btn btn-success mt-5 w-[100%]'>Activity Completed</button>
    </div>
  );
};

export default Sidebar;