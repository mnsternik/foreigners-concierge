import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('pl'); 

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    useEffect(() => {
        setSelectedLanguage(i18n.language); 
        // console.log(i18n.language);
        console.log(selectedLanguage);
    }, [])

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16" style={{ verticalAlign: 'text-top' }}>
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${dropdownOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="d-flex navbar-nav me-auto mb-2 mb-lg-0" style={{ width: '100%' }}>
                        <li className="nav-item px-1">
                            <NavLink className="nav-link" to="/about" onClick={closeDropdown}>{t('navbar.about')}</NavLink>
                        </li>
                        <li className="nav-item px-1">
                            <NavLink className="nav-link" to="/companies" onClick={closeDropdown}>{t('navbar.companies')}</NavLink>
                        </li>
                        <li className="nav-item px-1">
                            <NavLink className="nav-link" to="/foreigners" onClick={closeDropdown}>{t('navbar.foreigners')}</NavLink>
                        </li>
                        <li className="nav-item px-1">
                            <NavLink className="nav-link" to="/contact" onClick={closeDropdown}>{t('navbar.contact')}</NavLink>
                        </li>
                        <li className="ms-lg-auto d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
                            </svg>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ width: "auto" }}
                                defaultValue={selectedLanguage}
                                onChange={(event => changeLanguage(event.target.value))}>
                                    <option value="pl">Polski</option>
                                    <option value="ua">українська</option>
                                    <option value="2">Русский</option>
                                    <option value="en">English</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;