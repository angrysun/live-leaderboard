export default function Influencer(props) {
  const
  return (
    <div>
      <p>1</p>
      <img
        src={props.picture}
        alt='profile-pic'
        className="profile"
      />
      <p>{props.displayName}</p>
      <p>{props.score}</p>
    </div>
  )
}
