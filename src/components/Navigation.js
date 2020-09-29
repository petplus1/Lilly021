import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MenuState from "../constants/MenuState";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import HomeIcon from "@material-ui/icons/Home";

import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { Drawer, IconButton } from "@material-ui/core";
import { white } from "color-name";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submenu: {
        fast_search: false,
        viacle_offer: false,
        selling: false,
        insurance: false
      }
    };
  }

  getNavigationClass() {
    if (this.props.menu.state === MenuState.SHORT) {
      return "navigation-content-container short";
    } else {
      return "navigation-content-container";
    }
  }

  isCurrentPath(path) {
    return this.props.history.location.pathname == path;
  }

  toggleSubmenu(key) {
    let submenu = this.state.submenu;

    submenu[key] = !submenu[key];

    this.setState({
      submenu: submenu
    });
  }

  render() {
    return (
      <Drawer variant="permanent" id="navigation">
        <div className={this.getNavigationClass()}>
          <Link to="/">
            <div className="logo-container">
              <div className="logo">
                <FlashOnIcon style={{ fontSize: 40, color: "#fff" }} />
              </div>
              <div className="title">
                <h2 style={{ letterSpacing: 4, fontStyle: "italic" }}>
                  CarShopFlash
                </h2>
              </div>
            </div>
          </Link>
          <List component="nav">
            <ListItem
              className="navigation-item"
              button
              onClick={() => this.toggleSubmenu("fast_search")}
            >
              <ListItemIcon className="navigation-icon">
                <SettingsEthernetIcon />
              </ListItemIcon>

              <ListItemText
                inset
                style={{ textAlign: "right" }}
                primary="Shortcut"
                className="navigation-text"
              />
              {this.state.submenu.fast_search ? (
                <ExpandLess className="navigation-icon" />
              ) : (
                <ExpandMore className="navigation-icon" />
              )}
            </ListItem>
            <Collapse
              in={this.state.submenu.fast_search}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding className="submenu">
                <Link
                  to={"/"}
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem className="navigation-item">
                    <ListItemText
                      inset
                      primary="Newest Ads"
                      className="navigation-text"
                    />
                  </ListItem>
                </Link>
                <Link
                  to={"/"}
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem className="navigation-item">
                    <ListItemText
                      inset
                      primary="Most looked For"
                      className="navigation-text"
                    />
                  </ListItem>
                </Link>
                <Link
                  to={"/"}
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem className="navigation-item">
                    <ListItemText
                      inset
                      primary="Car For Trade"
                      className="navigation-text"
                    />
                  </ListItem>
                </Link>
                <Link
                  to={"/"}
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem className="navigation-item">
                    <ListItemText
                      inset
                      primary="Newest Cars"
                      className="navigation-text"
                    />
                  </ListItem>
                </Link>
              </List>
            </Collapse>
            {/* <div></div> pocetak */}
            <ListItem
              className="navigation-item"
              button
              onClick={() => this.toggleSubmenu("viacle_offer")}
            >
              <ListItemText
                inset
                primary="Offer"
                style={{ textAlign: "right" }}
                className="navigation-text"
              />
              {this.state.submenu.viacle_offer ? (
                <ExpandLess className="navigation-icon" />
              ) : (
                <ExpandMore className="navigation-icon" />
              )}
            </ListItem>
            <Collapse
              in={this.state.submenu.viacle_offer}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding className="submenu">
                <Link
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem>
                    <DriveEtaIcon style={{ color: "#fff", margin: "0 auto" }} />
                  </ListItem>
                </Link>
                <Link
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem>
                    <MotorcycleIcon
                      style={{ color: "#fff", margin: "0 auto" }}
                    />
                  </ListItem>
                </Link>
                <Link
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem>
                    <LocalShippingIcon
                      style={{ color: "#fff", margin: "0 auto" }}
                    />
                  </ListItem>
                </Link>
              </List>
            </Collapse>
            {/* <div></div> */}
            <ListItem
              className="navigation-item"
              button
              onClick={() => this.toggleSubmenu("selling")}
            >
              <ListItemText
                inset
                primary="Im Selling"
                style={{ textAlign: "right" }}
                className="navigation-text"
              />
              {this.state.submenu.selling ? (
                <ExpandLess className="navigation-icon" />
              ) : (
                <ExpandMore className="navigation-icon" />
              )}
            </ListItem>
            <Collapse
              in={this.state.submenu.selling}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding className="submenu">
                <Link
                  to={"/"}
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem className="navigation-item">
                    <ListItemText
                      inset
                      primary="Send mail"
                      className="navigation-text"
                    />
                  </ListItem>
                </Link>
                <Link
                  to={"/"}
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem className="navigation-item">
                    <ListItemText
                      inset
                      primary="Sent mail"
                      className="navigation-text"
                    />
                  </ListItem>
                </Link>
              </List>
            </Collapse>
            {/* <div></div> pocetak */}
            <ListItem
              className="navigation-item"
              button
              onClick={() => this.toggleSubmenu("insurance")}
            >
              <ListItemText
                inset
                primary="Insurance"
                style={{ textAlign: "right" }}
                className="navigation-text"
              />
              {this.state.submenu.insurance ? (
                <ExpandLess className="navigation-icon" />
              ) : (
                <ExpandMore className="navigation-icon" />
              )}
            </ListItem>
            <Collapse
              in={this.state.submenu.insurance}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding className="submenu">
                <Link
                  to={"/"}
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem className="navigation-item">
                    <ListItemText
                      inset
                      primary="Sent mail"
                      className="navigation-text"
                    />
                  </ListItem>
                </Link>
                <Link
                  to={"/"}
                  className={
                    this.isCurrentPath("/")
                      ? "navigation-link active"
                      : "navigation-link"
                  }
                >
                  <ListItem className="navigation-item">
                    <ListItemText
                      inset
                      primary="Sent mail"
                      className="navigation-text"
                    />
                  </ListItem>
                </Link>
              </List>
            </Collapse>
            {/* <div></div> */}
            <Link
              to={"/"}
              className={
                this.isCurrentPath("/")
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <ListItem className="navigation-item">
                <ListItemText
                  inset
                  style={{ textAlign: "left" }}
                  primary="Tips and News"
                  className="navigation-text"
                />
              </ListItem>
            </Link>
            <Link
              to={"/"}
              className={
                this.isCurrentPath("/")
                  ? "navigation-link active"
                  : "navigation-link"
              }
            >
              <ListItem className="navigation-item">
                <ListItemText
                  style={{ textAlign: "left" }}
                  inset
                  primary="Offer for Insurance"
                  className="navigation-text"
                />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps({ menuReducers, authReducers }) {
  return { menu: menuReducers, auth: authReducers };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigation)
);
