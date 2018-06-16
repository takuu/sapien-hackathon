import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import { VictoryArea } from "victory";
import { VictoryBar } from "victory";
import { VictoryChart } from "victory";
import { VictoryTheme } from "victory";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Sapien Health
          </Typography>
          <Button color="inherit">Dr. Adelle</Button>
        </Toolbar>
      </AppBar>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Avatar
              alt="Adelle Charles"
              src={require("./images/avatar.jpg")}
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <button
              id="join"
              className="btn btn-primary"
              onClick={() => {
                window.join();
              }}
            >
              Join
            </button>

            <Typography variant="title" gutterBottom>
              Dr Adelle Charles
            </Typography>
            <Typography variant="subheading" gutterBottom>
              Dr. Adelle Charles earned her B.A. in Cognitive Psychology and
              Cognitive Science at Stanford University, and went on to earn his
              Ph.D. in Psychology from the University of Oregon, researching
              complex auditory patterns and pattern processing in expert and
              non-expert populations.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Weight = 136.7 lb Height = 5'8 ft Weight = 177.9 lb Height = 5'7
              ft Weight = 127.7 lb Height = 5'5 ft
            </Typography>
          </div>
          <div className="col-sm">
            <TextField
              label="Blood Glucose"
              id="margin-normal"
              defaultValue="94 my/dl"
              className={classes.textField}
              helperText=""
              margin="normal"
            />

            <TextField
              label="Weekly Meal Score"
              id="margin-normal"
              defaultValue="21/32"
              className={classes.textField}
              helperText=""
              margin="normal"
            />

            <TextField
              label="Pounds Lost"
              id="margin-normal"
              defaultValue="12 lbs"
              className={classes.textField}
              helperText=""
              margin="normal"
            />

            <VictoryChart theme={VictoryTheme.material}>
              <VictoryArea
                style={{ data: { fill: "#c43a31" } }}
                data={[
                  { x: 1, y: 2, y0: 0 },
                  { x: 2, y: 3, y0: 1 },
                  { x: 3, y: 5, y0: 1 },
                  { x: 4, y: 4, y0: 2 },
                  { x: 5, y: 6, y0: 2 }
                ]}
              />
            </VictoryChart>

            <VictoryChart theme={VictoryTheme.material}>
              <VictoryBar
                style={{ data: { fill: "#c43a31" } }}
                alignment="start"
                data={[
                  { x: 1, y: 2, y0: 0 },
                  { x: 2, y: 3, y0: 1 },
                  { x: 3, y: 5, y0: 1 },
                  { x: 4, y: 4, y0: 2 },
                  { x: 5, y: 6, y0: 2 }
                ]}
              />
            </VictoryChart>
          </div>
          <div className="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
