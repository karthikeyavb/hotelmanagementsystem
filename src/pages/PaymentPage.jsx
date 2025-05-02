import React from 'react';
import styled from 'styled-components';
import { FaCreditCard, FaPaypal, FaGoogle, FaApple } from 'react-icons/fa';

const PaymentPage = () => {
  return (
    <PageContainer>
      <PaymentSection>
        <Title>Payment Methods</Title>
        
        <PaymentMethods>
          <PaymentCard>
            <CardHeader>
              <FaCreditCard />
              <span>Credit/Debit Card</span>
            </CardHeader>
            <CardForm>
              <InputGroup>
                <Label>Card Number</Label>
                <Input type="text" placeholder="1234 5678 9012 3456" />
              </InputGroup>
              <RowGroup>
                <InputGroup>
                  <Label>Expiry Date</Label>
                  <Input type="text" placeholder="MM/YY" />
                </InputGroup>
                <InputGroup>
                  <Label>CVV</Label>
                  <Input type="text" placeholder="123" />
                </InputGroup>
              </RowGroup>
              <InputGroup>
                <Label>Card Holder Name</Label>
                <Input type="text" placeholder="John Doe" />
              </InputGroup>
              <PayButton>Pay Now</PayButton>
            </CardForm>
          </PaymentCard>

          <AlternativePayments>
            <AltPayButton>
              <FaPaypal /> Pay with PayPal
            </AltPayButton>
            <AltPayButton>
              <FaGoogle /> Google Pay
            </AltPayButton>
            <AltPayButton>
              <FaApple /> Apple Pay
            </AltPayButton>
          </AlternativePayments>
        </PaymentMethods>
      </PaymentSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 2rem;
  background: #f5f6fa;
  min-height: calc(100vh - 64px);
`;

const PaymentSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #191654;
  margin-bottom: 2rem;
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PaymentCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: #191654;
  margin-bottom: 1.5rem;
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RowGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Label = styled.label`
  color: #666;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #43c6ac;
    box-shadow: 0 0 0 2px rgba(67, 198, 172, 0.2);
  }
`;

const PayButton = styled.button`
  background: linear-gradient(135deg, #191654, #43c6ac);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(67, 198, 172, 0.4);
  }
`;

const AlternativePayments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AltPayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
  }
`;

export default PaymentPage;