import React, { useState } from 'react';
import './App.css';
import "tachyons";
import items from './data';
import Categories from './Categories';
import Menu from "./Menu";

const allCategories=["all",...new Set(items.map((item)=>item.category))];
console.log(allCategories);
function App() {
  const [menuitems,setmenuitems]=useState(items);
  const [categories,setcategories]=useState(allCategories);
const filterItems=(category)=>{
 if(category==="all"){
   setmenuitems(items);
   return;
 }
  const newItems=items.filter((item)=>item.category===category);
  setmenuitems(newItems);
}



return (<main>
    <section className="">
    <div>
    <h2 className="tc ttc red">our menu</h2>
    </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuitems}/>
    </section>

  </main>
  );
}

export default App;
