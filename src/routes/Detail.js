import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/Detail";
function Detail() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { id } = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setData(json.data.movie)
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {
                loading ?
                    <h1>Loading...</h1> :
                    <MovieDetail
                        key={data.id}
                        coverImg={data.large_cover_image}
                        title={data.title}
                        genres={data.genres}
                        description={data.description_full}
                    />
            }
        </div>
    )
}
export default Detail;