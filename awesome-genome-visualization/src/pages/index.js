import React, { useState } from "react";
import { tools } from "./TOOLS.json";
import "./App.css";

const Cards = ({ tools }) => {
  return tools.map((row) => <Card row={row} key={row.name} />);
};

const Card = ({
  row: {
    name,
    url,
    language,
    tags,
    img,
    github,
    platform,
    publication,
    note,
    alt_url,
  },
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="card">
      <div>
        <h3>{name}</h3>
        <a href={url}>{url}</a>
        {alt_url ? (
          <p>
            Alt url <a href={alt_url}>{alt_url}</a>
          </p>
        ) : null}
        {publication ? (
          <p>
            Publication:{" "}
            <a href={publication.url}>
              {publication.url}{" "}
              {publication.year ? `(${publication.year})` : null}
            </a>
          </p>
        ) : null}
        {language ? <p>Language: {language.join(", ")}</p> : null}
        {tags ? <p>tags: {tags.join(", ")}</p> : null}
        {note ? <p>note: {note}</p> : null}
        {github ? (
          <p>
            Github: <a href={github}>{github}</a>
          </p>
        ) : null}
        {platform ? <p>platform: {platform.join(", ")}</p> : null}
      </div>
      <div style={{ flexGrow: 1 }} />
      <div>
        {img ? (
          <img
            onClick={() => setExpanded((state) => !state)}
            alt={`screenshot of ${name}`}
            loading="lazy"
            style={
              expanded
                ? { maxWidth: 1000, maxHeight: 800, cursor: "pointer" }
                : {
                    maxWidth: 400,
                    width: "90%",
                    maxHeight: 250,
                    cursor: "pointer",
                  }
            }
            src={img}
          />
        ) : (
          <p>No screenshot</p>
        )}
      </div>
    </div>
  );
};

const TagFilters = ({ setFilters, filters }) => {
  const tags = new Set();
  tools.forEach((tool) => {
    if (tool.tags) {
      tool.tags.forEach((cat) => tags.add(cat));
    }
  });
  return (
    <div style={{ display: "block" }}>
      <label htmlFor="tag-select">Tag: </label>
      <select
        id="tag-select"
        value={filters.tag}
        onChange={(event) =>
          setFilters({ ...filters, tag: event.target.value })
        }
      >
        <option value="">-- select an option --</option>
        {[...tags].sort().map((tag) => (
          <option key={tag} id={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

const LanguageFilters = ({ setFilters, filters }) => {
  const languages = new Set();
  tools.forEach((tool) => {
    if (tool.language) {
      tool.language.forEach((cat) => languages.add(cat));
    }
  });
  return (
    <div style={{ display: "block" }}>
      <label htmlFor="language-select">Language: </label>
      <select
        value={filters.language}
        id="language-select"
        onChange={(event) =>
          setFilters({ ...filters, language: event.target.value })
        }
      >
        <option value="">-- select an option --</option>
        {[...languages].sort().map((tag) => (
          <option key={tag} id={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

const PlatformFilters = ({ setFilters, filters }) => {
  const platform = new Set();
  tools.forEach((tool) => {
    if (tool.platform) {
      tool.platform.forEach((cat) => platform.add(cat));
    }
  });
  return (
    <div style={{ display: "block" }}>
      <label htmlFor="platform-select">Platform: </label>
      <select
        value={filters.platform}
        id="platform-select"
        onChange={(event) =>
          setFilters({ ...filters, platform: event.target.value })
        }
      >
        <option value="">-- select an option --</option>
        {[...platform].sort().map((tag) => (
          <option key={tag} id={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};
const IndexPage = () => {
  const [filters, setFilters] = useState({});
  const { language, tag, platform } = filters;

  const filteredTools = tools
    .filter((tool) => (language ? tool.language?.includes(language) : true))
    .filter((tool) => (tag ? tool.tags?.includes(tag) : true))
    .filter((tool) => (platform ? tool.platform?.includes(platform) : true));

  return (
    <main className="page">
      <title>awesome-genome-visualization</title>
      <h1 style={{ margin: 0 }}>awesome-genome-visualization</h1>
      <p>
        This is a companion website for the github repo{" "}
        <a href="https://github.com/cmdcolin/awesome-genome-visualization">
          https://github.com/cmdcolin/awesome-genome-visualization
        </a>
      </p>
      <p>
        Please submit PRs for more tools there and thanks to all the
        contributors!
      </p>
      <p>Note: you can click on the images to make them larger</p>

      <p>
        Example filters:
        <button onClick={() => setFilters({ tag: "General" })}>
          General-purpose genome browsers
        </button>
        <button onClick={() => setFilters({ tag: "Comparative" })}>
          Synteny/comparative browsers
        </button>
        <button onClick={() => setFilters({ tag: "Dotplot" })}>
          Dotplot viewer
        </button>
        <button onClick={() => setFilters({ tag: "MSA" })}>MSA viewer</button>
      </p>
      <TagFilters filters={filters} setFilters={setFilters} />
      <LanguageFilters filters={filters} setFilters={setFilters} />
      <PlatformFilters filters={filters} setFilters={setFilters} />

      <Cards filters={filters} tools={filteredTools} />
      <p>
        Note: if you would like your tool removed or screenshot removed (for
        copyright purposes for example) let me know
      </p>
    </main>
  );
};

export default IndexPage;
