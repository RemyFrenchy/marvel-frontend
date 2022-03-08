import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Comic() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fechData = async () => {
      const response = await axios.get(
        `https://remy-marvel-backend.herokuapp.com/comic/${id}`
      );
      console.log(response.data);
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
            <h1>{data.title}</h1>
            <img
              src={`${data.thumbnail.path}.jpg`}
              alt={data.title}
              className="characterDetImg"
            />
          </div>

          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
