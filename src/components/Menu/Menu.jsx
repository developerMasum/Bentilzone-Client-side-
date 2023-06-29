import React, { useContext, useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import Loader from "../Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";





const Menu = () => {

  const [menu, setMenu] = useState([]);

  const [params, setParams] = useSearchParams();
  const category = params.get('category') ||'Menu'
  console.log('category',category);

  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) =>{
        if (category === "Menu") {
          setMenu(data);
        } else if (category) {
          const filtered = data.filter((menu) => menu.Category === category);
          setMenu(filtered);
        } else {
          setMenu([]);
        }
       
        setLoading(false);
      });
  }, [category]);






  if (loading) {
    return <Loader />
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
    {menu && menu.length > 0 ? (
      menu.map((item) => <MenuCard key={item.id} item={item}  />)
    ) : (
    <> <div className="flex justify-center align-middle">
       <Heading title='No foods found in this category'
      subtitle='For today ,please choose another items  '
      center={true}
      /></div></>

    )}
  </div>
  );
};

export default Menu;
