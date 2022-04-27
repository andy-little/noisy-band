import { LinkBtn, Quote, Section } from "../../../components/common";
import Colour from "../../../constants/Colour";
import cuckoo from "../../../static/images/cuckoo.jpg";
import style from "./Album.module.scss";

const Album = () => {
    return (
        <Section>
            <div className={`section-padding ${style.page}`}>
                <h1 className={style.right}>Cuckoo's Nest</h1>
                <h2 className={style.right}>Available Now!</h2>
                <img
                    className={`album_art ${style.left}`}
                    src={cuckoo}
                    alt="cuckoo's nest album cover"
                />

                <Quote author="the crazy coqs" colour={Colour.PRIMARY}>
                    Fat, greasy, stinking funk, wrapped up in Andy Little's
                    mellifluous arrangements, served up by London's finest.
                </Quote>

                <LinkBtn
                    url="https://www.google.com"
                    options={{ colour: Colour.PRIMARY }}
                >
                    Listen
                </LinkBtn>
            </div>
        </Section>
    );
};

export default Album;
