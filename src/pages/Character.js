import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Character() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fechData = async () => {
      const response = await axios.get(
        `https://remy-marvel-backend.herokuapp.com/character/${id}`
      );
      console.log(response.data.comics);
      setData(response.data);
      setIsLoading(false);
    };
    fechData();
  });
  //   const image = `${data.thumbnail.path}.jpg`;
  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="character">
      <h2>{data.name}</h2>
      <img src={`${data.thumbnail.path}.jpg`} alt={data.name} />
      <h3>{data.description}</h3>
      <span>
        {data.comics.map((comic) => {
          return <p>{comic}</p>;
        })}
      </span>
    </div>
  );
}
