import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useUserProfile } from '../provider/UserProvider';
export const MenuBar = () => {
    const menus = [
        { name: 'Register', to: '/register' },
        { name: 'Login', to: '/login' },
    ];
    const { profile, setProfile } = useUserProfile();
    const logout = () => setProfile(null);
    return (
        <header className='menubar'>
            <Link to={'/'} className="logo">
                <img src={logo} alt="" />
            </Link>
            <div className="menubox">
                {(profile && profile.firstName) ?
                    (<>
                        <main className="userprofile">
                            Welcome <b>{profile?.firstName}</b>
                        </main>
                        <ul className="menuitem">
                            <li>
                                <NavLink to='/login' onClick={logout} className='link'>Logout</NavLink>
                            </li>
                        </ul>
                    </>
                    ) : (<ul className='menuitem'>
                        {menus.map(
                            (menu, i) =>
                            (
                                <li key={i}>
                                    <NavLink to={menu.to} className='link'>
                                        <span>{menu.name}</span >
                                    </NavLink >
                                </li>
                            )
                        )}
                    </ul>)}
            </div>

        </header>
    );
};