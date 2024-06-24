import { useContext, useState } from "react";
import { Menu } from "../Menu";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signout();
        window.location.href = window.location.href;
    }
    
    return (
        <>
            <header className='flex items-center justify-between px-4 md:px-8 py-2 bg-blue-950'>
                <button onClick={() => setOpen(true)}>
                    <svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18H10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 12L16 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 6L20 6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <span className='font-medium text-white text-lg'>AizeTech</span>

                <div className='hidden md:flex items-center'>
                    <button 
                        onClick={handleLogout}
                        className='text-white font-normal text-sm hover:underline'
                        >
                        Sing Out
                    </button>
                </div>
            </header>
            <Menu open={open} setOpen={setOpen} />
        </>
    )
}