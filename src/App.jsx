import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selected, setSelect] = useState(null);

  return (
    <div className="app">
      <h1>Episodes</h1>

      <div className="container">
        {/* Episode List */}
        <div className="episode-list">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              className={
                selected?.id === ep.id
                  ? "episode-item selected"
                  : "episode-item"
              }
              onClick={() => setSelect(ep)}
            >
              {ep.title}
            </div>
          ))}
        </div>

        {/* Episode Details */}
        <div className="details">
          {selected === null ? (
            <p className="empty">Select an episode to see details.</p>
          ) : (
            <>
              <h3>Episode {selected.id}</h3>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
