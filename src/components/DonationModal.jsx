import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

const DonationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
      setStep(1);
      setShowSuccess(false);
      setFormData({
        amount: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        
        {showSuccess ? (
          <div className="success-message">
            <h3>Payment Successful!</h3>
            <p>Thank you for your donation.</p>
          </div>
        ) : (
          <>
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="donation-form">
                <h3>Choose Donation Amount</h3>
                <div className="amount-options">
                  {['1000', '2000', '5000', '10000', '25000'].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`amount-button ${formData.amount === amount ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, amount })}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <div className="custom-amount">
                  <label>Custom Amount:</label>
                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="Enter amount"
                    min="1"
                  />
                </div>
                <button type="submit" className="donate-submit">Continue</button>
              </form>
            ) : (
              <form onSubmit={handlePayment} className="payment-form">
                <h3>Payment Details</h3>
                <div className="form-group">
                  <label>Card Number</label>
                  <div className="card-input">
                    <CreditCard size={20} />
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      placeholder="123"
                      maxLength={3}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="payment-submit">
                  Pay ₹{formData.amount}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DonationModal;