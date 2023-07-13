import React from 'react';
import Row from './Row';

function Table(props) {
  return (
    <>
      <div className="flex-1 h-12 justify-start items-start inline-flex bg-gray-100 text-gray-700 text-sm">
        <div className="w-20 px-2 py-4 justify-center items-center inline-flex">
          Item No.
        </div>
        <div className="w-28 px-2 py-4 justify-center items-center inline-flex">
          Date
        </div>
        <div className="flex-1 px-2 py-4 justify-center items-center inline-flex">
          Description of Background
        </div>
        <div className="w-48 px-2 py-4 justify-center items-center inline-flex">
          Document
        </div>
      </div>
      <Row 
        id={1}
        text={""}
        files={[]}
      />
      <Row 
        id={2}
        text={"Proin at lacus mauris. Cras non mauris sit amet neque condimentum porttitor. Curabitur imperdiet lectus id tincidunt tincidunt. Nam volutpat nulla est, a venenatis leo aliquam non. Aliquam a tortor venenatis, tempus ipsum dictum, tincidunt augue. Proin posuere orci sed neque sodales, ut imperdiet dui porttitor. Aenean ac iaculis lectus. Quisque feugiat id lorem et dapibus. Aliquam ac nunc vel ante pellentesque semper quis vel metus. Nulla at ipsum velit. Vestibulum non aliquet ex. "}
        files={["file_sample_1.pdf", "file_sample_2.pdf"]}
      />
      <Row 
        id={3}
        text={"Proin at lacus mauris. Cras non mauris sit amet neque condimentum porttitor. Curabitur imperdiet lectus id tincidunt tincidunt. Nam volutpat nulla est, a venenatis leo aliquam non. Aliquam a tortor venenatis, tempus ipsum dictum, tincidunt augue. Proin posuere orci sed neque sodales, ut imperdiet dui porttitor. Aenean ac iaculis lectus. Quisque feugiat id lorem et dapibus. Aliquam ac nunc vel ante pellentesque semper quis vel metus. Nulla at ipsum velit. Vestibulum non aliquet ex. "}
        files={[]}
      />
      <Row 
        id={4}
        text={"Proin at lacus mauris. Cras non mauris sit amet neque condimentum porttitor. Curabitur imperdiet lectus id tincidunt tincidunt. Nam volutpat nulla est, a venenatis leo aliquam non. Aliquam a tortor venenatis, tempus ipsum dictum, tincidunt augue. Proin posuere orci sed neque sodales, ut imperdiet dui porttitor. Aenean ac iaculis lectus. Quisque feugiat id lorem et dapibus. Aliquam ac nunc vel ante pellentesque semper quis vel metus. Nulla at ipsum velit. Vestibulum non aliquet ex. "}
        files={[]}
      />
      <Row 
        id={5}
        text={"Proin at lacus mauris. Cras non mauris sit amet neque condimentum porttitor. Curabitur imperdiet lectus id tincidunt tincidunt. Nam volutpat nulla est, a venenatis leo aliquam non. Aliquam a tortor venenatis, tempus ipsum dictum, tincidunt augue. Proin posuere orci sed neque sodales, ut imperdiet dui porttitor. Aenean ac iaculis lectus. Quisque feugiat id lorem et dapibus. Aliquam ac nunc vel ante pellentesque semper quis vel metus. Nulla at ipsum velit. Vestibulum non aliquet ex. "}
        files={[]}
      />
      <Row 
        id={6}
        text={"Proin at lacus mauris. Cras non mauris sit amet neque condimentum porttitor. Curabitur imperdiet lectus id tincidunt tincidunt. Nam volutpat nulla est, a venenatis leo aliquam non. Aliquam a tortor venenatis, tempus ipsum dictum, tincidunt augue. Proin posuere orci sed neque sodales, ut imperdiet dui porttitor. Aenean ac iaculis lectus. Quisque feugiat id lorem et dapibus. Aliquam ac nunc vel ante pellentesque semper quis vel metus. Nulla at ipsum velit. Vestibulum non aliquet ex. "}
        files={[]}
      />
    </>
  );
}

export default Table;