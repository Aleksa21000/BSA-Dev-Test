import navigation from "./components/navigation";
import testemonialsCarousel from "./components/testemonialsCarousel";
import anchorController from "./components/anchorController";
import "./components/Parallax";

const app = () => {
    navigation();
    testemonialsCarousel();
    anchorController();
};

app();
