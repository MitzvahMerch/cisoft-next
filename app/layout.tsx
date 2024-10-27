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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}