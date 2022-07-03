import { useRef } from 'react';

import classes from './NewUserForm.module.css';

function NewUserForm(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const titleInputRef = useRef();
  const imageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const newUserData = {
      id: props.usersNum + 1,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      title: enteredTitle,
      profileImage: enteredImage,
      status: 'active',
    };

    props.getNewUsersData(newUserData);
    firstNameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    titleInputRef.current.value = '';
    imageInputRef.current.value = '';
  }

  return (
    <form
      data-testid='user-form'
      className={classes.form}
      onSubmit={submitHandler}
    >
      <div className={classes.control}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          required
          id='firstName'
          ref={firstNameInputRef}
        ></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          required
          id='lastName'
          ref={lastNameInputRef}
        ></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' required id='title' ref={titleInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>Profile Image</label>
        <input type='url' required id='image' ref={imageInputRef}></input>
      </div>
      <div className={classes.actions}>
        <button>Add New User</button>
      </div>
    </form>
  );
}

export default NewUserForm;
