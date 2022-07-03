import classes from './SortBtn.module.css';

function SortBtn(props) {
  return (
    <button className={classes.btn} onClick={props.sortUsersList}>
      {`${props.isSorted ? 'Sort Z-A' : 'Sort A-Z'}`}
    </button>
  );
}

export default SortBtn;
