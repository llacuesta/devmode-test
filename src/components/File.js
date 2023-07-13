import React from 'react';
import { RiCloseFill } from 'react-icons/ri'

function File({ name }) {
  return (
    <button className="w-44 h-6 px-1.5 py-0.5 bg-gray-100 rounded-sm justify-between items-start gap-2 inline-flex">
      <div className="text-gray-700 text-xs font-normal leading-tight">{ name }</div>
      <RiCloseFill />
    </button>
  );
}

export default File;