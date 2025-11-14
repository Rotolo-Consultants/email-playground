import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Heading,
} from '@react-email/components';
import newFooter from '../components/footer-2';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const StripeWelcomeEmail = () => (
  <Html>
    <Preview>Service Update from RCI!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://rciservicenow.com/rciLogo.png`}
            width="70"
            height="40"
            alt="Stripe"
          />
          <Hr style={hr} />
          <Text style={paragraph}>
            Dear Valued Client, <br /> <br />
            Thank you for trusting RCI with your landscaping needs.

          </Text>
          <Text style={paragraph}>
            Attached is a detailed PDF of the services recently completed at your property.
            If you have any questions or need additional information, please <b> Reply All </b> to this email,
            and our team will be happy to assist you.
          </Text>
          {/* <Button style={button} href="https://dashboard.stripe.com/login">
                        View your Stripe Dashboard
                    </Button> */}
          <Hr style={hr} />

          <Img
            alt="Atoms Vacuum Canister"
            style={image}
            // className="rounded-[12px] [margin:12px_auto_12px]"
            // width="100%"
            // height="100%"
            src="https://i.ibb.co/S4Ht3Yvh/thrive-with-rci-1-2.png"
          // style={{
          //     // 'border-radius': '4px', 
          // }}
          />



          <Text style={accentText}>Elevate Your Brand Image</Text>
          {/* <Text className="my-[16px] font-semibold text-[18px] text-indigo-600 leading-[28px]">
      Our new article
    </Text> */}
          <Heading
            as="h1"
            //   className="m-0 mt-[8px] font-semibold text-[36px] text-gray-900 leading-[36px]"
            style={headerText}
          >
            Modernize Your Landscape
          </Heading>
          <Text style={centerParagraph}>
            An updated landscape sends a powerful message. Our team can execute high-impact projects to elevate your property's profile, from monument signs to revitalized entryways.
          </Text>
          {/* <Text className="text-[16px] text-gray-500 leading-[24px]">
      Unleash your inner designer as we explore how furniture plays a vital
      role in creating stunning interiors, offering insights into choosing the
      right pieces, arranging them harmoniously, and infusing your space with
      personality.
    </Text> */}
          <Button
            //   className="mt-[16px] rounded-[8px] bg-indigo-600 px-[40px] py-[12px] font-semibold text-white"
            href="https://www.rotoloconsultants.com/"
            style={testButton}
          >
            Learn More
          </Button>





          {/* <Text style={paragraph}>
                        If you haven't finished your integration, you might find our{' '}
                        <Link style={anchor} href="https://stripe.com/docs">
                            docs
                        </Link>{' '}
                        handy.
                    </Text> */}






          {/* <Text style={paragraph}>
                        Once you're ready to start accepting payments, you'll just need to
                        use your live{' '}
                        <Link
                            style={anchor}
                            href="https://dashboard.stripe.com/login?redirect=%2Fapikeys"
                        >
                            API keys
                        </Link>{' '}
                        instead of your test API keys. Your account can simultaneously be
                        used for both test and live requests, so you can continue testing
                        while accepting live payments. Check out our{' '}
                        <Link style={anchor} href="https://stripe.com/docs/dashboard">
                            tutorial about account basics
                        </Link>
                        .
                    </Text>
                    <Text style={paragraph}>
                        Finally, we've put together a{' '}
                        <Link
                            style={anchor}
                            href="https://stripe.com/docs/checklist/website"
                        >
                            quick checklist
                        </Link>{' '}
                        to ensure your website conforms to card network standards.
                    </Text>
                    <Text style={paragraph}>
                        We'll be here to help you with any step along the way. You can find
                        answers to most questions and get in touch with us on our{' '}
                        <Link style={anchor} href="https://support.stripe.com/">
                            support site
                        </Link>
                        .
                    </Text> */}


          <Section
            style={{ marginTop: '42px', textAlign: 'center', marginBottom: '42px' }}
          >
            <Section
              style={{
                display: 'inline-block',
                textAlign: 'left',
                width: '100%',
                maxWidth: 250,
                verticalAlign: 'top',
              }}
            >
              <Text
                style={{
                  margin: '0px',
                  fontSize: 16,
                  lineHeight: '24px',
                  fontWeight: 600,
                  color: '#386641',
                }}
              >
                What's new
              </Text>
              <Text
                style={{
                  margin: '0px',
                  marginTop: '8px',
                  fontSize: 20,
                  lineHeight: '28px',
                  fontWeight: 600,
                  color: 'rgb(17,24,39)',
                }}
              >
                How Landscape <br /> Design Shapes <br /> Community Spaces
              </Text>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: 'rgb(107,114,128)',
                }}
              >
                The best professional <br />landscaping services blend <br /> form, function, and sustain– <br />ability. 
              </Text>
              <Link
                href="https://www.rotoloconsultants.com/blog/beyond-the-green-how-landscape-design-shapes-community-spaces"
                style={{ color: 'rgb(79,70,229)'}}
              >
                
                Read more
              </Link>
            </Section>
            <Section
              style={{
                display: 'inline-block',
                marginTop: 8,
                marginBottom: 8,
                width: '100%',
                maxWidth: 220,
                verticalAlign: 'top',
              }}
            >
              <Img
                alt="An aesthetic picture taken of an Iphone, flowers, glasses and a card that reads 'Gucci, bloom' coming out of a leathered bag with a ziper"
                height={220}
                src="https://i.ibb.co/S4Ht3Yvh/thrive-with-rci-1-2.png"
                style={{
                  // borderRadius: 8,
                  // objectFit: 'cover',
                }}
                // style={image}

                width={220}
              />
            </Section>
          </Section>

          <Text style={paragraph}>— The RCI team</Text>


          <Hr style={hr} />
          {/* <Text style={footer}>
            Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
          </Text> */}
          {newFooter()}

        </Section>
        
      </Container>








    </Body>
  </Html>
);

export default StripeWelcomeEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const centerParagraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center' as const,
}

const headerText = {
  color: "#111827", // this should be grey-900 but whatever the hex code is 
  fontSize: '32px',
  fontWeight: 'bold',
  lineHeight: '40px',
  textAlign: 'center' as const,
  marginTop: 0,
}



const anchor = {
  color: '#556cd6',
};

const button = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '10px',
};

const image = {
  // 'border-radius': '4px',
  // height: '100%',
  width: '100%',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};

const accentText = {
  align: 'center' as const,
  color: '#386641',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '28px',
  textAlign: 'center' as const,
  marginTop: 24,
  marginBottom: 0,
}


const testButton = {
  align: 'center' as const,
  display: 'block',
  textAlign: 'center' as const,
  marginTop: 32,
  borderRadius: 8,
  backgroundColor: '#386641',
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 12,
  paddingBottom: 12,
  fontWeight: 600,
  color: 'rgb(255,255,255)',
}
