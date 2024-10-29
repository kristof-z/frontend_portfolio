import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hi there!",
  description: "Welcome to my portfolio website. Here you can find my projects and contact information.",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Hi, there",
    description: "Welcome to my portfolio website. Here you can find my projects and contact information.",
    url: "https://www.kristofzorko.com/",
    type: "website",
    images: [
      {
        url: "https://www.kristofzorko.com",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto antialiased">
        {children}
      </body>
    </html>
  );
}