import React from 'react';
import { connect } from "react-redux";
import { hideProfile } from "../redux/actions.js";
import ProfileMenu from "./ProfileMenu.js";


function Profile({ hideProfile, profile}) {

    

    if (!profile) return null;

    return (
        <article>
            <button onClick={() => hideProfile()}>[X]</button>
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
            <ProfileMenu profileData={profile} />
        </article>
    )
}

const mapStateToProps = state => ({ profile: state.popup.profile });
const mapDispatchToProps = { hideProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


