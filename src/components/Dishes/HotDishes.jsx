import React from "react";
import { Categories } from "./Categories";
import DishesBox from "./DishesBox";

const HotDishes = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h5 className="text-xl font-semibold">Hot Dishes</h5>
        <hr className="inline-block w-16 border border-orange-600 border-t-2 mb-2" />
      </div>
      <div className="pt-4 grid grid-cols-4 gap-3 lg:grid-cols-9 md:grid-cols-9  items-center justify-between overflow-x-auto mt-5" >
        {
            Categories.map(item=> <DishesBox 
            name={item.name}
            icon={item.icon}
            key={item.id}
            
            />)
        }


      </div>



    </div>
  );
};

export default HotDishes;
