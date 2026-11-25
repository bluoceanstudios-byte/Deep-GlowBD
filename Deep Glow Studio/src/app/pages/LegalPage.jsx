import React from "react";
import { useSiteData } from "../context/DataContext";
import { SeoHead } from "../components/SeoHead";
import { AnimatedHeading } from "../components/AnimatedHeading";

export function LegalPage({ type }) {
  const { data } = useSiteData();
  const settings = data?.settings || {};

  if (type === "refund") {
    return (
      <>
        <SeoHead title="Refund Policy" description="Refund Policy for Lumas Creative." />
        <section className="pt-36 pb-24 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <AnimatedHeading as="h1" text="Refund / Policy" className="text-4xl sm:text-5xl mb-8" />
            <div className="glass-card rounded-2xl p-8 prose-site">
              <p>This policy is being updated. Please contact us if you have any questions.</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  const isPrivacy = type === "privacy";
  const pageTitle = isPrivacy ? "Privacy Policy" : "Terms & Conditions";
  const headingText = isPrivacy ? "Privacy / Policy" : "Terms & / Conditions";

  return (
    <>
      <SeoHead title={pageTitle} description={`${pageTitle} for Lumas Creative.`} />
      <section className="pt-36 pb-24 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedHeading as="h1" text={headingText} className="text-4xl sm:text-5xl mb-8" />

          <div className="glass-card rounded-[26px] p-7 sm:p-11 prose-site">
            {isPrivacy ? (
              <>
                <h2>Privacy Policy</h2>
                <p><strong>Last Updated: May 2026</strong></p>

                <h3>1. Introduction</h3>
                <p>
                  Welcome to Lumas Creative (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                </p>

                <h3>2. Information We Collect</h3>
                <p>We may collect, use, and store different kinds of personal data about you which we have grouped together as follows:</p>
                <ul>
                  <li><strong>Identity &amp; Contact Data:</strong> Includes first name, last name, email address, and telephone number when you book a meeting or fill out a contact form.</li>
                  <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting, and operating system used to access our website.</li>
                  <li><strong>Project Details:</strong> Any information you share regarding your business or project requirements during inquiries.</li>
                </ul>

                <h3>3. How We Use Your Information</h3>
                <p>We will only use your personal data for the following purposes:</p>
                <ul>
                  <li>To respond to your inquiries and provide customer support.</li>
                  <li>To schedule and manage appointments or meetings.</li>
                  <li>To improve our website, services, and overall user experience.</li>
                  <li>To communicate with you regarding project updates or relevant service offers.</li>
                </ul>

                <h3>4. Data Security &amp; Sharing</h3>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We do not sell, trade, or rent your personal information to third parties. We may share data only with trusted service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
                </p>

                <h3>5. Your Rights</h3>
                <p>
                  Depending on your location, you may have rights under data protection laws in relation to your personal data, including the right to request access, correction, or deletion of your personal data.
                </p>

                <h3>6. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at: <strong>{settings.email?.toLowerCase() || "lumascreative@gmail.com"}</strong>
                </p>
              </>
            ) : (
              <>
                <h2>Terms of Service</h2>
                <p><strong>Last Updated: May 2026</strong></p>

                <h3>1. Agreement to Terms</h3>
                <p>
                  By accessing or using the Lumas Creative website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
                </p>

                <h3>2. Intellectual Property Rights</h3>
                <p>
                  Unless otherwise indicated, the website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Lumas Creative, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of the material on our website without our prior written consent.
                </p>

                <h3>3. User Responsibilities</h3>
                <p>
                  When booking a service or submitting a contact form, you agree to provide accurate, current, and complete information. You are responsible for ensuring that your use of our website complies with all applicable local, national, and international laws and regulations.
                </p>

                <h3>4. Services and Deliverables</h3>
                <p>
                  All project timelines, deliverables, and payment terms will be outlined in a separate mutual agreement or contract prior to the commencement of any creative work. The information provided on this website is for general informational purposes and does not constitute a binding contract until a formal agreement is signed.
                </p>

                <h3>5. Limitation of Liability</h3>
                <p>
                  In no event shall Lumas Creative, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
                </p>

                <h3>6. Changes to Terms</h3>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
                </p>

                <h3>7. Contact Us</h3>
                <p>
                  If you have any questions about these Terms, please contact us at: <strong>{settings.email?.toLowerCase() || "lumascreative@gmail.com"}</strong>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
