import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled} from '@mui/material';
import React, { useState } from 'react';

const  Container = styled(FormGroup)`
   width:40%;
   margin: 5% auto 0 auto;
   & > div {
    margin-top: 20px;
   }
`;

const userDetails = {
    name:'',
    username:'',
    email:'',
    phone:'',
}

const AddUser = () => {
const [user, setUser] = useState({userDetails});


    const changeValue = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    const addUser = ()=>{
        console.log('yes')
    }

    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Enter your Name</InputLabel>
                <Input onChange={(e)=> changeValue(e)} name='name' />
            </FormControl>
            <FormControl>
                <InputLabel>Enter your UserName</InputLabel>
                <Input onChange={(e)=> changeValue(e)} name='username'/>
            </FormControl>
            <FormControl>
                <InputLabel>Enter your Email</InputLabel>
                <Input onChange={(e)=> changeValue(e)} name='email'/>
            </FormControl>
            <FormControl>
                <InputLabel>Enter your Phone</InputLabel>
                <Input onChange={(e)=> changeValue(e)} name='phone'/>
            </FormControl>
            <FormControl>
                <Button onClick={()=> addUser()} variant='contained'>Add User</Button>
            </FormControl>
        </Container>
    );
};

export default AddUser;