import Sidebar from './Sidebar';
import {useDispatch, useSelector} from "react-redux";
import { useLocation } from 'react-router';
import {SET_MENU} from "store/actions";
import Button from "@mui/material/Button";

const TeacherMain = () => {
     const leftDrawerOpened = useSelector(
       (state) => state.customization.opened
     );
     const {state} = useLocation();
     const dispatch = useDispatch();
     const handleLeftDrawerToggle = () => {
       dispatch({type: SET_MENU, opened: !leftDrawerOpened});
     };
    return (
      <div>
        <Sidebar
          drawerOpen={leftDrawerOpened}
          drawerToggle={handleLeftDrawerToggle}
        />
        <h1>{`Welcome to Teacher Dashboard`}</h1>
      </div>
    );
}

export default TeacherMain;