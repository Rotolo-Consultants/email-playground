import { Heading, Html, Tailwind, Container, Row, Section, Text } from "@react-email/components";

export default function body() {

    return (
        <Html>
            <Tailwind>
                <Container className="bg-white rounded-[8px] mx-auto max-w-[900px] overflow-hidden p-0">
                    <Section>
                        <Row className="bg-[rgb(41,37,36)] border-separate [border-spacing:24px] m-0 table-fixed w-full">

                            <Heading>Dear Valued Client,</Heading>

                      
                            <Text>
                               Thank you for your business. We appreciate your trust and look forward to serving you again.
                            </Text>

                            <Text>
                                Sincerely,
                            </Text>

                            <Text>
                                The Team
                            </Text>

                        </Row>
                    </Section>



                </Container>
            </Tailwind>
        </Html>
    )
}