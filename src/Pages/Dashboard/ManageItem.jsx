import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: menu = [], refetch } = useQuery(["menu"], async () => {
    const res = await axiosSecure.get("/menu");
    console.log(res.data);
    return res.data;
  });

 
  // TODO: UPdate Baki ar kaj baj baki

  // const handleUpdate = item => {
  //   axiosSecure.patch("/menu", item).then((data) => {
  //       console.log(data);
  //       if (data.data.insertedId) {
  //         reset();
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "Your Item has been Added SuccessFully",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });

  // }
  const handleDelete = item => {
    const itemId = item._id;
    console.log(itemId); // Assuming the item object has an _id property
  
    axiosSecure.delete(`/menu/${itemId}`)
      .then(response => {
        console.log(response.data);
        if (response.data.deletedCount > 0) {
          
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Item has been deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      })
      .catch(error => {
        console.error(error);
        // Handle error case if necessary
      });
  };
  

  return (
    <div className="w-full">
         <Helmet>
        <title>Bentilzone Restaurant |  Manage Item</title>
      </Helmet>
      <div className="text-center">
        <h5 className="text-xl font-semibold"> Manage Item</h5>
        <hr className="inline-block w-24 border border-orange-600 border-t-2 mb-2" />
      </div>
   

      <h3 className="text-2xl font-semibold my-4">
        Total Items: {menu.length}
        
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-red-500 text-white">
            <tr>
              <th>Serial</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="bg-green-100">
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td><div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td> {item.Category}
                </td>
              <Link to={`/dashboard/item-field/${item._id}`}>  <td><button  className="btn btn-circle btn-outline btn-sm bg-green-500"><GrUpdate className="text-white" /></button></td></Link>
                <td><button onClick={()=>handleDelete(item)} className="btn btn-circle btn-outline btn-sm bg-red-500"><MdDelete className="text-white" /></button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
