import Section from "../../../components/Section";
import styles from "./About.module.scss";
import {useState} from "react";

const About = () => {
    const [isFirstImageVisible, setIsFirstImageVisible] = useState(true);
    const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = () => {
        setIsFirstImageVisible(false);
        console.log(isFirstImageVisible)

    }
    const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
        setIsFirstImageVisible(true);
        console.log(isFirstImageVisible)
    };
    return (
        <>
            {isFirstImageVisible ? (
                <Section id="section-2" className={styles["about-container"]}>
                    <img onMouseLeave={handleMouseEnter}
                         src="https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGNifGVufDB8fDB8fHww&w=1000&q=80"
                         alt="PCB"
                    />
                    <div className={styles["about-description"]}>
                      <h1>
                        PCB is a printed circuit board (PCB) manufacturer supplying PCB's at
                      </h1>
                      <p>
                        PCB is a printed circuit board (PCB) manufacturer supplying PCB's at
                        overseas prices. All our boards are manufactured to IPC Class 2
                        standards unless specified. We have a full quality assurance system in
                        place and all boards are inspected to IPC-A600 Class 2 or higher upon
                        request. We offer a full range of PCBs from single sided to
                        multi-layers, flex and rigid-flex, and we also offer PCB assembly
                        services. We have a full range of surface finishes available including
                        HASL, ENIG, immersion tin, silver, OSP, and hard gold plating.
                      </p>
                    </div>

                </Section>
            ) : (

                <Section id="section-2" className={styles["about-container2"]}>
                    <div className={styles["about-description"]}>
                        <h1>
                            PCB is a printed circuit board (PCB) manufacturer supplying PCB's at
                        </h1>
                        <p>
                            PCB is a printed circuit board (PCB) manufacturer supplying PCB's at
                            overseas prices. All our boards are manufactured to IPC Class 2
                            standards unless specified. We have a full quality assurance system in
                            place and all boards are inspected to IPC-A600 Class 2 or higher upon
                            request. We offer a full range of PCBs from single sided to
                            multi-layers, flex and rigid-flex, and we also offer PCB assembly
                            services. We have a full range of surface finishes available including
                            HASL, ENIG, immersion tin, silver, OSP, and hard gold plating.
                        </p>
                    </div>
                    <img onMouseLeave={handleMouseLeave}
                         alt="carousel"
                         src={`/1.jpg`}
                    />
                </Section>
            )}

        </>
    );
};

export default About;
