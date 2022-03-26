import axios from "axios";
import { useReducer, useState } from "react";

const initialFormState = {
  name: "",
  tagline: "",
  description: "",
  first_brewed: "",
  brewers_tips: "",
  attenuation_level: 0,
  contributed_by: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "input":
      return { ...state, [action.name]: action.value };
    case "clean":
      return initialFormState;
    default:
      return state;
  }
};

export const NewBeer = () => {
  const [beerFormData, dispatch] = useReducer(reducer, initialFormState);
  const [success, setSuccess] = useState({});

  const onHandleAddBeer = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `https://ih-beers-api2.herokuapp.com/beers/new`,
        beerFormData
      );
      console.log(data);
      setSuccess({ status: 200, message: data.message });
    } catch (err) {
      console.error(err);
    }
    //addMovieHandler(beerFormData);
    dispatch({ type: "clean" });
  };
  const handleInputChange = (e, name, value) =>
    dispatch({ type: "input", name, value });

  return (
    <div>
      {success && success.status === 200 && (
        <div className="p-3 rounded bg-green-200">
          <p className="text-green-800">{success.message}</p>
        </div>
      )}
      <form onSubmit={onHandleAddBeer} className="grid grid-cols-4 gap-4">
        <div >
          <label>Name</label>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={beerFormData.name}
              onChange={(e) => handleInputChange(e, "name", e.target.value)}
              className="w-full block border p-3 rounded"
            />
          </div>
        </div>
        <div >
          <label>Tagline</label>
          <div>
            <input
              type="text"
              name="tagline"
              placeholder="Tagline"
              value={beerFormData.tagline}
              onChange={(e) => handleInputChange(e, "tagline", e.target.value)}
              className="block border p-3 rounded w-100"
            />
          </div>
        </div>
        <div >
          <label>Description</label>
          <div>
            <textarea
              name="description"
              placeholder="Description"
              value={beerFormData.description}
              onChange={(e) =>
                handleInputChange(e, "description", e.target.value)
              }
              className="block border p-3 rounded w-100"
            ></textarea>
          </div>
        </div>
        <div >
          <label>First brewed</label>
          <div>
            <input
              type="text"
              name="first_brewed"
              placeholder="First brewed"
              value={beerFormData.first_brewed}
              onChange={(e) =>
                handleInputChange(e, "first_brewed", e.target.value)
              }
              className="block border p-3 rounded w-100"
            />
          </div>
        </div>
        <div >
          <label>Brewers tips</label>
          <div>
            <input
              type="text"
              name="brewers_tips"
              placeholder="Brewers tips"
              value={beerFormData.brewers_tips}
              onChange={(e) =>
                handleInputChange(e, "brewers_tips", e.target.value)
              }
              className="block border p-3 rounded w-100"
            />
          </div>
        </div>
        <div >
          <label>Attenuation level</label>
          <div>
            <input
              type="number"
              name="attenuation_level"
              placeholder="Attenuation level"
              value={beerFormData.attenuation_level}
              onChange={(e) =>
                handleInputChange(e, "attenuation_level", e.target.value)
              }
              className="block border p-3 rounded w-100"
            />
          </div>
        </div>
        <div >
          <label>Contributed by</label>
          <div>
            <input
              type="text"
              name="contributed_by"
              placeholder="Contributed by"
              value={beerFormData.contributed_by}
              onChange={(e) =>
                handleInputChange(e, "contributed_by", e.target.value)
              }
              className="block border p-3 rounded w-100"
            />
          </div>
        </div>
        <button type="submit" className="p-3 rounded-xl bg-sky-500 text-white">
          Add New
        </button>
      </form>
    </div>
  );
};
