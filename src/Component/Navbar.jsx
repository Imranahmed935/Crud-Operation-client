import { AppBar, Toolbar, styled} from '@mui/material';
import React from 'react';

const Tab = styled('p')`
     font-size:20px;
     margin-right:20px
`;

const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Tab>Crud Operation</Tab>
                <Tab>All Users</Tab>
                <Tab>Add User</Tab>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;