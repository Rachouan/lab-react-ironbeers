import { Link } from "react-router-dom";

export const Card = ({category}) => {

    return (
        <div className="text-center m-3 md:p-4">
            <Link to={category.to}>
                <img src={category.image} className="mx-auto rounded"/>
                <div className="p-3">
                    <h2 className="text-2xl mb-2">{category.name}</h2>
                    <p>{category.description}</p>
                </div>
            </Link>
        </div>
    )
}
