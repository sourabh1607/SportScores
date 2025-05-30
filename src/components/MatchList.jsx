import React, { useEffect, useState } from "react";
import { fetchUpcomingMatches } from "../api/fetchUpcomingMatches";

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUpcomingMatches()
      .then(setMatches)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Upcoming Premier League Matches</h1>
      <ul className="space-y-4">
        {matches.map((match) => (
          <li
            key={match.fixture.id}
            className="bg-white p-4 shadow rounded-xl border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <span>{match.teams.home.name}</span>
              <span className="text-sm text-gray-500">vs</span>
              <span>{match.teams.away.name}</span>
            </div>
            <div className="text-center text-sm mt-2 text-gray-600">
              {new Date(match.fixture.date).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
