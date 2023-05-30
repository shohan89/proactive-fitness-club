import React, { useState } from 'react';

const Footer = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <footer className="bg-gray-200 p-5 mt-12">
      <h2 className='text-4xl text-center mt-3 mb-3 font-bold'>FAQ</h2>
      <h3 className='text-2xl font-semibold'>01. How dose React Work?</h3>
      <p className='p-3 text-lg'>Ans: React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed!</p>
      <h3 className='text-2xl font-semibold'>02. What is the difference between props and state?</h3>
      <p className='p-3 text-lg'>Ans: The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
      <h3 className='text-2xl font-semibold'>03. What is the purpose of useEffect other than fetching data?</h3>
      <p className='p-3 text-lg mb-5'>Ans: The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>
    </footer>
  );
};

export default Footer;