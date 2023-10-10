import "@/assets/css/slick.css";
import "@/assets/css/responsive.css";
import "@/assets/css/odometer.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/default.css";
import "@/assets/css/fontawesome-all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerComponent from '@/components/fields/Banner';
import HeaderComponent from '@/components/header/Header';
import FooterComponent from "@/components/footer/Footer";
import SlateShowArea from "@/components/fields/Slideshow";
import { Suspense } from "react";
import Loading from "../loading";

export default function Home2() {
  return (
    <body className="bg-custom">
    <HeaderComponent/>
    <Suspense fallback={<Loading/>}/>
    <main>
    <BannerComponent/>
    <SlateShowArea/>
    </main>
    <FooterComponent/>
  </body>
  )
}
