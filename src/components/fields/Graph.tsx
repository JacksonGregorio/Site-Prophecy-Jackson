"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function GraphComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "GraphArea" });

    return (
        
        <section id="graph" className="about-area-two">
            <div className="container custom-container-four">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div
                            className="about-img-two text-center wow fadeInLeft"
                            data-wow-delay=".2s"
                        >
                            <Image
                                src="/images/images/graphcolor2.png"
                                alt=""
                                width={491}
                                height={481}
                            ></Image>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="about-content-two wow fadeInRight"
                            data-wow-delay=".2s"
                        >
                            <div className="section-title text-center mb-4 mb-md-20">
                                <span className="sub-title">{t("title")}</span>
                                <h2 className="title">{t("subtitle")}</h2>
                            </div>
                            <p>{t("text")}</p>
                            <div className="about-list ">
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        {t("subtext1")}
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        {t("subtext2")}
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        {t("subtext3")}
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        {t("subtext4")}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape-wrap">
                <Image
                    src="/images/images/about_shape02.png"
                    alt=""
                    className="shape-two rotateme"
                    width={50}
                    height={50}
                ></Image>
            </div>
        </section>
    );
}

export default GraphComponent;
