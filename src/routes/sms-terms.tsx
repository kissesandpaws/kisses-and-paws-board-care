import { Link, createFileRoute } from "@tanstack/react-router";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  LegalLayout,
  Section,
} from "@/components/legal-layout";
import { PHONE_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/sms-terms")({
  component: SmsTermsPage,
  head: () => ({
    meta: [
      { title: `SMS Terms and Conditions | ${BUSINESS_NAME}` },
      {
        name: "description",
        content:
          "Terms and conditions for the Kisses and Paws Board and Care text messaging program: how to opt in, message frequency, message and data rates, STOP and HELP instructions.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/sms-terms" }],
  }),
});

function SmsTermsPage() {
  return (
    <LegalLayout title="SMS Terms and Conditions">
      <p>
        These terms govern the text messaging program operated by {BUSINESS_NAME}. By giving your
        consent, you agree to the terms on this page.
      </p>

      <Section title="Program description">
        <p>
          {BUSINESS_NAME} sends appointment confirmations, appointment reminders, service updates
          about your pet, and secure payment links by text message (SMS) to customers who have asked
          to receive them. This is a customer care and transactional program. We do not send
          marketing or promotional text messages.
        </p>
      </Section>

      <Section title="How to opt in">
        <p>
          You may opt in by checking the text messaging consent box when you book an appointment on
          our website at{" "}
          <a href="/reservar" className="underline">
            kissesandpawsboardandcare.com/reservar
          </a>
          .
        </p>
        <p>
          The consent checkbox is not pre-checked, and it is optional. Consent to receive text
          messages is not a condition of purchasing any goods or services from us.
        </p>
      </Section>

      <Section title="Message frequency">
        <p>
          Message frequency varies based on your appointments. You will receive up to 10 messages
          per month.
        </p>
      </Section>

      <Section title="Cost">
        <p>
          <strong className="text-foreground">Message and data rates may apply.</strong> We do not
          charge for the messages themselves, but your mobile carrier may charge you for messages
          sent or received according to your plan.
        </p>
      </Section>

      <Section title="How to opt out">
        <p>
          You can cancel at any time by replying <strong>STOP</strong> to any message you receive
          from us. After you reply STOP, we will send one final message to confirm that you have
          been unsubscribed, and you will not receive further text messages from us unless you opt
          in again.
        </p>
        <p>
          You may also ask us to remove your number by calling {PHONE_DISPLAY} or emailing{" "}
          {BUSINESS_EMAIL}.
        </p>
      </Section>

      <Section title="How to get help">
        <p>
          Reply <strong>HELP</strong> to any message for assistance, or contact us at{" "}
          {PHONE_DISPLAY} or {BUSINESS_EMAIL}.
        </p>
      </Section>

      <Section title="Carriers and delivery">
        <p>
          Carriers are not liable for delayed or undelivered messages. Delivery is subject to
          effective transmission from your wireless service provider and is outside our control.
        </p>
      </Section>

      <Section title="Privacy">
        <p>
          No mobile information will be shared with third parties or affiliates for marketing or
          promotional purposes. Text messaging originator opt-in data and consent will not be shared
          with any third parties. See our{" "}
          <Link to="/privacy" className="font-semibold text-primary hover:text-crimson">
            Privacy Policy
          </Link>{" "}
          for full details on the information we collect and how we use it.
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
