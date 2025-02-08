import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigateTo = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        console.log("MetaMask is not installed");
        throw new Error("MetaMask is not installed");
      }
      // Get MetaMask account
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const selectedAccount = accounts[0];
      console.log(selectedAccount);
      setSelectedAccount(selectedAccount);
    } catch (error) {
      console.log("Error inside the Wallet.jsx handleWallet:", error);
    }
  };

  useEffect(() => {
    if (selectedAccount) {
      navigateTo("/search");
    }
  }, [selectedAccount, navigateTo]);

  return (
    <>
      <div className="modal-option" onClick={handleWallet}>
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png"
          alt="metamask-icon"
          className="modal-icon"
        />
        Connect Metamask Wallet
      </div>
 
    </>
  );
};

export default Wallet;


