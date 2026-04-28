import React from "react";
import ReactDOM from "react-dom/client";
import { PhantomProvider, darkTheme } from "@phantom/react-sdk";
import { AddressType } from "@phantom/browser-sdk";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <PhantomProvider
        config={{
            providers: ["google", "apple", "injected"],
            addressTypes: [AddressType.solana],
            appId: "your-app-id",
        }}
        theme={darkTheme}
        appName="Your App"
    >
        <App />
    </PhantomProvider>
);