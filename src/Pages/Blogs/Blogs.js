import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-2xl'>1.How will you improve the performance of a React Application?</h2>
            <p># Keeping component state local where necessary. <br />
               # Memoizing React components to prevent unnecessary re-renders. <br />
               # Code-splitting in React using dynamic import() <br />
               # Windowing or list virtualization in React. <br />
               # Lazy loading images in React.</p>
        </div>
    );
};

export default Blogs;