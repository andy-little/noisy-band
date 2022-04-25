import { LinkBtn, Quote, Section } from "../../../components/common";
import Colour from "../../../constants/Colour";
import cuckoo from "../../../static/images/cuckoo.jpg";
import style from "./Album.module.scss";

const Album = () => {
    return (
        <Section>
            <h1>Cuckoo's Nest</h1>
            <h2>Available Now!</h2>
            <img
                className={style.album}
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
        </Section>
    );
};

export default Album;
