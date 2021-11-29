import React from "react";
import {Link as RouterLink} from "react-router-dom";

// material-ui
import {useTheme} from "@material-ui/core/styles";
import {
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// project imports
import AuthWrapper1 from "../AuthWrapper1";
import AuthCardWrapper from "../AuthCardWrapper";
import FirebaseLogin from "../firebase-forms/FirebaseLogin";
import AuthFooter from "ui-component/cards/AuthFooter";
import {useState} from "react";
import {auth} from "../../../../Firebase/index";

// assets

//= ===============================|| AUTH3 - LOGIN ||================================//

const ForgotPassword = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [email, setEmail] = useState("");

  const resetPassword = () => {
      auth.sendPasswordResetEmail(email)
      .then(() => {
          console.log("email sent");
          alert("Check your email address for password reset mail");
      }).catch((err) => {
          console.log(err.message);
      })
  };

  return (
    <AuthWrapper1>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{minHeight: "100vh"}}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{minHeight: "calc(100vh - 68px)"}}
          >
            <Grid item sx={{m: {xs: 1, sm: 3}, mb: 0}}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                          >
                            Please reset your password
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : ""}
                          >
                            {/* Enter your email address to reset your password */}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />

                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      resetPassword();
                    }}
                    variant="contained"
                  >
                    RESET PASSWORD
                  </Button>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{m: 3, mt: 1}}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default ForgotPassword;
