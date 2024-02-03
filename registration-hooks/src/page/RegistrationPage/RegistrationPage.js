import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
function RegistrationPage() {
    const [inp, setInp] = useState({
        email: '',
        password: '',
        confirmpassword: ''
    })

    function collectionInfo(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    function doClick() {
        try {
            if (!inp.email || !inp.password || inp.confirmpassword) throw new Error('Не заполнены поля')
            if (!/^[\w\d]+@[\w]+\.[\w]{2,4}$/gm.test(inp.email)) throw new Error('Не корректно введенная почта')
            if (inp.password !== inp.confirmpassword) throw new Error('Пароли не совпадают')
            console.log(inp);
            setInp({
                email: '',
                password: '',
                confirmpassword: ''
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <h1>Registration</h1>
            <div>
                <TextField onChange={collectionInfo} name='email' id="outlined-basic" label="Email" variant="outlined" value={inp.email} />
            </div>
            <div>
                <TextField onChange={collectionInfo} name='password' id="outlined-basic" label="Password" variant="outlined" value={inp.password} />
            </div>
            <div>
                <TextField onChange={collectionInfo} name='confirmpassword' id="outlined-basic" label="ConfirmPassword" variant="outlined" value={inp.confirmpassword} />
            </div>

            <Button onClick={doClick} variant="outlined">Login</Button>
        </>
    );
}

export default RegistrationPage;