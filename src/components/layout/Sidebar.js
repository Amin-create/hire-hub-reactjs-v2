
import { Icons, } from '../../components';
import logo from "../../assets/images/logo/logo.png"
import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../icon';

const NavItem = ({ value, slug }) => {
    const pathParts = slug.split('/');
    const _slug = pathParts[pathParts.length - 1];
    return (
        <li className='pb-2'>
            <NavLink
                to={value?.path}
                className={`flex justify-start items-center gap-x-2  ${value?.path === _slug ? "text-white bg-gradient-to-r from-purple-4 to-purple-3" : "text-gray-6"} hover:text-white text-[14px] hover:bg-gradient-to-r hover:from-purple-4 hover:to-purple-3 transition-all rounded-[8px] px-3 py-[10px]`}
            >
                <span className='text-[18px]'>{value?.icon}</span>
                <span className='leading-[19px]'>{value?.name}</span>
            </NavLink>
        </li >
    );
};
function Sidebar({ isSidebarOpen, toggleSidebar, menu }) {


    const location = useLocation();

    return (
        <aside
            className={`${isSidebarOpen ? 'translate-x-0' : ''} 
                fixed md:sticky top-0 z-50 min-w-[264px] max-w-[264px] h-screen
                text-black bg-white 
                -translate-x-full md:translate-x-0 transition-all shadow-md
                flex flex-col justify-between 
            `}
        >
            <div className="flex flex-col justify-start h-[86%]">
                <div className="relative pt-6 pb-6 px-2">
                    <img src={logo} className='max-w-[200 px]' alt="logo" />
                    <span className={`absolute top-[18px] right-[-13px] ${isSidebarOpen ? 'block' : 'hidden'}  md:hidden text-white text-[20px] cursor-pointer border-[5px] border-white rounded-full bg-purple-1`}
                        onClick={toggleSidebar}>
                        <Icons.GoChevronLeft />
                    </span>
                </div>
                <ul className="max-h-[610px] overflow-y-scroll scrollbar p-4">
                    {menu.map((value) => {
                        return (
                            <NavItem key={value * 2} value={value} slug={location?.pathname} />
                        )
                    })}
                </ul>
            </div>
            <a className='block h-[80px] px-4 pt-2 pb-4'>
                <NavLink
                    to={'/login'}
                    className='flex justify-start items-center gap-x-2 text-gray-6 hover:text-white text-[14px] hover:bg-gradient-to-r hover:from-purple-4 hover:to-purple-3 transition-all rounded-[8px] px-3 py-[10px]'
                >
                    <span className='text-[18px]'>
                        <Icon name="Logout" />
                    </span>
                    <span>Logout</span>
                </NavLink>
            </a>
        </aside>
    )
}

export default Sidebar