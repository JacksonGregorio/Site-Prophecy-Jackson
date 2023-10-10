import "./globals.css"
import "@/assets/css/slick.css";
import "@/assets/css/responsive.css";
import "@/assets/css/odometer.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/default.css";
import "@/assets/css/fontawesome-all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerComponent from '@/components/fields/Banner';
import HeaderComponent from '@/components/header/Header';
import GraphComponent from '@/components/fields/Graph';
import FaqComponent from "@/components/fields/Faqfield";
import TeamComponent from "@/components/fields/Teamfield";
import ContactComponent from "@/components/fields/Contact";
import FooterComponent from "@/components/footer/Footer";
import ChooseComponent from "@/components/fields/Choosefield";
import TextMainField from "@/components/propsfields/Mainfields";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  
  return (
    

    <body className="bg-custom">
      <Suspense fallback={<Loading/>}/>
      <header className="bg-custom">
      <HeaderComponent/>
      </header>
      <main className="bg-custom">
      <BannerComponent/>
      <GraphComponent/>
      <TextMainField id="news" img="/images/banner/imagepropone.jpg" label="ForexArea.text" subtitle="ForexArea.subtitle" title="ForexArea.title" i18nIsDynamicList/>
      <ChooseComponent/>
      <TextMainField id="forex" img="/images/images/forexphone.png" label="NewsArea.text" subtitle="NewsArea.subtitle" title="NewsArea.title"/>
      <TeamComponent/>
      <FaqComponent/>
      <ContactComponent/>
      </main>
      <footer className="bg-custom">
      <FooterComponent/>
      </footer>
    </body>
    
  )
}
