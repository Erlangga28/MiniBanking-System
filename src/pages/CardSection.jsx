import React, { useState } from "react";
import "./CardSection.css";
import { EyeOff } from "lucide-react"; // kalau pakai icon library

export default function CardDetailsSection() {   // ✅ default export
  const [isCardNumberVisible, setIsCardNumberVisible] = useState(false);

  const cardData = {
    bankName: "BNI Debit",
    cardNumber: "1234 5678 9012 9100",
    maskedCardNumber: "1234 56** **** 9100",
    cardholderName: "OKTAVIA QURROTA A'YUNI",
    accountType: "TAPLUS BISNIS - 1234567890",
  };

  const toggleCardNumberVisibility = () => {
    setIsCardNumberVisible(!isCardNumberVisible);
  };

  return (
    <section className="card-section" aria-label="Card Details">
      <div className="card-background" />

      <div className="card-bank">{cardData.bankName}</div>
      <div className="card-holder">{cardData.cardholderName}</div>
      <div className="card-type">{cardData.accountType}</div>

      <div className="card-number">
        {isCardNumberVisible ? cardData.cardNumber : cardData.maskedCardNumber}
      </div>

      <button onClick={toggleCardNumberVisibility} className="btn-eye">
        <EyeOff />
      </button>
    </section>
  );
}
