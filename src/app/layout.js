import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "WhereBnb",
  description: "WhereBnb-web-application",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
