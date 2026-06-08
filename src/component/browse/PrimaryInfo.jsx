const PrimaryInfo = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-full aspect-video p-11 text-white bg-linear-to-r from-black absolute top-0 flex items-end md:items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-lg md:text-4xl font-bold md:w-1/2">{title}</h1>
        <p className="text-lg w-1/2 hidden md:block">{overview}</p>
        <div className="flex gap-4 font-medium">
          <button className="bg-white rounded p-2 md:px-7 md:py-3 flex gap-2 hover:bg-gray-300 text-black">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              data-icon="PlayMedium"
              data-icon-id=":r0:"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
            >
              <path
                fill="currentColor"
                d="M5 2.7a1 1 0 0 1 1.48-.88l16.93 9.3a1 1 0 0 1 0 1.76l-16.93 9.3A1 1 0 0 1 5 21.31z"
              ></path>
            </svg>
            Play
          </button>
          <button className="bg-gray-700 rounded p-2 md:px-7 md:py-3 flex gap-2 opacity-50 hover:opacity-75">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              data-icon="CircleIMedium"
              data-icon-id=":r1:"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12m13-2v8h-2v-8zm-1-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
                clipRule="evenodd"
              ></path>
            </svg>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryInfo;
