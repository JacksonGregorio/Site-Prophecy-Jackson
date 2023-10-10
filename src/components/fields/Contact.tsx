"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Element, animateScroll as scroll } from 'react-scroll';

function ContactComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "ContactArea" });

    return (
        <Element name="Contact-roll" className="element">
            <section id="contact" className="document-area pt-60">
                <div className="container custom-container-four">
                    <div className="contact-inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div
                                    className="contact-info-wrap-two wow fadeInLeft"
                                    data-wow-delay=".2s"
                                >
                                    <h2 className="title">
                                        {t("textcontact")}
                                    </h2>
                                    <div className="contact-list-item">
                                        <div className="icon mr-2">
                                            <Image
                                                src="/images/icon/contact_icon01.svg"
                                                alt=""
                                                width={100}
                                                height={100}
                                            ></Image>
                                        </div>
                                        <div className="content">
                                            <p>support@blessed.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-list-item">
                                        <div className="icon mr-2">
                                            <Image
                                                src="/images/icon/contact_icon01.svg"
                                                alt=""
                                                width={100}
                                                height={100}
                                            ></Image>
                                        </div>
                                        <div className="content">
                                            <p>088 (778 886 664)</p>
                                        </div>
                                    </div>
                                    <div className="contact-list-item">
                                        <div className="icon mr-2">
                                            <Image
                                                src="/images/icon/contact_icon01.svg"
                                                alt=""
                                                width={100}
                                                height={100}
                                            ></Image>
                                        </div>
                                        <div className="content">
                                            <p>088 (778 886 664)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div
                                    className="contact-form-wrap-two wow fadeInRight"
                                    data-wow-delay=".2s"
                                >
                                    <h2 className="title">
                                        {t("talkcontact")}
                                    </h2>
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder={t("Namecontact")}
                                            required
                                        ></input>
                                        <input
                                            type="email"
                                            placeholder={t("emailcontact")}
                                            required
                                        ></input>
                                        <textarea
                                            name="massage"
                                            placeholder={t("messagecontact")}
                                            required
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="btn btn-two"
                                        >
                                            {t("messagesend")}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default ContactComponent;
