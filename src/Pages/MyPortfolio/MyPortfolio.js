import React from 'react';
import arman from '../../Images/86075671.jpg';
import png from '../../Images/undraw_Static_website_re_x70h.png';
import png2 from '../../Images/undraw_static_assets_rpm6.png';
import png3 from '../../Images/undraw_Pair_programming_re_or4x.png';
const MyPortfolio = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={arman} alt="Album" />
        </figure>
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold">Md Arman Khan</h1>
          <p className="text-3xl">Email: mdarmankhan1971@gmail.com </p>
          <p className="text-3xl">Education level: Diploma</p>
          <p className="text-3xl">Degree Title: Diploma in Computer</p>
          <p className="text-3xl">
            Skills: REACT / JS / HTML / CSS/BOOTSTRAP/TAILWIND
          </p>
        </div>
      </div>
      <h1 className="text-4xl text-center mt-10">My Projects Links</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          
        <div className="card w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <img
              src={png}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Website Live Link</h2>
            <a className="link link-primary"><a href="https://armankhan28.github.io/web-app/" target="_blank">https://armankhan28.github.io/web-app/</a>/</a>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <img
              src={png2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Website Live Link</h2>
            <a className="link link-primary"><a href="https://armankhan28.github.io/Ecommerce/" target="_blank">https://armankhan28.github.io/Ecommerce/</a>/</a>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <img
              src={png3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Website Live Link</h2>
            <a className="link link-primary"><a href="https://armankhan28.github.io/Arman-restaurant/" target="_blank">https://armankhan28.github.io/Arman-restaurant/</a>/</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
