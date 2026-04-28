const Frame = ({ image, text, onNext }) => {
  return (
    <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 md:px-10 py-8 md:py-16 overflow-hidden">

      {/* soft decorative background */}
      <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-40 h-40 sm:w-96 sm:h-96 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -right-20 sm:-right-32 w-40 h-40 sm:w-96 sm:h-96 bg-purple-300 rounded-full blur-3xl opacity-40"></div>

      {/* main layout */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-20 items-center">

        {/* LEFT : IMAGE FRAME */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:w-[440px] aspect-[3/4] bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[3rem] shadow-2xl p-3 sm:p-4 md:p-6 flex items-center justify-center">
            <img
              src={image}
              alt="memory"
              className="w-full h-full object-contain rounded-xl sm:rounded-2xl md:rounded-[2.5rem]"
            />
          </div>
        </div>

        {/* RIGHT : TEXT CARD */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-4 sm:p-6 md:p-12 shadow-2xl">
          <p className="text-lg sm:text-2xl md:text-4xl font-medium text-gray-700 leading-relaxed mb-6 md:mb-12 whitespace-pre-line">
            {text}
          </p>

          <button
            onClick={onNext}
            className="px-6 sm:px-10 md:px-14 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-base sm:text-lg md:text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Next 💖
          </button>
        </div>

      </div>
    </div>
  );
};

export default Frame;
