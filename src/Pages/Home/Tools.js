import React, { useEffect, useState } from 'react';
import Service from './Service';

const Tools = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://desolate-fortress-23405.herokuapp.com/service')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="mt-10 text-center">
      <h2 className="font-bold text-4xl">New Tools On Market</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Tools;
