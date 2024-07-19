import React, { useEffect } from "react";

function GamesByGenresId({ gameList,selectedGenresName }) {
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white">{selectedGenresName} Game</h2>
      <div className="grid gap-6 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        {gameList.map((item) => (
          <div className="h-full p-3 pb-12 transition-all duration-300 ease-in-out bg-[#76a8f75e] rounded-lg cursor-pointer hover:scale-110 ">
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}
              <span className="p-1 ml-2 rounded-sm text-[10px] bg-green-100 text-green-700 font-medium">{item.metacritic}</span>
            </h2>
            <h2 className="text-gray-500 dark:text-gray-300">
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
