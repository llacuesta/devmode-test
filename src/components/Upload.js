import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai'

function Upload() {
  return (
    <button className="w-44 h-9 px-3 py-2 bg-emerald-50 rounded-md border border-emerald-500 justify-center items-center gap-1 inline-flex">
      <div className="text-emerald-500 text-sm font-semibold leading-tight">Upload File</div>
      <AiOutlinePlus className='text-emerald-500' />
    </button>
  );
}

export default Upload;