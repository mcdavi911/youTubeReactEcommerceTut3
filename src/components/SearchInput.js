import React, {useState} from 'react'
import produce from 'immer'



export default function SearchInput() {
  const [filterText, setFilterText] = useState('');
  const itemClasses = [ 'Kits', 'Lenses', 'Cases', 'Tripods', 'Motor' ];
  const [itemClassesFiltered, setItemClassesFiltered] = useState(itemClasses);

  const handleFilterText = (e) => {
    setFilterText(e.target.value);
    
    setItemClassesFiltered(itemClasses.filter((item) => item.toLowerCase().indexOf(filterText) >= 0));
    console.log('filteredInsideFN',itemClassesFiltered);
  }

  //console.log('itemClasses',itemClasses);
  console.log('filtered',itemClassesFiltered);

  



  return (
    <div>
      <input onChange={(e) => handleFilterText(e)} />
      <p style={{color: 'white'}}>{filterText}</p>
    </div>
  )
}
