"use client";

import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import type React from "react";

import { config } from "@/shared/lib/wagmi";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
            return (
                        <WagmiProvider config={config}>
                                    <QueryClientProvider client={queryClient}>
                                                <RainbowKitProvider
                                                            locale="ru-RU"
                                                            theme={lightTheme({
                                                                        accentColor: "#9810fa", // Основной цвет кнопки
                                                                        accentColorForeground:
                                                                                    "white", // Цвет текста кнопки
                                                                        borderRadius: "medium",
                                                            })}
                                                            showRecentTransactions
                                                >
                                                            {children}
                                                </RainbowKitProvider>
                                    </QueryClientProvider>
                        </WagmiProvider>
            );
}
