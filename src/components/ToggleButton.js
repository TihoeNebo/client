import React, { useState } from "react";
import { useUserContext } from './UserContext';

export default function ToggleButton({ allowedLevel, title, reloadingLauncher, children }) {
    const [userData] = useUserContext();

    const [reloadingLauncherResult, setReloadingLauncher] = reloadingLauncher;
    const [isRedactorOpened, setRedactorOpening] = useState(false);
    const closeRedactor = () => {
        setRedactorOpening(false);
        setReloadingLauncher(!reloadingLauncherResult);
    }
    const addProps = (element) => {

        if (!element.props) return element;
        const redactorElement = {
            ...element,
            props: {
                ...element.props,
                closeRedactor: closeRedactor
            }
        };

        return redactorElement;
    }
    const Elements = children.length ? children.map(addProps) : addProps(children);
    
    return (
        <>
            {
                userData.user.level >= +allowedLevel ? (
                    <div >
                        <button onClick={() => setRedactorOpening(true)}>{title}</button>
                        {isRedactorOpened ? Elements : null}
                    </div>

                ) : null
            }
        </>
    );
}
    

