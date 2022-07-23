import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/nav-bar/nav-bar'
import './style.css';

ReactDOM.render(
  <main>
    <Navbar></Navbar>
    <div className="apple-computer">
      <img src="https://web.archive.org/web/20000511001130im_/http://a772.g.akamai.net/7/772/51/65bf8be763d9bb/www.apple.com/home/images/topimage/tlibookse02152000.jpg" alt="apple img 1"></img>
      <img src="https://web.archive.org/web/20000511001130im_/http://a772.g.akamai.net/7/772/51/efaf460c42339c/www.apple.com/home/images/topimage/tribookse02152000.jpg" alt="apple img 2"></img>
      <div className="down-images">
      <img src="https://web.archive.org/web/20000511143553im_/http://a772.g.akamai.net/7/772/51/c25045e411b8fd/www.apple.com/home/images/topimage/blibookse02152000.jpg" alt="apple img 3"></img>
      <img src="https://web.archive.org/web/20000510115346im_/http://a772.g.akamai.net/7/772/51/27069812534092/www.apple.com/home/images/topimage/bribookse02152000.jpg" alt="apple img 4"></img>
      </div>
    </div>
    <div className="hot-news-headlines">

    </div>
  </main>,
  document.getElementById('root')
);