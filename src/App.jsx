import { useState } from "react";

export default function App() {
  const [wallet, setWallet] = useState(null);
  const [error, setError] = useState(null);

  const connect = async () => {
    if (!window.solana?.isPhantom) {
      setError("Please install Phantom wallet extension first.");
      window.open("https://phantom.app", "_blank");
      return;
    }
    try {
      const res = await window.solana.connect();
      setWallet(res.publicKey.toString());
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  const disconnect = () => {
    window.solana.disconnect();
    setWallet(null);
  };

  return (
    <div style={{ padding: "2rem" }}>
      {wallet ? (
        <>
          <p>Connected: {wallet}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <>
          <button onClick={connect}>Connect Wallet</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
    </div>
  );
}