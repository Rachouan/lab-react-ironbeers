import { Card } from "../components/home/Card";
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';


export const Home = () => {
    
    const categories = [
        { name: "All Beers", to:"/beers", image: beers, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante posuere, egestas arcu vitae, aliquam erat. Vivamus at lacus elit. Ut placerat urna eu maximus imperdiet. Pellentesque malesuada."},
        { name: "Random Beer", to:"/beers/random", image: newBeer, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante posuere, egestas arcu vitae, aliquam erat. Vivamus at lacus elit. Ut placerat urna eu maximus imperdiet. Pellentesque malesuada."},
        { name: "New Beer", to:"/beers/new", image: randomBeer, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante posuere, egestas arcu vitae, aliquam erat. Vivamus at lacus elit. Ut placerat urna eu maximus imperdiet. Pellentesque malesuada."}
    ]

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {categories.map((category,i) => <Card key={i} category={category}/>)}
        </div>
    );
    
};
