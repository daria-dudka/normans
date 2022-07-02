import classes from './UserItem.module.css';
import { useEffect } from 'react';

function UserItem(props) {
  // preloading image
  useEffect(() => {
    const img = new Image();
    img.src = props.user.profileImage;
  }, [props.user.profileImage]);

  const className = classes[props.user.status];

  function clickUserHandler() {
    const id = props.user.id;
    props.getClickedUserId(id);
  }

  return (
    <li onClick={clickUserHandler} className={`${classes.item} ${className}`}>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src={props.user.profileImage} alt={props.user.lastName} />
        </div>
        <h2 className={classes.name}>
          {props.user.firstName} {props.user.lastName}
        </h2>
      </div>

      <p className={classes.title}>{props.user.title}</p>
    </li>
  );
}

export default UserItem;
