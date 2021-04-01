import React, { useState } from "react";
import { tools as importedTools } from "./TOOLS.json";

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
        <p className="link"><a href={url}>{url}</a></p>
        {alt_url ? (
          <p className="link">
            Alt url <a href={alt_url}>{alt_url}</a>
          </p>
        ) : null}
        {publication ? (
          <p className="link">
            Publication:{" "}
            <a href={publication.url}>
              {publication.url}{" "}
              {publication.year ? `(${publication.year})` : null}
            </a>
          </p>
        ) : null}
        {language ? <p>Language: {language.join(", ")}</p> : null}
        {tags ? <p>Tags: {tags.join(", ")}</p> : null}
        {note ? <p>Note: {note}</p> : null}
        {github ? (
          <p className="link">
            Github: <a href={github}>{github}</a>
          </p>
        ) : null}
        {platform ? <p>Platform: {platform.join(", ")}</p> : null}
      </div>
      <figure role="presentation" onClick={() => setExpanded((state) => !state)}>
        {img ? (
          <img
            alt={`screenshot of ${name}`}
            loading="lazy"
            className={expanded ? "expanded" : ""}
            src={img}
          />
        ) : (
          <p className="no-screenshot">No screenshot</p>
        )}
        {expanded ? (
            <div className="modal-backdrop">
                <img
                    alt={`screenshot of ${name}`}
                    src={img}
                />
            </div>
        ) : null}
      </figure>
    </div>
  );
};

const TagFilters = ({ tools, setFilters, filters }) => {
  const tags = new Set();
  tools.forEach((tool) => {
    if (tool.tags) {
      tool.tags.forEach((cat) => tags.add(cat));
    }
  });
  return (
    <div className="form-group">
      <label htmlFor="tag-select">Tag: </label>
      <select
        id="tag-select"
        value={filters.tag || ""}
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

const LanguageFilters = ({ tools, setFilters, filters }) => {
  const languages = new Set();
  tools.forEach((tool) => {
    if (tool.language) {
      tool.language.forEach((cat) => languages.add(cat));
    }
  });
  return (
    <div className="form-group">
      <label htmlFor="language-select">Language: </label>
      <select
        value={filters.language || ""}
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

const PlatformFilters = ({ tools, setFilters, filters }) => {
  const platform = new Set();
  tools.forEach((tool) => {
    if (tool.platform) {
      tool.platform.forEach((cat) => platform.add(cat));
    }
  });
  return (
    <div className="form-group">
      <label htmlFor="platform-select">Platform: </label>
      <select
        value={filters.platform || ""}
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

  const filteredTools = importedTools
    .filter((tool) => (language ? tool.language?.includes(language) : true))
    .filter((tool) => (tag ? tool.tags?.includes(tag) : true))
    .filter((tool) => (platform ? tool.platform?.includes(platform) : true));

  return (
    <main className="page">
      <title>awesome-genome-visualization</title>
      <h1>awesome-genome-visualization</h1>
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

      <p id="example-filters">
        Example filters:
        <button
          onClick={() => setFilters({ tag: "", language: "", platform: "" })}
        >
          Clear filters
        </button>
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

      <div id="filters">
        <TagFilters
            tools={importedTools}
            filters={filters}
            setFilters={setFilters}
        />
        <LanguageFilters
            tools={importedTools}
            filters={filters}
            setFilters={setFilters}
        />
        <PlatformFilters
            tools={importedTools}
            filters={filters}
            setFilters={setFilters}
        />
      </div>

      <Cards filters={filters} tools={filteredTools} />
      <p>
        Note: if you would like your tool removed or screenshot removed (for
        copyright purposes for example) let me know
      </p>
    </main>
  );
};

export default IndexPage;
