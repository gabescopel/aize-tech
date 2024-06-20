import { MenuOpen } from "./MenuOpen";
import { UserInfo } from "./UserInfo";
import clsx from "clsx";

type TMenu = {
    open: boolean,
    setOpen: any
}

export const Menu = ({ open, setOpen }: TMenu) => {
    return (
        <div className={clsx(
            "flex flex-col bg-blue-950 px-4 py-8 md:p-8 gap-8 fixed top-0 bottom-0 z-[9] transition-transform",
            {
                'translate-x-0': open,
                'translate-x-[-200%]': !open,
            }
        )}>
            <button className="absolute top-4 right-4" onClick={() => setOpen(false)}>
                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5L19 19M5 19L19 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <UserInfo />
            <MenuOpen />

            <div className='flex md:hidden items-center'>
                <button className='text-white border border-white rounded-full px-2 py-1  font-normal text-sm hover:underline'>
                    Sing Out
                </button>
            </div>
        </div>
    );
};