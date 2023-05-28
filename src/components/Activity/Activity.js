import React from 'react';

const Activity = ({ activity, handleAddToList }) => {
  // console.log( activity );
  const { id, activity_name, description, for_age, time_required, img } = activity;
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
            <button onClick={ () => handleAddToList( activity ) } className="btn btn-primary w-[100%] font-bold text-slate-100 ">Add To List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;