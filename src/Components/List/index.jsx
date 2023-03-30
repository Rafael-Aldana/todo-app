import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination } from '@mantine/core';


const List = ({ list, toggleComplete }) => {
  // const { displayCount, showComplete, sort } = useContext(SettingsContext);
  const contextState = useContext(SettingsContext);
  const [ activePage, setPage ] = useState(1);
  // Code to render page count
  const renderList = contextState.showComplete ? list : list.filter( item => !item.complete);
  const startList = contextState.displayCount * (activePage - 1);
  const endList = startList + contextState.displayCount;
  const pageCount = Math.ceil(renderList.length / contextState.displayCount);
  const displayList = renderList.slice(startList, endList);

  return (
    <>

      {displayList.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

      <Pagination value={activePage} onChange={setPage} total={pageCount} />;

    </>
  )
};

export default List;