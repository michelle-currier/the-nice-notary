"use client";

import Link from "next/link";
import { Fauna_One } from "@next/font/google";

const fauna = Fauna_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className="bg-gray-800 text-white flex flex-col">
      <div className="justify-start items-center p-6">
        <h2 className={`text-4xl font-bold ${fauna.className}`}>
          Privacy Policy
        </h2>
      </div>
      <div className="justify-start items-center p-6">
        <p>
          This Privacy Policy (&apos;Policy&apos;) applies to
          https://www.thenicenotaryllc.com/, and The Nice Notary LLC
          (&apos;Company&apos;) and governs data collection and usage. For the
          purposes of this Privacy Policy, unless otherwise noted, all
          references to the Company include https://www.thenicenotaryllc.com/.
          The Company&apos;s website is an e-commerce site. By using the Company
          website, you consent to the data practices described in this
          statement.
        </p>
        <p className="text-xl my-3">Collection of your Personal Information</p>
        <p>
          In order to better provide you with products and services offered, the
          Company may collect personally identifiable information, such as your:
        </p>
        <ul className="list-inside list-disc mb-3">
          <li>First and last name</li>
          <li>Mailing address</li>
          <li>Email address</li>
          <li>Phone number</li>
        </ul>
        <p className="mb-3">
          If you purchase the Company&apos;s products and services, we collect
          billing and credit card information. This information is used to
          complete the purchase transaction.
        </p>
        <p>
          We do not collect any personal information about you unless you
          voluntarily provide it to us. However, you may be required to provide
          certain personal information to us when you elect to use certain
          products or services. These may include: (a) registering for an
          account; (b) entering a sweepstakes or contest sponsored by us or one
          of our partners; (c) signing up for special offers from selected third
          parties; (d) sending us an email message; (e) submitting your credit
          card or other payment information when ordering and purchasing
          products and services. To wit, we will use your information for, but
          not limited to, communicating with you in relation to services and/or
          products you have requested from us. We also may gather additional
          personal or non-personal information in the future.
        </p>
        <p className="text-xl my-3">Use of your Personal Information</p>
        <p className="mb-3">
          The Company collects and uses your personal information in the
          following ways:
        </p>
        <ul className="list-inside list-disc mb-3">
          <li>to operate and deliver the services you have requested</li>
          <li>
            to provide you with information, products, or services that you
            request from us
          </li>
          <li>to provide you with notices about your account</li>
          <li>
            to carry out the Company&apos;s obligations and enforce our rights
            arising from any contracts entered
          </li>
          <li>
            to notify you about changes to our{" "}
            <Link href="https://www.thenicenotaryllc.com/">
              https://www.thenicenotaryllc.com/
            </Link>{" "}
            or any products or services
          </li>
          <li>
            in any other way we may describe when you provide the information
          </li>
          <li>for any other purpose with your consent.</li>
        </ul>
        <p>
          The Company may also use your personally identifiable information to
          inform you of other products or services available from the Company
          and its affiliates.
        </p>
        <p className="text-xl my-3">Sharing Information with Third Parties</p>
        <p className="mb-3">
          The Company does not sell, rent, or lease its customer lists to third
          parties.
        </p>
        <p className="mb-3">
          The Company may share data with trusted partners to help perform
          statistical analysis, send you email or postal mail, provide customer
          support, or arrange for deliveries. All such third parties are
          prohibited from using your personal information except to provide
          these services to the Company, and they are required to maintain the
          confidentiality of your information.
        </p>
        <p>
          The Company may disclose your personal information, without notice, if
          required to do so by law or in the good faith belief that such action
          is necessary to: (a) conform to the edicts of the law or comply with
          legal process served on the Company or the site; (b) protect and
          defend the rights or property of the Company; and/or (c) act under
          exigent circumstances to protect the personal safety of users of the
          Company, or the public.
        </p>
      </div>
    </div>
  );
}
