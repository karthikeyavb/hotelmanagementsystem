import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';

const AuthPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <PageContainer>
      <CardContainer>
        <Card $isFlipped={isFlipped}>
          {/* Login Side */}
          <CardFace className="front">
            <Title>Login</Title>
            <Form>
              <InputGroup>
                <InputIcon><FaUser /></InputIcon>
                <Input type="text" placeholder="Username" />
              </InputGroup>
              <InputGroup>
                <InputIcon><FaLock /></InputIcon>
                <Input type="password" placeholder="Password" />
              </InputGroup>
              <RememberMe>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </RememberMe>
              <Button>Login</Button>
            </Form>
            <FlipText onClick={() => setIsFlipped(true)}>
              Don't have an account? Sign up
            </FlipText>
          </CardFace>

          {/* Register Side */}
          <CardFace className="back">
            <Title>Sign Up</Title>
            <Form>
              <InputGroup>
                <InputIcon><FaUser /></InputIcon>
                <Input type="text" placeholder="Full Name" />
              </InputGroup>
              <InputGroup>
                <InputIcon><FaEnvelope /></InputIcon>
                <Input type="email" placeholder="Email" />
              </InputGroup>
              <InputGroup>
                <InputIcon><FaPhone /></InputIcon>
                <Input type="tel" placeholder="Phone Number" />
              </InputGroup>
              <InputGroup>
                <InputIcon><FaLock /></InputIcon>
                <Input type="password" placeholder="Password" />
              </InputGroup>
              <Button>Sign Up</Button>
            </Form>
            <FlipText onClick={() => setIsFlipped(false)}>
              Already have an account? Login
            </FlipText>
          </CardFace>
        </Card>
      </CardContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
 min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #43c6ac, #191654);
  padding: 20px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    top: -100px;
    right: -100px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    bottom: -75px;
    left: -75px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 500px;
  perspective: 1000px;
  z-index:1;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: ${props => props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
 background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &.back {
    transform: rotateY(180deg);
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
 position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #43c6ac;
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 40px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: #43c6ac;
    box-shadow: 0 0 15px rgba(67, 198, 172, 0.3);
  }
    &::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #191654, #43c6ac);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(67, 198, 172, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(67, 198, 172, 0.6);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #191654;
  font-size: 0.9rem;
  
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #43c6ac;
  }
`;

const FlipText = styled.p`
  text-align: center;
  margin-top: 25px;
  color: #191654;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    color: #43c6ac;
    transform: translateY(-1px);
  }
`;

export default AuthPage;