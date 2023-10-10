"use client";
import "@/assets/css/slick.css";
import "@/assets/css/responsive.css";
import "@/assets/css/odometer.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/default.css";
import "@/assets/css/fontawesome-all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../i18n/i18n";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import ButtonStyleField from "../propsfields/buttons/Stylebutton";

function HeaderComponent() {
    useEffect(() => {
        const hasChildrenMenus =
            document.querySelectorAll(".menu-area li.menu-item-has-children ul")
                .length > 0;

        if (hasChildrenMenus) {
            document
                .querySelectorAll(
                    ".menu-area .navigation li.menu-item-has-children",
                )
                .forEach((menuItem) => {
                    const dropdownButton = document.createElement("div");
                    dropdownButton.className = "dropdown-btn";
                    dropdownButton.innerHTML =
                        '<span class="fas fa-angle-down"></span>';
                    menuItem.appendChild(dropdownButton);
                });
        }
    });

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    const [currentLanguage, setCurrentLanguage] = useState<string>("pt");

    const { t, i18n } = useTranslation("translation", {
        keyPrefix: "HeaderComponent",
    });

    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value)
            .then(() => {
                setCurrentLanguage(value);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Element name="header-roll" className="element">
            <header id="header">
                <div id="header-fixed-height"></div>
                <div
                    id="sticky-header"
                    className={`menu-area ${
                        mobileMenuVisible ? "mobile-menu-visible" : ""
                    }`}
                >
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div
                                    className="mobile-nav-toggler "
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-bars"></i>
                                </div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <a href="index.html">
                                                <Image
                                                    src="/images/logo/newlogo.png"
                                                    alt=""
                                                    width={140}
                                                    height={83}
                                                />
                                            </a>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="menu-item-has-children">
                                                    <a
                                                        href="/#header"
                                                        className="section-link"
                                                    >
                                                        {t("home")}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="section-link">
                                                        <Link
                                                            className="Link"
                                                            activeClass="active"
                                                            to="Faq-roll"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-10}
                                                            duration={700}
                                                            delay={100}
                                                        >
                                                            {t("faq")}
                                                        </Link>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="section-link">
                                                        <Link
                                                            className="Link"
                                                            activeClass="active"
                                                            to="Contact-roll"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-10}
                                                            duration={700}
                                                            delay={100}
                                                        >
                                                            {t("contactus")}
                                                        </Link>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="section-link">
                                                        <Link
                                                            className="Link"
                                                            activeClass="active"
                                                            to="Contact-roll"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-10}
                                                            duration={700}
                                                            delay={100}
                                                        >
                                                            {t("team")}
                                                        </Link>
                                                    </a>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="/slideshow">
                                                        {t("more")}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul>
                                                <li className="header-lang">
                                                    <span className="selected-lang">
                                                        {t("PT-BR")}
                                                    </span>
                                                    <ul className="lang-list">
                                                        <li>
                                                            <a className="pl-15"
                                                                onClick={() =>
                                                                    changeLanguage(
                                                                        "pt",
                                                                    )
                                                                }
                                                            >
                                                                PT-BR
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="pl-15"
                                                                onClick={() =>
                                                                    changeLanguage(
                                                                        "en",
                                                                    )
                                                                }
                                                            >
                                                                EN-US
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="pl-15"
                                                                onClick={() =>
                                                                    changeLanguage(
                                                                        "es",
                                                                    )
                                                                }
                                                            >
                                                                ES-ES
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <ButtonStyleField link="index.html" label="HeaderComponent.contact" id="buttonheader"/>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div
                                            className="close-btn"
                                            onClick={toggleMobileMenu}
                                        >
                                            <i className="fas fa-times"></i>
                                        </div>
                                        <div className="nav-logo">
                                            <a href="index.html">
                                                <Image
                                                    src="/images/logo/newlogo.png"
                                                    alt=""
                                                    title=""
                                                    width={140}
                                                    height={83}
                                                />
                                            </a>
                                        </div>
                                        <div className="menu-outer"></div>
                                        <div className="">
                                            <ul className="navigation">
                                                <li>
                                                    <a
                                                        href="#header"
                                                        className="section-link"
                                                    >
                                                        {t("home")}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="section-link">
                                                        <Link
                                                            className="Link"
                                                            activeClass="active"
                                                            to="Faq-roll"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-10}
                                                            duration={700}
                                                            delay={100}
                                                        >
                                                            {t("faq")}
                                                        </Link>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="section-link">
                                                        <Link
                                                            className="Link"
                                                            activeClass="active"
                                                            to="Contact-roll"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-10}
                                                            duration={700}
                                                            delay={100}
                                                        >
                                                            {t("contactus")}
                                                        </Link>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/slideshow"
                                                        className="section-link"
                                                    >
                                                        {t("more")}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="section-link">
                                                        <Link
                                                            className="Link"
                                                            activeClass="active"
                                                            to="Contact-roll"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-10}
                                                            duration={700}
                                                            delay={100}
                                                        >
                                                            {t("team")}
                                                        </Link>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div
                                    className="menu-backdrop"
                                    onClick={toggleMobileMenu}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Element>
    );
}

export default HeaderComponent;
