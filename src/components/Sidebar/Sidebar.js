import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Sidebar = () => {
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
    </div>
  );
};

export default Sidebar;