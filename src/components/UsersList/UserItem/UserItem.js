import classes from './UserItem.module.css';
import { useEffect } from 'react';
import DeleteBtn from '../../DeleteBtn/DeleteBtn';

function UserItem(props) {
  // preloading image
  useEffect(() => {
    const img = new Image();
    img.src = props.user.profileImage;
  }, [props.user.profileImage]);

  const classNameStatus = classes[props.user.status];

  function clickUserHandler(event) {
    if (event.target.classList.contains(classes.item)) {
      const id = props.user.id;
      const change = 'status';
      props.getClickedUserId(id, change);
    }
  }

  return (
    <li
      data-testid='user-item'
      onClick={clickUserHandler}
      className={`${classes.item} ${classNameStatus}`}
    >
      <div className={classes.content}>
        <div className={classes.image}>
          <img
            data-testid='user-img'
            src={props.user.profileImage}
            alt={props.user.lastName}
          />
        </div>
        <h2 data-testid='user-name' className={classes.name}>
          {props.user.firstName} {props.user.lastName}
        </h2>
      </div>
      <p data-testid='user-title' className={classes.title}>
        {props.user.title}
      </p>
      <DeleteBtn id={props.user.id} getClickedUserId={props.getClickedUserId} />
    </li>
  );
}

export default UserItem;
