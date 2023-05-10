import { Link } from 'react-router-dom';

import './singleComicLayout.scss';

const SingleComicLayout = ({data}) => {

    const {title, description, pageCount, thumbnail, language, price} = data;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <Link to={`/characters/${data.id}`} className="single-comic__name">{title}</Link>
                {/* <a href={data.urls} target='blank' className="single-comic__name">{title}</a> */}
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <a href={data.urls} target='blank' className="single-comic__price">{price}</a>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicLayout;