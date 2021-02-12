import React from 'react'
import './menu.css';
function Menu({items}) {
    return (
        <div className="tc">
            {items.map((menuItem)=>{
         const{ id,title,category,price,img,desc}=menuItem;
         return <article key={id}>
            <div className="menu">
            <img src={img} alt={title} className="mw-100"/>

             <header>
                 <h4 className="ttc">{title}</h4>
                 <h4 className="red">${price}</h4>

             </header>
             <div>
             <hr/>
<p  className="desc">{desc}</p>

</div>              
            </div>
            
         </article>
            })}
        </div>
    )
}

export default Menu
