import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../images/loading.json";

const style = {
  height: 300,
  with: 200,
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="flex flex-col items-center justify-center mt-64">
        <Lottie animationData={LoadingAnimation} loop={true} style={style} />
        <h1 className="text-xl text-bold">Work In Progess...</h1>
      </div>
    </div>

    // <div className="l p-4 m-4">
    //   <h1 className="text-2xl">Get in Touch</h1>
    //   <h1> Have a question or feedback? Reach out to </h1>
    //   <form>
    //     <input
    //       type="text"
    //       className="border border-black  p-2 m-2"
    //       placeholder="name"
    //     />
    //     <input
    //       type="text"
    //       className="border border-black p-2 m-2"
    //       placeholder="message"
    //     />
    //     <button className="bg-black text-white p-2 rounded">Submit</button>
    //   </form>
    // </div>
  );
};

export default Contact;
