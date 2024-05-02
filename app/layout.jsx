// Hooks
import { Barlow } from "next/font/google";
import { NavProvider } from "./_lib/providers/nav-provider";

// Styling
import "./reset.css";
import "./styles.css";

const barlow = Barlow({
   display: 'swap',
   subsets: ["latin"],
   weight: [ '300', '700'],
  });


export const metadata = {
  title: "Coffee Roasters | Great Coffee Simple Made",
  description: "Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavProvider >
        <body className={barlow.className} >{children}</body>
      </NavProvider>
    </html>
  );
}
