import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Auth} from "../services/auth-api";
import {Field} from "../ui/molecules/Field";
import {Card, CardHeader, CardContent, CardButton, CardItemSmall} from "../ui/atoms/CardElements";

export const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;

        const res = await Auth.register(email, password);

        if (res.err) {
            setError(res.err);
            return;
        }
        setError(null);
        navigate("/login");
    };
   
    return (
        <Card width = "80%">
            <CardHeader>Login</CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <CardItemSmall>
                        <Field label= "Email" onChange={onEmailChange} name="email" type="email" placeholder="email@email.com" required />
                    </CardItemSmall>    
                    <CardItemSmall>
                        <Field label= "Password" onChange={onPasswordChange} name="password" type="password" placeholder="password" required minLength={8} />
                    </CardItemSmall>
                    <CardItemSmall>
                        <CardButton className="is-primary" type="submit" disabled={!email || !password}>Login</CardButton>
                    </CardItemSmall>
                    <CardItemSmall> 
                        <p style={{color: "red"}}>{error}</p>
                    </CardItemSmall>
                </form>
            </CardContent>
        </Card>
    );
};
