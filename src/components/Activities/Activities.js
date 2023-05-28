import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Activities = () => {
  const [ activities, setActivities ] = useState([]);
  useEffect( ()=>{
    fetch( 'data.json' )
      .then( res => res.json() )
      .then( data => setActivities( data ) )
  },[] )
  return (
    <>
      <div className='flex items-center gap-2 mt-5 ml-10 mt-10'>
        <FontAwesomeIcon icon={ faDumbbell }></FontAwesomeIcon>
        <h1 className='text-xl font-bold '>PROACTIVE FITNESS CLUB</h1>
      </div>
      <p className='ml-10 mb-10'>Select Today's Exercise</p>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mr-10 ml-10'>
          <div className="activities col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
            {
              activities.map( activity => <Activity activity={ activity } key={ activity.id }></Activity> )
            }
          </div>
          <div className="info bg-green-400 sticky top-0">
            <h3>information Section</h3>
          </div>
      </div>
    </>
    
  );
};

export default Activities;