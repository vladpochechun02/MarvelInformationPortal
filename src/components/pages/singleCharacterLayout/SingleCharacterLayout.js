import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleCharacterLayout.scss';
import '../singleComicLayout/singleComicLayout.scss';
import '../../charInfo/charInfo.scss';

const SingleCharacterLayout = ({data}) => {

    const {name, description, thumbnail, homepage, wiki, comics} = data;

    return (
        <>
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`${name} page`}
                />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
                <div className="char__btns">
                        <a href={homepage} target='blank' className="button button__main" style={{marginRight: '20px'}}>
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} target='blank' className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
            </div>
            <Link to="/" className="single-comic__back">Back to all</Link>
        </div>
        <h2 style={{ marginTop: '30px'}}>Comics:</h2>
        <ul className="char__comics-list" style={{ marginTop: '20px'}}>
            {comics.length > 0 ? null : 'There is no comics with this character'}
            {
                comics.map((item, i) => {
                    // eslint-disable-next-line
                    if (i > 9) return;
                    return (
                        <li key={i} className="char__comics-item">
                            <a target='blank' href="http://marvel.com/comics/characters/1011196/captain_flint?utm_campaign=apiRef&utm_source=66f7d4e33a5e1e95719d5123c25cbf88">{item.name} </a>
                        </li>
                    )
                })
            }                
        </ul>
        </>
    )
}

export default SingleCharacterLayout;