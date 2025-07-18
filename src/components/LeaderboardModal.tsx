import React from "react";

interface ScoreEntry {
  playerName: string;
  score: number;
  level: number;
  timestamp: string;
}

interface LeaderboardModalProps {
  scores: ScoreEntry[];
  onClose: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ 
  scores, 
  onClose 
}) => {
  const topScores = scores.slice(0, 10);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Leaderboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        {topScores.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No scores yet. Be the first to play!
          </p>
        ) : (
          <div className="space-y-2">
            {topScores.map((entry, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  index === 0
                    ? "bg-yellow-100 border-2 border-yellow-300"
                    : index === 1
                    ? "bg-gray-100 border-2 border-gray-300"
                    : index === 2
                    ? "bg-orange-100 border-2 border-orange-300"
                    : "bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <span className="font-bold text-lg mr-3">
                    {index + 1}.
                  </span>
                  <div>
                    <div className="font-semibold">{entry.playerName}</div>
                    <div className="text-sm text-gray-600">
                      {new Date(entry.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{entry.score}</div>
                  <div className="text-sm text-gray-600">
                    Level {entry.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};