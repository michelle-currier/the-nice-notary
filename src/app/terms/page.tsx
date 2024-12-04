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
          This Privacy Policy ("Policy") applies to
          https://www.thenicenotaryllc.com/, and The Nice Notary LLC ("Company")
          and governs data collection and usage. For the purposes of this
          Privacy Policy, unless otherwise noted, all references to the Company
          include https://www.thenicenotaryllc.com/. The Company's website is a
          e-commerce site. By using the Company website, you consent to the data
          practices described in this statement.
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
          If you purchase the Company's products and services, we collect
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
            to carry out the Company's obligations and enforce our rights
            arising from any contracts ente...???
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
          these services tothe Company, and they are required to maintain the
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
        <p className="text-xl my-3">Automatically Collected Information</p>
        <p>
          The Company may automatically collect information about your computer
          hardware and software. This information can include your IP address,
          browser type, domain names, access times, and referring website
          addresses. This information is used for the operation of the service,
          to maintain quality of the service, and to provide general statistics
          regarding the use of the Company's website.
        </p>
        <p className="text-xl my-3">Right to Deletion</p>
        <p>
          Subject to certain exceptions set out below, on receipt of a
          verifiable request from you, we will:
        </p>
        <ul className="list-disc list-inside mb-3">
          <li>Delete your personal information from our records; and</li>
          <li>
            Direct any service providers to delete your personal information
            from their records.
          </li>
        </ul>
        <p>
          Please note that we may not be able to comply with requests to delete
          your personal information if it is necessary to:
        </p>
        <ul className="list-disc list-inside mb-3">
          <li>
            Complete the transaction for which the personal information was
            collected, fulfill the terms
          </li>
          <li>
            Detect security incidents, protect against malicious, deceptive,
            fraudulent, or illegal activity;
          </li>
          <li>
            Debug to identify and repair errors that impair existing intended
            functionality;
          </li>
          <li>
            Exercise free speech, ensure the right of another consumer to
            exercise his or her right of free speech, or
          </li>
          <li>
            Comply with the California Electronic Communications Privacy Act;
          </li>
          <li>
            Engage in public or peer-reviewed scientific, historical, or
            statistical research in the public interest that a relationship{" "}
          </li>
          <li>
            Enable solely internal uses that are reasonably aligned with your
            expectations based on your
          </li>
          <li>Comply with an existing legal obligation; or</li>
          <li>
            Otherwise use your personal information, internally, in a lawful
            manner that is compatible wi
          </li>
        </ul>
        <p className="text-xl my-3">Children Under Thirteen</p>
        <p className="mb-3">
          The Company does not knowingly collect personally identifiable
          information from children under the age of 13. If you are under the
          age of 13, you must ask your parent or guardian for permission to use
          this website.
        </p>
        <p>
          Changes to This Statement The Company reserves the right to change
          this Policy from time to time. For example, when there are changes in
          our services, changes in our data protection practices, or changes in
          the law. When changes to this Policy are significant, we will inform
          you. You may receive a notice by sending an email to the primary email
          address specified in your account, by placing a prominent notice on
          our The Nice Notary LLC, and/or by updating any privacy information.
          Your continued use of the website and/or services available after such
          modifications will constitute your: (a) acknowledgment of the modified
          Policy; and (b) agreement to abide and be bound by that Policy.
        </p>
        <p className="text-xl my-3">Contact Information</p>
        <p>
          The Company welcomes your questions or comments regarding this Policy.
          If you believe that the Company has not adhered to this Policy, please
          contact the Company at:
        </p>
      </div>
    </div>
  );
}
