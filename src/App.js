import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://remy-marvel-backend.herokuapp.com/characters"
        );
        console.log(response.data.results);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div>
      {data.results.map((character, _id) => {
        return <span key={_id}>{character.name}</span>;
      })}
    </div>
  );
}

export default App;
