import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from 'react'
function LoginPage() {
    const [inp, setInp] = useState({
        email: '',
        password: ''
    })

    function collectionInfo(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    function doClick() {
        console.log(inp);
    }
    return (
        <>
            <h1>Login</h1>
            <div>
                <TextField onChange={collectionInfo} name='email' id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <div>
                <TextField onChange={collectionInfo} name='password' id="outlined-basic" label="Password" variant="outlined" />
            </div>
            <Button onClick={doClick} variant="outlined">Login</Button>
        </>
    );
}

export default LoginPage;