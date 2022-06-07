import React, { useState } from "react";
import config from "../config.json";

export default function StockAdd() {
  const [showModal, setShowModal] = useState(false);
  const [summary, setSummary] = useState("");

  const closeModal = () => {
    setSummary("");
    setShowModal(false);
  };

  const addStock = async (e) => {
    e.preventDefault();
    try {
      const body = { summary };
      await fetch(`${config.apiURL}/stocks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      closeModal();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        className="bg-blue-600 text-white active:bg-blue-700 
      font-bold px-6 py-3 rounded shadow hover:bg-blue-700 outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Stock
      </button>
      {showModal ? (
        <>
          <div className="z-10 bg-black opacity-25 absolute h-screen w-screen inset-0"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-semibold">Add Stock</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Summary
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => closeModal()}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-600 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded hover:bg-blue-700 outline-none mr-1 mb-1"
                    type="button"
                    onClick={(e) => addStock(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
