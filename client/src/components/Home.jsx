// import axios from "axios";
import React from "react";

function Home() {
  return (
    <div className="w-screen h-auto bg-slate-100  lg:flex justify-between items-center px-0 lg:py-20">
      <div className="left ps-10 py-5 ">
        <h2 className="text-4xl leading-normal lg:text-6xl lg:leading-relaxed ">
          Book store App
        </h2>
        <p className="text-2xl mt-3 leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis
          suscipit dolore saepe aperiam?
        </p>
      </div>
      <div className="right p-7 lg:pe-10 max-w-[500px]">
        <img
          src="https://images.pexels.com/photos/159519/back-to-school-paper-colored-paper-stationery-159519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Home;
