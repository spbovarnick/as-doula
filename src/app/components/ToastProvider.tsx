'use client';

import { Toaster } from "react-hot-toast";

interface ToastProviderProps {
  children: React.ReactNode;
};

export default function ToastProvider({
  children,
}: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster
        containerClassName="poop"
        containerStyle={{
          position: "absolute",
          height: "fit-content"
        }} />
    </>
  )
}