import "./globals.css";
import SwRegister from "../components/SwRegister";

export const metadata = {
  title: "GrowMyPin",
  description: "Track your Pinterest growth, pins and payments in one place.",
  manifest: "/manifest.json"
};

export const viewport = {
  themeColor: "#e60023",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
