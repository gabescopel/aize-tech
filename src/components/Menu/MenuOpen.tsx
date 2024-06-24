import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from 'clsx';

interface IMenuProps {
    menu: IMenu;
}

interface IMenu {
    name: string;
    options: Option[];
}

interface IOptionListProps {
    options: Option[];
    open: boolean;
}

interface IProcess {
    id: string;
    name: string;
}

interface Option {
    id: string;
    name: string;
    process?: IProcess[];
}
  
const OptionList: React.FC<IOptionListProps> = ({ options, open }) => {
    return (
        <ul
            className={clsx(
                'flex flex-col list-none font-normal text-xs pl-3 transition-all duration-500 overflow-hidden gap-2 border-l border-inherit',
                {
                    'h-0 opacity-0 absolute top-9 w-full': !open,
                    'h-auto opacity-100 relative': open,
                }
            )}
        >
            {options.map(option => {
                const href = `/${option.name.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                    <li key={option.id} className="cursor-pointer" onClick={() => console.log(option)}>
                        <Link to={href}>{option.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

const menuOptions: IMenu[] = [
    {
      name: 'Principal',
      options: [
        { 
            id: '21331232', 
            name: 'Mapeamento',
            process: [
                { id: '21231232', name: 'Todos' },
                { id: '21231232', name: 'Administrativo' },
                { id: '21231232', name: 'Atendimento' },
                { id: '21231232', name: 'Central de Estágios' },
                { id: '21231232', name: 'Compliance' },
                { id: '21231232', name: 'Compras' },
                { id: '21231232', name: 'Controladoria' },
                { id: '21231232', name: 'Endomarketing' },
                { id: '21231232', name: 'Faturamento' },
                { id: '21231232', name: 'Financeiro' },
                { id: '21231232', name: 'Jurídico' },
                { id: '21231232', name: 'Logística' },
                { id: '21231232', name: 'Manutenção' },
                { id: '21231232', name: 'Marketing' },
            ] 
        },
        { id: '21231232', name: 'Treinamentos IA' },
        { id: '21431232', name: 'RPA' },
        { id: '21412323', name: 'Dashboard' },
        { id: '21512323', name: 'Cadastros' },
      ],
    },
];
  
const MenuComponent: React.FC<IMenuProps> = ({ menu }) => {
    const [open, setOpen] = useState(true);

    return (
        <li className="flex flex-col text-white text-sm relative gap-3" onClick={() => setOpen(!open)}>
            <Link to='/'>
                <span className="cursor-pointer font-semibold">{menu.name}</span>
            </Link>
            <OptionList options={menu.options} open={true} />
        </li>
    );
};

export const MenuOpen: React.FC = () => {
    return (
        <ul className="flex flex-col list-none w-40 overflow-y-auto">
            {menuOptions.map(menu => (
                <MenuComponent key={menu.name} menu={menu} />
            ))}
        </ul>
    );
};