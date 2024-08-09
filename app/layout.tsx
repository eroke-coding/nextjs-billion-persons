import "../styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Billions Persons",
    default: "Loading...",
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
