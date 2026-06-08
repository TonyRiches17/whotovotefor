import "./CandidateCard.css";

function CandidateCard({ candidates }) {
  return (
    <div className="candidate">
      {candidates.map((candidate) => (
        <div
  key={candidate.bioguideId}
  className="candidate__info"
>
  <div className="candidate__pic-party">
  <img className="candidate__pic"
    src={candidate.depiction?.imageUrl}
    alt={candidate.name}
  />
  <p className={candidate.partyName === "Democratic" ? "candidate__party_D" : candidate.partyName === "Republican" ? "candidate__party_R" : "candidate__party"}>{candidate.partyName}</p>
  </div>
  <div className="candidate__name-state-district">
  <p className="candidate__name">{candidate.name}</p>


  <p className="candidate__state">{candidate.state}</p>

  {candidate.district && (
    <p className="candidate__district">District {candidate.district}</p>
  )}
  </div>
</div>
      ))}
    </div>
  );
}

export default CandidateCard;
