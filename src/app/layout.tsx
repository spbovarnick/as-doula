"server-only";
import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { sanityFetch } from "./lib/sanityFetch";
import { servicesNavQuery } from "@/app/lib/queries";
import { ServiceNavQueryResponse } from "@/app/lib/types"
import ToastProvider from "./components/ToastProvider";
import { lato } from "./fonts";

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
    <html lang="en" className=''>
      <body className={lato.className}>
        <div className="relative min-h-screen overflow-x-hidden">
          <Nav services={services} />
          <div className="pb-12 pt-6 px-5 sm:pt-10 sm:px-[12.5vw] bg-eggshellOne">
            <ToastProvider>{children}</ToastProvider>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
