# Description
- There are two parts for the assignment:
  - [Converter Form](#ConverterForm)
  - [Wallet Details Popup](#WalletDetailsPopup)

# ConverterForm
A form with two inputs named NEP and BUSD respectively. If any value is entered in one of the inputs, the other input’s value gets updated with the corresponding converted amount. The functionality is almost the same as a currency converter in Google. For the sake of simplicity, assume 1 NEP is equal to 3 BUSD.

# WalletDetailsPopup
A popup shows whether the wallet is connected or not. We use metamask as the wallet. If the wallet is connected, details of the wallet (connected Chain ID and balance) should be displayed on a table. Also, a button to disconnect the wallet should also be provided on the screen somewhere. Please watch this video of a sample application. 

### Resources
- Connect wallet using web3-react. (Tip: Examples can be found here)
- Using Metamask with Binance Smart Chain - Full Guide
- Get BNB on testnet using Binance Faucet or Venus Faucet
- The official Neptune Mutual Repo can also be used as a reference

### Remember
- Make all the UI elements accessible
- Used TypeScript
- Round the numbers to two decimal places
- Clean code and best practices followed
- Any improvisation that improves the UX