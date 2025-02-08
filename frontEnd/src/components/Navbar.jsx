import React from 'react';
import { useState, useCallback ,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './style.css'; // Optional: For styling
// import user from '../public/user.png';

const Navbar = () => {

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const navigateTo = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState("");
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
      closeModal();
    }
  }, [selectedAccount, navigateTo]);

  return (
    <nav className="navbar">
      {/* Left Side: Icon with Page Link */}
      <div className="navbar-left">

        <Link to="/" className="home">
          {/* <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 501.57"><path fill="#194794" fill-rule="nonzero" d="M.01 447.974c-.361-37.494 9.408-76.309 40.373-101.243 16.382-13.192 36.861-21.347 57.433-24.098 33.595-4.491 61.551-9.05 73.376-49.659 3.06 2.681 6.274 5.386 9.55 8.3 30.602 27.206 65.084 28.387 94.568-.045 2.422-2.344 4.791-4.549 7.059-6.695 3.074 6.841 6.999 12.534 11.557 17.313-20.495 24.91-32.874 57.206-32.874 92.486 0 22.863 5.2 44.478 14.439 63.641H.01z" /><path fill="#D2A75F" fill-rule="nonzero" d="M282.368 274.542c3.074 6.838 7 12.529 11.555 17.308a143.79 143.79 0 00-23.102 39.632c-43.09 11.456-90.764 3.69-129.06-19.657 16.211-8.731 24.329-21.374 29.414-38.86 3.06 2.68 6.283 5.386 9.567 8.308 30.603 27.208 65.085 28.388 94.568-.044 2.422-2.343 4.792-4.549 7.058-6.687z" /><path fill="#DBB26F" fill-rule="nonzero" d="M230.908 336.697c-31.12.138-62.422-8.584-89.147-24.872 16.151-8.696 24.476-21.538 29.423-38.86 3.068 2.68 6.274 5.386 9.557 8.308 16.074 14.289 33.233 21.399 50.167 20.813v34.611z" /><path fill="#E9BE79" d="M122.826 181.5c4.039-11.559 13.429-7.842 26.809-2.959-5.344-24.235.963-43.164 19.937-56.288 40.48-28.008 58.776-4.035 102.65-39.365 25.206 12.695 47.758 34.156 36.265 101.202 12.165-9.217 29.705-8.358 24.187 12.061l-7.536 21.347c-1.802 5.109-3.007 6.961-9.463 6.615-2.854-.152-5.722-1.25-8.583-3.141 2.643 31.499-12.65 41.775-31.787 60.247-29.476 28.444-63.96 27.27-94.555.052-17.922-15.94-33.837-25.621-34.631-58.391-4.648 1.424-9.04 1.683-12.878-.498-7.644-4.351-10.429-17.014-10.848-25.126-.166-3.259-.028-12.435.433-15.756z" /><path fill="#F2CD8C" d="M122.827 181.5c4.042-11.56 13.426-7.839 26.809-2.959l-.12-.577.12.065c6.974-73.223 43.33-62.212 81.269-71.564v195.619c-16.93.593-34.082-6.511-50.158-20.813-17.919-15.94-33.837-25.618-34.626-58.388-4.645 1.419-9.041 1.68-12.876-.501-11.136-6.338-12.034-29.257-10.418-40.882z" /><path fill="#462917" d="M99.694 80.499C158.728 7.55 226.77-32.126 277.863 32.768c62.611 3.288 84.332 105.45 31.818 145.307 4.207-55.49-12.22-80.377-37.619-92.883-48.342 52.714-112.882-4.788-122.426 95.389l-23.169-12.067c-2.301-28.731 4.429-78.578-26.773-88.015z" /><path fill="#2E2D2C" d="M398.815 267.098c62.531 0 113.185 52.5 113.185 117.236 0 64.769-50.686 117.236-113.185 117.236-62.531 0-113.185-52.5-113.185-117.236 0-64.771 50.686-117.236 113.185-117.236z" /><path fill="#434241" d="M399.396 267.201c24.312 0 46.824 7.938 65.267 21.443 36.231 78.596-14.573 192.049-101.981 206.72-44.498-15.796-76.472-59.499-76.472-110.927 0-64.772 50.687-117.236 113.186-117.236z" /><path fill="#fff" fill-rule="nonzero" d="M435.498 322.269c-3.265-2.238-7.591-1.396-9.862 1.885l-6.227 8.785c-4.207-1.885-9.576-3.113-14.136-3.77l-1.952-11.477c-.741-3.854-4.141-6.345-8.045-5.604l-14.388 2.558c-3.77.757-6.446 4.19-5.739 8.061l1.834 10.484c-4.426 1.852-8.818 4.544-12.554 7.557l-9.761-6.715c-3.265-2.255-7.371-1.548-9.626 1.716l-8.297 11.831c-2.255 3.265-1.582 7.489 1.717 9.744l8.767 6.227c-1.851 4.174-3.113 9.609-3.769 14.136l-11.461 1.953c-3.887.74-6.327 4.106-5.62 8.044l2.557 14.389c.758 3.752 4.207 6.478 8.061 5.738l10.485-1.834c1.935 4.594 4.577 8.717 7.556 12.689l-6.714 9.626c-2.256 3.265-1.532 7.371 1.716 9.626l11.948 8.415c3.181 2.238 7.557 1.295 9.879-1.7l6.21-8.903c4.275 1.885 9.525 3.08 14.153 3.787l1.952 11.46c.707 3.871 4.157 6.345 8.045 5.604l14.388-2.558c3.753-.757 6.446-4.19 5.722-8.044l-1.817-10.484c4.628-1.953 8.666-4.578 12.672-7.573l9.643 6.715c3.281 2.271 7.472 1.598 9.744-1.717l8.414-11.949c2.205-3.181 1.296-7.539-1.699-9.878l-8.903-6.092c1.851-4.174 3.113-9.61 3.77-14.137l11.46-1.952c3.854-.74 6.362-4.123 5.621-8.044l-2.558-14.389c-.757-3.753-4.207-6.479-8.061-5.739l-10.484 1.835c-2.02-4.561-4.427-8.667-7.556-12.554l6.714-9.761c2.255-3.265 1.532-7.372-1.716-9.644l-12.083-8.347zm-36.671 31.319c16.981 0 30.746 13.766 30.746 30.746 0 16.981-13.765 30.747-30.746 30.747-16.98 0-30.746-13.766-30.746-30.747 0-16.98 13.766-30.746 30.746-30.746z" /></svg> */}
          <img src="./test2.jpg" alt="icon" />
          <span className="navbar-title">ViralAlgo</span>
        </Link>
      </div>
      
    




      {/* Right Side: Dashboard, Status, Connect Wallet Buttons */}
      <div className="navbar-right">
        <Link to="/contact" className="navbar-link">
        Contact us
        </Link>
   
        <button className="navbar-button" onClick={openModal} >
          {selectedAccount ?( <>
              <img src="./user.png" alt=""  />
          {selectedAccount.slice(0, 8)} </>) : "Connect Wallet"}
        </button>

        {/* Portal */}
        {IsmodalOpen && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>&times; </button>
              <input type="email" placeholder="Enter your email" />
              <div className='modal-options'>


                <div className="modal-option" onClick={handleWallet}>
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png"
                    alt="metamask-icon"
                    className="modal-icon"
                  />
                  Connect Metamask Wallet
                </div>


              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;