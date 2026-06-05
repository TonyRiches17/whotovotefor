import "./CandidateCard.css";

function CandidateCard({ candidates, handleCandidateClick }) {
  return (
    <div className="candidate">
      {candidates.map((candidate) => (
        <div
  key={candidate.bioguideId}
  className="candidate__info"
>
  <img
    src={candidate.depiction?.imageUrl}
    alt={candidate.name}
  />

  <p onClick={() => handleCandidateClick(candidate.bioguideId)}>{candidate.name}</p>

  <p>{candidate.partyName}</p>

  <p>{candidate.state}</p>

  {candidate.district && (
    <p>District {candidate.district}</p>
  )}
</div>
      ))}
    </div>
  );
}

export default CandidateCard;
