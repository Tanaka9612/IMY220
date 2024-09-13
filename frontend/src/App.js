import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import Help from "./components/Help";
import Login from "./components/Login";
import Profile from "./components/Profile"
import Playlist from "./components/Playlist";
import PlaylistPreview from "./components/PlaylistPreview";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: false, //false before log in
        };
    }
    handleLoginSuccess = () => {
        this.setState({ isLoggedIn: true });
    };

    render(){
        const { isLoggedIn } = this.state;
        return(
            <BrowserRouter>
                <Header isLoggedIn={isLoggedIn}/>
                <Routes>
                    <Route path='/login' element={<Login onLoginSuccess={this.handleLoginSuccess}/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                    <Route path='/help' element={<Help/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    {/* <Route path='/playlist' element={<Playlist/>}/> */}
                    <Route path='/playlistpreview' element={<PlaylistPreview/>}/>
                </Routes>
                {/* <Home/> */}
            </BrowserRouter>
        )
    }
}
export default App;