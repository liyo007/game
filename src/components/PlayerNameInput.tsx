import React, { useState } from "react";

interface PlayerNameInputProps {
  onStartGame: (name: string) => void;
  onShowLeaderboard: () => void;
  onExportScores: (clearAfterExport?: boolean) => void;
  hasScores: boolean;
  autoExport: boolean;
  setAutoExport: (value: boolean) => void;
  exportAfterGames: number;
  setExportAfterGames: (value: number) => void;
  gamesPlayed: number;
  saveSettings: (settings: any) => void;
}

export const PlayerNameInput: React.FC<PlayerNameInputProps> = ({
  onStartGame,
  onShowLeaderboard,
  onExportScores,
  hasScores,
  autoExport,
  setAutoExport,
  exportAfterGames,
  setExportAfterGames,
  gamesPlayed,
  saveSettings,
}) => {
  const [name, setName] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const handleAutoExportChange = (enabled: boolean) => {
    setAutoExport(enabled);
    saveSettings({
      autoExport: enabled,
      exportAfterGames,
      gamesPlayed,
    });
  };

  const handleExportAfterChange = (value: number) => {
    setExportAfterGames(value);
    saveSettings({
      autoExport,
      exportAfterGames: value,
      gamesPlayed,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Code Logic Jump Game
          </h1>
          <p className="text-gray-600">Test your programming logic skills!</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && name.trim()) {
                  onStartGame(name.trim());
                }
              }}
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              maxLength={20}
            />
          </div>

          <button
            onClick={() => {
              if (name.trim()) {
                onStartGame(name.trim());
              }
            }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Start Game
          </button>
        </div>

        <div className="mt-6 flex gap-2">
          <button
            onClick={onShowLeaderboard}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Leaderboard
          </button>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Settings
          </button>
        </div>

        {showSettings && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3">Export Settings</h3>

            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="autoExport"
                  checked={autoExport}
                  onChange={(e) => handleAutoExportChange(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="autoExport" className="text-sm">
                  Auto-export after games
                </label>
              </div>

              {autoExport && (
                <div className="ml-6">
                  <label className="block text-sm text-gray-600 mb-1">
                    Export every:
                  </label>
                  <select
                    value={exportAfterGames}
                    onChange={(e) =>
                      handleExportAfterChange(parseInt(e.target.value))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  >
                    <option value={1}>1 game</option>
                    <option value={5}>5 games</option>
                    <option value={10}>10 games</option>
                    <option value={20}>20 games</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    Games played: {gamesPlayed} | Next export:{" "}
                    {exportAfterGames - (gamesPlayed % exportAfterGames)}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {hasScores && (
          <div className="mt-4 space-y-2">
            <button
              onClick={() => onExportScores(false)}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Export All Scores
            </button>
            <button
              onClick={() => {
                if (
                  confirm(
                    "This will export all scores and then clear the data. Continue?"
                  )
                ) {
                  onExportScores(true);
                }
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Export & Clear Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
