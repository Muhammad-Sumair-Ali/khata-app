import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { useTransections } from "../action/Transections";

const AddTransaction = ({ customer }) => {
  const { details, setDetails, amount, setAmount, transactionType, setTransactionType, handleAddTransaction } = useTransections(customer);
  const [open, setOpen] = useState(false);

  const isSelect = () => {
    alert("Please select a customer first");
  };

  return (
    <>

      {!customer ? (
        <button
          onClick={isSelect}
          className="bg-indigo-600 hover:bg-indigo-600 text-white font-bold py-2 px-4 w-52 h-16 text-lg rounded-lg
           shadow-md transition-transform duration-200 ease-in-out transform hover:scale-105"
        >
          Add Transaction
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-600 text-white font-bold py-2 px-4 w-52 h-16 text-lg rounded-lg
           shadow-md transition-transform duration-200 ease-in-out transform hover:scale-105"
        >
          Add Transaction
        </button>
      )}


      <Transition appear show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
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
                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                    aria-label="Close dialog"
                  >
                    <IoMdClose className="text-2xl" />
                  </button>

                  {/* Modal Content */}
                  <div className="space-y-6">
                    <Dialog.Title as="h2" className="text-3xl font-bold text-gray-800">
                      Add Transaction
                    </Dialog.Title>

                    {/* Form */}
                    <form onSubmit={handleAddTransaction} className="space-y-4">
                      {/* Amount Input */}
                      <div className="relative">
                        <label className="block text-lg font-semibold text-gray-700">Amount</label>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="mt-2 block w-full rounded-lg bg-gray-50 border border-gray-300 py-2 px-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>

                      {/* Transaction Type Select */}
                      <div className="relative">
                        <label className="block text-lg font-semibold text-gray-700">Transaction Type</label>
                        <select
                          value={transactionType}
                          onChange={(e) => setTransactionType(e.target.value)}
                          className="mt-2 block w-full rounded-lg bg-gray-50 border border-gray-300 py-2 px-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                          <option value="give">Give</option>
                          <option value="get">Get</option>
                        </select>
                      </div>

                      {/* Details Input */}
                      <div className="relative">
                        <label className="block text-lg font-semibold text-gray-700">Details</label>
                        <textarea
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          className="mt-2 block w-full rounded-lg bg-gray-50 border border-gray-300 py-2 px-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          placeholder="Additional details about the transaction"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex items-center justify-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-200 ease-in-out transform hover:scale-105"
                        >
                          Save Transaction
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

export default AddTransaction;
