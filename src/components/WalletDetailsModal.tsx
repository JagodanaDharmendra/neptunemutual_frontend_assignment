import { Fragment, useRef, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ConnectionContext } from "../context/ConnectionContext";
import ShortenAddress from "../utils/ShortenAddress";

interface IProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const WalletDetailsModal = ({ isOpen, setIsOpen }: IProps) => {
  const ConnectButtonRef = useRef(null);
  const {
    isLoading,
    currentAccount,
    currentBalance,
    currentChainId,
    connectWallet,
    disConnectWallet,
  }: any = useContext(ConnectionContext);

  function onConnectClicked() {
    connectWallet();
  }

  function onDisconnectClicked() {
    disConnectWallet();
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={ConnectButtonRef}
        onClose={setIsOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {currentAccount ? (
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="flex items-start w-full">
                  <div className="flex-1 w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Wallet Details
                    </Dialog.Title>
                    {!isLoading && (
                      <div className="mt-4 flex-1">
                        <table className="table-auto w-full">
                          <thead>
                            <tr>
                              <th>Key</th>
                              <th>value</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Account</td>
                              <td>{ShortenAddress(currentAccount)}</td>
                            </tr>
                            <tr>
                              <td>Chain ID</td>
                              <td>{currentChainId}</td>
                            </tr>
                            <tr>
                              <td>Balance</td>
                              <td>{currentBalance}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-8 pl-4 flex">
                  <button
                    type="button"
                    className="flex-1 w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
                    onClick={() => {
                      onDisconnectClicked();
                    }}
                    ref={ConnectButtonRef}
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            ) : (
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Wallet Details
                    </Dialog.Title>
                    <div className="mt-4">
                      <p className="text-base text-red-500">
                        Wallet not connected. Please click the "Connect Now"
                        button below.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pl-4 flex">
                  <button
                    type="button"
                    className="flex-1 w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
                    onClick={() => {
                      onConnectClicked();
                    }}
                    ref={ConnectButtonRef}
                  >
                    Connect
                  </button>
                  <button
                    type="button"
                    className="flex-1 w-full justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default WalletDetailsModal;
