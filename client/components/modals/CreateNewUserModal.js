//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  DialogTitle,
  DialogContent,
  Divider,
  Grid,
  DialogActions,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import { UserContext } from "../../App";

// const navigate = useNavigate();
const NewUserInput = styled(TextField)({
  minWidth: "75%",
  margin: "10px",
});

const CreateNewUserModal = ({ handleModalClose }) => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    user_firstname: "",
    user_lastname: "",
    user_email: "",
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (Object.values(formData).some((field) => field === ""))
      setSubmitButtonDisabled(true);
    else setSubmitButtonDisabled(false);
  };
  const handleCreateNewUser = (data) => {
    console.log('formData', data)
    fetch("api/user/newUser", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('yo data', data)
        if (!data.err) {
          setUser(data); //set user id to global context if login is successful
        } //navigate to home}
        else {
          console.log("creation of new user unsuccessful!");
        }
        handleAddNewChild(user);
    });
    // if(user) setTimeout(()=> {handleModalClose(true)}, 250)
  };
  const handleAddNewChild = (data) => {
    console.log('formData', data)
    fetch("api/child/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({users_id: data}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('yo data', data)
        // if (!data.err) {
          handleModalClose()
        // } //navigate to home}
        // else {
        //     console.log("creation of new user unsuccessful!");
        // }
    });
    // if(user) setTimeout(()=> {handleModalClose(true)}, 250)
  };

  return (
    <div>
      <DialogTitle>Create New User</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container direction="column" alignItems="center" justify="center">
          <NewUserInput
            autoFocus
            required={true}
            label="Username"
            id="username"
            type="string"
            onChange={handleFormChange}
          />
          <NewUserInput
            required={true}
            label="Password"
            id="password"
            type="password"
            onChange={handleFormChange}
          />
          <NewUserInput
            required={true}
            label="First Name"
            id="user_firstname"
            type="string"
            onChange={handleFormChange}
          />
          <NewUserInput
            required={true}
            label="Last Name"
            id="user_lastname"
            type="string"
            onChange={handleFormChange}
          />
          <NewUserInput
            required={true}
            label="Email"
            id="user_email"
            type="email"
            onChange={handleFormChange}
          />
          {/* <Typography
          variant="body1"
          color={'error'}
          className={classes.errors}
        >
          {errors.couponNameError}
        </Typography> */}

          <Button
            variant="contained"
            color="primary"
            disabled={submitButtonDisabled}
            onClick={() =>
              handleCreateNewUser({
                username: formData.username,
                password: formData.password,
                user_firstname: formData.user_firstname,
                user_lastname: formData.user_lastname,
                user_email: formData.user_email,
              })
            }
          >
            Submit
          </Button>
        </Grid>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button color="primary" onClick={handleModalClose}>
          Cancel
        </Button>
      </DialogActions>
    </div>
  );
};

export default CreateNewUserModal;
