"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function SlateShowArea() {
    const { t } = useTranslation("translation", { keyPrefix: "SlideShowArea" });

    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        "/images/slide/slide1.png",
        "/images/slide/slide2.png",
        "/images/slide/slide4.png",
        "/images/slide/slide5.png",
        "/images/slide/slide6.png",
        "/images/slide/slide7.png",
        "/images/slide/slide8.png",
        "/images/slide/slide9.png",
        "/images/slide/slide10.png",
        "/images/slide/slide10.png",
        "/images/slide/slide10.png",
        "/images/slide/slide13.png",
    ];
    const texts = [
        t("textslide1"),
        t("textslide2"),
        t("textslide3"),
        t("textslide4"),
        t("textslide5"),
        t("textslide6"),
        t("textslide7"),
        t("textslide8"),
        t("textslide9"),
        t("textslide10"),
        t("textslide11"),
        t("textslide12"),
    ];

    const titles = [
        t("titleslide1"),
        t("titleslide2"),
        t("titleslide3"),
        t("titleslide4"),
        t("titleslide5"),
        t("titleslide6"),
        t("titleslide7"),
        t("titleslide8"),
        t("titleslide9"),
        t("titleslide10"),
        t("titleslide11"),
        t("titleslide12"),
    ];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const previousSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1,
        );
    };

    return (
        <section className="download-area pt-150 pb-140">
            <div className="container custom-container-four">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                        <div
                            className="download-img text-center wow fadeInRight"
                            data-wow-delay=".2s"
                        >
                            <Image
                                src={images[currentSlide]}
                                alt="slide"
                                width={490}
                                height={490}
                            />
                        </div>
                        <div className="d-flex justify-content-around pt-5">
                            <button
                                className="custom-button"
                                onClick={previousSlide}
                            >
                                {t("previous")}
                            </button>
                            <p>
                                Slide {currentSlide + 1} / {images.length}
                            </p>
                            <button
                                className="custom-button"
                                onClick={nextSlide}
                            >
                                {t("next")}
                            </button>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div
                            className="download-content wow fadeInLeft"
                            data-wow-delay=".2s"
                        >
                            <div className="section-title text-center mb-4 mb-md-20">
                                <span className="sub-title">
                                    {t("subtitle")}
                                </span>
                                <h2 className="title">
                                    {titles[currentSlide]}
                                </h2>
                            </div>
                            <p>{texts[currentSlide]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SlateShowArea;
