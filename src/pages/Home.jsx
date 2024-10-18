import React, { useEffect, useState } from "react";
import CustomerSingle from "./CustomerSingle";
import DefaultPage from "../panel/DefaultPage";
import "../assets/style.css";
import { useParams, useLocation } from "react-router-dom";
import ListingCustomers from "./ListingCustomers";
import { useFetch } from "../action/Transections";

const Home = () => {
  const [customerActive, setCustomerActive] = useState(null);
  const { data } = useFetch("http://localhost:3000/api/customers");
  const location = useLocation();
  const { id } = useParams(); 


  useEffect(() => {
    if (id && data) {
      const customer = data.find((c) => c._id === id);
      setCustomerActive(customer);
    }
  }, [id, data]);


  useEffect(() => {
    if (location.pathname === "/") {
      setCustomerActive(null);
    }
  }, [location]);

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-full sm:w-[40%] md:w-[40%] h-screen overflow-y-auto border-r border-gray-300">
        <ListingCustomers customerActive={customerActive} setCustomerActive={setCustomerActive} />
      </div>


      <div className="hidden sm:block md:block md:w-[60%] h-screen overflow-y-auto">
        {customerActive ? (
          <CustomerSingle setCustomerActive={setCustomerActive} customerActive={customerActive} />
        ) : (
          <DefaultPage />
        )}
      </div>
    </div>
  );
};

export default Home;
