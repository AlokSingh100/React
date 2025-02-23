import List from "./List.jsx";

function App() {

  const fruit = [{id: 1,name:'apple', calories:95},
    {id: 2,name:'banana', calories:105}, , 
    {id: 3,name:'orange', calories:62},
    {id: 4,name:'grape', calories:60},
    {id: 5,name:'melon',calories:45} ];

    const veg = [{id: 6,name:'app', calories:45},
                {id: 7,name:'bana', calories:48}, , 
                {id: 8,name:'oran', calories:15},
                {id: 9,name:'gpe', calories:75},
                {id: 10,name:'mon',calories:4} ];

  return (<>
  {fruit.length>0 &&<List items={veg} category="Vegetables" />}
  {veg.length>0 &&<List items={fruit} category="Fruits" />} 
  </>
);
}

export default App