import React from 'react'

function Categories({filterItems,categories}) {
    return (
        <div className="tc">
        {
            categories.map((category,index)=>{
return      <button className="f6 link dim ba ph3 pv2 ma2 dib red" onClick={()=>filterItems(category)} key={index}>
                {category}
            </button>
       
            })
        }
                    </div>
    )
}

export default Categories
