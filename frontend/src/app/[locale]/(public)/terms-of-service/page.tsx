import { type Metadata } from 'next';

import { Container } from '@/components/molecules/container';
import { SectionWrapper } from '@/components/molecules/SectionWrapper';
import { generateMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service | PT Adto Cipta Usaha Mandiri',
  description: 'Terms of Service and usage conditions for PT Adto Cipta Usaha Mandiri.',
});

export default function TermsOfServicePage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
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
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you,
              whether personally or on behalf of an entity (&quot;you&quot;) and PT Adto Cipta Usaha
              Mandiri (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to
              and use of our website as well as any other media form, media channel, mobile website
              or mobile application related, linked, or otherwise connected thereto.
            </p>

            <h2>2. Services Description</h2>
            <p>
              PT Adto Cipta Usaha Mandiri provides construction, procurement, engineering, and
              project management services. The information provided on the website is not intended
              for distribution to or use by any person or entity in any jurisdiction or country
              where such distribution or use would be contrary to law or regulation.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul>
              <li>
                All registration information you submit will be true, accurate, current, and
                complete.
              </li>
              <li>
                You will maintain the accuracy of such information and promptly update such
                registration information as necessary.
              </li>
              <li>
                You have the legal capacity and you agree to comply with these Terms of Service.
              </li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code,
              databases, functionality, software, website designs, audio, video, text, photographs,
              and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks,
              service marks, and logos contained therein (the &quot;Marks&quot;) are owned or
              controlled by us or licensed to us.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any
              third party for any direct, indirect, consequential, exemplary, incidental, special,
              or punitive damages, including lost profit, lost revenue, loss of data, or other
              damages arising from your use of the site.
            </p>

            <h2>6. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
              affiliates, and all of our respective officers, agents, partners, and employees, from
              and against any loss, damage, liability, claim, or demand, including reasonable
              attorneys&apos; fees and expenses, made by any third party due to or arising out of
              your use of the Site.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of the Republic of
              Indonesia. PT Adto Cipta Usaha Mandiri and yourself irrevocably consent that the
              courts of Indonesia shall have exclusive jurisdiction to resolve any dispute which may
              arise in connection with these terms.
            </p>

            <h2>8. Dispute Resolution</h2>
            <p>
              Any dispute arising out of or in connection with this contract, including any question
              regarding its existence, validity or termination, shall be referred to and finally
              resolved by arbitration in Jakarta, Indonesia in accordance with the rules of the
              Indonesian National Board of Arbitration (BANI).
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right, in our sole discretion, to make changes or modifications to
              these Terms of Service at any time and for any reason. We will alert you about any
              changes by updating the &quot;Last updated&quot; date of these Terms of Service, and
              you waive any right to receive specific notice of each such change.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information
              regarding use of the Site, please contact us at:
            </p>
            <p>
              PT Adto Cipta Usaha Mandiri
              <br />
              Email: legal@adto.co.id
              <br />
              Jakarta, Indonesia
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
