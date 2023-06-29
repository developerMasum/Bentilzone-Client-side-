import React, { useContext, useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";
import "../../components/Menu/MenuCard.css"; 

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../components/Hooks/useCart";
import useAdmin from "../../components/Hooks/useAdmin";


const ItemCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useCart();
  const[isAdmin] = useAdmin();

  const { title, photo, name, price, _id } = item;
  const [isShaking, setIsShaking] = useState(false); // State variable to control the shake effect

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 1000); // Set the duration of the shake effect (in milliseconds)
  };

  const handleAddCart = (item) => {
    if (!user) {
      Swal.fire({
        title: "Please Login to Order that food ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }

    if (user && user?.email) {
      const orderItem = {
        itemId: _id,
        title,
        photo,
        name,
        price,
        email: user?.email,
      };
      console.log(orderItem);
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Food added in your cart, Please go for payment",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              refetch(); // Reload the page after the success message
            });
          }
        });
    }
  };

  return (
    <div
      className={`w-auto bg-base-100 shadow-xl ${isShaking ? "shake" : ""}`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-around cursor-pointer">
        <div>
          <img src={photo} alt="" className="card-image hover:scale-125" />
        </div>
        {
        isAdmin ? ' ' :  <div>
        <button
          onClick={() => handleAddCart(item)}
          className="bg-orange-300 px-3 py-3 rounded-full"
        >
          <MdOutlineAddShoppingCart className="cursor-pointer" />
        </button>
      </div>
       }
      </div>
      <div className="">
        <div className="w-full flex items-end justify-end flex-col pr-5 pb-5">
          <p className="text-textColor font-semi-bold text-lg">{name}</p>
          <p className="mt-1 text-sm text-gray-500">{title}</p>
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

export default ItemCard;
