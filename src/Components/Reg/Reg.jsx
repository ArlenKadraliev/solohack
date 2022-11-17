import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthContexProvider";

const Reg = () => {
  const { email, setEmail, emailReset } = useContext(authContext);

  return (
    <>
      <Box component="form" noValidate sx={{ mt: 5 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          autoComplete="email"
          autoFocus
        />
        {/* <Link to="/wait"> */}
        <Button href="/wait" onClick={() => emailReset()}>
          RESET
        </Button>
        {/* </Link>  */}
      </Box>
    </>
  );
};

export default Reg;
