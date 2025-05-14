"use client";

import AOS from "aos";
import TodoApp from "@/components/todoApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 bg-gradient-to-br from-[#a2edce] to-[#d21534] dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 py-8 md:py-16">
            <TodoApp />
          </div>
        </main>

        <footer className="mt-auto bg-white/20 py-4 dark:bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-black font-medium  dark:text-gray-400">
              © 2025 Chinwe Nwankwo. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
