import React, { useState } from "react";

const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleFilter = (e) => {
        if (search === '') {
            setSearch('iron man')
            searchMovies('iron man', e.target.dataset.type);
        }
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type);
    }


    return <div>
            <div className="row search-row">
                <div className="input-field">
                    <input
                        placeholder="Search"
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
                </div>
                <button className="btn right" onClick={() => searchMovies(search, type)}>Search</button>
            </div>
            <div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={handleFilter}
                        checked={type === "all"}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={handleFilter}
                            checked={type === "movie"}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={handleFilter}
                        checked={type === "series"}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
}

export {Search}