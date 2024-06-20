import defaultUser from '../../assets/images/defaultUser.png';

export const UserInfo = () => {
    return (
        <div className="flex flex-col items-center gap-4 border-b border-slate-400 pb-4">
            <div className='flex bg-slate-50 rounded-full p-4'>
                <img 
                    width='60px'
                    height='60px'
                    className='object-contain'
                    src={defaultUser} 
                    alt="User Name" 
                    />
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-white font-medium text-base'>
                    Gabriel Scopel
                </p>
                <span className='text-white font-medium text-xs text-center'>
                    Desenvolvedor
                </span>
            </div>
        </div>
    )
}