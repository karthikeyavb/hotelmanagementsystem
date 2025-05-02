import React from 'react';
import styled from 'styled-components';
import { FaWheelchair, FaBed, FaBath, FaPhoneAlt, FaBell, FaHeart } from 'react-icons/fa';

const ElderlyRoomsPage = () => {
  const rooms = [
    {
      id: 1,
      type: 'Accessible Deluxe Suite',
      features: ['Wheelchair Accessible', 'Emergency Call System', 'Walk-in Shower', 'Adjustable Bed'],
      price: 250,
      floor: 'Ground Floor',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 2,
      type: 'Senior Comfort Room',
      features: ['Grab Bars', 'Non-slip Flooring', 'Extra-wide Doorways', 'Height-adjusted Furniture'],
      price: 200,
      floor: 'Ground Floor',
      image: 'https://via.placeholder.com/400x300',
    },
    // Add more room types as needed
  ];

  return (
    <PageContainer>
      <Header>
        <Title>Elderly-Friendly Accommodations</Title>
        <AssistanceButton>
          <FaPhoneAlt /> Need Assistance?
        </AssistanceButton>
      </Header>

      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon><FaWheelchair /></FeatureIcon>
          <FeatureTitle>Accessibility</FeatureTitle>
          <FeatureText>Wheelchair accessible rooms with extra-wide doorways</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaBath /></FeatureIcon>
          <FeatureTitle>Safety Features</FeatureTitle>
          <FeatureText>Non-slip flooring and grab bars in bathrooms</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaBell /></FeatureIcon>
          <FeatureTitle>24/7 Support</FeatureTitle>
          <FeatureText>Emergency call system in every room</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaHeart /></FeatureIcon>
          <FeatureTitle>Medical Care</FeatureTitle>
          <FeatureText>Quick access to medical assistance</FeatureText>
        </FeatureCard>
      </FeaturesGrid>

      <RoomsSection>
        <SectionTitle>Available Rooms</SectionTitle>
        <RoomsGrid>
          {rooms.map(room => (
            <RoomCard key={room.id}>
              <RoomImage src={room.image} alt={room.type} />
              <RoomContent>
                <RoomType>{room.type}</RoomType>
                <RoomFloor>{room.floor}</RoomFloor>
                <FeaturesList>
                  {room.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <FaBed /> {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>
                <RoomPrice>${room.price} <span>per night</span></RoomPrice>
                <BookButton>Book Now</BookButton>
              </RoomContent>
            </RoomCard>
          ))}
        </RoomsGrid>
      </RoomsSection>

      <AssistanceSection>
        <AssistanceContent>
          <AssistanceTitle>Need Special Arrangements?</AssistanceTitle>
          <AssistanceText>
            Our dedicated staff is here to help with any special requirements or arrangements you may need.
          </AssistanceText>
          <ContactForm>
            <Input type="text" placeholder="Your Name" />
            <Input type="tel" placeholder="Phone Number" />
            <TextArea placeholder="Special Requirements" />
            <SubmitButton>Request Assistance</SubmitButton>
          </ContactForm>
        </AssistanceContent>
      </AssistanceSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 2rem;
  background: #f5f6fa;
  min-height: calc(100vh - 64px);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #191654;
`;

const AssistanceButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #43c6ac;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(67, 198, 172, 0.3);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: #43c6ac;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #191654;
  margin-bottom: 1rem;
`;

const FeatureText = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const RoomsSection = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: #191654;
  margin-bottom: 2rem;
`;

const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const RoomCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomContent = styled.div`
  padding: 1.5rem;
`;

const RoomType = styled.h3`
  color: #191654;
  margin-bottom: 0.5rem;
`;

const RoomFloor = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;

  svg {
    color: #43c6ac;
  }
`;

const RoomPrice = styled.div`
  color: #191654;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  span {
    font-size: 0.9rem;
    color: #666;
    font-weight: normal;
  }
`;

const BookButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #43c6ac;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3ab19a;
  }
`;

const AssistanceSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const AssistanceContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const AssistanceTitle = styled.h2`
  color: #191654;
  margin-bottom: 1rem;
`;

const AssistanceText = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #43c6ac;
    box-shadow: 0 0 0 2px rgba(67, 198, 172, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: #43c6ac;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3ab19a;
    transform: translateY(-2px);
  }
`;

export default ElderlyRoomsPage;