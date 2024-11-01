import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: 'DCDC Fundraiser Store',
  description: 'Shop DCDC merchandise and support our fundraiser',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://www.paypal.com/sdk/js?client-id=Aa2-mzkmjWQCgXq3zONHNu1eFWPABooevh0Hjp_z7PMBjZOJ0xdCIAIgE4eK8MJ4TcowsMROEefprlvm"></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}