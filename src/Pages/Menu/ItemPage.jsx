import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ItemCard from "./ItemCard";
import Heading from "../../components/Heading/Heading";

const ItemPage = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "Menu"; // Set "Menu" as the default category

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        if (category === "Menu") {
          setMenu(data);
        } else {
          const filtered = data.filter((menu) => menu.Category === category);
          setMenu(filtered);
        }
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {menu && menu.length > 0 ? (
        menu.map((item) => <ItemCard key={item.id} item={item} />)
      ) : (
        <div className="flex justify-center align-middle">
          <Heading
            title="No foods found in this category"
            subtitle="Please choose another category."
            center={true}
          />
        </div>
      )}
    </div>
  );
};

export default ItemPage;
