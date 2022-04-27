import style from "./About.module.scss";
import { Quote, Section, Socials } from "../../../components/common";
import Colour from "../../../constants/Colour";
import { socialIcons } from "../../../constants/SocialIcons";

const About = () => {
    return (
        <Section colour={Colour.PRIMARY}>
            <div className={style.container}>
                <div
                    className={`section-padding center-section ${style.content}`}
                >
                    <h1>About</h1>
                    <section className={style.bio}>
                        <p>
                            Mr Little has always had a noisy brain. As a child
                            he would press his head up to people's ears and ask
                            if they could hear it. They never could and the
                            older he grew the more frustrated he became until at
                            last it was unbearable. Desperate to be heard, he
                            sold his soul for a band of the finest musicians.
                        </p>
                        <p>
                            Since then Mr Little and his noisy band have been
                            making music to captivate and spiritualise the
                            senses, each night giving meaning to their music
                            which it has never had before and may never have
                            again.
                        </p>
                    </section>
                    <Quote colour={Colour.PRIMARY} author="Pizza Express Live">
                        This blistering band blends modern funk and jazz in bold
                        and daring arrangements.
                    </Quote>
                </div>
                <div className={style.socials}>
                    <div className={style.icons}>
                        <Socials data={socialIcons} />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
