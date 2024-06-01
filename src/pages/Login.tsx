import {
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Grid
      container
      spacing={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Card elevation={2} sx={{ p: 10, pt: 2 }}>
        <Stack sx={{ textAlign: "center", p: 2 }} spacing={2}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "medium" }}
            color="primary"
          >
            Login
          </Typography>
          <Typography variant="h5" color="primary">
            Welcome back chief!
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Grid item xs={12}>
            <TextField
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              fullWidth
              sx={{ borderRadius: "25px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={password}
              name="email"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              fullWidth
              sx={{ borderRadius: "25px" }}
            />
          </Grid>
          <Button variant="contained" sx={{ height: "50px" }}>
            Log in
          </Button>
        </Stack>
      </Card>
    </Grid>
  );
};

export default Login;
