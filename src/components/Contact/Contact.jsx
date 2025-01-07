// import React from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="border-4 p-7 bg-orange-600 space-y-5 w-6/12 mx-auto rounded-lg mt-7">
            <div>
                <h1 className="text-4xl mt-4 mb-4 font-bold text-gray-100">Contact Us</h1>
                <p className="text-2xl text-gray-200 mt-3 mb-8">We will get back to you asap!
                </p>
            </div>

            {/* input first and last name field start */}
            <div className="flex ">

                <div className=" bg-gray-400 px-3">
                    <FaUser className="text-2xl text-gray-500 mt-1" />
                </div>

                <div className="flex space-x-6">
                    <div>
                        <input className="border-2 px-2 py-1 " type="text" id="first" placeholder="First Name" />
                    </div>

                    <div>
                        <input className="border-2 px-2 py-1   " type="text" id="lastname" placeholder="Last Name " />
                    </div>
                </div>

            </div>

            {/* input first and last name field end */}


            {/* email filed start */}
            <div className="flex">
                <div className=" bg-gray-400 px-3"><MdEmail className="text-2xl text-gray-500 mt-2" />
                </div>
                <div className=" ">
                    <input id="email" className="border-2 px-2 py-1 w-fit " type="email" placeholder="Enter Your Email" />
                </div>
            </div>
            {/* Phone field  */}
            <div className="flex">
                <div className=" bg-gray-400 px-3"><MdEmail className="text-2xl text-gray-500 mt-2" />
                </div>
                <div className=" ">
                    <input id="email" className="border-2 px-2 py-1 w-fit " type="email" placeholder="Enter Your Phone " />
                </div>
            </div>

            {/* Email field end  */}

            {/* Send Btn  */}
            <button className="bg-gray-200 px-4 py-3 rounded-lg w-full text-orange-400 font-bold text-2xl">Send </button>
            <p className="mt-5 mb-5 text-1xl text-white">You may also call us at 333-33-33</p>
        </div>
    );
};

export default Contact;