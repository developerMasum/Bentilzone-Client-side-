import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import pic1 from "../../assets/images/blog_image_1.svg";
import pic2 from "../../assets/images/bloco_image_2.svg";
import pic3 from "../../assets/images/bloco_image_3.svg";
import pic4 from "../../assets/images/bloco_image_4.svg";
import { FaUser } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="pt-20">
           <Helmet>
        <title>Bentilzone Restaurant | Blogs</title>
      </Helmet>
      <div className="text-center">
        <h5 className="text-xl font-semibold">Read Our Blog</h5>
        <hr className="inline-block w-20 border border-orange-600 border-t-2 mb-2" />
      </div>
      <div>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex gap-6 flex-row">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={pic1} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Quick-start guide to nuts and seeds
                  </h2>
                  <p>Nuts and seeds are good sources of protein, healthy fats, fibres, vitamins and minerals. · Nuts and seeds regulate body weight as their fats are not fully ...</p>
                  <div className=" flex items-center gap-6 justify-between">
                    <button className="btn btn-circle btn-outline btn-sm">
                      {" "}
                      <FaUser />{" "}
                    </button>
                    <p>ALex Hero Alom</p>
                    <button className="btn btn-link lowercase">Read full.....</button>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={pic2} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                  The top 10 benefits of eating healthy
                  </h2>
                  <p> Eating healthy food offers benefits like weight loss, improved skin, and strong immunity. A balanced diet helps improve brain function, sleep ...</p>
                  <div className=" flex items-center gap-6 justify-between">
                    <button className="btn btn-circle btn-outline btn-sm">
                      {" "}
                      <FaUser />{" "}
                    </button>
                    <p>Joe  Alom</p>
                    <button className="btn btn-link lowercase">Read full.....</button>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={pic3} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                  Nutrition: Tips for improving Your health
                  </h2>
                  <p>Nuts and seeds are good sources of protein, healthy fats, fibres, vitamins and minerals. · Nuts and seeds regulate body weight as their fats are not fully ...</p>
                  <div className=" flex items-center gap-6 justify-between">
                    <button className="btn btn-circle btn-outline btn-sm">
                      {" "}
                      <FaUser />{" "}
                    </button>
                    <p>ALex Hero Alom</p>
                    <button className="btn btn-link lowercase">Read full.....</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-6 flex-row">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={pic4} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Quick-start guide to nuts and seeds
                  </h2>
                  <p>Nuts and seeds are good sources of protein, healthy fats, fibres, vitamins and minerals. · Nuts and seeds regulate body weight as their fats are not fully ...</p>
                  <div className=" flex items-center gap-6 justify-between">
                    <button className="btn btn-circle btn-outline btn-sm">
                      {" "}
                      <FaUser />{" "}
                    </button>
                    <p>ALex Hero Alom</p>
                    <button className="btn btn-link lowercase">Read full.....</button>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={pic2} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Quick-start guide to nuts and seeds
                  </h2>
                  <p>Nuts and seeds are good sources of protein, healthy fats, fibres, vitamins and minerals. · Nuts and seeds regulate body weight as their fats are not fully ...</p>
                  <div className=" flex items-center gap-6 justify-between">
                    <button className="btn btn-circle btn-outline btn-sm">
                      {" "}
                      <FaUser />{" "}
                    </button>
                    <p>ALex Hero Alom</p>
                    <button className="btn btn-link lowercase">Read full.....</button>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={pic1} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Quick-start guide to nuts and seeds
                  </h2>
                  <p>Nuts and seeds are good sources of protein, healthy fats, fibres, vitamins and minerals. · Nuts and seeds regulate body weight as their fats are not fully ...</p>
                  <div className=" flex items-center gap-6 justify-between">
                    <button className="btn btn-circle btn-outline btn-sm">
                      {" "}
                      <FaUser />{" "}
                    </button>
                    <p>ALex Hero Alom</p>
                    <button className="btn btn-link lowercase">Read full.....</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
