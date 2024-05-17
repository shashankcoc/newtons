import { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Swal from "sweetalert2";

const Home = () => {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins ?");
  const [gameOver, setGameOver] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const choices = ["rock", "paper", "scissors"];
  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("You gets the point!");
        if (updatedUserPoints === 5) {
          setResult("You Win");
          setConfetti(true);
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult("Computer gets the point!");
        if (updatedComputerPoints === 5) {
          setResult("Computer Wins");
          // setConfetti(true);
          Swal.fire({
            title: "Oops!",
            text: "You Lose 😢",
            icon: "error",
            confirmButtonText: "Try Again",
          });
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperpaper" ||
        comboMoves === "rockrock" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurnResult("No one gets a point!");
      }
    }
  }, [computerChoice, userChoice]);
  const { width, height } = useWindowSize();

  return (
    <>
      {confetti ? <Confetti width={width} height={height} /> : ""}
      <Navbar />
      <marquee style={{ color: "red", fontSize: "1.3em" }}>
        🚀 This is a collection of all projects under one roof; simply click on
        different links to browse projects 🚀{" "}
      </marquee>
      <div className="App-home">
        <h1 className="heading">
          Rock-Paper-Scissors <br /> (If you lose, you'll have to interview
          me💀){" "}
        </h1>
        <div className="score">
          <h2>Your Points: {userPoints}</h2>
          <h2>Computer Points: {computerPoints}</h2>
        </div>

        <div className="choice">
          <div className="choice-user">
            <img
              className="user-hand"
              src={require(`./images/${userChoice}.png`)}
              alt=""
            />
          </div>
          <div className="choice-computer">
            <img
              className="computer-hand"
              src={require(`./images/${computerChoice}.png`)}
              alt=""
            />
          </div>
        </div>

        <div className="button-div">
          {choices.map((choice, index) => (
            <button
              className="button"
              key={index}
              onClick={() => handleClick(choice)}
              disabled={gameOver}
            >
              {choice}
            </button>
          ))}
        </div>

        <div className="result">
          <h3>Turn Result: {turnResult}</h3>
          <h3>Final Result: `{result}`</h3>
          <br />
        </div>

        <div className="button-div">
          {gameOver && (
            <button className="button" onClick={() => reset()}>
              Restart Game?
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
