import axios from 'axios';
import {useEffect,useState} from 'react';
import { BeerCard } from '../../components/beer/BeerCard';

export const Beers = () => {
    const [beers,setBeers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [search,setSearch] = useState('')
    useEffect(() => {
        (async () => {
            try{
                const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`);
                const {status,data} = res;
                console.log(status);
                setBeers(data);
                setLoading(false);

            }catch(err){
                console.error(err);
                setLoading(false);
            }
            
        })();
    },[search])
        
    return (
        <div>
            <h1 className="text-4xl">Beers</h1>
            <form >
            <input type="search" name="search" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value) } className="w-full block border p-3 rounded"/>
            </form>
            {loading && <p>Loading...</p>}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {!beers && !loading && <p>No Beers...</p> }
                {beers && !loading && beers.map((beer,i) => <BeerCard key={i} beer={beer}/>)}
            </div>
        </div>
    )
}
