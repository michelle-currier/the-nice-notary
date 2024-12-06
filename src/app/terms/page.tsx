"use client";

import Link from "next/link";
import { Fauna_One } from "@next/font/google";

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className="bg-gray-800 text-white flex flex-col max-w-screen-lg">
      <div className="justify-start items-center p-6">
        <h2 className={`text-4xl font-bold ${fauna.className}`}>
          Privacy Policy
        </h2>
      </div>
      <div className="justify-start items-center p-6">
        <p>
          This Privacy Policy applies to https://www.thenicenotaryllc.com/, and
          The Nice Notary LLC (&apos;Company&apos;) and governs data collection
          and usage. For the purposes of this Privacy Policy, unless otherwise
          noted, all references to the Company include
          https://www.thenicenotaryllc.com/. The Nice Notary&apos;s website is
          an information site. By using the Nice Notary website, you consent to
          the data practices described in this statement.
        </p>
        <p className="text-xl my-3">Information We Collect</p>
        <p>
          We may collect personal information necessary to perform notarial acts
          and provide services to you, such as:
        </p>
        <ul className="list-inside list-disc mb-3">
          <li>Name, address, phone number, and email address</li>
          <li>
            Government-issued identification details for identity verification
            purposes
          </li>
          <li>
            Information related to documents being notarized (e.g., type of
            transaction)
          </li>
          <li>
            Any other information required to complete notarial documentation
          </li>
          <li>Communicating with you about our services</li>
        </ul>
        <p className="text-xl my-3">How We Use Your Information</p>
        <ul className="list-inside list-disc mb-3">
          <li>
            Performing requested notarizations in accordance with Louisiana
            Revised Statutes Title 35
          </li>
          <li>Maintaining notary logs as required by Louisiana law</li>
          <li>Communicating with you about our services</li>
        </ul>
        <p className="text-xl my-3">Sharing of Information</p>
        <p>
          We do not sell or share your personal information with third parties,
          except in the following cases:
        </p>
        <ul className="list-inside list-disc mb-3">
          <li>To comply with legal obligations, subpoenas, or court orders</li>
          <li>To prevent fraud, abuse, or harm to our business or others</li>
          <li>With your explicit consent</li>
        </ul>
        <p className="text-xl my-3">Your Privacy Rights</p>
        <p>
          As a Louisiana resident, you have certain rights regarding your
          personal information. These include:
        </p>
        <ul className="list-inside list-disc mb-3">
          <li>
            The right to request access to the personal information we hold
            about you
          </li>
          <li>
            The right to request corrections or updates to your personal
            information
          </li>
          <li>
            The right to request deletion of your personal information, subject
            to legal exceptions
          </li>
        </ul>
        <p className="text-xl mb-3">Legal Exceptions to Deletion Requests</p>
        <p>We may retain personal information when it is necessary to:</p>
        <ul className="list-inside list-disc m-b3">
          <li>
            Exercise free speech, ensure the right of another consumer to
            exercise his or her right of free speech, or exercise another right
            provided for by law;
          </li>
          <li>
            Comply with applicable electronic communications or data privacy
            laws;
          </li>
          <li>
            Engage in public or peer-reviewed scientific, historical, or
            statistical research in the public interest that adheres to all
            other applicable ethics and privacy laws, when deletion of the
            information would likely render impossible or seriously impair the
            achievement of such research;
          </li>
          <li>
            Enable solely internal uses that are reasonably aligned with your
            expectations based on your relationship with us;
          </li>
          <li>
            Comply with an existing legal obligation, including those under
            Louisiana Revised Statutes Title 35; or
          </li>
          <li>
            Otherwise use your personal information, internally, in a lawful
            manner that is compatible with the context in which you provided the
            information.
          </li>
        </ul>
        <p className="text-xl my-3">Security of Your Information</p>

        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission or storage is completely secure, and we cannot guarantee
          absolute security.
        </p>

        <p className="text-xl my-3">Updates to This Policy</p>
        <p>
          We may update this Privacy Policy periodically to reflect changes in
          legal requirements or our practices. The updated policy will be posted
          on our website with the effective date.
        </p>

        <p className="text-xl my-3">Contact Us</p>
        <p>
          If you have questions or concerns about this Privacy Policy or how we
          handle your information, please contact us at:
        </p>
        <Link
          href="mailto:theNiceNotaryLLC@gmail.com"
          className="text-teal-200 border-teal-400 border-b hover:text-pink-400 hover:border-pink-600 hover:transition-all ease-in-out delay-50 duration-300"
        >
          theNiceNotaryLLC@gmail.com
        </Link>
      </div>
      <div className="justify-start items-center p-6">
        <h2 className={`text-4xl font-bold ${fauna.className}`}>Opt</h2>
      </div>
    </div>
  );
}
