import { useState } from "react";
import { CurrencyConverterForm, WalletDetailsModal } from "./components";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen items-center justify-center w-full flex flex-col space-y-12 bg-black">
      <h1 className="text-3xl font-bold text-white">
        NEPTUNE MUTUAL FRONT-END DEMO
      </h1>
      <div className="w-2/3 max-w-md h-96 max-h-96 rounded-xl flex flex-col items-center justify-center bg-white">
        <CurrencyConverterForm />
        <div className="w-full h-12 items-center text-center cursor-pointer mt-8">
          <button
            className="font-bold text-blue-800"
            onClick={() => {
              console.log("Balance check button clicked");
              setIsModalOpen(true);
            }}
          >
            <p>Check Wallet Details</p>
          </button>
        </div>
      </div>
      <WalletDetailsModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
