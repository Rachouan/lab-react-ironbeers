import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Beer = ({random}) => {

  const {beerId} = useParams();
  const [beer,setBeer] = useState({});

  useEffect(() => {

    (async () => {
      
      try{
        const id = random ? 'random' : beerId;
        console.log(random);
        if(id.length){
          const {data} = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
          console.log(data);
          setBeer(data);
        }

      }catch(err){
        console.error(err);
      }

    })();

  },[])

  return (
    <div className="columns-3xs">
      <img src={beer.image_url} className="mx-auto w-40"/>
      <div className="my-4">
        
        <header className="mb-4">
          <div className="flex justify-between align-items-center">
            <h1 className="text-3xl md:text-5xl">{beer.name}</h1>
            <p className="text-3xl md:text-5xl text-slate-500 text-right">{beer.attenuation_level}</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">{beer.tagline}</h2>
            <p className="text-slate-500">{beer.first_brewed}</p>
          </div>
        </header>
        <p className="mb-3">{beer.description}</p>
        <p className="text-slate-500">{beer.contributed_by}</p>
      </div>
    </div>
  )
}
