import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Badge, Card, CloseButton, Group, Pagination, Text } from '@mantine/core';


const List = ({ list, toggleComplete, deleteItem }) => {
  // const { displayCount, showComplete, sort } = useContext(SettingsContext);
  const contextState = useContext(SettingsContext);
  const [activePage, setPage] = useState(1);
  // Code to render page count
  const renderList = contextState.showComplete ? list : list.filter(item => !item.complete);
  const startList = contextState.displayCount * (activePage - 1);
  const endList = startList + contextState.displayCount;
  const pageCount = Math.ceil(renderList.length / contextState.displayCount);
  const displayList = renderList.slice(startList, endList);

  return (
    <>

      {displayList.map(item => (
        <Card withBorder shadow="md" key={item.id} mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group>
                <Badge
                  onClick={() => toggleComplete(item.id)}
                  color={item.complete ? 'red' : 'green'}
                  variant="filled"

                >
                  {item.complete ? 'complete' : 'pending'} </Badge>
                <Text>{item.assignee}</Text>

              </Group>
              <CloseButton
                onClick={() => deleteItem(item.id)}
                title="Close task"
              />
            </Group>
          </Card.Section>
          <Text mt="sm">{item.text}</Text>
          <Text align="right">Difficulty: {item.difficulty}</Text>
        </Card>

        // <div key={item.id}>
        //   <p>{item.text}</p>
        //   <p><small>Assigned to: {item.assignee}</small></p>
        //   <p><small>Difficulty: {item.difficulty}</small></p>
        //   <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        //   <hr />
        // </div>
      ))}

      <Pagination value={activePage} onChange={setPage} total={pageCount} />

    </>
  )
};

export default List;