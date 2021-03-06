import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./views/Home";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Oauth2Callback from "./views/Oauth2Callback";
import NotFound from "./views/NotFound";
import AdminPage from "./views/Admin";
import ManageBots from "./views/Admin/Bots";
import Judges from "./views/Admin/Judges";
import AddBotPage from "./views/AddBot";
import LayoutProvider from "./components/LayoutProvider";

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <LayoutProvider>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/callback/auth" component={Oauth2Callback}/>
                            <Route exact path="/admin" component={AdminPage}/>
                            <Route exact path="/admin/bots" component={ManageBots}/>
                            <Route exact path="/admin/judges" component={Judges}/>
                            <Route exact path="/addbot" component={AddBotPage}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </LayoutProvider>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
