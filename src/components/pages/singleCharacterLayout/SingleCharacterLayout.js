import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";

import './SingleCharacterLayout.scss';

const SingleCharacterLayout = ({data}) => {

    const { name, description, thumbnail } = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`${name} character`}
                />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic_name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <Link to="/" className="single-comic__back">Back to main page</Link>
        </div>
    )
}

export default SingleCharacterLayout;