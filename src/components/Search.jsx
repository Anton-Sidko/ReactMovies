import React, { Component } from "react";

class Search extends Component {
    state = {
        search: '',
        type: 'all'
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (e) => {
        if (this.state.search === '') {
            this.setState({search: 'iron man'});
        }
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
    }

    render() {
        return <div>
                <div className="row search-row">
                    <div className="input-field">
                        <input
                            placeholder="Search"
                            type="search"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
                        />
                    </div>
                    <button className="btn right" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="movie"
                                onChange={this.handleFilter}
                                checked={this.state.type === "movie"}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
    }
}

export {Search}