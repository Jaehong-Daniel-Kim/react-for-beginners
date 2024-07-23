import PropTypes from "prop-types";
function MovieDetail({coverImg, title, genres, description}) {
    return (
        <div>
            <img src={coverImg} alt=""/>
            <h1>{title}</h1>
            <p>{description}</p>
            <ul>
                {genres.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

MovieDetail.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
};

export default MovieDetail
