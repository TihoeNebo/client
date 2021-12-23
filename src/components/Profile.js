import React, { useState, useEffect } from 'react';
import profileSource from "../profilesource.js";
import ProfileMenu from "./ProfileMenu.js";


export default function Profile({ authorState }) {

    const [authorId, setAuthorId] = authorState;
    const [profileData, setProfileData] = useState(null);
    console.log("Profile")
    useEffect(async () => {
        console.log("Proe")
        if (authorId) setProfileData( await getProfile(authorId));
    }, [true]);

    if (!profileData) return null;

    return (
        <article>
            <button onClick={() => setAuthorId(null)}>[X]</button>
            <header>
                <h3>{profileData.name}</h3>
                <span>
                    {profileData.isOnline ? "Сейчас на сайте" : `Был${profileData.gender === 2 ? "a" : ""} на сайте ${profileData.lastComing}.`}
                </span>
            </header>
            <section>
                <p>Пол:&nbsp; 
                    {
                        (() => {
                            switch (profileData.gender) {
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
                    Дата рождения: {profileData.birthday}
                </p>
                <p>
                    Зарегистрирован: {profileData.registeredDate}
                </p>
            </section>
            <ProfileMenu authorState={authorState} profileData={profileData} />
        </article>
    )
}

function getProfile(authorId) {
    return profileSource;
}


