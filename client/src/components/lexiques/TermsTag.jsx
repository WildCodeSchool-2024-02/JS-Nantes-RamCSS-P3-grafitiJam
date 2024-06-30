import tags from "../tagsData";

import "./styles/Tag.css";

function TermsTag() {


  return (
    <>
      {/* eslint-disable-next-line no-shadow */}
      {tags.map((tags, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="terms-badge-container">
          <div className="title-image">
            <h2>{tags.title}</h2>
            <img src={tags.image} alt={tags.alt} />
          </div>
          <div className="scrollable-div">
            <p>{tags.explanation}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TermsTag;
