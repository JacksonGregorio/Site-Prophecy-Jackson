"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import CountComponent from "./Countdown";

function BannerComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "BannerArea" });
    return (
        <section id="banner" className="banner-area banner-bg">
            <div className="banner-shape-wrap">
                <Image
                    src="/images/banner/banner_shape01.png"
                    alt=""
                    className="img-one"
                    width={100}
                    height={100}
                ></Image>
                <Image
                    src="/images/banner/banner_shape01.png"
                    alt=""
                    className="img-two"
                    width={100}
                    height={100}
                ></Image>
                <Image
                    src="/images/banner/banner_shape01.png"
                    alt=""
                    className="img-three"
                    width={100}
                    height={100}
                ></Image>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="banner-content text-center">
                            <Image
                                src="/images/banner/tabletperfect.png"
                                alt=""
                                width={550}
                                height={350}
                            />
                            <h2 className="title">
                            {t("bannermain")}
                            </h2>
                        </div>
                        <div className="banner-progress-wrap">
                            <ul>
                                <li>Pre Sell</li>
                                <li>Soft Cap</li>
                                <li>Bonus</li>
                            </ul>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <h4 className="title">
                                65% target raised{" "}
                                <span>1 ETH = $1000 = 3177.38 CIC</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-20">
                        <div className="banner-countdown-wrap text-center">
                            <h2 className="title">{t("bannerstart")}</h2>
                            <CountComponent></CountComponent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerComponent;
