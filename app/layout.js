import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
 subsets: ["latin"], weight: ["400" , "500" , "600" , "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
 });

export const metadata = {
  title: "M. Salman",
  description: "I am an advance video editor from Multan, Pakistan with 3+ year of experience in self-employee and 1.5 mouth in software house located in Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} 
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
