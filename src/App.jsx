import { ConnectButton, usePhantom } from "@phantom/react-sdk";

export default function App() {
  const { isConnected, addresses } = usePhantom();

  return (
    <div style={{ padding: "2rem" }}>
      <ConnectButton />
      {isConnected && <p>{addresses[0]?.address}</p>}
    </div>
  );
}