import React, { useEffect } from "react";
import HighlightTitle from "./HighlightTitle";
import { useDispatch, useSelector } from "react-redux";
import { requestHighlightApiData } from "../../actions/HighlightAction";
import HighlightList from "./HighlightList";
import NoData from "../NoData";

export default function Highlight() {
    const dispatch = useDispatch();
    const highlightList = useSelector((state) => state.homedata.highlight);
    console.log(highlightList, "highlight");
    useEffect(() => {
        dispatch(requestHighlightApiData());
    }, []);
    return (
        <div className="highlight">
            <div className="container">
                <div className="highlight-content">
                    <HighlightTitle />
                    {typeof highlight === "object" ? (
                        <HighlightList highlightList={highlightList} />
                    ) : (
                        <NoData />
                    )}
                </div>
            </div>
        </div>
    );
}
