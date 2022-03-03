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

      setData(response.data);
      setIsLoading(false);
    };
    fechData();
  });

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="page">
      <div className="charactersThumbnails">
        <div className="descriptionPosition">
          <div>
            <h1>{data.name}</h1>
            <img
              src={`${data.thumbnail.path}.jpg`}
              alt={data.name}
              className="characterDetImg"
            />
          </div>

          <p>{data.description}</p>
        </div>

        <div className="comicsDetByCharacter">
          {data.comics.map((characterComics) => {
            return (
              <div className="comicsByCharacterThumbnails">
                <div key={characterComics._id} className="comic_link">
                  <img
                    className="comicsByCharacterImg"
                    src={`${characterComics.thumbnail.path}.jpg`}
                    alt={characterComics.title}
                  />
                  <h3>{characterComics.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
