const  CineVerseIcon = () => {
  return (
    <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 110 150 A 50 50 0 1 1 180 185"
        fill="none"
        stroke="#E50914"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <circle cx="195" cy="150" r="10" fill="#E50914" />
      <circle cx="135" cy="115" r="3" fill="#E50914" opacity="0.6" />
      <circle cx="165" cy="115" r="3" fill="#E50914" opacity="0.6" />
      <circle cx="135" cy="185" r="3" fill="#E50914" opacity="0.6" />
      <circle cx="165" cy="185" r="3" fill="#E50914" opacity="0.6" />
      <text
        x="240"
        y="170"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="88"
        fontWeight="800"
        fill="#E50914"
        letterSpacing="-2"
      >
        CineVerse
      </text>
      <circle cx="543" cy="115" r="5" fill="#E50914" />
      <path
        d="M 543 115 Q 558 105 565 115"
        fill="none"
        stroke="#E50914"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
};

export default CineVerseIcon;
