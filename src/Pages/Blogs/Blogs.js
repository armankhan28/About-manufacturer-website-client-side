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
            <h2 className='text-2xl'>2.What are the different ways to manage a state in a React application?</h2>
            <p>There are four main types of state you need to properly manage in your React apps:
               1.Local state. <br />
               2.Global state. <br />
               3.Server state. <br />
               4.URL state.</p>
             <h2 className='text-2xl'>3.How does prototypical inheritance work?</h2>
             <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>  
             <h2 className='text-2xl'>4.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
             <p>Destructuring</p>
             <h2 className='text-2xl'>5.What is a unit test? Why should write unit tests?</h2>
             <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
        </div>
    );
};

export default Blogs;