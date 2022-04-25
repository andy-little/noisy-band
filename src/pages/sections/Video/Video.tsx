import { LinkBtn, Quote, Section } from "../../../components/common";
import Colour from "../../../constants/Colour";
import style from "./Video.module.scss";
import img from "../../../static/images/video.png";
import { FaYoutube } from "react-icons/fa";

const Video = () => {
    return (
        <Section>
            <div className="section-padding">
                <h1 className={style.h1}>Video</h1>
                <Quote colour={Colour.TERTIARY} author="RSB Records">
                    Andy Little takes us on a journey which straddles musical
                    mountain peaks, valleys, deserts and the seas.
                </Quote>

                <a
                    href="https://www.youtube.com/c/mrlittleofficial"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className={style.video_container}>
                        <FaYoutube />
                        <img
                            src={img}
                            alt="watch video"
                            className={style.video}
                        />
                    </div>
                </a>
                <LinkBtn
                    url="https://www.youtube.com/c/mrlittleofficial"
                    options={{ colour: Colour.TERTIARY }}
                >
                    Watch Video
                </LinkBtn>
            </div>
        </Section>
    );
};

export default Video;
