import MyCartCard from "./MyCartCard";
import useCart from "../../components/Hooks/useCart";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import MyTitle from "../../components/Title/MyTitle";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";


const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const deliveryChrg = 15;
  const sumTotal = (total * 1.5) + deliveryChrg ;
  const inTotal = sumTotal.toFixed(2);
  // const navigate = useNavigate();


// const navigateToPayment = () => {
//   navigate('/dashboard/payment', { state: { inTotal: inTotal } });
// };

  return (
    <div> 
         <Helmet>
        <title>Bentilzone Restaurant |  My Cart</title>
      </Helmet>
        <MyTitle title='My cart'
        subtitle='I have added in cart'
        />
        <div className="flex">
      <div className="flex-1 overflow-auto">
        {cart.map((item) => (
          <MyCartCard key={item._id} item={item} refetch={refetch} />
        ))}
      </div>

      <div className="card w-1/4 h-96 mt-20 bg-slate-700 shadow-xl text-neutral-content fixed right-0 top-0 bottom-0">
        <div className="p-4">
          <h2 className="text-3xl font-thin pb-3 pt-2">CheckOut</h2>
          <hr className="bg-red-300 w-full mb-6" />
          <div className="space-y-4 ">
            <p className="text-lg">
              Sub Total -----{" "}
              <span className="text-2xl text-red-300">${total}</span>{" "}
            </p>
            <p className="text-lg">
              Vat -----<span className="text-2xl">1.5%</span>{" "}
            </p>
            <p className="text-lg">
              Delivery Charge -----<span className="text-2xl">$15</span>
            </p>
            <hr className="bg-blue-700 w-72 mx-auto mt-10" />
            <p className="text-2xl">
              {" "}
              Total -----<span className="text-2xl text-red-500">${inTotal}</span>{" "}
            </p>
          </div>
        </div>
       <div className="flex justify-center pt-3">
      
       <Link to={'/dashboard/payment'}>
       
       <motion.button 
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
       Pay Now <RiMoneyDollarCircleLine className="inline-block ml-1" />
      </motion.button>
       </Link>
       </div>
      </div>
    </div>
    </div>
  );
};

export default MyCart;
