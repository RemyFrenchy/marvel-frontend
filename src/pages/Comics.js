import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Comics({ search, setSearch, setMenu }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://remy-marvel-backend.herokuapp.com/comics?page=${page}&title=${search}`
        );

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
    setMenu("comics");
  }, [page, search, setMenu]);
  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="page">
      <div className="bt">
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
      </div>
      <div className="container">
        {data.results.map((comic, _id) => {
          return (
            <div>
              <Link key={_id} to={`/comic/${comic._id}`}>
                <div className="comicsThumbnails">
                  <div key={_id}>
                    <img
                      className="comicsImg"
                      src={`${comic.thumbnail.path}.jpg`}
                      alt="Comics Marvel"
                    />
                    <p>{comic.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        <div className="bt">
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
        </div>
      </div>
    </div>
  );
}
