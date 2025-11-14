import { Section, Row, Column, Img, Link, Tailwind, Html } from "@react-email/components";

export default function header() {

    return (
        <Html>
            <Tailwind>

                <Section className="my-[40px] px-[32px] py-[40px]">
                    <Row>
                        <Column className="w-[80%]">
                            <Img
                                alt="React Email logo"
                                height="42"
                                src="https://react.email/static/logo-without-background.png"
                            />
                        </Column>
                        <Column align="right">
                            <Row align="right">
                                <Column className="px-[8px]">
                                    <Link className="text-gray-600 [text-decoration:none]" href="#">
                                        About
                                    </Link>
                                </Column>
                                <Column className="px-[8px]">
                                    <Link className="text-gray-600 [text-decoration:none]" href="#">
                                        Company
                                    </Link>
                                </Column>
                                <Column className="px-[8px]">
                                    <Link className="text-gray-600 [text-decoration:none]" href="#">
                                        Blog
                                    </Link>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                </Section>

            </Tailwind>



        </Html>

    )
}
