import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = event => {
    event.preventDefault();

    const booking = {
      client: user.email,
      Name: user.displayName,
      phone: event.target.phone.value,
    };

    fetch('https://desolate-fortress-23405.herokuapp.com/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          toast('Purchase Done');
        }
      });
  };

  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center mt-10 ">
      <h2 className="font-bold text-4xl">Purchase From</h2>
      <div className="card w-96 glass">
        <form
          onSubmit={handleBooking}
          className="card-body grid grid-cols-1 gap-4 justify-items-center text-center"
        >
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ''}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email || ''}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea
            className="textarea textarea-bordered w-full max-w-xs"
            placeholder="Add Your Address"
          ></textarea>
          <input
            type="submit"
            value="Order Now"
            className="btn btn-accent w-full max-w-xs text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
