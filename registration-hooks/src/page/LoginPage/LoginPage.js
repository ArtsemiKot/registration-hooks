import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from 'react'
import { Link } from 'react-router-dom'
function LoginPage() {
    const [inp, setInp] = useState({
        email: '',
        password: ''
    })

    function collectionInfo(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    function doClick() {
        try{
            if (!inp.email || !inp.password) throw new Error('Не заполнены поля')
            if (!/^[\w\d]+@[\w]+\.[\w]{2,4}$/gm.test(inp.email)) throw new Error('Не корректно введенная почта')
            console.log(inp);
            setInp({
                email: '',
                password: ''
            })
            console.log(inp);
        }catch(error){
            console.log(error.message);
        }
    }
    return (
        <>
            <h1>Login</h1>
            <div>
                <TextField onChange={collectionInfo} name='email' id="outlined-basic" label="Email" variant="outlined" value={inp.email}/>
            </div>
            <div>
                <TextField onChange={collectionInfo} name='password' id="outlined-basic" label="Password" variant="outlined" value={inp.password}/>
            </div>
            <Button onClick={doClick} variant="outlined">Login</Button>
            <p>Don't have an account yet? <Link to={'/reg'}><Button variant="text">SIGN IN</Button></Link></p>
        </>
    );
}

export default LoginPage;