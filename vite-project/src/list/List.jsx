

function List(props){
    // const fruit = [{id: 1,name:'apple', calories:95},
    //             {id: 2,name:'banana', calories:105}, , 
    //             {id: 3,name:'orange', calories:62},
    //             {id: 4,name:'grape', calories:60},
    //             {id: 5,name:'melon',calories:45} ];
   // fruit.sort((a,b)=>a.name.localeCompare(b.name));
   // fruit.sort((a,b)=>b.name.localeCompare(a.name));
   //fruit.sort((a,b)=>a.calories-b.calories);
   //const lofruit=fruit.filter(fruit =>fruit.calories>61);

const category=props.category;

const fruit=props.items;

    const listItems=fruit.map(fruit =><li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>)
    return(<>
    <h3 className=" list-cat">{category}</h3>
    <ol className="list-itm">{listItems}</ol>
    </>);
    
}

export default List;