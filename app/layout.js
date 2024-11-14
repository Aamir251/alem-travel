
import { federoFont, interFont } from "@/constants/fonts";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${federoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
