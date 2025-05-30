const API_URL = "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023&next=10";

export async function fetchUpcomingMatches() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c6bdff6df4msh4f01fd55b504c59p1fa57ajsn661c251b0f78", // Demo key
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.response; // Array of match objects
}
