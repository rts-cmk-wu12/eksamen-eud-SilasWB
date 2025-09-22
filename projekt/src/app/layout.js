import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistRoboto = Roboto_Mono({
  variable: "--font-Roboto-Mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

export const metadata = {
  title: {
    template: "%s | SwapHub",
    default: "SwapHub"
  },
  description: "S",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistRoboto.variable}`}>
       {children}
      </body>
    </html>
  );
}
