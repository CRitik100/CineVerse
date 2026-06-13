const ShimmerBrowse = () => {
  return (
    <div id="ShimmerBrowse" className="flex flex-col items-center">
      <div className="w-full md:w-[98%] aspect-video bg-gray-300 rounded-2xl mt-4 animate-pulse"></div>
      <div id="Info" className="absolute top-1/7 md:top-1/2 left-1/12 outline-2 outline-gray-300  rounded-2xl flex flex-col gap-4 p-4">
        <div className="w-30 h-5 md:w-70 md:h-15 rounded-xl bg-white outline-2 outline-gray-300 animate-pulse"></div>
        <div className="w-70 h-7 rounded-xl bg-white outline-2 outline-gray-300 hidden md:block animate-pulse"></div>
        <div className="flex gap-4">
            <div className="w-13 h-3 md:w-33 md:h-7 rounded-xl bg-white outline-2 outline-gray-300 animate-pulse"></div>
            <div className="w-13 h-3 md:w-33 md:h-7 rounded-xl bg-white outline-2 outline-gray-300 animate-pulse"></div>
        </div>
      </div>
      <div
        id="secondary"
        className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-[-5vw] md:mt-[-15vw]"
      >
        <div className="w-40 h-40 md:w-50 md:h-50 bg-white rounded-2xl outline-2 outline-gray-300 animate-pulse"></div>
        <div className="w-40 h-40 md:w-50 md:h-50 bg-white rounded-2xl outline-2 outline-gray-300 animate-pulse"></div>
        <div className="w-40 h-40 md:w-50 md:h-50 bg-white rounded-2xl outline-2 outline-gray-300 animate-pulse"></div>
        <div className="w-40 h-40 md:w-50 md:h-50 bg-white rounded-2xl outline-2 outline-gray-300 animate-pulse"></div>
        <div className="w-40 h-40 md:w-50 md:h-50 bg-white rounded-2xl outline-2 outline-gray-300 animate-pulse"></div>
        <div className="w-40 h-40 md:w-50 md:h-50 bg-white rounded-2xl outline-2 outline-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ShimmerBrowse;
