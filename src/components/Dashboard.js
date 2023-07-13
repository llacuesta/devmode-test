import React from 'react';
import Button from './Button';
import Header from './Header';
import Submit from './Submit';
import Table from './Table';

function Dashboard(props) {
  return (
    <div className='px-32 py-16 flex flex-col gap-3'>
      <Header />
      <div>
        <Button />
      </div>
      <Table />
      <div className="flex flex-col items-center flex-1">
        <Submit />
      </div>
    </div>
  );
}

export default Dashboard;