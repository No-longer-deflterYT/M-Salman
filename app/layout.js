import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
 subsets: ["latin"], weight: ["400" , "500" , "600" , "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
 });

export const metadata = {
  title: "Muhammad_Abdullah",
  description: "Welcome to my portfolio! I'm Muhammad Abdullah, a passionate web developer skilled in building responsive, user-friendly, and visually appealing websites. I specialize in React, Next.js, Node.js, and MongoDB Atlas to create fast, scalable, and dynamic web applications. With expertise in modern web development, I design seamless digital experiences that boost user engagement and performance. Explore my work to see how I turn ideas into interactive and functional websites optimized for performance, SEO, and user experience.",
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
