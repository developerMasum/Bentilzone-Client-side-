import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import { GrUserAdmin } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUser = () => {
  const {user}= useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    console.log(res.data);
    return res.data;
  });

    // making a normal user to admin ---
    const handleMakeAdmin = (singleUser) => {
      fetch(`http://localhost:5000/users/admin/${singleUser._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    };

  const handleDelete = (user) => {
  toast.success('if click here then user will be deleted')
   //TODO: DELETE FUNCTION WILL BE HERE -
  };

  return (
    <div className="w-full">
         <Helmet>
        <title>Bentilzone Restaurant | Users</title>
      </Helmet>
      <div className="text-center">
        <h5 className="text-xl font-semibold">Manage Users</h5>
        <hr className="inline-block w-24 border border-orange-600 border-t-2 mb-2" />
      </div>
      <h3 className="text-2xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-red-500 text-white">
            <tr>
              <th>Serial</th>

              <th>Name</th>

              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="bg-green-100">
            {users.map((singleUser, index) => (
              <tr key={singleUser._id}>
                <th>{index + 1}</th>
                <td>{singleUser.name}</td>
                <td>{singleUser.email}</td>
                <td>
                 
                {  singleUser.role === "admin"? 'Admin' :  <button onClick={()=>handleMakeAdmin(singleUser)} className="btn btn-circle btn-outline btn-sm bg-green-500">
                  <GrUserAdmin className="text-white " />
                </button>}
                </td>

                <td>
                  {" "}
                  <button className="btn btn-circle btn-outline btn-sm bg-red-500">
                    <MdDelete onClick={()=>handleDelete(singleUser)} className="text-white " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
