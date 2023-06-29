import React, { useEffect, useState } from "react";
import FruitCard from "./FruitCard";
import Marquee from "react-fast-marquee";
const Fruits = () => {
  const[menu,setMenu] = useState([])
  useEffect( ()=>{
    fetch('http://localhost:5000/menu')
    .then(res=>res.json())
    .then(data=> setMenu(data))
    
  },[])
  return (
    <div>
      <div>
      <h5 className="text-xl font-semibold">Our Fresh & Healthy Fruits</h5>
<hr className="inline-block w-1/12 border border-orange-600 border-t-2" />
      </div>


<Marquee>
<div className="grid grid-cols-11 gap-2">
{
  menu
    .filter(item => item.Category == 'Fruits').slice(0,11)
    .map(item => <FruitCard key={item.id} item={item} />)
}

</div>
</Marquee>

    </div>
  );
};

export default Fruits;
