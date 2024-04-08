import { Barlow, Fraunces } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 });

const fraunces = Fraunces({
 subsets: ["latin"],
 weight: [ '300', '700'],
 display: 'swap',
})


export const metadata = {
  title: "Coffee Roasters | Subscription plan",
  description: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
};

export default function PlanLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className} >{children}</body>
    </html>
  );
}
