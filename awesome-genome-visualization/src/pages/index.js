import React from "react";
import { tools } from "./TOOLS.json";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Cards = () => {
  return tools.map((row) => <Card row={row} key={row.name} />);
};

const Card = ({
  row: { name, url, language, tags, img, categories, platform },
}) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <p>{name}</p>
        <a href={url}>{url}</a>
        {language ? <p>Language: {language.join(", ")}</p> : null}
        {categories ? <p>categories: {categories.join(", ")}</p> : null}
        {tags ? <p>tags: {tags.join(", ")}</p> : null}
        {platform ? <p>platform: {platform.join(", ")}</p> : null}
      </div>
      <div style={{ flexGrow: 1 }} />
      <div>
        {img ? (
          <img
            style={{ maxWidth: 300, maxHeight: 200 }}
            src={"static/" + img}
          />
        ) : null}
      </div>
    </div>
  );
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>awesome-genome-visualization</h1>
      <Cards />
    </main>
  );
};

export default IndexPage;
