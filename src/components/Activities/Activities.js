import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Sidebar from '../Sidebar/Sidebar';

const Activities = () => {
  const [ activities, setActivities ] = useState([]);
  const [ listItems, setListItems ] = useState([]);
  useEffect( ()=>{
    fetch( 'data.json' )
      .then( res => res.json() )
      .then( data => setActivities( data ) )
  },[] )
  // add to list event handler
  const handleAddToList = ( activities ) =>{
    // setListItems( activities );
    console.log( activities );
  }

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
              activities.map( activity => <Activity activity={ activity } key={ activity.id } handleAddToList={ handleAddToList }></Activity> )
            }
          </div>
          <div className="info sticky top-0 h-[100%]">
            <Sidebar handleAddToList={ handleAddToList }></Sidebar>
          </div>
      </div>
    </>
    
  );
};

export default Activities;