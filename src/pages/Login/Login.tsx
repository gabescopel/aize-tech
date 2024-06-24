import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            
            if(isLogged) {
                navigate('/');
            } else {
                alert('nao logado');
            }
        }
    }

    return (
        <div>
            <h2>Página Login</h2>

            <form>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Digite seu E-mail"
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Digite sua Senha"
                />

                <button onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    )
}