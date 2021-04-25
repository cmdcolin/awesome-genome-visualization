import React, { useState, useEffect } from "react";
import { tools as importedTools } from "./TOOLS.json";
import slugify from "slugify";
import queryString from "query-string";
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
        <h3>
          <a
            id={`${slugify(name)}`}
            href={`#${slugify(name)}`}
            style={{ color: "black" }}
          >
            {name}
          </a>
        </h3>
        <p className="link">
          <a href={url}>{url}</a>
        </p>
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
      <figure
        role="presentation"
        onClick={() => setExpanded((state) => !state)}
      >
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
            <img alt={`screenshot of ${name}`} src={img} />
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
      <label htmlFor="tag-select">Filter based on tag: </label>
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
      <label htmlFor="language-select">Filter based on language: </label>
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
      <label htmlFor="platform-select">Filter based on platform: </label>
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
  const [sort, setSort] = useState({});
  const { language, tag, platform } = filters;

  useEffect(() => {
    const parsedHash = queryString.parse(window.location.hash);
    setFilters(parsedHash);
    setSort(parsedHash);
  }, []);

  useEffect(() => {
    const hash = queryString.stringify({ ...filters, ...sort });
    window.history.pushState(null, null, "#" + hash);
  }, [filters, sort]);

  const tools = sort.latest ? importedTools.slice().reverse() : importedTools;
  const filteredTools = tools
    .filter((tool) => (language ? tool.language?.includes(language) : true))
    .filter((tool) => (tag ? tool.tags?.includes(tag) : true))
    .filter((tool) => (platform ? tool.platform?.includes(platform) : true));

  const githubURL = "https://github.com/cmdcolin/awesome-genome-visualization";

  return (
    <main className="page">
      <title>awesome-genome-visualization</title>
      <h1>awesome-genome-visualization</h1>
      <p>
        This is a companion website for the github repo{" "}
        <a href={githubURL}>{githubURL}</a>
      </p>
      <p>
        Please submit PRs for more tools there and thanks to all the
        contributors!
      </p>

      <p>
        Note: The range of tools here includes a full spectrum of very
        simple/bespoke scripts to complex or very re-usable general purpose
        apps. Some things are included more for visual inspiration than as a
        suggestion to re-use, but in most cases re-usablility should be
        possible. Also, if you are an author on a scientific paper, please cite
        your use of visualization tools and libraries, or put your own custom
        visualization scripts on github and try to make them re-usable. It helps
        others know how you made your awesome figures!
      </p>

      <p className="example-buttons">
        Example filters:
        <button onClick={() => setFilters({})}>Clear filters</button>
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
      <p className="example-buttons">
        Example sorting:
        <button onClick={() => setSort({})}>Clear sort</button>
        <button onClick={() => setSort({ latest: true })}>
          Sort by most recent
        </button>
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
      <p>
        And always remember, "YOU ARE AWESOME!!" read in Ben Busby voice for
        added effect. Thanks Ben for reminding us of this always :)
      </p>
      <div class="top-link" onClick={() => window.scrollTo(0, 0)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 12 6"
        >
          <path d="M12 6H0l6-6z" />
        </svg>
      </div>
    </main>
  );
};

export default IndexPage;
