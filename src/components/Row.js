import React from 'react';
import Upload from './Upload';
import File from './File';

function Row({ id, text, files}) {
  return (
    <div className="flex-1 py-3 bg-white justify-start items-start inline-flex">
      <div className="px-2 w-20 text-gray-700 text-sm">{id}</div>
      <div className="w-28 h-10 px-2 flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch h-10 px-3 py-4 bg-white rounded-md border border-gray-100 justify-start items-center gap-3 inline-flex">
          <div className="text-gray-400 text-sm h-5 justify-start items-center flex">No Date</div>
        </div>
      </div>

      {
        text === "" ? (
          <div className="flex-1 h-10 px-2 justify-start items-start items-center inline-flex">
            <div className='h-5 border-l border-black'>
            </div>
          </div>
        ) : (
          <div className="flex-1 px-2 justify-start items-start items-center inline-flex">
            <div className="text-gray-700 text-sm font-normal leading-tight">{text}</div>
          </div>
        )
      }
      <div className='flex flex-col gap-2'>
        <Upload />
        {
          files.map((file, index) => (
            <File name={file} key={index}/>
          ))
        }
      </div>
    </div>
  );
}

export default Row;