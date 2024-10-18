import axios from "axios";
import { useState, useEffect } from "react";

export const useTransections = (customer) => {
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("give");
  const [details, setDetails] = useState("");

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/api/transactions/${customer?._id}`,
        {
          amount: Number(amount),
          type: transactionType,
          details,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message || "Transaction added successfully!");
      // console.log(response.data);

      setAmount("");
      setDetails("");
    } catch (error) {
      alert(error.message || "somthing went wrong!");
    }
  };

  return {
    details,
    setDetails,
    amount,
    setAmount,
    transactionType,
    setTransactionType,
    handleAddTransaction,
  };
};



export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const fetchAllCustomers = async () => {

    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data);
    } catch (error) {
      console.log(error || error.message);
    }
  };

  useEffect(() => {
    fetchAllCustomers();
  }, []);

  return { 
    data,
    fetchAllCustomers
   };
};
