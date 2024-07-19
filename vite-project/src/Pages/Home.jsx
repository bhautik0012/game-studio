import React, { useEffect, useState } from "react";
import GenreList from "../Componets/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Componets/Banner";
import TrendingGames from "../Componets/TrendingGames";
import GamesByGenresId from "../Componets/GamesByGenresId";

function Home() {
  const [allGameList,setAllGameList]=useState();
  const[gamesListByGenres,setGameListByGenres] = useState([])
  const [selectedGenresName,setSelectedGenresName]= useState('Action')
  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4)
  },[])
  
  const getAllGamesList=() => {
     GlobalApi.getAllGames.then((resp) => { 
      setAllGameList(resp.data.results)
      
     })
  }  
  const getGameListByGenresId =(id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) =>{
      console.log("Game List By GenresId:", resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden h-full md:block">
      <GenreList genereId={(genereId)=>getGameListByGenresId(genereId)}
       selectedGenresName={(name) => setSelectedGenresName(name)} />
      
      </div>
      <div className="col-span-4 md:col-span-3">
        
      {allGameList?.length>0&&gamesListByGenres.length>0? 
      <div>
      <Banner gameBanner={allGameList[0]}/>
      <TrendingGames gameList={allGameList} />
      <GamesByGenresId gameList ={gamesListByGenres} selectedGenresName={selectedGenresName} />
      </div>
      :null}
      </div>
      
    </div>
  );
}

export default Home;
