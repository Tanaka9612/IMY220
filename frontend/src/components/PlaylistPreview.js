import React from "react";
import Sidebar from "./Sidebar";
import Playlist from "./Playlist";

class PlaylistPreview extends React.Component{
    render() {
        return (
          <div className="main-layout">
            <Sidebar />
            <div className="main-content">
              <Playlist />
            </div>
          </div>
        );
      }
    }

export default PlaylistPreview;