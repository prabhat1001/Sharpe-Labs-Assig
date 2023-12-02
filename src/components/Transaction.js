import EthLogo from "../assets/Eth.svg";
import "./Transaction.css";
import React, { useState, useEffect } from "react";

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletError, setWalletError] = useState("");
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWalletChange = (event) => {
    setWalletAddress(event.target.value);
    setWalletError("");
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setAmountError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate wallet address
    if (!walletAddress.trim()) {
      setWalletError("Wallet address cannot be empty.");
    } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      setWalletError(
        "Invalid wallet address. It must start with `0x` and be exactly 42 characters long, containing only hexadecimal characters."
      );
    } else {
      // Handle the form submission or API call here
      console.log("Form submitted:", walletAddress);
    }

    // Validate amount
    const amountValue = parseFloat(amount);
    if (!amount.trim()) {
      setAmountError("Amount is required. Please enter a value.");
    } else if (isNaN(amountValue) || amountValue < 0 || amountValue > 10000) {
      setAmountError(
        "Invalid amount. Please enter a value between 0 and 10,000."
      );
    } else {
      // Handle the form submission or API call here
      console.log("Form submitted:", amount);
    }

    // // If there are no errors, proceed to submit
    // if (!walletError && !amountError) {
    //   // Perform your submission logic here
    //   // For demonstration purposes, let's just log the data
    //   console.log('Form submitted:', { walletAddress, amount });

    //   // Show the success message in a modal
    //   setIsSubmitted(true);
    // }
  };

  // const closeModal = () => {
  //   setIsSubmitted(false);
  // };

  return (
    <>
      <div className="flex h-[100vh] flex-1 flex-col bg-[#121212] justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto mt-[-50px] sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-auto w-20"
            src={EthLogo}
            alt="Company_Logo"
          />
          <h2 className="mt-5 text-center text-3xl  leading-9 tracking-tight text-white">
            Transaction Form
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="wallet"
                className="block text-start text-sm font-medium leading-6 text-[#717171]"
              >
                Wallet Address
              </label>
              <div className="mt-2">
                <input
                  id="wallet"
                  name="wallet"
                  type="text"
                  value={walletAddress}
                  onChange={handleWalletChange}
                  autoComplete="wallet"
                  className="block w-full rounded-md border-0 pl-3 bg-[#282828] py-1.5 text-white shadow-sm  outline-none sm:text-sm sm:leading-6"
                />
                {walletError && (
                  <p className="mt-2 text-sm text-start text-red-500">
                    {walletError}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium leading-6 text-[#717171]"
                >
                  Amount
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  autoComplete="amount"
                  className="block w-full rounded-md border-0 pl-3 bg-[#282828] py-1.5 text-white shadow-sm  outline-none sm:text-sm sm:leading-6"
                />
                {amountError && (
                  <p
                    className="mt-2 text-start text-sm text-red-500"
                    role="alert"
                  >
                    {amountError}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#5e43f3] mt-10 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-[#a688fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal for Success Message */}
      {/* {isSubmitted && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="relative bg-white rounded-lg p-8">
            <p className="text-2xl font-semibold text-gray-800">Submitted Successfully!</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Transaction;
