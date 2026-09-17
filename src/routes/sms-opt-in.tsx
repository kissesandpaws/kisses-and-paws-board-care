import { Link, createFileRoute } from "@tanstack/react-router";
import { BUSINESS_NAME, LegalLayout, Section } from "@/components/legal-layout";

// Pagina publica para la revision de la campana A2P 10DLC de Twilio: la casilla
// de SMS solo aparece en el ultimo paso de la reserva, asi que aqui se ensena
// ese paso con una captura real y se describe el flujo completo.
export const Route = createFileRoute("/sms-opt-in")({
  component: SmsOptInPage,
  head: () => ({
    meta: [
      { title: `How to Opt In to Text Messages | ${BUSINESS_NAME}` },
      {
        name: "description",
        content:
          "How customers of Kisses and Paws Board and Care opt in to appointment confirmation and payment-link text messages when booking online.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/sms-opt-in" }],
  }),
});

const CONSENT_TEXT =
  "I agree to receive appointment confirmation and payment-link SMS from Kisses and Paws Board and Care. Frequency varies with your appointments, up to 10 messages a month. Message and data rates may apply. Reply STOP to cancel or HELP for help. Consent is not required to book. See our Privacy Policy and SMS Terms.";

function SmsOptInPage() {
  return (
    <LegalLayout title="How to Opt In to Text Messages">
      <p>
        {BUSINESS_NAME} sends two kinds of text messages, only to customers who ask for them:
        appointment confirmations and secure payment links. The only way to opt in is the optional
        consent checkbox in our online booking form.
      </p>

      <Section title="Step 1: Start a booking">
        <p>
          The customer opens our online booking form at{" "}
          <a href="/reservar" className="font-semibold text-primary underline">
            kissesandpawsboardandcare.com/reservar
          </a>{" "}
          (also linked from every "Book Now" button on this website) and chooses a service, a day
          and a time.
        </p>
      </Section>

      <Section title="Step 2: Enter contact details">
        <p>
          The customer enters their name, mobile phone number and pet details, then continues to
          the review screen.
        </p>
      </Section>

      <Section title="Step 3: Review screen with the SMS consent checkbox">
        <p>
          Before the booking is confirmed, the review screen shows the SMS consent checkbox. It is
          not pre-checked and it is optional: the customer can book without checking it. Text
          messages are only sent if the customer checks it.
        </p>
        <figure className="my-6">
          <img
            src="/media/sms/sms-opt-in-checkbox.png"
            alt="Booking review screen showing the unchecked SMS consent checkbox and its disclosure text"
            width={1040}
            height={1336}
            className="mx-auto w-full max-w-sm rounded-2xl border border-border shadow-sm"
          />
          <figcaption className="mt-3 text-center text-sm text-ash">
            Screenshot of the booking review screen, with example details. The SMS consent checkbox
            is unchecked by default.
          </figcaption>
        </figure>
        <p>The text next to the checkbox reads:</p>
        <blockquote className="border-l-4 border-rose pl-4 italic">{CONSENT_TEXT}</blockquote>
      </Section>

      <Section title="What happens after opting in">
        <p>
          Customers who checked the box receive a text confirming the date and time of their
          appointment and, when a payment is due, a text with a secure link to pay for their
          service. Message frequency varies, up to 10 messages per month. Message and data rates
          may apply. Reply STOP at any time to stop receiving messages, or HELP for help.
        </p>
        <p>
          No mobile information will be shared with third parties or affiliates for marketing or
          promotional purposes. Text messaging originator opt-in data and consent will not be
          shared with any third parties.
        </p>
        <p>
          See our{" "}
          <Link to="/privacy" className="font-semibold text-primary underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/sms-terms" className="font-semibold text-primary underline">
            SMS Terms and Conditions
          </Link>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
