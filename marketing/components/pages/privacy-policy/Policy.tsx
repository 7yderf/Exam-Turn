import { ReactElement } from "react";

const Policy = (): ReactElement => (
  <section className="w-full max-w-7xl mx-auto flex flex-col gap-4 py-10 px-4 md:px-24 mb-20">
    <h2 className="text-2xl font-bold">Privacy Policy</h2>
    <p>
      Effective Date: 5/02/2025
      <br />
      <br />
      The Mental Health Network and Training Institute, LLC (“MHNTI”, “we”,
      “our”, or “us”) respects your privacy and is committed to protecting your
      personal information. This Privacy Policy outlines how we collect, use,
      and safeguard your data when you use our website{" "}
      <a href="https://www.mhnti.com" className="text-primary underline">
        www.mhnti.com
      </a>
      , mobile application, and all related services (collectively, the
      “Platform”).
      <br />
      <br />
      By using the Platform, you agree to the terms outlined in this policy.
    </p>
    <h2 className="text-2xl font-bold">1. Information We Collect</h2>
    <p>We may collect the following information when you use our services:</p>
    <ul className="list-disc ml-8 leading-loose">
      <li>
        Personal Information: Name, email, phone number, license number,
        professional details, and billing info.{" "}
      </li>
      <li>
        Account Details: Username, subscription preferences, and CE course
        history.
      </li>
      <li>Payment Data: Collected via secure third-party processors.</li>
      <li>Professional Credentials: License type, educational background.</li>
      <li>
        Usage Data: Device info, IP address, browsing history, and access logs.
      </li>
      <li>
        Communication Records: Messages between you, MHNTI staff, and Expert
        Faculty.
      </li>
    </ul>
    <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
    <p>
      We use your data to:
      <ul className="list-disc ml-8 leading-loose">
        <li>Provide and manage access to our services.</li>
        <li>Verify professional eligibility. </li>
        <li>Maintain CE training records.</li>
        <li>Coordinate consultations and networking groups.</li>
        <li>Communicate updates and respond to inquiries.</li>
        <li>Comply with legal and licensing obligations.</li>
      </ul>
    </p>
    <h2 className="text-2xl font-bold">3. Sharing Your Information</h2>
    <p>
      We do not sell nor rent your data. We may share it with:
      <ul className="list-disc ml-8 leading-loose">
        <li>
          Trusted Service Providers (e.g., payment processors, hosting
          providers).
        </li>
        <li>Expert Faculty during consultation or session scheduling.</li>
        <li>Legal Authorities as required by law.</li>
        <li>Third Parties in the event of a business transfer or merger.</li>
      </ul>
    </p>
    <h2 className="text-2xl font-bold">4. Data Retention</h2>
    <p>
      Your data is retained for as long as your account is active or as required
      for legal, regulatory, and service-related reasons.
    </p>
    <h2 className="text-2xl font-bold">5. Security</h2>
    <p>
      We employ technical and administrative safeguards to protect your data.
      While we take every reasonable precaution to safeguard your data,  no
      system is entirely 100% secure and therefore, USE OF OUR SERVICES IS AT
      YOUR OWN RISK.
    </p>
    <h2 className="text-2xl font-bold">6. Your Choices</h2>
    <p>
      <ul className="list-disc ml-8 leading-loose">
        <li>Update your info through your account settings.</li>
        <li>
          Delete your account by contacting us at{" "}
          <a href="mailto:admin@mhnti.com" className="text-primary underline">
            admin@mhnti.com
          </a>
        </li>
        <li>
          Unsubscribe from emails using the link in any marketing message.
        </li>
      </ul>
    </p>
    <h2 className="text-2xl font-bold">7. Children’s Privacy</h2>
    <p>
      The Platform is intended for users 18 years and older. We do not knowingly
      collect information from minors. If you believe a minor has provided
      personal data, please contact us immediately to request deletion.
    </p>
    <h2 className="text-2xl font-bold">8. Third-Party Links</h2>
    <p>
      Our Platform may include links to external websites. This privacy policy
      does not apply to these links.  MHNTI is not responsible for their privacy
      practices or content.
    </p>
    <h2 className="text-2xl font-bold">9. Changes to This Policy</h2>
    <p>
      We may update this Privacy Policy periodically so we encourage you to
      review our privacy policy frequently. The latest version will always be
      posted on this page with the revised “Effective Date.”
    </p>
    <h2 className="text-2xl font-bold">10. Contact Us</h2>
    <p>
      If you have any questions or concerns about this policy or your personal
      data or feel we are not abiding by this privacy policy, contact us:
      <br />
      <br />
      Email:{" "}
      <a href="mailto:admin@mhnti.com" className="text-primary underline">
        admin@mhnti.com
      </a>
      <br />
      <br />
      Mailing Address: 708 E 19th Street, Houston, TX 77008
    </p>
  </section>
);

export default Policy;
