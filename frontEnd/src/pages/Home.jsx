import React, { useState } from 'react';
import './style.css'
import Navbar from '../components/Navbar';
import Questions from '../components/Questions'
import MemeFeed from '../components/MemeFeed';


const data = [
  { token: "MOVES", priceUSD: "0.0000064841", priceSOL: "0.000000281", age: "1mo ago", views: "14295", mentions: "2", mcap: "6.48K" },
  { token: "MY", priceUSD: "0.0000086637", priceSOL: "0.000000372", age: "1mo ago", views: "96951", mentions: "1", mcap: "8.66K" },
  { token: "X", priceUSD: "0.0000063711", priceSOL: "0.000000302", age: "1mo ago", views: "26400", mentions: "1", mcap: "6.37K" },
  { token: "GEM", priceUSD: "0.0000054463", priceSOL: "0.000000292", age: "1mo ago", views: "47480", mentions: "4", mcap: "5.45K" },
  { token: "VIBE", priceUSD: "0.0000069585", priceSOL: "0.000000302", age: "1mo ago", views: "34600", mentions: "1", mcap: "6.99K" },
  { token: "SPEED", priceUSD: "0.0000072068", priceSOL: "0.000000309", age: "1mo ago", views: "34600", mentions: "1", mcap: "7.21K" },
  { token: "TRUST", priceUSD: "0.0000081846", priceSOL: "0.000000360", age: "1mo ago", views: "18222", mentions: "4", mcap: "8.18K" },
  // Add more items to make the array larger
  { token: "TOKEN8", priceUSD: "0.0000090000", priceSOL: "0.000000400", age: "2mo ago", views: "12345", mentions: "3", mcap: "9.00K" },
  { token: "TOKEN9", priceUSD: "0.0000100000", priceSOL: "0.000000450", age: "3mo ago", views: "54321", mentions: "5", mcap: "10.00K" },
  { token: "TOKEN10", priceUSD: "0.0000110000", priceSOL: "0.000000500", age: "4mo ago", views: "67890", mentions: "6", mcap: "11.00K" },
  { token: "TOKEN11", priceUSD: "0.0000120000", priceSOL: "0.000000550", age: "5mo ago", views: "98765", mentions: "7", mcap: "12.00K" },
  { token: "TOKEN12", priceUSD: "0.0000130000", priceSOL: "0.000000600", age: "6mo ago", views: "11223", mentions: "8", mcap: "13.00K" },
  { token: "TOKEN13", priceUSD: "0.0000140000", priceSOL: "0.000000650", age: "7mo ago", views: "44556", mentions: "9", mcap: "14.00K" },
  { token: "TOKEN14", priceUSD: "0.0000150000", priceSOL: "0.000000700", age: "8mo ago", views: "77889", mentions: "10", mcap: "15.00K" },
  { token: "TOKEN15", priceUSD: "0.0000160000", priceSOL: "0.000000750", age: "9mo ago", views: "99100", mentions: "11", mcap: "16.00K" },
  { token: "TOKEN8", priceUSD: "0.0000090000", priceSOL: "0.000000400", age: "2mo ago", views: "12345", mentions: "3", mcap: "9.00K" },
  { token: "TOKEN9", priceUSD: "0.0000100000", priceSOL: "0.000000450", age: "3mo ago", views: "54321", mentions: "5", mcap: "10.00K" },
  { token: "TOKEN10", priceUSD: "0.0000110000", priceSOL: "0.000000500", age: "4mo ago", views: "67890", mentions: "6", mcap: "11.00K" },
  { token: "TOKEN11", priceUSD: "0.0000120000", priceSOL: "0.000000550", age: "5mo ago", views: "98765", mentions: "7", mcap: "12.00K" },
  { token: "TOKEN12", priceUSD: "0.0000130000", priceSOL: "0.000000600", age: "6mo ago", views: "11223", mentions: "8", mcap: "13.00K" },
  { token: "TOKEN13", priceUSD: "0.0000140000", priceSOL: "0.000000650", age: "7mo ago", views: "44556", mentions: "9", mcap: "14.00K" },
  { token: "TOKEN14", priceUSD: "0.0000150000", priceSOL: "0.000000700", age: "8mo ago", views: "77889", mentions: "10", mcap: "15.00K" },
  { token: "TOKEN15", priceUSD: "0.0000160000", priceSOL: "0.000000750", age: "9mo ago", views: "99100", mentions: "11", mcap: "16.00K" }, { token: "TOKEN8", priceUSD: "0.0000090000", priceSOL: "0.000000400", age: "2mo ago", views: "12345", mentions: "3", mcap: "9.00K" },
  { token: "TOKEN9", priceUSD: "0.0000100000", priceSOL: "0.000000450", age: "3mo ago", views: "54321", mentions: "5", mcap: "10.00K" },
  { token: "TOKEN10", priceUSD: "0.0000110000", priceSOL: "0.000000500", age: "4mo ago", views: "67890", mentions: "6", mcap: "11.00K" },
  { token: "TOKEN11", priceUSD: "0.0000120000", priceSOL: "0.000000550", age: "5mo ago", views: "98765", mentions: "7", mcap: "12.00K" },
  { token: "TOKEN12", priceUSD: "0.0000130000", priceSOL: "0.000000600", age: "6mo ago", views: "11223", mentions: "8", mcap: "13.00K" },
  { token: "TOKEN13", priceUSD: "0.0000140000", priceSOL: "0.000000650", age: "7mo ago", views: "44556", mentions: "9", mcap: "14.00K" },
  { token: "TOKEN14", priceUSD: "0.0000150000", priceSOL: "0.000000700", age: "8mo ago", views: "77889", mentions: "10", mcap: "15.00K" },
  { token: "TOKEN15", priceUSD: "0.0000160000", priceSOL: "0.000000750", age: "9mo ago", views: "99100", mentions: "11", mcap: "16.00K" },
];



const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className='heading'>
        <h2>See What’s Trending – Real-Time Meme Insights from Twitter!</h2>
        <div className="subheading">
          <h4>Join the Meme Revolution – Stay Ahead of the Trends!</h4>
        </div>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name </th>
              <th>Current Price</th>
              <th>Market Cap</th>
              <th>Total Volume</th>
              <th>Views</th>
              <th>Last_updated</th>
              <th>Symbol</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{item.token}</td>
                <td>${item.priceUSD}</td>
                <td>{item.priceSOL}</td>
                <td>{item.age}</td>
                <td>{item.views}</td>
                <td>{item.mentions}</td>
                <td>{item.mcap}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
            Next
          </button>
        </div>
      </div>
      <br />
      <MemeFeed />
      <br />
     < Questions />
    </>
  );
};

export default Home;