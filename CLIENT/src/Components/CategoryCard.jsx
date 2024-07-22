import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryCard({img, head, onClick}) {
  return (
    <div className='max-w-36 cursor-pointer' onClick={onClick}>
         <img src={img} alt="" className='rounded-full h-32 w-32 m-auto'/>
         <p className='text-center py-2 font-semibold'>{head}</p>
         
    </div>
  )
}


CategoryCard.propTypes = {
  img: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
};
