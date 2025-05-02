import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHotel, FaCalendarAlt, FaConciergeBell, FaUtensils, FaSwimmingPool, FaUserTie } from 'react-icons/fa';

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>Welcome to Luxury Hotel</HeroTitle>
          <HeroSubtitle>Experience the ultimate in comfort and elegance</HeroSubtitle>
          <Link to="/auth" style={{ textDecoration: 'none' }}><BookNowButton>Book Now</BookNowButton></Link>
        </motion.div>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Hotel Management System</SectionTitle>
        <FeatureGrid>
          <FeatureCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FeatureIcon><FaHotel /></FeatureIcon>
            <FeatureTitle>Room Management</FeatureTitle>
            <FeatureDescription>Efficiently manage all rooms and their availability status</FeatureDescription>
          </FeatureCard>

          <FeatureCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FeatureIcon><FaCalendarAlt /></FeatureIcon>
            <FeatureTitle>Reservations</FeatureTitle>
            <FeatureDescription>Handle bookings and reservations with ease</FeatureDescription>
          </FeatureCard>

          <FeatureCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FeatureIcon><FaConciergeBell /></FeatureIcon>
            <FeatureTitle>Guest Services</FeatureTitle>
            <FeatureDescription>Provide exceptional service to all guests</FeatureDescription>
          </FeatureCard>

          <FeatureCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FeatureIcon><FaUtensils /></FeatureIcon>
            <FeatureTitle>Restaurant</FeatureTitle>
            <FeatureDescription>Manage dining reservations and orders</FeatureDescription>
          </FeatureCard>

          <FeatureCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FeatureIcon><FaSwimmingPool /></FeatureIcon>
            <FeatureTitle>Amenities</FeatureTitle>
            <FeatureDescription>Track and manage all hotel amenities</FeatureDescription>
          </FeatureCard>

          <FeatureCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FeatureIcon><FaUserTie /></FeatureIcon>
            <FeatureTitle>Staff Management</FeatureTitle>
            <FeatureDescription>Organize staff schedules and responsibilities</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </FeaturesSection>

      <StatsSection>
        <StatCard>
          <StatNumber>150+</StatNumber>
          <StatLabel>Luxury Rooms</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>24/7</StatNumber>
          <StatLabel>Customer Support</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>98%</StatNumber>
          <StatLabel>Customer Satisfaction</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>15+</StatNumber>
          <StatLabel>Years Experience</StatLabel>
        </StatCard>
      </StatsSection>

      <CTASection>
        <CTAContent>
          <CTATitle>Ready to streamline your hotel operations?</CTATitle>
          <CTADescription>Our hotel management system provides everything you need to run your hotel efficiently.</CTADescription>
          <CTAButton>Get Started</CTAButton>
        </CTAContent>
      </CTASection>

      <Footer>
        <FooterContent>
          <FooterLogo>Luxury Hotel</FooterLogo>
          <FooterLinks>
            <FooterLink>About</FooterLink>
            <FooterLink>Services</FooterLink>
            <FooterLink>Contact</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
          </FooterLinks>
          <FooterCopyright>© 2023 Luxury Hotel Management System. All rights reserved.</FooterCopyright>
        </FooterContent>
      </Footer>
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const BookNowButton = styled.button`
  background-color: #e8a87c;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(232, 168, 124, 0.4);

  &:hover {
    background-color: #d69267;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(232, 168, 124, 0.6);
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #e8a87c;
    border-radius: 2px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #e8a87c;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #41b3a3, #85cdca);
  color: white;
  text-align: center;
`;

const StatCard = styled.div`
  padding: 2rem;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background-color: #f5f5f5;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background-color: #41b3a3;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(65, 179, 163, 0.4);

  &:hover {
    background-color: #389e8e;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(65, 179, 163, 0.6);
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e8a87c;
  }
`;

const FooterCopyright = styled.p`
  color: #999;
  text-align: center;
`;

export default HomePage;
