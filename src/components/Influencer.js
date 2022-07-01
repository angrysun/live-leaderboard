import styled from "styled-components"

export default function Influencer(props) {
  const Wrapper = styled.div`
    padding-right: 4px;
    display: flex;
    align-items: center;
  `

  const numbers = Array.from(new Array(10), (v, i) => i + 1);
  const Number = () => (
    <p className="number">{numbers.map(number => <p key={number}> {number} </p>)} </p>
  )

  return (
    <Wrapper>
      {/* <Number /> */}
      <img
        src={props.picture}
        alt='profile-pic'
        className="profile"
      />
      <p>{props.name}</p>
      <p className="score">{props.score}</p>
    </Wrapper>
  )
}
