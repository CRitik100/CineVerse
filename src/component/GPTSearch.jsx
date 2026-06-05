import { useRef, useState } from "react";
import ArrowUpIcon from "../icons/ArrowUpIcon";

const GPTSearch = () => {
  const textAreaRef = useRef(null);

  const handleGPTInput = (event) => {
    const textArea = textAreaRef.current;
    // const textArea = event.target;   This is also working but using ref is more react way of doing it

    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[85%] bg-gradient-to-b from-[#141414] to-[#000] rounded-3xl text-white z-50 opacity-100">
      <div className="flex flex-col justify-start items-center h-full mt-25">
        <div className="bg-gray-800 rounded-3xl w-120 text-white p-2 flex justify-center items-center gap-3 ">
          <textarea
            id="gptSearchbar"
            className="w-100 resize-none outline-none overflow-hidden"
            placeholder="What are you thinking...?"
            rows={1}
            ref={textAreaRef}
            onChange={handleGPTInput}
          ></textarea>
          <button className="bg-white rounded-full w-8 h-8 p-1 shrink-0 flex justify-center items-center">
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
