"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Element, animateScroll as scroll } from 'react-scroll';


function FaqComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "FaqArea" });
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <Element name="Faq-roll" className="element">
        <section id="faq" className="faq-area">
            <div className="container custom-container-four">
                <div className="faq-shape-wrap">
                    <Image
                        src="/images/images/faq_shape01.png"
                        alt=""
                        className="img-one"
                        width={50}
                        height={50}
                    ></Image>
                    <Image
                        src="/images/images/faq_shape02.png"
                        alt=""
                        className="img-two rotateme"
                        width={50}
                        height={50}
                    ></Image>
                    <Image
                        src="/images/images/faq_shape03.png"
                        alt=""
                        className="img-three"
                        width={50}
                        height={50}
                    ></Image>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-two text-center mb-60">
                            <h2 className="title">{t("title")}</h2>
                        </div>
                        <div
                            className="faq-wrap wow fadeInUp"
                            data-wow-delay=".2s"
                        >
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id={`headingOne`}
                                    >
                                        <button
                                            className={`accordion-button ${
                                                activeIndex === 1
                                                    ? "collapsed"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => toggleAccordion(1)}
                                        >
                                            {t("questioninstall")}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapseOne`}
                                        className={`accordion-collapse collapse ${
                                            activeIndex === 1 ? "show" : ""
                                        }`}
                                        aria-labelledby={`headingOne`}
                                    >
                                        <div className="accordion-body">
                                            <p className="pt-2">
                                                {t("answerinstall")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id={`headingTwo`}
                                    >
                                        <button
                                            className={`accordion-button ${
                                                activeIndex === 2
                                                    ? "collapsed"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => toggleAccordion(2)}
                                        >
                                            {t("questionmeta")}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapseTwo`}
                                        className={`accordion-collapse collapse ${
                                            activeIndex === 2 ? "show" : ""
                                        }`}
                                        aria-labelledby={`headingTwo`}
                                    >
                                        <div className="accordion-body">
                                            <p className="pt-2">
                                                {t("answermeta")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id={`headingThree`}
                                    >
                                        <button
                                            className={`accordion-button ${
                                                activeIndex === 3
                                                    ? "collapsed"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => toggleAccordion(3)}
                                        >
                                            {t("questionvalue")}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapseThree`}
                                        className={`accordion-collapse collapse ${
                                            activeIndex === 3 ? "show" : ""
                                        }`}
                                        aria-labelledby={`headingThree`}
                                    >
                                        <div className="accordion-body">
                                            <p className="pt-2">
                                                {t("answervalue")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id={`headingFour`}
                                    >
                                        <button
                                            className={`accordion-button ${
                                                activeIndex === 4
                                                    ? "collapsed"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => toggleAccordion(4)}
                                        >
                                            {t("questionforex")}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapseFour`}
                                        className={`accordion-collapse collapse ${
                                            activeIndex === 4 ? "show" : ""
                                        }`}
                                        aria-labelledby={`headingFour`}
                                    >
                                        <div className="accordion-body">
                                            <p className="pt-2">
                                                {t("answerforex")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id={`headingFive`}
                                    >
                                        <button
                                            className={`accordion-button ${
                                                activeIndex === 5
                                                    ? "collapsed"
                                                    : ""
                                            }`}
                                            type="button"
                                            onClick={() => toggleAccordion(5)}
                                        >
                                            {t("questionsoftware")}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapseFive`}
                                        className={`accordion-collapse collapse ${
                                            activeIndex === 5 ? "show" : ""
                                        }`}
                                        aria-labelledby={`headingFive`}
                                    >
                                        <div className="accordion-body">
                                            <p className="pt-2">
                                                {t("answersoftware")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Element>
    );
}

export default FaqComponent;
