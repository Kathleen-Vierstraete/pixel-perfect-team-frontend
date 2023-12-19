import { FaRegUser } from "react-icons/fa";
import { URL_ACCOUNT, URL_CONNEXION, URL_CREATE_PRODUCT, URL_HOME } from "../../../../constants/urls/urlFrontEnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectHasRole, selectIsLogged, selectUser, signOut } from "../../../../redux-store/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ROLE_ADMIN } from "../../../../constants/rolesConstant";

export const ConnectionButton = () => {
    const isAuthenticated = useSelector(selectIsLogged);
    const hasRole = useSelector((state) => selectHasRole(state, [ROLE_ADMIN]));
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isClick, setIsClick] = useState(false);
    const [panelIsClick, setPanelIsClick] = useState(false);

    const handleLogout = () => {
        dispatch(signOut());
        toogleDropBox();
        navigate(URL_HOME)
    };

    const tooglePanel = () => {
        setPanelIsClick(!panelIsClick)
    }

    const toogleDropBox = () => {
        setIsClick(!isClick);
    };

    const navigated = (route) => {
        navigate(route);
        toogleDropBox();
        setPanelIsClick(false)
    }

    return (
        <div className="flex align-middle justify-center">
            {!isAuthenticated ? (
                <button
                    onClick={() => navigate(URL_CONNEXION)}
                    type="button"
                    data-collapse-toggle="navbar-search"
                    aria-controls="navbar-search"
                    aria-expanded="false"
                    className="text-white hover:bg-gray-900/25 rounded-lg text-sm p-2.5 me-1 flex flex-row justify-end cursor-pointer w-fit"
                >
                    <span className="h-full flex items-center justify-center me-2">
                        <FaRegUser />
                    </span>
                    <span className="text-left w-fit hidden lg:inline">
                        Bonjour
                        <br />
                        Se connecter / S'inscrire
                    </span>
                </button>
            ) : (
                <div className="relative self-center">
                    <button
                        onClick={toogleDropBox}
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                        className="text-white hover:bg-gray-900/25 rounded-lg text-sm p-2.5 me-1 flex flex-row justify-end cursor-pointer w-fit"
                    >
                        <span className="h-full flex items-center justify-center me-2">
                            <FaRegUser />
                        </span>
                        <span className="text-left w-fit hidden lg:inline">
                            Bonjour {user.userFirstName}
                        </span>
                    </button>
                    {isClick &&
                        <div className="absolute z-10 left-0 mt-2 w-48 bg-primary-dark text-white rounded-lg shadow-lg p-2">
                            <button className="block w-full text-left py-2 px-4 rounded-lg hover:bg-primary-light" onClick={() => navigated(URL_ACCOUNT)}>
                                Voir le compte
                            </button>
                            <button className="block w-full text-left py-2 px-4 rounded-lg hover:bg-primary-light" onClick={handleLogout}>
                                Se déconnecter
                            </button>
                            {hasRole && (
                                <button className="block w-full text-left py-2 px-4 rounded-lg hover:bg-primary-light" onClick={tooglePanel}>Panel Admin</button>
                            )}
                            {panelIsClick &&
                                <div className="absolute z-10 top-20 right-48 mt-2 w-48 bg-primary-dark text-white rounded-lg shadow-lg p-2">
                                    <button className="block w-full text-left py-2 px-4 rounded-lg hover:bg-primary-light" onClick={() => navigated(URL_CREATE_PRODUCT)}>Créer un produit</button>
                                </div>
                            }
                        </div>
                    }
                </div>
            )}
        </div>
    );
};
