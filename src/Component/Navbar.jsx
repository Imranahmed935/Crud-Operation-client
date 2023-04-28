import { AppBar, Toolbar, styled} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Tab = styled(NavLink)`
     font-size:20px;
     margin-right:20px;
     color:inherit;
     text-decoration:none;
     font-weight:bold;
`;

const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Tab to='/'>Crud Operation</Tab>
                <Tab to='allUsers'>All Users</Tab>
                <Tab to='addUser'>Add User</Tab>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;