import { styled } from "styled-components"

const Rule = () => {
  return (
    <Ruled>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get 6 point</p>
      <p>if you get wrong guess then  1 point will be dedcuted</p>
    </Ruled>
  )
}

export default Rule

const Ruled = styled.div`
  width: 754px;
  height: 168px;
  background-color: #eccaca;
  padding: 20px;
  line-height: 1.6;
  p{
    font-size: 16px;
    font-weight: 500;
  }
  h2{
    font-size: 24px;
    margin-bottom: 24px;
  }
`
