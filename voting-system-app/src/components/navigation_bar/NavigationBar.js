import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import {withRouter} from 'react-router';
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {connect} from "react-redux";

export const NavigationBar = (props) => {
  const {history, location} = props;
  const {tabs} = props.navBar;
  return (
    <div><AppBar position='relative'>
      <Toolbar>
        <Tabs value={(tabs.find(tab => tab.tabUrl === location.pathname) || {}).tabName} onChange={(event, value) => {
          history.push(tabs.find(tab => tab.tabName === value).tabUrl);
        }}>
          {
            tabs.map((tab) => (<Tab value={tab.tabName} label={tab.tabName}/>))
          }
        </Tabs>
      </Toolbar>
    </AppBar>
    </div>);
};

export const mapStateToProps = (state) => ({
  navBar: state.navigationBar,
});

export default withRouter(connect(mapStateToProps, null)(NavigationBar));