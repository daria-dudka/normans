import './App.css';
import Layout from './layout/Layout';
import UsersList from './components/UsersList/UsersList';
import { useEffect, useState } from 'react';
import NewUserForm from './components/NewUserForm/NewUserForm';
import SortBtn from './components/SortBtn/SortBtn';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [usersDataChanged, setUsersDataChanged] = useState('');
  const [usersId, setUsersId] = useState();
  const [newUser, setNewUser] = useState();
  const [isSorted, setIsSorted] = useState(false);

  function getClickedUserId(id, change) {
    setUsersId(id);
    setUsersDataChanged(change);
  }

  function getNewUsersData(user) {
    setNewUser(user);
    setUsersDataChanged('add');
  }

  function sortUsersList() {
    let sortedData = [...usersData];
    if (!isSorted) {
      setIsSorted(true);
      sortedData = sortedData.sort((a, b) =>
        a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
      );
    } else {
      setIsSorted(false);
      sortedData = sortedData.sort((a, b) =>
        b.firstName > a.firstName ? 1 : a.firstName > b.firstName ? -1 : 0
      );
    }
    setUsersData(sortedData);
  }

  useEffect(() => {
    fetch('https://62bc764e6b1401736cfb396a.mockapi.io/getusers')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = [];

        for (let i = 0; i < data.length; i++) {
          const user = {
            id: i,
            ...data[i],
          };
          users.push(user);
        }
        setUsersData(users);
      });
  }, []);

  useEffect(() => {
    if (usersDataChanged === '') {
      return;
    }

    let updatedUsersData = [...usersData];
    let clickedUserIndex;

    updatedUsersData.forEach((user, index) => {
      if (user.id === usersId) {
        clickedUserIndex = index;
      }
    });

    if (usersDataChanged === 'status') {
      const clickedUser = updatedUsersData[clickedUserIndex];
      const status = clickedUser.status;

      if (status === 'active') {
        clickedUser.status = 'inactive';
      } else {
        clickedUser.status = 'active';
      }
    }

    if (usersDataChanged === 'delete') {
      updatedUsersData = updatedUsersData.filter((user) => user.id !== usersId);
    }

    if (usersDataChanged === 'add') {
      updatedUsersData[updatedUsersData.length] = newUser;
    }

    setUsersData(updatedUsersData);
    setUsersDataChanged('');
  }, [usersDataChanged, usersData, usersId, newUser]);

  return (
    <div className='App'>
      <Layout>
        <NewUserForm
          getNewUsersData={getNewUsersData}
          usersNum={usersData.length}
        />
        <SortBtn sortUsersList={sortUsersList} isSorted={isSorted} />
        <UsersList users={usersData} getClickedUserId={getClickedUserId} />
      </Layout>
    </div>
  );
}

export default App;
