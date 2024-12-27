import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Police } from "./tiles/Police";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex flex-col bg-[#1C7BD5] py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[15px] lg:text-[20px] font-secondary">
            <p>NextGen-Solution</p>
            <a
              href="mailto:kontakt@nextgen-solution.pl"
              className="hover:scale-105 duration-150"
            >
              kontakt@nextgen-solution.pl
            </a>
            <button
              onClick={toggleModal}
              className="hover:scale-105 duration-150 text-left"
            >
              Polityka prywatności
            </button>
          </div>
          <div>
            <img
              className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="mx-auto text-center text-[10px] pt-5">
          <p>&copy; 2024 NextGen-Solution. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center"
          onClick={toggleModal}
        >
          <div
            className="bg-[#1C7BD5] w-[90%] lg:w-[600px] lg:p-8 p-3 rounded-lg shadow-lg overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl text-center font-semibold lg:mb-4">
              Polityka Prywatności
            </h2>
            <Police />
            <div className="flex justify-end mt-4">
              <button
                className="bg-[#fff] hover:scale-105 duration-150 text-[#1C7BD5] px-2 py-1 text-[10px] lg:w-[100px] lg:text-[15px] rounded-full"
                onClick={toggleModal}
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
