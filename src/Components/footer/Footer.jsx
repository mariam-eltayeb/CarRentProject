import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider, ListItemText, Stack, Typography } from "@mui/material";
import { ListItemButton } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none", // Remove border
}));

const Footer = () => {
  const mystyle = { textAlign: "left", fontSize: "15px" };
  return (
    <div
      style={{
        marginTop: "15px",
        width: "100%",
        boxShadow:
          "0px -7px 4px -1px rgba(0,0,0,0.2), 2px -3px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Box>
        <Grid container spacing={1}>
          <Grid xs={12} md={5} lg={4}>
            <ListItemText sx={{ marginLeft: "80px", paddingRight: "100px" }}>
              <Typography variant="h3" sx={{ color: "#3563E9" }}>
                <b> MORENT</b>
              </Typography>
              <Typography variant="p" sx={{ fontSize: "15px" }}>
                Our vision is to provide convenience and help increase your
                sales business.
              </Typography>
            </ListItemText>
          </Grid>

          <Grid container xs={12} md={7} lg={8}>
            <Grid xs={6} lg={3}>
              <ListItemText>
                <Stack
                  id="category-a"
                  sx={{ fontSize: "20px", textAlign: "left", mb: 2 }}
                >
                  <b>About</b>
                </Stack>
                <Stack component="ul">
                  <ListItemButton sx={mystyle}>How it works</ListItemButton>
                  <ListItemButton sx={mystyle}>Featured</ListItemButton>
                  <ListItemButton sx={mystyle}>Partnership</ListItemButton>
                  <ListItemButton sx={mystyle}>
                    Bussiness Relation
                  </ListItemButton>
                </Stack>
              </ListItemText>
            </Grid>
            <Grid xs={6} lg={3} sx={{ margin: "0 !important" }}>
              <ListItemText>
                <Stack
                  id="category-b"
                  sx={{ fontSize: "20px", textAlign: "left", mb: 2 }}
                >
                  <b>Community</b>
                </Stack>
                <Stack component="ul">
                  <ListItemButton sx={mystyle}>Event</ListItemButton>
                  <ListItemButton sx={mystyle}>blog</ListItemButton>
                  <ListItemButton sx={mystyle}>prodast</ListItemButton>
                  <ListItemButton sx={mystyle}>Invite a friend</ListItemButton>
                </Stack>
              </ListItemText>
            </Grid>
            <Grid xs={6} lg={3} sx={{ alignItems: "left" }}>
              <ListItemText>
                <Stack
                  id="category-c"
                  sx={{ fontSize: "20px", textAlign: "left", mb: 2 }}
                >
                  <b>Socials</b>
                </Stack>
                <Stack component="ul" sx={{ alignItems: "left" }}>
                  <ListItemButton sx={mystyle}>Discord</ListItemButton>
                  <ListItemButton sx={mystyle}>Instagram</ListItemButton>
                  <ListItemButton sx={mystyle}>Twitter</ListItemButton>
                  <ListItemButton sx={mystyle}>Facebook</ListItemButton>
                </Stack>
              </ListItemText>
            </Grid>
          </Grid>
          <Stack
            divider={<Divider orientation="horizontal" color="error"></Divider>}
          ></Stack>

          <Grid
            xs={12}
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
            sx={{ fontSize: "12px" }}
          >
            <Grid sx={{ order: { xs: 2, sm: 1 } }}>
              <Typography sx={{ marginLeft: "80px", fontSize: "15px" }}>
                ©2022 MORENT. All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
