import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Activity = ({ activity, handleAddToList }) => {
  // console.log( activity );
  const [isAdded, setIsAdded] = useState( false ); // State variable to track if the activity is added

  const handleAddClick = () => {
    handleAddToList( activity );
    setIsAdded( true );
  };
  
  const { activity_name, description, for_age, time_required, img } = activity;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='w-[100%] h-64' src={ img } alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{ activity_name }</h2>
          <p>{ description }</p>
          <p>For Age: { for_age }</p>
          <p>Time Required: { time_required }s</p>
          <div className="card-actions justify-start">
          {isAdded ? (
              <button className="btn btn-primary w-[100%] font-bold text-slate-100" disabled>
                Added <FontAwesomeIcon className='ml-2' icon={ faCheck }></FontAwesomeIcon>
              </button>
            ) : (
              <button onClick={ handleAddClick } className="btn btn-primary w-[100%] font-bold text-slate-100">
                Add To List
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;