import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Montserrat, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const droidSerif = localFont({
  src: "../.././public/DroidSerif.ttf",
  variable: "--font-droid-serif",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${droidSerif.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="A store based on a design" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Oxelar</title>
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
