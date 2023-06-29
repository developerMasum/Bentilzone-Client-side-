
import { motion } from "framer-motion";
import image from '../../assets/images/chef1.png'


export const ImageBox = () => {
    return (
      <div className="hidden md:w-8/12 lg:w-6/12 mb-12 md:mb-0 md:flex ">
        <motion.img
          whileHover={
            {
              rotate: [0, -10, 10, -10, 0],
              // duration: 0.5,
            }
          }
          src={image}
          height={'450px'} 
          className="  cursor-pointer"
          alt="logo-login"
        />
      </div>
    );
  };