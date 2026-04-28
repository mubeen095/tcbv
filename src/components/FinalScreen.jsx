// export default FinalScreen;
import { useEffect, useState } from "react";
import celebration from "../assets/images/celebration.png";

const FinalScreen = ({ onReplay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center relative px-4 sm:px-6 md:px-10 py-8 md:py-20">
      <div
        className={`bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-14 shadow-2xl text-center max-w-2xl w-full transition-all duration-700 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Celebration Image */}
        <img
          src={celebration}
          alt="celebration"
          className="w-full max-h-40 sm:max-h-60 md:max-h-[300px] object-contain mb-6 md:mb-10"
        />

        {/* Final Message */}
        <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-gray-700 mb-4 md:mb-6 leading-tight">
          i know mey perfect nai hu par mey try karru 🥹💖
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-rose-600 mb-6 md:mb-10">
          Ab smile kardo 🎉❤️
        </p>

        {/* Replay */}
        <button
          onClick={onReplay}
          className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm sm:text-base md:text-xl font-medium shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
        >
          Replay 🔁
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;
