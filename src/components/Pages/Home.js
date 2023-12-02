import React from "react";
import { Link } from "react-router-dom";
import EtheriumGif from "../../assets/Home-eth.gif";

/**
 * The Home component is a React functional component that renders a page with a title, two buttons,
 * and an animated image.
 * @returns The Home component is returning a JSX element.
 */
const Home = () => {
  return (
    <>
      <div className="bg-[#121212] w-full h-[100vh] ">
        <h1
          className="text-left ml-[5vw] text-3xl lg:text-8xl md:text-5xl bg-clip-text text-transparent 
      bg-gradient-to-b from-[#fff] to-[#121212]  py-10"
        >
          Sharpe Labs
        </h1>

        <div
          className="lg:w-[90vw] xl:h-[70vh] lg:h-[70vh] md:w-[90vw] md:h-[70vh] sm:w-full sm:h-[90vh]
      lg:ml-[5vw] md:ml-[5vw] sm:ml-0       
      flex flex-col-reverse lg:flex-row md:flex-row sm:flex-col-reverse"
        >
          <div
            className=" flex flex-row lg:flex-col md:flex-col sm:flex-row 
        justify-evenly  items-center
        lg:w-[40vw] lg:h-[60vh] md:w-[40vw] md:h-[60vh] lg:mt-[5vh] md:mt-[5vh] sm:w-full"
          >
            <div
              className=" w-[40%] lg:w-[60%] md:w-[80%]  h-[8rem] lg:h-[10rem] md:h-[10rem] mx-auto  bg-[#282828] rounded-2xl lg:rounded-3xl md:rounded-3xl  shadow-md flex flex-col justify-evenly items-center  "
            >
              <h2 className="lg:text-4xl md:text-2xl text-white ">
                Transaction
              </h2>
              <div>
                <Link to={"/transaction"}>
                  <button className="bg-[#7a5af5] hover:bg-[#a688fa] text-white rounded-3xl px-5 lg:px-10 py-2 lg:py-3 ">
                    Click Here
                  </button>
                </Link>
              </div>
            </div>

            <div
              className=" w-[40%] lg:w-[60%] md:w-[80%]  h-[8rem] lg:h-[10rem] md:h-[10rem] mx-auto  bg-[#282828] rounded-2xl lg:rounded-3xl md:rounded-3xl  shadow-md flex flex-col justify-evenly items-center  "
            >
              <h2 className="lg:text-4xl md:text-2xl text-white ">Data</h2>
              <div>
                <Link to={"/data"}>
                  <button className="bg-[#7a5af5] hover:bg-[#a688fa] text-white rounded-3xl px-5 lg:px-10 py-2 lg:py-3 ">
                    Click Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              className=" rounded-3xl h-[40vh] mt-[5vh] lg:mt-0 md:mt-0 w-[90%] lg:w-[50vw] lg:h-full md:h-[80%] sm:w-full mb-[5vh] lg:mb-0 md:mb-0 mx-auto"
              src={EtheriumGif}
              alt="Animation"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
