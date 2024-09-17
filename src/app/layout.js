import localFont from "next/font/local";
import "./globals.css";
// import Quicksand from './fonts/Quicksand.ttf'

const quicksand = localFont({
  src: './fonts/Quicksand.ttf',
  variable: '--font-quicksand'
})

export const metadata = {
  title: "Yas & Juampi",
  description: "Nos casamos y esperamos que seas parte de esta gran celebración!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
