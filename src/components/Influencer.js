import styled from "styled-components"

export default function Influencer(props) {
  const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
  `

  return (
    <Wrapper>
      <p>1</p>
      <img
        src={props.picture}
        alt='profile-pic'
        className="profile"
      />
      <p>{props.display}</p>
      <p>{props.score}</p>
    </Wrapper>
  )
}
