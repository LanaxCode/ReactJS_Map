const Movieitem = (props) => {
    return (
        <div className="movie">
            <p className="title">{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <p className="genre">{props.genre.map((elt) => <p>{elt}</p>)}</p>

        </div>
    );
}

export default Movieitem;