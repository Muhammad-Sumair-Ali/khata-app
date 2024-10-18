import axios from 'axios';
import { useEffect, useState } from 'react'

export const useAddCustomer = () => {
  
    const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddCustomer = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.post(
        "http://localhost:3000/api/customers",
        { name, phone },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      alert(response.data.message || "success");
      // toast.success('Successfully toasted!')
    } catch (error) {
      alert(error.message || "something went wrong");
    }
  };
    
  
    return {
        handleAddCustomer,
        name,
        setName,
        phone,
        setPhone,
      };

  }


