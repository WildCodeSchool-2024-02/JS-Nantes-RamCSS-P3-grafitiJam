import "./styles/userCard.css";

// eslint-disable-next-line react/prop-types
function UserCard({ user }) {
  // eslint-disable-next-line react/prop-types
  const { alias, isAdmin, profilePicture, graffitiGeekLevel, email, isVerify } =
    user;
  return (
    <div className="user-card">
      <img
        src={profilePicture}
        alt={`${alias}'s avatar`}
        className="user-profile-picture"
      />
      <div className="user-info">
        <h3>{alias}</h3>
        <p>Email: {email}</p>
        <p>Admin: {isAdmin ? "Yes" : "No"}</p>
        <p>Verified: {isVerify ? "Yes" : "No"}</p>
        <p>Graffiti Geek Level: {graffitiGeekLevel}</p>
      </div>
    </div>
  );
}

export default UserCard;
