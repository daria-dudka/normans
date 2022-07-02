import classes from './UsersList.module.css';
import UserItem from './UserItem/UserItem';

function UsersList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((user) => (
        <UserItem
          user={user}
          key={user.id}
          getClickedUserId={props.getClickedUserId}
        />
      ))}
    </ul>
  );
}

export default UsersList;
