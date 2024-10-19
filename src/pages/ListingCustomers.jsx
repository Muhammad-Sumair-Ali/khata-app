import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useFetch } from "../action/Transections";
import AddCustomer from "../components/AddCustomer";

const ListingCustomers = ({ setCustomerActive, customerActive }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { data } = useFetch("https://khaata-eic8vbp8f-muhammad-sumairs-projects.vercel.app/api/allcustomers");
  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCustomerClick = (customer) => {
    if (isMobile) {
      navigate(`/chat/${customer._id}`);
    } else {
      setCustomerActive(customer);
    }
  };

  return (
    <>
      <div className="bg-white p-2 shadow-md">
        <div className="flex items-center gap-2 flex-nowrap relative">
          <input
            type="text"
            placeholder="Search Customer"
            className="block w-full rounded-lg border-none bg-gray-300 py-3 px-4 text-md text-black 
            focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <FaSearch className="absolute top-2 left-60 text-gray-700 font-thin" size={30} />
          <AddCustomer customer={customerActive} />
        </div>
      </div>

      <ul className="overflow-y-auto h-[calc(100vh-80px)] p-2 space-y-3">
        {data?.map((customer) => (
          <li
            className="cursor-pointer w-full rounded-lg shadow-sm"
            key={customer._id}
            onClick={() => handleCustomerClick(customer)}
          >
            <div className="flex items-center justify-between gap-2 w-full px-2 py-2 rounded-lg ring-gray-200 ring-1 bg-white shadow-md hover:bg-blue-100 transition-all duration-200 ease-in-out">
              <div className="flex items-center gap-2 md:gap-4">
                <img
                  className="h-14 w-14 ml-2 ring-2 ring-gray-300 rounded-full"
                  src={`https://ui-avatars.com/api/?background=random&color=fff&name=${customer.name}`}
                  alt="Customer Avatar"
                />
                <div>
                  <h1 className="font-semibold text-md text-gray-800">
                    {customer.name.toUpperCase()}
                  </h1>
                  <p className="text-sm text-gray-500">Phone: {customer.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-green-500 text-white text-base rounded-lg h-16 w-24 flex flex-col items-center justify-center p-2 shadow-lg">
                  <p className="text-2xl font-bold">{customer.totalGet}</p>
                  <small className="text-sm">Maine liye</small>
                </button>

                <button className="bg-red-500 text-white text-base rounded-lg h-16 w-24 flex flex-col items-center justify-center p-2 shadow-lg">
                  <p className="text-2xl font-bold">{customer.totalGive}</p>
                  <small className="text-sm">Maine diye</small>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListingCustomers;
