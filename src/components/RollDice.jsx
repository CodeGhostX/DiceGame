/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const RollDice = ({num,rolldice}) => {

  return <DiceContainer>
    <div className="dice" onClick={rolldice}>
      <img src = {`images/dice_${num}.png`} alt="dice" />
    </div>
    <p>Click on Dice to roll</p>
  </DiceContainer>;
};

export default RollDice;

const DiceContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  p{
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }
  .dice{
    cursor: pointer;
  }

`
