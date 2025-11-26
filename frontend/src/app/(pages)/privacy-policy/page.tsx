import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Arbitrage Ads",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Introduction</h2>
        <p>
          This Privacy Policy describes how we collect, use, and protect your
          personal information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li>
            <strong>Session Data:</strong> We use cookies to track your session
            ID for analytics purposes.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information about how you
            interact with our website, including page views, device type, and
            referrer information.
          </li>
          <li>
            <strong>UTM Parameters:</strong> We may collect UTM parameters from
            URLs to track marketing campaign effectiveness.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Analyze website traffic and user behavior</li>
          <li>Improve our content and user experience</li>
          <li>Track the effectiveness of marketing campaigns</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use cookies to store your session ID and UTM parameters. These
          cookies are stored for up to 30 days.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party advertising services (such as Google AdSense or
          MGID) that may collect additional information. Please refer to their
          respective privacy policies.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information.
          However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          through our website.
        </p>
      </article>
    </div>
  );
}

