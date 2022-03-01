import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://remy-marvel-backend.herokuapp.com/characters?page=${page}`
        );

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page]);
  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div>
      <button
        style={{ display: page === 1 ? "none" : "inline" }}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        page précédente
      </button>

      <button
        style={{
          display: page === Math.ceil(data.count / 100) ? "none" : "inline",
        }}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        page suivante
      </button>
      {data.results.map((character, _id) => {
        return (
          <div key={_id}>
            {character.name} : {character.description}
          </div>
        );
      })}
    </div>
  );
}

export default App;
