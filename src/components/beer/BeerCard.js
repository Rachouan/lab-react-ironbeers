import { Link } from "react-router-dom";

export const BeerCard = ({beer}) => {
    const {_id,image_url,name,tagline,contributed_by} = beer;
    return (
        <div className="p-4 border rounded">
          <Link to={`/beers/${_id}`} className="flex items-center">
            <img src={image_url} className="flex-none h-40"></img>
            <div className="p-3">
              <h2 className="text-2xl">{name}</h2>
              <p className="text-slate-700">{tagline}</p>
              <p className="text-slate-400">{contributed_by}</p>
            </div> 
          </Link>
        </div>
    )
}
