import { Link, createFileRoute } from "@tanstack/react-router";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  LegalLayout,
  Section,
} from "@/components/legal-layout";
import { PHONE_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${BUSINESS_NAME}` },
      {
        name: "description",
        content:
          "Privacy Policy for Kisses and Paws Board and Care. We do not share mobile information or SMS consent with third parties or affiliates for marketing or promotional purposes.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        {BUSINESS_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
        privacy. This policy explains what information we collect, how we use it, how we protect
        it, and how we handle your mobile phone number and your consent to receive text messages.
      </p>
      <p>
        This is the only privacy policy that applies to {BUSINESS_NAME}, to our website, and to our
        appointment booking and text messaging program.
      </p>

      <Section title="Information we collect">
        <p>When you book an appointment, contact us, or fill out our client intake form, we collect:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Your name and contact details, including your mobile phone number and email address.</li>
          <li>Information about your pet, such as name, breed, age, and grooming or care notes.</li>
          <li>Appointment details, including the services requested, dates and times.</li>
          <li>
            Your consent to receive text messages, along with the date and time you gave that
            consent.
          </li>
        </ul>
        <p>
          Payments are processed by our payment provider. We do not store your full card number on
          our systems.
        </p>
      </Section>

      <Section title="How we use your information">
        <p>
          We use your information to schedule and confirm appointments, send payment links, answer
          your questions, and provide our grooming, bathing, dental, daycare, boarding and
          transportation services. We do not use your information for any purpose you have not
          agreed to.
        </p>
      </Section>

      <Section title="Text messaging (SMS)">
        <p>
          With your express consent, we send appointment confirmations and secure payment links by
          text message to the mobile number you provide. Consent to
          receive text messages is not a condition of purchasing any service.
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <strong className="text-foreground">Message frequency:</strong> message frequency
            varies based on your appointments. You will receive up to 10 messages per month.
          </li>
          <li>
            <strong className="text-foreground">Cost:</strong> message and data rates may apply.
          </li>
          <li>
            <strong className="text-foreground">Opt out:</strong> reply <strong>STOP</strong> to any
            message to stop receiving text messages at any time.
          </li>
          <li>
            <strong className="text-foreground">Help:</strong> reply <strong>HELP</strong> for
            assistance, or contact us using the details below.
          </li>
        </ul>
        <p>
          Carriers are not liable for delayed or undelivered messages. Full details of our messaging
          program are described in our{" "}
          <Link to="/sms-terms" className="font-semibold text-primary hover:text-crimson">
            SMS Terms and Conditions
          </Link>
          .
        </p>
      </Section>

      <Section title="No sharing of mobile information">
        <p className="rounded-2xl border border-border bg-blush/50 p-5 text-foreground">
          No mobile information will be shared with third parties or affiliates for marketing or
          promotional purposes. Text messaging originator opt-in data and consent will not be shared
          with any third parties.
        </p>
        <p>
          We do not sell, rent, or trade your personal information. Your mobile phone number, your
          text messaging consent, and your opt-in data are never sold or shared with any third
          parties or affiliates.
        </p>
      </Section>

      <Section title="Service providers">
        <p>
          We use a small number of vendors strictly to operate our business, such as our scheduling
          system, our payment processor, and the messaging provider that delivers our text messages.
          These vendors act only on our instructions, may use your information only to perform the
          service they provide to us, and are prohibited from using it for their own marketing or
          promotional purposes or from disclosing it to anyone else.
        </p>
        <p>
          We may also disclose information when required by law, or to protect the safety of a pet,
          a person, or our rights.
        </p>
      </Section>

      <Section title="Data security and retention">
        <p>
          We take reasonable administrative and technical measures to protect your information, and
          we keep it only as long as needed to provide our services and to meet our legal and
          accounting obligations.
        </p>
      </Section>

      <Section title="Your choices">
        <p>
          You may ask us to correct or delete your personal information, or to stop contacting you,
          at any time. To stop text messages, reply <strong>STOP</strong>. For anything else,
          contact us using the details below and we will respond promptly.
        </p>
      </Section>

      <Section title="Children">
        <p>
          Our services are intended for adults. We do not knowingly collect personal information
          from children under 13.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If we update this policy we will change the date shown at the top of this page. Please
          review it from time to time.
        </p>
      </Section>

      <Section title="Contact us">
        <p>
          {BUSINESS_NAME}
          <br />
          {BUSINESS_ADDRESS}
          <br />
          Phone: {PHONE_DISPLAY}
          <br />
          Email: {BUSINESS_EMAIL}
        </p>
      </Section>
    </LegalLayout>
  );
}
