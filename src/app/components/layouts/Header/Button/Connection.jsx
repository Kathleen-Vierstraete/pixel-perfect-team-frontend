import { FaRegUser } from "react-icons/fa";
import { URL_ACCOUNT, URL_CONNEXION } from "../../../../constants/urls/urlFrontEnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectIsLogged, selectUser, signOut } from "../../../../redux-store/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ConnectionButton = () => {
    const isAuthenticated = useSelector(selectIsLogged);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isClick, setIsClick] = useState(false);

    const handleLogout = () => {
        dispatch(signOut());
    };

    const toogleDropBox = () => {
        setIsClick(!isClick);
    };

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
                <div className="relative">
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
                        <div className="absolute left-0 mt-2 w-48 bg-primary-dark text-white rounded-lg shadow-lg p-2">
                            <button className="block w-full text-left py-2 px-4 rounded-lg hover:bg-primary-light" onClick={() => navigate(URL_ACCOUNT)}>
                                Voir le compte
                            </button>
                            <button className="block w-full text-left py-2 px-4 rounded-lg hover:bg-primary-light" onClick={handleLogout}>
                                Se déconnecter
                            </button>
                        </div>
                    }
                </div>
            )}
        </div>
    );
};
