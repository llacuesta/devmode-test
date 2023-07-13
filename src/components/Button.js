import React from 'react';
import { RiAddCircleLine } from "react-icons/ri";

function Button(props) {
  return (
    <button className="px-3 py-2 bg-gray-700 rounded-md justify-center items-center gap-1 inline-flex">
      <div className="text-white text-sm font-semibold">Add Row</div>
      <RiAddCircleLine size={18} className='text-white' />
    </button>
  );
}

export default Button;