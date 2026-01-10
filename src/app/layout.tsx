import type { Metadata } from "next";
import "./global.css";


export const metadata: Metadata = {
  title: "Sefu Music",
  description: "Official website of Artist Name - Electronic music producer and live performer",
  icons: {
    icon: "/sefumusiclogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
