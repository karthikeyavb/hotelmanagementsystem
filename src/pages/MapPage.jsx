import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaCar, FaSubway, FaPlane } from 'react-icons/fa';

const MapPage = () => {
  return (
    <PageContainer>
      <MapSection>
        <MapHeader>
          <Title>Hotel Location</Title>
          <Address>
            <FaMapMarkerAlt />
            <span>123 Luxury Avenue, Downtown, City 12345</span>
          </Address>
        </MapHeader>

        <MapContainer>
          {/* Replace this iframe with your actual Google Maps embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>

        <DirectionsSection>
          <SectionTitle>Getting Here</SectionTitle>
          <TransportOptions>
            <TransportCard>
              <TransportIcon><FaCar /></TransportIcon>
              <TransportInfo>
                <TransportTitle>By Car</TransportTitle>
                <TransportText>15 minutes from city center. Free parking available.</TransportText>
              </TransportInfo>
            </TransportCard>

            <TransportCard>
              <TransportIcon><FaSubway /></TransportIcon>
              <TransportInfo>
                <TransportTitle>Public Transport</TransportTitle>
                <TransportText>5 minutes walk from Central Station.</TransportText>
              </TransportInfo>
            </TransportCard>

            <TransportCard>
              <TransportIcon><FaPlane /></TransportIcon>
              <TransportInfo>
                <TransportTitle>From Airport</TransportTitle>
                <TransportText>30 minutes by taxi or shuttle service.</TransportText>
              </TransportInfo>
            </TransportCard>
          </TransportOptions>
        </DirectionsSection>

        <ContactSection>
          <ContactCard>
            <ContactIcon><FaPhone /></ContactIcon>
            <ContactInfo>
              <ContactTitle>Need Directions?</ContactTitle>
              <ContactText>Call us at +1 234 567 8900</ContactText>
            </ContactInfo>
          </ContactCard>
        </ContactSection>
      </MapSection>

      <NearbySection>
        <SectionTitle>Nearby Attractions</SectionTitle>
        <AttractionsList>
          {['City Center', 'Shopping Mall', 'Art Museum', 'Beach'].map((attraction, index) => (
            <AttractionItem key={index}>
              <AttractionName>{attraction}</AttractionName>
              <AttractionDistance>{(index + 1) * 0.5} km away</AttractionDistance>
            </AttractionItem>
          ))}
        </AttractionsList>
      </NearbySection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 2rem;
  background: #f5f6fa;
  min-height: calc(100vh - 64px);
`;

const MapSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MapHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #191654;
  margin-bottom: 1rem;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 1.1rem;
  
  svg {
    color: #43c6ac;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const DirectionsSection = styled.div`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  color: #191654;
  margin-bottom: 1.5rem;
`;

const TransportOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const TransportCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const TransportIcon = styled.div`
  font-size: 1.5rem;
  color: #43c6ac;
`;

const TransportInfo = styled.div``;

const TransportTitle = styled.h3`
  color: #191654;
  margin-bottom: 0.5rem;
`;

const TransportText = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const ContactSection = styled.div`
  margin: 2rem 0;
`;

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #191654, #43c6ac);
  padding: 1.5rem;
  border-radius: 12px;
  color: white;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
`;

const ContactInfo = styled.div``;

const ContactTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  opacity: 0.9;
`;

const NearbySection = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
`;

const AttractionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const AttractionItem = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const AttractionName = styled.h4`
  color: #191654;
  margin-bottom: 0.5rem;
`;

const AttractionDistance = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

export default MapPage;