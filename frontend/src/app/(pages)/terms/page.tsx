import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Arbitrage Ads",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound
          by the terms and provision of this agreement.
        </p>

        <h2>Use License</h2>
        <p>
          Permission is granted to temporarily access the materials on this
          website for personal, non-commercial transitory viewing only.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The materials on this website are provided on an &apos;as is&apos; basis. We
          make no warranties, expressed or implied, and hereby disclaim and
          negate all other warranties including, without limitation, implied
          warranties or conditions of merchantability, fitness for a particular
          purpose, or non-infringement of intellectual property or other
          violation of rights.
        </p>

        <h2>Limitations</h2>
        <p>
          In no event shall we or our suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on this website.
        </p>

        <h2>Accuracy of Materials</h2>
        <p>
          The materials appearing on this website could include technical,
          typographical, or photographic errors. We do not warrant that any of
          the materials on its website are accurate, complete, or current.
        </p>

        <h2>Links</h2>
        <p>
          We have not reviewed all of the sites linked to our website and are
          not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by us of the site.
        </p>

        <h2>Modifications</h2>
        <p>
          We may revise these terms of service at any time without notice. By
          using this website you are agreeing to be bound by the then current
          version of these terms of service.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with applicable laws.
        </p>
      </article>
    </div>
  );
}

