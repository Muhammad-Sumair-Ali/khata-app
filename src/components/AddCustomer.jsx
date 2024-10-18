import React from "react";
import { useState } from "react";
import {
  Dialog,
  Transition,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { useAddCustomer } from "../action/AddCustomer";
import { useAuth } from "../context/userContext";

// import {   } from "@headlessui/react";
// import { IoMdClose } from "react-icons/io";
import { useTransections } from "../action/Transections";

const AddCustomer = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const { handleAddCustomer, name, setName, phone, setPhone } =
    useAddCustomer();

  const isSelect = () => {
    alert("Please  login first");
  };

  return (
    <>
      {!user.token ? (
        <button
          onClick={isSelect}
          className=" bg-green-500 hover:bg-green-700 
    text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add New Customer
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg w-72 py-3 px-2 bg-green-500 hover:bg-green-700 text-white"
        >
          Add New Customer
        </button>
      )}

      <Transition appear show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-left">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-8 shadow-xl transition-all">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                    aria-label="Close dialog"
                  >
                    <IoMdClose className="text-2xl" />
                  </button>

                  <div className="space-y-6">
                    <Dialog.Title
                      as="h2"
                      className="text-3xl font-bold text-gray-800"
                    >
                      Add New Customer
                    </Dialog.Title>

                    <form onSubmit={handleAddCustomer} className="space-y-4">
                      <div className="relative">
                        <label className="block text-lg font-semibold text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Customer Full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-2 block w-full rounded-lg bg-gray-50 border border-gray-300 py-2 px-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>

                      <div className="relative">
                        <label className="block text-lg font-semibold text-gray-700">
                          Phone Number
                        </label>

                        <input
                          type="text"
                          placeholder="Customer Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="mt-2 block w-full rounded-lg bg-gray-50 border border-gray-300 py-2 px-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>

                      <div className="flex items-center justify-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-200 ease-in-out transform hover:scale-105"
                        >
                          Add Customer Now
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddCustomer;
