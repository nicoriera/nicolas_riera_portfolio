import "./index.scss";

// ARGUMENTS
// letterClass = class want apply to our characters
// strArray = array of the characters
// idx = index -> starting point set the delay of our letters and the animation

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`&{letterClass} _&{i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
