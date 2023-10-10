"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";

function FooterComponent() {
    const { t } = useTranslation("translation", {
        keyPrefix: "FooterComponent",
    });

    return (
        <footer id="footer">
            <div className="footer-area-two">
                <div className="container custom-container-four">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="footer-social">
                                    <ul>
                                        <li>
                                            <a>
                                                <i className="fab fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fab fa-vimeo-v"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="copyright-text">
                                    <p>{t("blessedcopy")}</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="scroll-up text-center">
                                    <Link
                                        activeClass="active"
                                        to="header-roll"
                                        spy={true}
                                        smooth={true}
                                        offset={-10}
                                        duration={700}
                                        delay={10}
                                    >
                                        <button className="scroll-to-target">
                                            <i className="fas fa-arrow-up"></i>
                                        </button>
                                        {t("scrolltop")}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="footer-bottom-menu">
                                    <ul>
                                        <li>
                                            <a>{t("terms")}</a>
                                        </li>
                                        <li>
                                            <a>{t("privacy")}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
