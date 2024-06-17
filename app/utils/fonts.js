import {Fraunces, Barlow } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: [ '300', '700'],
  display: 'swap',
 })

 export const barlow = Barlow({
  display: 'swap',
  subsets: ["latin"],
  weight: [ '300', '700'],
 });
