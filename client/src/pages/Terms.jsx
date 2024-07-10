import { useState } from "react";
import TermsTag from "../components/lexiques/TermsTag";
import TermsBadge from "../components/lexiques/TermsBadge";
import "./styles/terms.css";

function Terms() {
  const [showBadge, setShowBadge] = useState(true);

  const toggleDisplay = () => {
    setShowBadge(!showBadge);
  };

  return (
    <main className="terms">
      <h1>Terms Page</h1>
      <div className="slideButton">
        <p className="lun">Tags</p>
        <section title=".slideOne">
          <div className="slideOne">
            <input
              type="checkbox"
              value="None"
              id="slideOne"
              name="check"
              checked={showBadge}
              onChange={toggleDisplay}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="slideOne" />
          </div>
        </section>
        <p className="lautre">Badges</p>
      </div>

      {showBadge ? <TermsBadge /> : <TermsTag />}
    </main>
  );
}

export default Terms;
