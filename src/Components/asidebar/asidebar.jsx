import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Checkbox } from "@mui/material";
import { Slider } from "@mui/material";

const Asidebar = () => {
  return (
    <Box sx={{ py: 2, pr: 2, width: 320 }}>
      <List
        aria-label="Sidebar"
        sx={{
          "--ListItem-paddingLeft": "0px",

          "--ListItemDecorator-size": "64px",
          "--ListItem-minHeight": "0px",
          "--List-nestedInsetStart": "13px",

          '& [role="button"]': {
            borderRadius: "0 20px 20px 0",
          },
          marginLeft: "100px",
        }}
      >
        <Typography variant="p" sx={{ marginBottom: "10px" }}>
          Type
        </Typography>
        <ListItem sx={{ display: "contents" }}>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" defaultChecked />
            <ListItemText>Sport</ListItemText>
            <Typography level="body-sm">(10)</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ display: "contents" }}>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" />
            <ListItemText>SUV</ListItemText>
            <Typography level="body-sm">(12)</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem nested sx={{ display: "contents" }}>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" />
            <ListItemText>MVP</ListItemText>
            <Typography level="body-sm">(16)</Typography>
          </ListItemButton>

          <ListItem sx={{ display: "contents" }}>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid" />
              <ListItemText>Seden</ListItemText>
              <Typography level="body-sm">(20)</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ display: "contents" }}>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid" />
              <ListItemText>Coupe</ListItemText>
              <Typography level="body-sm">(20)</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ display: "contents" }}>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid" />
              <ListItemText>Hatchback</ListItemText>
              <Typography level="body-sm">(20)</Typography>
            </ListItemButton>
          </ListItem>
        </ListItem>
      </List>

      <List
        aria-label="Sidebar"
        sx={{
          "--ListItem-paddingLeft": "0px",

          "--ListItemDecorator-size": "64px",
          "--ListItem-minHeight": "0px",
          "--List-nestedInsetStart": "13px",

          '& [role="button"]': {
            borderRadius: "0 20px 20px 0",
          },
          marginLeft: "100px",
        }}
      >
        <Typography variant="p" sx={{ marginBottom: "10px" }}>
          Capacity
        </Typography>
        <ListItem sx={{ display: "contents" }}>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" defaultChecked />
            <ListItemText>2 Person</ListItemText>
            <Typography level="body-sm">(10)</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ display: "contents" }}>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" />
            <ListItemText>4 Person</ListItemText>
            <Typography level="body-sm">(12)</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem nested sx={{ display: "contents" }}>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" />
            <ListItemText>6 Person</ListItemText>
            <Typography level="body-sm">(16)</Typography>
          </ListItemButton>

          <ListItem sx={{ display: "contents" }}>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid" />
              <ListItemText>8 or More</ListItemText>
              <Typography level="body-sm">(20)</Typography>
            </ListItemButton>
          </ListItem>
        </ListItem>
      </List>
      <List
        aria-label="Sidebar"
        sx={{
          "--ListItem-paddingLeft": "0px",

          "--ListItem-minHeight": "0px",
          "--List-nestedInsetStart": "13px",

          '& [role="button"]': {
            borderRadius: "0 20px 20px 0",
          },
          marginLeft: "100px",
        }}
      >
        <Typography variant="p" sx={{ marginBottom: "5px" }}>
          Price
        </Typography>
        <Slider value={50}></Slider>
        <Typography variant="p" sx={{ fontSize: "15px" }}>
          Max. $100.00
        </Typography>
      </List>
    </Box>
  );
};
export default Asidebar;
