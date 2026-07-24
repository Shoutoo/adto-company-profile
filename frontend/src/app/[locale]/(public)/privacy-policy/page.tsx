import { type Metadata } from 'next';

import { Container } from '@/components/molecules/container';
import { SectionWrapper } from '@/components/molecules/SectionWrapper';
import { generateMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy | PT ADTO Cipta Usaha Mandiri',
  description: 'Privacy Policy and data handling practices of PT ADTO Cipta Usaha Mandiri.',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </Container>
      </div>

      <SectionWrapper>
        <Container>
          <div className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
            <h2>1. Introduction</h2>
            <p>
              Welcome to PT ADTO Cipta Usaha Mandiri (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;). We respect your privacy and are committed to protecting your personal
              data. This privacy policy will inform you as to how we look after your personal data
              when you visit our website and tell you about your privacy rights and how the law
              protects you.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect, use, store, and transfer different kinds of personal data about you
              which we have grouped together as follows:
            </p>
            <ul>
              <li>
                <strong>Identity Data</strong> includes first name, last name, username or similar
                identifier, title, and company name.
              </li>
              <li>
                <strong>Contact Data</strong> includes billing address, delivery address, email
                address, and telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login
                data, browser type and version, time zone setting and location, browser plug-in
                types and versions, operating system and platform, and other technology on the
                devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you use our website,
                products, and services.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will
              use your personal data in the following circumstances:
            </p>
            <ul>
              <li>
                Where we need to perform the contract we are about to enter into or have entered
                into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and
                your interests and fundamental rights do not override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>
              We may share your personal data with internal third parties (such as our affiliates)
              and external third parties (such as service providers acting as processors who provide
              IT and system administration services). We require all third parties to respect the
              security of your personal data and to treat it in accordance with the law.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from
              being accidentally lost, used or accessed in an unauthorized way, altered, or
              disclosed. In addition, we limit access to your personal data to those employees,
              agents, contractors, and other third parties who have a business need to know.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to
              your personal data, including the right to request access, correction, erasure,
              restriction, transfer, to object to processing, to portability of data and (where the
              lawful ground of processing is consent) to withdraw consent.
            </p>

            <h2>7. Cookies Policy</h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when
              websites set or access cookies. If you disable or refuse cookies, please note that
              some parts of this website may become inaccessible or not function properly.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We keep our privacy policy under regular review. This version was last updated on the
              date indicated at the top of this page. It is important that the personal data we hold
              about you is accurate and current. Please keep us informed if your personal data
              changes during your relationship with us.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please
              contact us at:
            </p>
            <p>
              PT ADTO Cipta Usaha Mandiri
              <br />
              Email: info@adto.co.id
              <br />
              Jakarta, Indonesia
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
