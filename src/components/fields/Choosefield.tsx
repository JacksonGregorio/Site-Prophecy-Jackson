"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function ChooseComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "ChooseArea" });
    return (
        <section className="chart-area chart-bg">
            <div className="container custom-container-four">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-70">
                            <span className="sub-title">{t("title")}</span>
                            <h2 className="title">{t("subtitle")}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div
                            className="choose-item-two wow fadeInUp"
                            data-wow-delay=".2s"
                        >
                            <div className="choose-icon-two">
                                <Image
                                    src="/images/icon/h2_choose_icon01.svg"
                                    alt=""
                                    width={150}
                                    height={150}
                                ></Image>
                            </div>
                            <div className="choose-content">
                                <h2 className="title">
                                    <a>{t("subtitlepayment")}</a>
                                </h2>
                                <p>{t("textpayment")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div
                            className="choose-item-two wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="choose-icon-two">
                                <Image
                                    src="/images/icon/h2_choose_icon02.svg"
                                    alt=""
                                    width={150}
                                    height={150}
                                ></Image>
                            </div>
                            <div className="choose-content">
                                <h2 className="title">
                                    <a>{t("subtitletransfer")}</a>
                                </h2>
                                <p>{t("texttransfer")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div
                            className="choose-item-two wow fadeInUp"
                            data-wow-delay=".6s"
                        >
                            <div className="choose-icon-two">
                                <Image
                                    src="/images/icon/h2_choose_icon03.svg"
                                    alt=""
                                    width={150}
                                    height={150}
                                ></Image>
                            </div>
                            <div className="choose-content">
                                <h2 className="title">
                                    <a>{t("subtitlemeta")}</a>
                                </h2>
                                <p>{t("textmeta")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div
                            className="choose-item-two wow fadeInUp"
                            data-wow-delay=".8s"
                        >
                            <div className="choose-icon-two">
                                <Image
                                    src="/images/icon/h2_choose_icon04.svg"
                                    alt=""
                                    width={150}
                                    height={150}
                                ></Image>
                            </div>
                            <div className="choose-content">
                                <h2 className="title">
                                    <a>{t("subtitlesecurity")}</a>
                                </h2>
                                <p>{t("textsecurity")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseComponent;
