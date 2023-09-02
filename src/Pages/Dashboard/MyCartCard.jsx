import React from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyCartCard = ({ item, refetch }) => {
  console.log(item);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bentilzone-server-side.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  const { price, photo, name, _id } = item;
  return (
    <div>
      <div className="card ml-20 w-1/2 bg-blue-100 shadow-xl mb-4">
        <div className="flex items-center gap-5 justify-around p-4">
          <img className="w-16 h-16 mr-4" src={photo} alt="" />
          <div>
            <p className="font-bold">{name}</p>
          </div>
          <div className="flex items-center ml-5">
            <span className="text-2xl font-bold ">$</span>
            <span className="text-xl  font-thin">{price}</span>
          </div>
          <div className="ml-5">
            <button
              onClick={() => handleDelete(item)}
              className="btn btn-circle btn-outline btn-sm bg-red-500"
            >
              <MdDelete className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
