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
            appId: "8a90a62c-78e0-46c2-a8a5-f2084362c273",
        }}
        theme={darkTheme}
        appName="Your App"
    >
        <App />
    </PhantomProvider>
);