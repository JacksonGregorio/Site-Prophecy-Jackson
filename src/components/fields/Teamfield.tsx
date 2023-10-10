"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Element, animateScroll as scroll } from 'react-scroll';

interface TeamMember {
    office: string;
    name: string;
    imageUrl: string;
}

const team: TeamMember[] = [
    {
        office: "companyposition1",
        name: "Kleber Busto",
        imageUrl: "/images/team/kleberbg2.png",
    },
    {
        office: "companyposition2",
        name: "Guilherme Toti",
        imageUrl: "/images/team/guilherbg.png",
    },
    {
        office: "companyposition3",
        name: "Fábio Soares",
        imageUrl: "/images/team/beatrizbg.png",
    },
    {
        office: "companyposition4",
        name: "Beatriz Busto",
        imageUrl: "/images/team/fabiobg.png",
    },
];

function TeamComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "TeamArea" });

    return (
        <Element name="Team-roll" className="element">
        <section id="team" className="team-area pt-130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="section-title text-center mb-70">
                            <span className="sub-title">{t("title")}</span>
                            <h2 className="title">
                                {t("subtitle")} <br></br>{" "}
                                <span>{t("team")}</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {team.map((team, index) => (
                        <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
                            <div className="team-item">
                                <div className="team-thumb">
                                    <Image src={team.imageUrl} alt=""
                                    width={200}
                                    height={200}></Image>
                                </div>
                                <div className="team-content">
                                    <h2 className="title">{team.name}</h2>
                                    <span>{t(team.office)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </Element>
    );
}

export default TeamComponent;
