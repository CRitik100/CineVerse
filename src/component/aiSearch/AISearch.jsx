import { useRef, useState } from "react";
import ArrowUpIcon from "../../icons/ArrowUpIcon";
import gemini from "../../utils/ai/gemini";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedMovies } from "../../utils/redux/moviesSlice";
import SearchedMovieContainer from "./searchedMovieContainer";

const AISearch = () => {
  const textAreaRef = useRef(null);
  const dispatch = useDispatch();
  const desiredMovies = useSelector((store) => store.movies.searchedMovies);

  const handleAiInputHeight = (event) => {
    const textArea = textAreaRef.current;
    // const textArea = event.target;   //This is also working but using ref is more react way of doing it

    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  const handleAiResult = async () => {
    console.log("Button Clicked");
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
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[85%] bg-gradient-to-b from-[#141414] to-[#000] rounded-3xl text-white z-50 opacity-100">
      <div className="flex flex-col justify-around items-center h-full gap-7 pb-25">
        <div className="bg-gray-800 rounded-3xl w-120 text-white p-2 flex flex-col mt-25">
          <div className="flex justify-center items-center gap-3">
            <textarea
              id="aiSearchbar"
              className="w-100 resize-none outline-none overflow-hidden"
              placeholder="What are you thinking...?"
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
  );
};

export default AISearch;
