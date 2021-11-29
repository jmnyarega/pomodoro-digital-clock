import { useEffect, useRef } from "react";

const AudioSound = ({ interSession }) => {
  const audioRef = useRef(null);

  const play = () => audioRef.current?.play();

  useEffect(() => {
    play();
  }, [interSession]);

  console.log(audioRef);
  return (
    <audio
      src="https://wav-sounds.com/wp-content/uploads/2017/09/Various-04.wav"
      ref={play}
      autoPlay
    />
  );
};

export default AudioSound;
