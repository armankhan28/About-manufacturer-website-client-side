import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center mt-10 ">
      <h2 className='font-bold text-4xl'>Purchase From</h2>
      <div class="card w-96 glass">
        <div class="card-body grid grid-cols-1 gap-4 justify-items-center text-center">
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
            <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="Add Your Address"></textarea>
            <input 
              type="submit"
              value="Order Now"
              className="btn btn-accent w-full max-w-xs text-white"
            />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
