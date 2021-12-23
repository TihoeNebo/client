import React, { useState, useEffect } from "react";
import { useUserContext } from './UserContext';

export default function ToggleButton({ allowedLevel, title, reloadingLauncher = [false, () => { }], children }) {

    const [{ user, launchers}] = useUserContext();

    const redactorWindowLaunch = launchers ? launchers.redactorWindowLaunch : null;
    const [reloadingLauncherResult, setReloadingLauncher] = reloadingLauncher;
    const [isRedactorOpened, setRedactorOpening] = useState(false);
    const closeRedactor = () => {
        redactorWindowLaunch(null);
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

    useEffect(() => {
        if (isRedactorOpened) redactorWindowLaunch(Elements);
    }, [isRedactorOpened])
    
    return (
        <>
            {
                user.level >= +allowedLevel ? (
                    <div >
                        <button onClick={() => setRedactorOpening(true)}>{title}</button>
                    </div>

                ) : null
            }
        </>
    );
}
    

