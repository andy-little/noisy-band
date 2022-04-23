import { screen, render } from "@testing-library/react";
import Socials from "./Socials";
import { SocialData } from "../../../constants/SocialIcons";
import { FaSpotify, FaItunes } from "react-icons/fa";

const data: SocialData[] = [
    {
        icon: <FaSpotify />,
        url: "https://open.spotify.com/artist/4hZ0YIg9waQoLrqq1DCUH9?si=cr6XhyfYSjqlcsA5YHD5nA",
        description: "Spotify",
        id: 1,
    },
    {
        icon: <FaItunes />,
        url: "https://music.apple.com/gb/artist/mr-littles-noisy-band/723941055",
        description: "iTunes",
        id: 2,
    },
];

test("should render links icons", () => {
    render(<Socials data={data} />);
    const itunes = screen.getByRole("link", { name: /itunes/i });
    expect(itunes).toBeInTheDocument();
});
