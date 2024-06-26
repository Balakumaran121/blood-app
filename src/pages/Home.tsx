import React from "react";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UserBlood } from "../types";

const styles = {
  container: {
    height: "100vh",
    background: "whitesmoke",
  },
  redBackground: {
    background: "red",
  },
  card: {
    p: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
  },
  button: {
    borderRadius: "50px",
    width: "50%",
  },
};
const Home: React.FC<UserBlood> = ({ bloodGroup, bloodType }) => {
  console.log(bloodGroup, bloodType);
  return (
    <Grid
      container
      spacing={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={styles.container}
    >
      <Grid item xs={12} sm={6}>
        <Card sx={styles.card}>
          <Stack
            spacing={2}
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "medium" }}>
              Welcome to Blood Helper
            </Typography>
            <Button
              variant="contained"
              sx={{ ...styles.button, alignSelf: "center" }}
            >
              Login
            </Button>
            <Typography component={Link} to={"/signup"}>
              Don't Have an Account Please Sign in?
            </Typography>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
