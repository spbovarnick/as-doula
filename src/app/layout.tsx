import "server-only"
import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Lato } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { sanityFetch } from "./lib/sanityFetch";
import { servicesNavQuery } from "@/app/lib/queries";
import { ServiceNavQueryResponse } from "@/app/lib/types"
import ToastProvider from "./components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

const libre_baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-libre-baskerville',
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Annie Scott, Doula",
  description: "Annie Scott is a doula in the greater Portland Metro area",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services: ServiceNavQueryResponse[] = await sanityFetch<ServiceNavQueryResponse[]>({
    query: servicesNavQuery,
    tags: ["service"],
  });

  return (
    <html lang="en" className={`${inter.className} ${libre_baskerville.variable} ${lato.variable}`}>
      <body className="font-lato ">
        <div className="relative min-h-screen">
          <Nav services={services} />
          <div className="pb-[145px] pt-6 px-5 sm:pt-10 sm:px-8">
            <ToastProvider>{children}</ToastProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
