"use client";
import "./Stylebutton.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
type ButtonStyleProps = {
    label: string;
    id: string;
    link: string;
};

const ButtonStyleField = ({ label, id, link }: ButtonStyleProps) => {
    const { t } = useTranslation("translation");
    return (
        <li>
        <button className="button1" id={id} >
            <span className="btn1" >
                
                {t(label)}
                
            </span>
        </button>
        </li>
    );
};

export default ButtonStyleField;
