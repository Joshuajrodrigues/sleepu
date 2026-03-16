import sleepImg from "../assets/sleep.gif";

const SleepGif = () => {
  return (
    <>
      <div className="gif-container">
        <span className="zzz z1">Z</span>
        <span className="zzz z2">z</span>
        <span className="zzz z3">z</span>
        <img src={sleepImg} alt="Sleeping animation" className="sleep-gif" />
      </div>
    </>
  );
};

export default SleepGif;
