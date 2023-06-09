import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';
// import { Link } from 'react-router-dom';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateChar();
        // eslint-disable-next-line
    }, [props.charId])

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }
        
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    // const skeleton = char || loading || error ? null : <Skeleton/>;
    // const errorMessage = error ? <ErrorMessage/> : null;
    // const spinner = loading ? <Spinner/> : null;
    // const content = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <div className="char__info">
            {setContent(process, View, char)}
        </div>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data; 

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} target='blank' className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        {/* <Link to={`/characters/${char.id}`} className="button button__main">
                            <div className="inner">homepage</div>
                        </Link> */}
                        <a href={wiki} target='blank' className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((item, i) => {
                        // eslint-disable-next-line
                        if (i > 9) return;
                        return (
                            <li key={i} className="char__comics-item">
                                <a target='blank' href="http://marvel.com/comics/characters/1011196/captain_flint?utm_campaign=apiRef&utm_source=66f7d4e33a5e1e95719d5123c25cbf88">{item.name} </a>
                                {/* <Link to={`comic/${item.comics}`}>{item.name} </Link> */}
                                {/* <Link to={`/comics/${char.id}`}>{item.name}</Link> */}
                            </li>
                        )
                    })
                }                
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;