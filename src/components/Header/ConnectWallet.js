import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import binance from "../../assets/images/binance.png";
import blocto from "../../assets/images/blocto.png";
import brave from "../../assets/images/brave.png";
import coin98 from "../../assets/images/coin98.png";
import coinbase from "../../assets/images/coinbase.png";
import ledger from "../../assets/images/ledger.png";
import mathwallet from "../../assets/images/mathwallet.png";
import metamask from "../../assets/images/metamask.png";
import opera from "../../assets/images/opera.png";

import safepal from "../../assets/images/safepal.png";
import tokenpocket from "../../assets/images/tokenpocket.png";
import trust from "../../assets/images/trust.png";
import walletconnect from "../../assets/images/walletconnect.png";

import "./connect.css";
function ConnectWallet({ handleCloseModal }) {
  async function connectMetamask() {
    console.log("requesting account.....");

    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
      } catch (error) {
        console.log("error connecting....");
      }
    } else {
      console.log("metamask not detected");
    }
  }

  return (
    <div className="overlay" onClick={() => handleCloseModal()}>
      <div />
      <div
        className="connect-wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="connect-header">
          <div className="connect-content">
            <h2 className="wallet-content">Connect Wallet</h2>
          </div>
          <div className="connect-close" onClick={() => handleCloseModal()}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div className="wallet-menu">
          <div className="menu-item">
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={metamask} alt="..." className="img-wallet" />
                <div className="item-name">Metamask</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={binance} alt="..." className="img-wallet" />
                <div className="item-name">Binance Wallet</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={coinbase} alt="..." className="img-wallet" />
                <div className="item-name">Coinbase</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={coin98} alt="..." className="img-wallet" />
                <div className="item-name">Coin98</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={brave} alt="..." className="img-wallet" />
                <div className="item-name">Brave</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={blocto} alt="..." className="img-wallet" />
                <div className="item-name">Blocto</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={ledger} alt="..." className="img-wallet" />
                <div className="item-name">Ledger</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={mathwallet} alt="..." className="img-wallet" />
                <div className="item-name">Math Wallet</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={tokenpocket} alt="..." className="img-wallet" />
                <div className="item-name">Token Pocket</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={opera} alt="..." className="img-wallet" />
                <div className="item-name">Opera</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={trust} alt="..." className="img-wallet" />
                <div className="item-name">Trust</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={walletconnect} alt="..." className="img-wallet" />
                <div className="item-name">Wallet Connect</div>
              </button>
            </div>
            <div className="list-item">
              <button className="item" onClick={connectMetamask}>
                <img src={safepal} alt="..." className="img-wallet" />
                <div className="item-name">Safepal</div>
              </button>
            </div>
          </div>
        </div>
        <div className="connect-footer">
          <hr className="line-footer" />
          <div className="footer-content">
            <p className="content">Haven't got a crypto wallet yet?</p>
          </div>
          <button className="btn-connect">Learn How To Connect</button>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
