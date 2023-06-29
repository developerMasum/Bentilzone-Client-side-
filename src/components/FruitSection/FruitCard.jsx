import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';






const FruitCard = ({ item }) => {
  const { description, photo, name, price } = item;
  console.log(item);
  return (

        <div className=" w-auto bg-base-100 shadow-xl">
      <div className='flex items-center justify-around '>
    
       <div> <img src={photo} alt="" className="card-image" /></div>
       <div> <button className=' bg-orange-300 px-3 py-3 rounded-full '><MdOutlineAddShoppingCart className='cursor-pointer' /></button> </div>
    
      </div>
      <div className="">
        <div className="w-full flex items-end justify-end flex-col pr-5 pb-5">
          <p className="text-textColor font-semi-bold text-lg">{name}</p>
          <p className="mt-1 text-sm text-gray-500">{description} </p>
          <div className="flex items-center justify-between gap-8">
            <p className="text-base text-headingColor font-semibold">
              <span className="text-sm text-red-600">₵</span> {price}
            </p>
          </div>
        </div>
      </div>
    </div>



            
     
  );
};

export default FruitCard;
