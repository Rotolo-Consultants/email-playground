import footer from "../components/footer";
import header  from "../components/header";
import body from "../components/body";
import  marketing from "../components/marketing";
import { Html, Head, Body } from "@react-email/components";

export const Playground = () => {
    return (
        <Html>
            <Head />
            <Body>
                {header()}
                {body()}
                {marketing()}
                {footer()}
            </Body>
        </Html>

    )

}

export default Playground;