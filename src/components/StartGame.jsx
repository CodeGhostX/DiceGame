import styled from 'styled-components';
const startGame = ({toggle}) => {
  return (
    <Container>
      <img src="images/dices 1.png" alt="dices" />
      <div>
        <h1>DICE GAME</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </Container>
  )
}

export default startGame

// eslint-disable-next-line react-refresh/only-export-components
const Container = styled.div`
  
  padding: 180px 129px 154px 129px;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 48px;

  h1{
    font-size: 96px;
  }
  button{
    background-color: black;
    color: white;
    padding: 10px 18px;
    height: 44px;
    width: 220px;
    margin-left: 308px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover{
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.2s background ease-in;
    }
  }

`






