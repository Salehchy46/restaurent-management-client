import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div data-aos='fade-up'>
            <div
                className="hero min-h-72 my-10 rounded-2xl"

                style={{
                    backgroundImage:
                        "url(https://tendersworld.in/public/assets/img/tworld/about-banner.jpg)",
                }}
            >
            </div>
        </div>
    );
};

export default Banner;