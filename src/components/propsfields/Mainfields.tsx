"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
type TextMainProps = {
    label: string;
    title: string;
    subtitle: string;
    id: string;
    img: string;
};

const TextMainField = ({
    label,
    id,
    title,
    subtitle,
    img,
}: TextMainProps) => {
    const { t } = useTranslation("translation");
    return (
        <section id={id} className="download-area pt-150 pb-140">
            <div className="container custom-container-four">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                        <div
                            className="download-img text-center wow fadeInRight"
                            data-wow-delay=".2s"
                        >
                            <Image
                                src={img}
                                alt=""
                                width={390}
                                height={390}
                            ></Image>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div
                            className="download-content wow fadeInLeft"
                            data-wow-delay=".2s"
                        >
                            <div className="section-title text-center mb-4 mb-md-20">
                                <span className="sub-title">{t(title)}</span>
                                <h2 className="title">{t(subtitle)}</h2>
                            </div>
                            <p>{t(label)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextMainField;
