import classes from './DeleteBtn.module.css';

function DeleteBtn(props) {
  function deleteUserHandler(event) {
    if (event.target.classList.contains(classes.btn)) {
      const id = props.id;
      const change = 'delete';
      props.getClickedUserId(id, change);
    }
  }

  return (
    <button className={classes.btn} onClick={deleteUserHandler}>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
    </button>
  );
}

export default DeleteBtn;
