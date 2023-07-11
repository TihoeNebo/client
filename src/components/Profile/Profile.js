import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { hideProfile } from "../../redux/actions/profile.js";
import ProfileMenu from "./ProfileMenu.js";
import Loading from "../Loading/Loading.js";


export default function Profile() {

    const profile = useSelector(state => state.data.profile);
    const isOpened = useSelector(state => state.popup.profile);
    const isLoaded = useSelector(state => state.loading.profile);
    const dispatch = useDispatch();
    
    if (!isOpened || !profile) return null;

    return (
        <article>
            <button onClick={() => dispatch(hideProfile())}>[X]</button>
            <Loading isLoaded={isLoaded}>
                <header>
                    <h3>{profile.name}</h3>
                    <span>
                        {profile.isOnline ? "Сейчас на сайте" : `Был${profile.gender === 2 ? "a" : ""} на сайте ${profile.lastComing}.`}
                    </span>
                </header>
                <section>
                    <p>Пол:&nbsp;
                        {
                            (() => {
                                switch (profile.gender) {
                                    case 0:
                                        return "не указан";
                                    case 1:
                                        return "мужской";
                                    case 2:
                                        return "женский";

                                }
                            })()
                        }
                    </p>
                    <p>
                        Дата рождения: {profile.birthday}
                    </p>
                    <p>
                        Зарегистрирован: {profile.registeredDate}
                    </p>
                </section>
            </Loading>
            <ProfileMenu profileData={profile} />
        </article>
    )
}


