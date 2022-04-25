import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button, { BtnClr } from "./Button";
import LinkBtn from "./LinkBtn";

describe("link", () => {
    test("should render link correctly and have correct colour", () => {
        render(
            <LinkBtn url="www.test.com" options={{ colour: BtnClr.SECONDARY }}>
                Test
            </LinkBtn>
        );
        const btn = screen.getByRole("link", { name: /test/i });
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveClass(BtnClr.SECONDARY);
    });

    test("should render without options given", () => {
        render(<LinkBtn url="www.test.com">Test</LinkBtn>);
        const btn = screen.getByRole("link", { name: /test/i });
        expect(btn).toBeInTheDocument();
    });

    test("should should be findable with aria-label if children does not contain text", () => {
        render(
            <LinkBtn url="www.test.com" options={{ label: "testing" }}>
                something
            </LinkBtn>
        );
        const btn = screen.getByRole("link", { name: /testing/i });
        expect(btn).toBeInTheDocument();
    });
});

describe("button", () => {
    test("should render button with string as children and call function onclick", () => {
        const callback = jest.fn();
        render(<Button cb={callback}>Test</Button>);
        const btn = screen.getByRole("button", { name: /test/i });
        expect(btn).toBeInTheDocument();
        userEvent.click(btn);
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test("should allow options args to work correctly", () => {
        const callback = jest.fn();
        render(
            <Button
                cb={callback}
                options={{ colour: BtnClr.TERTIARY, label: "other" }}
            >
                Test
            </Button>
        );
        const btn = screen.getByRole("button", { name: /other/i });
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveClass(BtnClr.TERTIARY);
    });
});
