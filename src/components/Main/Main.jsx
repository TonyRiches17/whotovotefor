import { useState } from "react";
import "./Main.css";
import { getCandidates, getCandidatesInfo } from "../../api.js";
import CandidateCard from "../CandidateCard/CandidateCard";

function Main() {
  const [selectedState, setSelectedState] = useState("");
  const [candidates, setCandidates] = useState([]);

const handleSubmit = (evt) => {
  evt.preventDefault();

  getCandidates()
    .then((data) => {
      const filteredMembers = data.members.filter(
        (member) =>
          member.state.toLowerCase() === selectedState.toLowerCase()
      );

      setCandidates(filteredMembers);
    })
    .catch((error) => console.error(error));

};

const handleCandidateClick = (bioguideId) => {
  getCandidatesInfo(bioguideId)
    .then((data) => {
      console.log(data);
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
        <CandidateCard candidates={candidates} handleCandidateClick={handleCandidateClick} />
      </div>
    )}
    </div>
  )
}

export default Main;