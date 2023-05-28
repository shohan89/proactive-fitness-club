import React from 'react';

const Activity = ({ activity }) => {
  const { activity_name, description, for_age, time_required, img } = activity;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='w-[100%] h-64' src={ img } alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Add To List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;