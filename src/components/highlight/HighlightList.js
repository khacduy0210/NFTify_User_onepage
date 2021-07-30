import React from 'react';
import HighlightItem from './HighlightItem';
import HighlightOther from './HighlightOther';

export default function HighlightList({highlightList}) {
    console.log(highlightList, "list test");
    const listOther = highlightList.filter((item,index) => index !== 0);
    console.log(listOther, "other");
    return (
        <div className="highlight-list"> 
            {highlightList.map((item,index) => {
                return (
                    index === 0 ? 
                        <HighlightItem item={item}/>
                    :   <HighlightOther item={item}/>
                )
            })}
        </div>
    );
}