import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOders] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() =>{
       if(user){
        fetch(`http://localhost:5000/booking?client=${user.email}`)
        .then(res => res.json())
        .then(data => setOders(data));
       }
    } ,[user])

    return (
        <div>
            <h2>My Orders{orders.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Name</th>
        <th>Email</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((o, index) => 
                <tr key={o._id}>
                <th>{index + 1}</th>
                <td>Product</td>
                <td>{o.Name}</td>
                <td>{o.client}</td>
              </tr> )
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;