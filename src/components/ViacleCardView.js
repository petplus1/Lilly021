import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/styles";

import CardElemComp from "./CardElemComp";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },
  linkToPage: {
    minHeight: "100px",
    minWidth: "100px",
    flex: "0 0 calc(25% - 10px)"
  }
});

const ViacleCardView = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.listViacle.map(elem => {
        return (
          <Link
            className={classes.linkToPage}
            key={elem.carID}
            to={location => `/card?id=${elem.ID}&v=${props.viacleView}`}
          >
            <CardElemComp viacleView={props.viacleView} elem={elem} />
          </Link>
        );
      })}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps({ menuReducers, authReducers }) {
  return { menu: menuReducers, auth: authReducers };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ViacleCardView)
);
