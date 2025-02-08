import React, { useState } from 'react';
import './style.css';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import MemeFeed from '../components/MemeFeed';
import MemeSubmit from '../components/SubmitMemeSection';
import ContactForm from '../components/ContactForm'
const Home = () => {

  const latestMemeCoins = [
    { name: "PepeCoin", symbol: "PEPE", launchDate: "2023-05-01", initialPrice: "$0.000001" },
    { name: "DogeBonk", symbol: "DOBO", launchDate: "2023-05-15", initialPrice: "$0.000005" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "MoonShot", symbol: "MOON", launchDate: "2023-06-10", initialPrice: "$0.00005" },
    { name: "PepeCoin", symbol: "PEPE", launchDate: "2023-05-01", initialPrice: "$0.000001" },
    { name: "DogeBonk", symbol: "DOBO", launchDate: "2023-05-15", initialPrice: "$0.000005" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "DogeBonk", symbol: "DOBO", launchDate: "2023-05-15", initialPrice: "$0.000005" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "MoonShot", symbol: "MOON", launchDate: "2023-06-10", initialPrice: "$0.00005" },
    { name: "PepeCoin", symbol: "PEPE", launchDate: "2023-05-01", initialPrice: "$0.000001" },
    { name: "DogeBonk", symbol: "DOBO", launchDate: "2023-05-15", initialPrice: "$0.000005" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "PepeCoin", symbol: "PEPE", launchDate: "2023-05-01", initialPrice: "$0.000001" },
    { name: "DogeBonk", symbol: "DOBO", launchDate: "2023-05-15", initialPrice: "$0.000005" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "MoonShot", symbol: "MOON", launchDate: "2023-06-10", initialPrice: "$0.00005" },
    { name: "PepeCoin", symbol: "PEPE", launchDate: "2023-05-01", initialPrice: "$0.000001" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "MoonShot", symbol: "MOON", launchDate: "2023-06-10", initialPrice: "$0.00005" },
    { name: "MoonShot", symbol: "MOON", launchDate: "2023-06-10", initialPrice: "$0.00005" },
    { name: "PepeCoin", symbol: "PEPE", launchDate: "2023-05-01", initialPrice: "$0.000001" },
    { name: "DogeBonk", symbol: "DOBO", launchDate: "2023-05-15", initialPrice: "$0.000005" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "MoonShot", symbol: "MOON", launchDate: "2023-06-10", initialPrice: "$0.00005" },
    { name: "PepeCoin", symbol: "PEPE", launchDate: "2023-05-01", initialPrice: "$0.000001" },
    { name: "DogeBonk", symbol: "DOBO", launchDate: "2023-05-15", initialPrice: "$0.000005" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "MoonShot", symbol: "MOON", launchDate: "2023-06-10", initialPrice: "$0.00005" },
    { name: "PepeCoin", symbol: "PEPE", launchDate: "2023-05-01", initialPrice: "$0.000001" },
    { name: "DogeBonk", symbol: "DOBO", launchDate: "2023-05-15", initialPrice: "$0.000005" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "MoonShot", symbol: "MOON", launchDate: "2023-06-10", initialPrice: "$0.00005" },
    { name: "CatGirl", symbol: "CATGIRL", launchDate: "2023-05-20", initialPrice: "$0.000001" },
    { name: "ElonDoge", symbol: "EDOGE", launchDate: "2023-06-01", initialPrice: "$0.00001" },
    { name: "MoonShot", symbol: "MOON", launchDate: "2023-06-10", initialPrice: "$0.00005" }
  ];

  const ogMemeCoins = [
    { name: "Dogecoin", symbol: "DOGE", launchDate: "2013-12-06", initialPrice: "$0.00026" },
    { name: "Shiba Inu", symbol: "SHIB", launchDate: "2020-08-01", initialPrice: "$0.000000000056" },
    { name: "SafeMoon", symbol: "SAFEMOON", launchDate: "2021-03-08", initialPrice: "$0.000000001" },
    { name: "Floki", symbol: "FLOKI", launchDate: "2021-07-01", initialPrice: "$0.000004" },
    { name: "Akita Inu", symbol: "AKITA", launchDate: "2021-02-01", initialPrice: "$0.0000001" },
    { name: "Dogecoin", symbol: "DOGE", launchDate: "2013-12-06", initialPrice: "$0.00026" },
    { name: "Shiba Inu", symbol: "SHIB", launchDate: "2020-08-01", initialPrice: "$0.000000000056" },
    { name: "SafeMoon", symbol: "SAFEMOON", launchDate: "2021-03-08", initialPrice: "$0.000000001" },
    { name: "Floki", symbol: "FLOKI", launchDate: "2021-07-01", initialPrice: "$0.000004" },
    { name: "Akita Inu", symbol: "AKITA", launchDate: "2021-02-01", initialPrice: "$0.0000001" },
    { name: "Dogecoin", symbol: "DOGE", launchDate: "2013-12-06", initialPrice: "$0.00026" },
    { name: "Shiba Inu", symbol: "SHIB", launchDate: "2020-08-01", initialPrice: "$0.000000000056" },
    { name: "SafeMoon", symbol: "SAFEMOON", launchDate: "2021-03-08", initialPrice: "$0.000000001" },
    { name: "SafeMoon", symbol: "SAFEMOON", launchDate: "2021-03-08", initialPrice: "$0.000000001" },
    { name: "Floki", symbol: "FLOKI", launchDate: "2021-07-01", initialPrice: "$0.000004" },
    { name: "Akita Inu", symbol: "AKITA", launchDate: "2021-02-01", initialPrice: "$0.0000001" },
    { name: "Dogecoin", symbol: "DOGE", launchDate: "2013-12-06", initialPrice: "$0.00026" },
    { name: "Shiba Inu", symbol: "SHIB", launchDate: "2020-08-01", initialPrice: "$0.000000000056" },
    { name: "SafeMoon", symbol: "SAFEMOON", launchDate: "2021-03-08", initialPrice: "$0.000000001" },
    { name: "SafeMoon", symbol: "SAFEMOON", launchDate: "2021-03-08", initialPrice: "$0.000000001" },
    { name: "Floki", symbol: "FLOKI", launchDate: "2021-07-01", initialPrice: "$0.000004" },
    { name: "Akita Inu", symbol: "AKITA", launchDate: "2021-02-01", initialPrice: "$0.0000001" },
    { name: "Dogecoin", symbol: "DOGE", launchDate: "2013-12-06", initialPrice: "$0.00026" },
    { name: "Shiba Inu", symbol: "SHIB", launchDate: "2020-08-01", initialPrice: "$0.000000000056" },
    { name: "SafeMoon", symbol: "SAFEMOON", launchDate: "2021-03-08", initialPrice: "$0.000000001" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfLastItem2 = currentPage2 * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const indexOfFirstItem2 = indexOfLastItem2 - itemsPerPage;
  const currentItems1 = latestMemeCoins.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems2 = ogMemeCoins.slice(indexOfFirstItem2, indexOfLastItem2);

  const [activeTab, setActiveTab] = useState("latest");

  const coins = activeTab === "latest" ? currentItems1 : currentItems2;
  const nextPage = () => {
    if (currentPage < Math.ceil(latestMemeCoins.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage2 = () => {
    if (currentPage2 < Math.ceil(ogMemeCoins.length / itemsPerPage)) {
      setCurrentPage2(currentPage2 + 1);
    }
  };

  const prevPage2 = () => {
    if (currentPage2 > 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className='heading'>
        <h2>See What’s Trending – Real-Time Meme Insights from Reddit!</h2>
        <div className="subheading">
          <h4>Join the Meme Revolution – Stay Ahead of the Trends!</h4>
        </div>
      </div>

      <div className="container">
        {/* Tab Buttons */}
        <div className="table">
          <button
            className={`table-button ${activeTab === "latest" ? "active" : ""}`}
            onClick={() => setActiveTab("latest")}  >
            Latest Meme Coins
          </button>
          <button
            className={`table-button ${activeTab === "og" ? "active" : ""}`}
            onClick={() => setActiveTab("og")}>
            OG Meme Coins
          </button>
        </div>

        {/* Meme Coin Table */}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Launch Date</th>
              <th>Initial Price</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={index}>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>{coin.launchDate}</td>
                <td>{coin.initialPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Buttons */}
        {activeTab === "latest" ? (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <button onClick={nextPage} disabled={currentPage === Math.ceil(latestMemeCoins.length / itemsPerPage)}>
              Next
            </button>
          </div>
        ) : (
          <div className="pagination">
            <button onClick={prevPage2} disabled={currentPage2 === 1}>
              Prev
            </button>
            <button onClick={nextPage2} disabled={currentPage2 === Math.ceil(ogMemeCoins.length / itemsPerPage)}>
              Next
            </button>
          </div>
        )}
      </div>

      <br />
      <br />
      <MemeFeed />
      <MemeSubmit />
      <Questions />
      <ContactForm />
      </>
  );
};

export default Home;