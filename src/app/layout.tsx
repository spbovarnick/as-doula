import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { sanityFetch } from "./lib/sanityFetch";
import { servicesNavQuery } from "@/app/lib/queries";
import { ServiceNavQueryResponse } from "@/app/lib/types"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annie Scott, Doula",
  description: "Annie Scott is a doula in the greater Portland Metro area",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const service: ServiceNavQueryResponse[] = await sanityFetch({
    query: servicesNavQuery,
    tags: ["service"],
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
