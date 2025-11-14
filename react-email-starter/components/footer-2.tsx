import { Section, Row, Img, Column, Text, Link } from "@react-email/components";


export default function newFooter() {
    return (
        <Section>
            <Row>
                <Column colSpan={4}>
                    <Img
                        alt="React Email logo"
                        height="42"
                        src="https://rciservicenow.com/rciLogo.png"
                    />
                    {/* <Text className="my-[8px] font-semibold text-[16px] text-gray-900 leading-[24px]">
                        Rotolo Consultants Inc.
                    </Text> */}
                    {/* <Text className="mt-[4px] mb-[0px] text-[16px] text-gray-500 leading-[24px]">
                        ROOTED IN TRADITION < br /> GROWING THE FUTURE
                    </Text> */}
                </Column>
                <Column align="left" className="table-cell align-bottom">
                    <Row className="table-cell h-[44px] w-[56px] align-bottom">
                        <Column className="pr-[8px]">
                            <Link href="https://www.facebook.com/RotoloConsultants/">
                                <Img
                                    alt="Facebook"
                                    height="24"
                                    src="https://i.ibb.co/20kzhK6j/Social-Icons-2.png"
                                    width="24"
                                />
                            </Link>
                        </Column>
                        <Column className="pr-[8px]">
                            <Link href="https://www.linkedin.com/company/rotoloconsultants/posts/?feedView=all">
                                <Img alt="LinkedIn" height="24" src="https://i.ibb.co/HThkx9Bv/Social-Icons.png" width="24" />
                            </Link>
                        </Column>
                        <Column>
                            <Link href="https://www.instagram.com/rotoloconsultantsinc/">
                                <Img
                                    alt="Instagram"
                                    height="24"
                                    src="https://i.ibb.co/dJJZQYrb/Social-Icons-1.png"
                                    width="24"
                                />
                            </Link>
                        </Column>
                    </Row>
                    {/* <Row>
                        <Text className="my-[8px] font-semibold text-[16px] text-gray-500 leading-[24px]">
                            123 Main Street Anytown, CA 12345
                        </Text>
                        <Text className="mt-[4px] mb-[0px] font-semibold text-[16px] text-gray-500 leading-[24px]">
                            mail@example.com +123456789
                        </Text>
                    </Row> */}
                </Column>
            </Row>
        </Section>
    )
}

