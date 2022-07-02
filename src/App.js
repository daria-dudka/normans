import './App.css';
import Layout from './layout/Layout';
import UsersList from './components/UsersList/UsersList';
import { useEffect, useState } from 'react';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [usersId, setUsersId] = useState();
  const [isUserChanged, setIsUserChanged] = useState(false);

  function getClickedUserId(id) {
    setUsersId(id);
    setIsUserChanged(true);
  }

  useEffect(() => {
    fetch('https://62bc764e6b1401736cfb396a.mockapi.io/getusers')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = [];

        const sortedData = data.sort((a, b) =>
          a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
        );

        for (let i = 0; i < sortedData.length; i++) {
          const user = {
            id: i,
            ...sortedData[i],
          };
          users.push(user);
        }

        setUsersData(users);
      });
  }, []);

  useEffect(() => {
    if (isUserChanged) {
      const status = usersData[usersId].status;
      const updateUsersData = [...usersData];

      if (status === 'active') {
        updateUsersData[usersId].status = 'inactive';
      } else {
        updateUsersData[usersId].status = 'active';
      }

      setUsersData(updateUsersData);
      setIsUserChanged(false);
    }
  }, [isUserChanged, usersData, usersId]);

  return (
    <div className='App'>
      <Layout>
        <UsersList users={usersData} getClickedUserId={getClickedUserId} />
      </Layout>
    </div>
  );
}

export default App;
