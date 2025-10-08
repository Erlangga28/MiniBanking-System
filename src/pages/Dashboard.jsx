"use client";

import React, { useState } from "react";
import "../css/globals.css";


const Dashboard = () => {
  const [assets, setAssets] = useState(17580062);
  const [income, setIncome] = useState(17580062);
  const [expenses, setExpenses] = useState(10580062);
  const [splitProgress, setSplitProgress] = useState(100);
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Wonder</h1>
        <nav>
          <a href="#" className="active">Dashboard</a>
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
        </nav>
        <div className="icons">
          <i className="bi bi-gear"></i>
          <i className="bi bi-bell"></i>
          <i className="bi bi-person"></i>
        </div>
      </header>

      {/* Top Section */}
      
      <div className="top-section">
        <button className="card asset-card">
          <h3>Assets Total</h3>
          <h2>Rp{assets.toLocaleString("id-ID")}</h2>
          <p>You made extra Rp20.000 this month</p>
        </button>
      

        <button className="card income-expense-card">
          <h4>Income & Expenses</h4>
          <div className="info-row">
            <p className="income"> <span><i class="bi bi-pie-chart"></i></span>+ Rp{income.toLocaleString("id-ID")}</p>
            <span>Total income this month</span>
          </div>
          <div className="info-row">
            <p className="expense"> <span><i class="bi bi-pie-chart"></i></span>- Rp{expenses.toLocaleString("id-ID")}</p>
            <span>Total expenses this month</span>
          </div>
          <div className="info-row">
            <p className="income"><span><i class="bi bi-pie-chart"></i></span>+ Rp{income.toLocaleString("id-ID")}</p>
            <span>Total receivable this month</span>
          </div>
        </button>
      
        <button className="card split-card">
          <h4>Split Bill</h4>
          <div className="circle">
            
            <div className="percent">{splitProgress}%</div>
          </div>
          <button className="description">
            There are 4 ongoing split bills<br />
            Remaining bill: Rp2.000.000<br />
            Potential asset: Rp32.580.062
          </button>
          <a href="#" className="detail-link">View Detail</a>
        </button>
      </div>

      {/* Middle Section */}
      <div className="category-section">
        <div className="category yellow">Deposits<br />Rp 15.000.000</div>
        <div className="category purple">Savings<br />Rp 15.000.000</div>
        <div className="category green">Life Goals<br />Rp 15.000.000</div>
        <div className="category orange">DPLK<br />Rp 15.000.000</div>
        <div className="category blue">APA YAAA?<br />Rp 15.000.000</div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <a href="./CardSection" className="mycards">
          <h3>My Cards</h3>
          <div className="card-info">
            <p>3 Active Cards</p>
            <div className="card-slide">
              <div className="bank-card">
                <h5>TAPLUS BISNIS</h5>
                <p>12345678910</p>
                <p>Effective balance</p>
                <h4>Rp50.000.000.000</h4>
              </div>
            </div>
          </div>
        </a>

        <div className="earnings">
          <h3>Earnings Overview</h3>
          <div className="bar-container">
            <div className="bar income-bar">
              <span>Income</span>
              <div className="bar-value" style={{ height: "80%" }}></div>
              <p>Rp{income.toLocaleString("id-ID")}</p>
            </div>
            <div className="bar expense-bar">
              <span>Expenses</span>
              <div className="bar-value" style={{ height: "50%" }}></div>
              <p>Rp{expenses.toLocaleString("id-ID")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
