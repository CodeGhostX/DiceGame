/* eslint-disable react/prop-types */
import styled from "styled-components";

const NumberSelector = ({ setSelectedNumber, selectedNumber, error, setError }) => {

  const arr = [1,2,3,4,5,6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError('');
  }

  return <NumberSelectorContainer>
    <p className="err">{error}</p>
    <div className="flex">
    {
      arr.map((value,index) => {
        return <Box key={index} onClick={() => numberSelectorHandler(value)} isSelected={ value===selectedNumber }>{value}</Box>;
      })
    }
  </div> 
  <p className="num">Select Number</p>
  </NumberSelectorContainer>
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
.err{
  color: red;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  justify-content: end;
}

  .num{
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: end;
    margin-top: 30px;
  }
  
  .flex{
    display: flex;
    gap: 24px;
  }

`


const Box = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

`
