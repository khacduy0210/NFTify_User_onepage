import React from "react";
import HighlightItem from "./HighlightItem";
import HighlightOther from "./HighlightOther";

export default function HighlightList({ highlightList }) {
    return (
        <div className="highlight-list">
            {highlightList.map((item, index) => {
                return index === 0 ? (
                    <HighlightItem key={index} item={item} />
                ) : (
                    <HighlightOther key={index} item={item} />
                );
            })}
        </div>
    );
}
