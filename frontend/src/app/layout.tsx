import "@/app/globals.css";
import ProviderReactQueryClient from "@/components/providers/provider-react-query-client";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arbitrage Ads - Quality Articles",
  description: "Discover quality articles and insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ProviderReactQueryClient>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <NuqsAdapter>
              {children}
            </NuqsAdapter>
          </ThemeProvider>
        </ProviderReactQueryClient>
      </body>
    </html>
  );
}

