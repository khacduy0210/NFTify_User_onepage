import React, {useEffect, useState} from'react';

import HighlightItem from './HighlightItem';
import HighlightTitle from './HighlightTitle';
import { useDispatch, useSelector } from 'react-redux';
import { requestHighlightApiData } from '../../actions/HighlightAction';
import HighlightList from './HighlightList';

export default function Highlight() {
    const [highlightList, setHighlightList] = useState([])
    const dispatch = useDispatch();
    const highlight = useSelector(state => state.highlight);
    console.log(highlight,"highlight");
    useEffect(() => {
        dispatch(requestHighlightApiData());
    },[])
    useEffect(() => {
        setHighlightList(highlight);
    },[highlight])
    return (
        <div className="highlight">
            <div className="container">
                <div className="highlight-content">
                    <HighlightTitle/>
                    <HighlightList highlightList={highlightList}/>
                </div>
            </div>
        </div>
    )
}