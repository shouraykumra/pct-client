import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  makeStyles,
  createStyles,
  IconButton,
  Select,
  MenuItem,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      marginLeft: "auto",
      "&:hover": {
        display: "block",
      },
    },
    hideSettings: {
      display: "none",
    },
    select: {
      color: "white",
      paddingRight: 10,
      paddingLeft: 10,
      "&:before": {
        borderColor: "white",
      },
      "&:after": {
        borderColor: "white",
      },
    },
    icon: { fill: "white" },
  })
);

export default function MenuBar(props) {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Patient Cost Transparency Client
            </Typography>
            <div
              style={{
                width: 216,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Select
                value={props.selectedSession}
                variant="standard"
                className={classes.select}
                inputProps={{
                  className: classes.select,
                  classes: { icon: classes.icon },
                }}
              >
                {props.sessions.map((sesh, i) => (
                  <MenuItem
                    value={sesh}
                    key={i}
                    onClick={() => {
                      props.setGfeRequestSuccess(false);
                      props.setSelectedSession(sesh);
                      props.setMainPanelTab("1");
                    }}
                  >{`GFE Bundle ${i + 1}`}</MenuItem>
                ))}
                <MenuItem onClick={props.addNewSession}>
                  Create New GFE Bundle
                </MenuItem>
              </Select>
              <div className={classes.button}>
                <IconButton
                  size="medium"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={(e) => props.toggleSettings(!props.showSettings)}
                >
                  <SettingsIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
