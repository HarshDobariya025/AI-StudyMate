import React, { useContext, useState } from "react";
import "./SidebarDark.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom"; 
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import SortIcon from '@mui/icons-material/Sort';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { UserButton, useUser } from "@clerk/clerk-react";
import UndoIcon from '@mui/icons-material/Undo';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompts,newChat} = useContext(Context); 
  const { user } = useUser();

  const loadPrompt = async (prompt) =>{
    setRecentPrompts(prompt);
    await onSent(prompt);
  }

  return (
    <div className="sidebar">
      {/* ------------------------Top----------------------------- */}
      <div className="top">
        <SortIcon onClick={() => setExtended((prev) => !prev)} className="menu"/>
        <div onClick={()=>newChat()} className="new-chat">
          <AddIcon />
          {extended ? <p className="chat">New chat</p> : null}
        </div>
        <NavLink to="/">
          <div className="bottom-item recent-entry">
            <HomeIcon />
            {extended ? <p>Home</p> : null}
          </div>
        </NavLink>
        <NavLink to="/profile"> 
          <div className="bottom-item recent-entry">
            <PersonRoundedIcon />
            {extended ? <p>Account</p> : null}
          </div>
        </NavLink>
        <NavLink to="/resume">
          <div className="bottom-item recent-entry">
            <ContactPageIcon />
            {extended ? <p>Resume</p> : null}
          </div>
        </NavLink>
        <NavLink to="/courses">
          <div className="bottom-item recent-entry">
            <ImportContactsRoundedIcon />
            {extended ? <p>Course</p> : null}
          </div>
        </NavLink>
        <NavLink to="/scholarship">
          <div className="bottom-item recent-entry">
            <AccountBalanceWalletIcon />
            {extended ? <p>Scholarship</p> : null}
          </div>
        </NavLink>
        <NavLink to="/Doubt">
          <div className="bottom-item recent-entry">
            <TipsAndUpdatesIcon />
            {extended ? <p>Doubts</p> : null}
          </div>
        </NavLink>

          {/* {extended ? (
            <div className="recent">
              <p className="recent-title">Recent Chats</p>
              {
                prevPrompts.map((item,index)=>{
                  return(
                    <div onClick={()=>loadPrompt(item)} className="recent-entry">
                      <UndoIcon />
                      <p>{item.slice(0,18)}...</p>
                    </div>
                  )
                })
              }
            </div>
          ) : null} */}
      </div>

      {/* ------------------------Bottom----------------------------- */}
      <div className="bottom">
        <NavLink to="/help">
          <div className="bottom-item recent-entry">
            <HelpOutlineIcon />
            {extended ? <p>Help</p> : null}
          </div>
        </NavLink>
        <NavLink to="/help">
          <div className="bottom-item recent-entry">
            <AccessTimeIcon />
            {extended ? <p>Feedback</p> : null}
          </div>
        </NavLink>
        <NavLink to="/setting">
          <div className="bottom-item recent-entry">
            <SettingsIcon />
            {extended ? <p>Settings</p> : null}
          </div>
        </NavLink>
        {/* <div className="bottom-item recent-entry">
          <p><UserButton/></p>
          {extended ? <p>Setting</p> : null}
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
