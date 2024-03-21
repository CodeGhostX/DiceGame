import { styled } from "styled-components"
import NumberSelector from "./NumberSelector"
import Score from "./Score";
import RollDice from "./RollDice";
import { useState } from "react";
import Rule from "./Rule";

const GamePlay = () => {
  const[selectedNumber, setSelectedNumber] = useState();
  const[num,setNum] = useState(1);
  const[score,setScore] = useState(0);
  const[error, setError] = useState("");
  const[ruled,setRuled] = useState(false);
  const[ruleText, setRuleText] = useState("Show Rules");

  function generateRandomNumber(min, max) {    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const rolldice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1,6);
    setNum(randomNumber);
    if(selectedNumber === randomNumber){
      setScore(prev => prev + 6);
    }
    else{
      setScore(prev => prev - 1);
    }
    setSelectedNumber(undefined);
  }
  const handleScore = () => {
    setScore(0);
  }
  const showRules = () => {
    setRuled(prev => !prev);
    if(ruleText === "Show Rules"){
      setRuleText("Hide Rules");
    }
    else{
      setRuleText("Show Rules");
    }
  }

  return (
    <MainContainer>
      <div className="top-section">
        <Score score={score}/>
        <NumberSelector setSelectedNumber= {setSelectedNumber}  selectedNumber={selectedNumber} error={error} setError={setError}/>
      </div>
      <RollDice num={num} rolldice={rolldice} />
      <div className="btn">
        <Button className="reset" onClick={handleScore}>Reset Score</Button>
        <Button className="rules" onClick={showRules}>{ruleText}</Button>
        {ruled?<Rule/>:""}
      </div>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 10px;
  
  .top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
    gap: 593px;
  }
  .btn{
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    .reset{
      background-color: white;
      color: black;
      border-radius: 5px;
      border: 1px solid #000;
      &:hover{
        background-color: black;
        border: 1px solid black;
        color: white;
        transition: 0.2s background ease-in;
      }
    }
    .rules{
      background-color: black;
      color: white;
      border-radius: 5px;
      border: 1px solid #000;
      &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.2s background ease-in;
      }
    }
  }

`
const Button = styled.button`
  
  display: flex;
  width: 220px;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;

`
