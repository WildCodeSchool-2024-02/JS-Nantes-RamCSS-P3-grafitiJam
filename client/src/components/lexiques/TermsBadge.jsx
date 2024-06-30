import "./styles/Badge.css";

import badges from "../badgesData";

function TermsBadge() {


  return (
    <>
      {badges.map((badge, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="terms-badge-container">
          <div className="title-image">
            <h2>{badge.title}</h2>
            <img src={badge.image} alt={badge.explanation} />
          </div>
          <div className="scrollable-div">
            <p>{badge.explanation}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TermsBadge;
