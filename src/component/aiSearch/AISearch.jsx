import { useRef, useState } from "react";
import ArrowUpIcon from "../../icons/ArrowUpIcon";
import gemini from "../../utils/ai/gemini";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchedMovies,
  addSearchedMoviesData,
} from "../../utils/redux/moviesSlice";
import SearchedMovieContainer from "./searchedMovieContainer";
import lang from "../../utils/langConstant";
import CloseIcon from "../../icons/CloseIcon";

const AISearch = ({ onClose }) => {
  const textAreaRef = useRef(null);
  const dispatch = useDispatch();
  const desiredMovies = useSelector((store) => store.movies.searchedMovies);
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  const handleAiInputHeight = (event) => {
    const textArea = textAreaRef.current;
    // const textArea = event.target;   //This is also working but using ref is more react way of doing it

    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  const handleAiResult = async () => {
    console.log("Button Clicked");
    dispatch(addSearchedMoviesData(null));
    const userQuery = textAreaRef.current.value;
    const query = `
    Recommend exactly 5 *distinct movies matching this request: "${userQuery}".

    Return only a comma-separated list of movie titles.
    No explanations or additional text.
    `;
    console.log("User Query: ", userQuery);
    console.log("Query: ", query);

    const completion = await gemini.models.generateContent({
      model: "gemini-3.5-flash",
      contents: query,
    });
    const searchedMovies = completion.text
      .split(",")
      .map((title) => title.trim());
    dispatch(addSearchedMovies(searchedMovies));
  };

  return (
    <div>
      <div className="absolute inset-0 z-60 bg-black/50"></div>
      <div className="fixed inset-0 mx-auto my-21 md:m-auto w-[90%] h-[80dvh] md:w-[75%] bg-linear-to-b from-[#1a1a2e] to-[#0f0f0f] rounded-3xl text-white z-130 opacity-100 flex justify-around items-center">
        <button
          className="absolute top-4 right-4 cursor-pointer text-gray-800 hover:text-gray-700"
          onClick={() => {
            onClose();
          }}
        >
          <CloseIcon />
        </button>
        <div className="flex flex-col justify-start items-center gap-7 w-full">
          <div className="bg-gray-800 rounded-3xl text-white p-2 md:px-4 flex flex-col w-[75%] min-w-0">
            <div className="flex justify-center items-center gap-3">
              <textarea
                id="aiSearchbar"
                className="w-full resize-none outline-none overflow-hidden"
                placeholder={lang[defLang].aiSearchPlaceholder}
                rows={1}
                ref={textAreaRef}
                onInput={handleAiInputHeight}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    e.target.blur();
                    handleAiResult();
                  }
                }}
              ></textarea>
              <button
                className="bg-white rounded-full w-8 h-8 p-1 shrink-0 flex justify-center items-center hover:bg-gray-300"
                onClick={handleAiResult}
              >
                <ArrowUpIcon />
              </button>
            </div>
          </div>
          {desiredMovies.length > 0 && <SearchedMovieContainer />}
        </div>
      </div>
    </div>
  );
};

export default AISearch;
