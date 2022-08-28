import React, { useState, useMemo, useCallback, useEffect } from "react";
import { ethers } from "ethers";
//import ProgressBar from 'react-bootstrap/ProgressBar';
import Dexo from "../assets/images/logo.png";
import BNB from "../assets/images/bnb.png";
import USDT from "../assets/images/usdt.png";
//import saleAbi from "../abis/SALE.json";
import saleAbi from "../abis/SALENEW.json";
import Countdown from "react-countdown";
import Progressbar from './Progress_bar';
import axios from 'axios';

const PreSaleBox = () => {
  const Completionist = () => (
    <span className="text-center color-white font-xl my-4 d-block text-center">
      Pre Sale is Live!
    </span>
  );

  // CALLBACK FUNCTION FOR COUNTDOWN
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    console.log(completed);
    if (completed) {
      // IF PRE SALE IS LIVE
      return <Completionist />;
    } else {
      // IF PRE SALE IS NOT LIVE SHOW COUNTDOWN
      return (
        <div className="timer-wrapper my-4">
          <div className="timer-box">{days}</div>
          <div className="timer-box">{hours}</div>
          <div className="timer-box">{minutes}</div>
          <div className="timer-box">{seconds}</div>
        </div>
      );
    }
  };

  const [amount, setAmount] = useState(0);
  const [bnbamount, setBnbAmount] = useState(0);
  const [usdtamount, setUsdtAmount] = useState(0);
  const [bnbusdtamount, setBnbUsdtAmount] = useState(0);
  //const _TOKEN_ADDRESS = "0x23D706AC42ca0dbE28300bf571ff8C69C88e5391";
  const _TOKEN_ADDRESS = "0x1D38372641F8bF62B8861605F5539cfEC83dBa2c";

  const handleAmountChange = useCallback(e => {
    axios.get(`https://www.binance.com/api/v3/ticker/price?symbol=BNBUSDT`)
      .then(res => {
        console.log(res.data);
        console.log(res.data.price);
        setUsdtAmount(res.data.price);
       /// thi().setState({ persons });
      })
		setAmount(e.target.value);
    const a = ((e.target.value) *  (1/((usdtamount) *(0.18)))).toFixed(8) ;
    const b = (1/(a));
    const c = ((e.target.value) *  (1/((usdtamount)))).toFixed(8) ;
    setBnbUsdtAmount(c);
    //setBnbAmount(b.toFixed(8));
    ///setBnbAmount(((e.target.value) *  (1/((usdtamount) *(0.18)))).toFixed(8)  );
    setBnbAmount(((e.target.value) *  (1/(0.18))).toFixed(8)  );
       // setBnbAmount(((e.target.value) * (0.18)).toFixed(8) );
	});


  const handleAmountChange1 = useCallback(e => {
    axios.get(`https://www.binance.com/api/v3/ticker/price?symbol=BNBUSDT`)
      .then(res => {
        console.log(res.data);
        console.log(res.data.price);
        setUsdtAmount(res.data.price);
       /// thi().setState({ persons });
      })
		setBnbAmount(e.target.value);
    //const a = ((e.target.value) *  (1/((usdtamount) *(0.18)))).toFixed(8) ;
    //setAmount(a);
   // setAmount(((e.target.value) * (0.18) * (usdtamount)).toFixed(8) );
    //setAmount(((e.target.value) *  (1/(0.18))).toFixed(8)  );
    setAmount(((e.target.value) * (0.18)).toFixed(8) );
    const c = ((e.target.value) *  (((usdtamount) *(0.18)))).toFixed(8) ;
    setBnbUsdtAmount(c);
	});

  const handleBNBCurrent = useCallback(async (e) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    const TokenContract = new ethers.Contract(
      _TOKEN_ADDRESS,
      saleAbi,
      provider.getSigner()
    );
    console.log("A", TokenContract);
    const amountIn1 = ethers.utils.parseEther(amount.toString(), "ether");
    console.log(amountIn1);
    const amountIn = amountIn1.toString();
    console.log(amountIn);
    const a = parseFloat(amount) * 1e18;
    const a1 = a.toString();
    console.log(a);
    console.log(a1);
    console.log(amount);

    const b1 = ethers.utils.parseEther(amount.toString());
    console.log(b1);
    const a2 = (amount) * (usdtamount);
    const a3 = a2.toString();
    console.log(a2);
    console.log(a3);
    const options = {
      value: ethers.utils.parseEther(bnbusdtamount.toString(), "ether"),
    };
    console.log(options);
    const reciept = await TokenContract.buyToken(options);
    console.log(reciept);
  });

  const handleBNBCurrent1 = useCallback(async (e) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
   /* const TokenContract = new ethers.Contract(
      _TOKEN_ADDRESS,
      saleAbi,
      provider.getSigner()
    ); 
    console.log("A", TokenContract); */
    const amountIn1 = ethers.utils.parseEther(amount.toString(), "ether");
    console.log(amountIn1);
    const amountIn = amountIn1.toString();
    console.log(amountIn);
    const a = parseFloat(amount) * 1e18;
    const a1 = a.toString();
    console.log(a);
    console.log(a1);
    console.log(amount);

    const b1 = ethers.utils.parseEther(amount.toString());
    console.log(b1);
    const a2 = (amount) * (usdtamount);
    const a3 = a2.toString();
    console.log(a2);
    console.log(a3);
    const options = {
      value: ethers.utils.parseEther(amount.toString(), "ether"),
    };
    console.log(options);
    //const reciept = await TokenContract.buyTokenByUSDT(ethers.utils.parseUnits(amount, 18));
    //console.log(reciept);

    provider.getGasPrice().then((currentGasPrice) => {

      let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
  
      console.log(`gas_price: ${gas_price}`)
      const TokenContract = new ethers.Contract(
        _TOKEN_ADDRESS,
        saleAbi,
        provider.getSigner()
      ); 
      console.log("A", TokenContract);
      let numberOfTokens = ethers.utils.parseUnits(amount, 18)

      console.log(`numberOfTokens: ${numberOfTokens}`)


      TokenContract.buyTokenByUSDT( numberOfTokens).then((transferResult) => {

        console.dir(transferResult)

        alert("sent token")

      })

    });


  });

  // DATE NOW IS GET MILLISECOND FROM DATE NOW BY WHEN
  // const dateNow = 1660153431797;
  const dateNow = 1661272202740;
  console.log(dateNow);
  return (
    <>
      <div className="hero-sale-box-wrapper mx-auto  ">
        <h6 className="text-center color-white font-md">Pre-sale starts in</h6>
        <div className="grey-broder-presale"></div>
        {/* THE HARD CODE SECONDS ARE IN MILLISECOND THAT LIVE AFTER 2 DAYS FROM DATE .NOW  */}
        <Countdown date={dateNow + 3204000000} renderer={renderer} />,
        <p className="color-white text-center font-md">Seed Round Closed. Total Raised $1.02 million</p>
        <div className="presale-timeline">
          <span className="item-before">Pre Sale</span>
          <span className="item-before">Soft Cap</span>
          <span className="item-before">Hard Cap</span>
        </div>
    
        <h6 className=" color-white"  style={{ paddingLeft : 50, marginTop: 80}}>Progress {'30%'}</h6>
        <Progressbar bgcolor="#99ff66" progress='30'  height={20}  />
      {/*  <h6 className=" color-white" style={{ paddingLeft : 50}}>0 BNB</h6>
        <h6 className=" color-white"  style={{ paddingLeft : 350}}>1800 BNB</h6>  */}
        <div className="mt-25 pt-25">
          <div className="buy-dexo-box px-sm-3 px-2 py-4 align-items-center mx-2 mx-md-5 d-flex justify-content-center flex-column ">
            <h3 className="text-center mb-4">TOKEN PRICE- 0.18/DEXO</h3>
            <div className="bnb w-100 d-flex">
              <span className="me-2">
                <img width="30" src={USDT} alt="" />
              </span>
              <input
                className=""
                type="number"
                value={amount}
                placeholder="Amount"
                onChange={handleAmountChange}
              />
            </div>
            <div className="dexo w-100 mt-3 mb-4  d-flex">
              <span className="me-2">
                <img width="30" src={Dexo} alt="" />
              </span>
              <input 
                className="" 
                type="number"  
                value={bnbamount} 
                placeholder="Amount" 
                onChange={handleAmountChange1} 
              />
            </div>
            <button onClick={handleBNBCurrent1} style={{ width: '15%', height: '7%', fontSize:'6',    position: 'absolute', top: '89%', left: '66%'}}>BUY WITH USDT</button>        
            <button onClick={handleBNBCurrent}  style={{ width: '15%',height: '7%', fontSize:'6',  position: 'absolute', top: '89%', left : '82%'}} >BUY WITH BNB</button>
<br/>
<br/>

          </div>
        </div>
      </div>
    </>
  );
};

export default PreSaleBox;
