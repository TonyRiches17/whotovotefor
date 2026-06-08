import { useState } from "react";
import "./Main.css";
import { getCandidates } from "../../api.js";
import { possibleStates } from "../../constants.js";
import CandidateCard from "../CandidateCard/CandidateCard";

function Main() {
  const [selectedState, setSelectedState] = useState("");
  const [candidates, setCandidates] = useState([]);

const handleSubmit = (evt) => {
  evt.preventDefault();

  const validState = possibleStates.some((s) => s.toLowerCase() === selectedState.trim().toLowerCase());

  if(!validState) {
    return alert("Please enter a valid State");
  }

  getCandidates()
    .then((data) => {
      const filteredMembers = data.members.filter(
        (member) =>
          member.state.toLowerCase() === selectedState.trim().toLowerCase()
      );

      setCandidates(filteredMembers);
    })
    .catch((error) => console.error(error));
};


  return(
    <div className="main">
      <div className="main__search-container">
      <label htmlFor="state" name="state" className="main__search-label">State:
      <input
        placeholder="Georgia"
        type="text"
        className="main__search-input"
        value={selectedState}
        onChange={(evt) => setSelectedState(evt.target.value)}
      />
      </label>
      <button onClick={handleSubmit} type="submit" className="main__search-button">Search</button>
      </div>
    {candidates.length > 0 && (
      <div className="main__results">
        <CandidateCard candidates={candidates} />
      </div>
    )}
    {candidates.length === 0 && (
      <p className="main__results-none">There are no Representatives listed for this State</p>
    )}
    </div>
  )
}

export default Main;