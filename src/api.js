const API_KEY = import.meta.env.VITE_CONGRESS_API_KEY;

export async function getCandidates() {
  const response = await fetch(`https://api.congress.gov/v3/member?currentMember=true&limit=550&api_key=${API_KEY}`);

  if(!response.ok) {
    throw new Error("Failed to fetch candidates");
  }

  return response.json();
}

export async function getCandidatesInfo(bioguideId) {
  const response = await fetch(`https://api.congress.gov/v3/member/${bioguideId}?&api_key=${API_KEY}`);

  if(!response.ok) {
    throw new Error("Failed to fetch candidate info");
  }

  return response.json();
}