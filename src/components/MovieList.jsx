import {Movie} from './Movie';

function MovieList(props) {
    const {movies = []} = props;

    return <div className="movie-list">
        {movies.length ?
            movies.map(movie => {
                return <Movie key={movie.imdbID} {...movie} />
        }) : <h4>Nothing found</h4>
    }
    </div>
}

export {MovieList}