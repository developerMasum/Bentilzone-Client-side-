import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { motion } from "framer-motion";

import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";

const ImgKey = "88a32f9606ac9f1f4bc4d022254b25e1";
// console.log(ImgKey);

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const ImgHostingURL = `https://api.imgbb.com/1/upload?key=${ImgKey}`;
  //   console.log(ImgHostingURL);

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(ImgHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imageURL = imgRes.data.display_url;
          const { name, price, title, category } = data;

          const newItem = {
            name: name,
            price: parseFloat(price),
            title: title,
            photo: imageURL,
            Category: category,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Item has been Added SuccessFully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bentilzone Restaurant | Add Item</title>
      </Helmet>
      <div className="text-center">
        <h5 className="text-xl font-semibold">Add New Item</h5>
        <hr className="inline-block w-24 border border-orange-600 border-t-2 mb-2" />
      </div>

      {/* form ar kaj baj  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Item Name</span>
          </label>
          <input
            type="text"
            placeholder="Item Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Item Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            {...register("price", { required: true, maxLength: 80 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Item Title</span>
          </label>
          <input
            type="text"
            placeholder="title"
            {...register("title", { required: true, maxLength: 80 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Item Category</span>
          </label>
          <select
            {...register("category")}
            className="input input-bordered w-full"
          >
            <option value="Chicken">Chicken</option>
            <option value="Fruits">Fruits</option>
            <option value="Soft Drinks">Soft Drinks</option>
            <option value="Desserts">Desserts</option>
            <option value="IceCream">IceCream</option>
            <option value="Rice">Rice</option>
            <option value="Fish">Fish</option>
            <option value="Curry">Curry</option>
          </select>
        </div>

        <div className="form-control  w-full pb-12">
          <label className="label">
            <span className="label-text">Item Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>

        {/* <input className="btn btn-warning btn-sm mt-4 mb-5 " type="submit" value="Add Item" /> */}

        <div className="flex justify-center w-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-full lg:w-full px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Add Item
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
