import React from "react";

export function Form() {

  return (
    <>
      <div className="flex items-end justify-end px-8 pt-4">
        <button
          type="button"
          className="focus:outline-none text-white  bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Salvar
        </button>
      </div>
    </>
  );
}
