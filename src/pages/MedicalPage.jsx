import React from 'react';
import styled from 'styled-components';
import { FaHeartbeat, FaPhone, FaAmbulance, FaNotesMedical, FaHospital, FaFirstAid } from 'react-icons/fa';

const MedicalPage = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Medical Services & Support</Title>
        <EmergencyContact>
          <EmergencyButton>
            <FaPhone /> Emergency: 911
          </EmergencyButton>
          <EmergencyButton $variant="hotel">
            <FaPhone /> Hotel Medical Support: 123
          </EmergencyButton>
        </EmergencyContact>
      </Header>

      <ServicesGrid>
        <ServiceCard>
          <ServiceIcon><FaFirstAid /></ServiceIcon>
          <ServiceTitle>24/7 First Aid</ServiceTitle>
          <ServiceDescription>
            Trained staff available round the clock for basic medical assistance.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon><FaHospital /></ServiceIcon>
          <ServiceTitle>Nearby Hospitals</ServiceTitle>
          <ServiceDescription>
            Direct connection with nearby medical facilities.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon><FaAmbulance /></ServiceIcon>
          <ServiceTitle>Emergency Transport</ServiceTitle>
          <ServiceDescription>
            Quick access to ambulance and emergency services.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon><FaNotesMedical /></ServiceIcon>
          <ServiceTitle>Medical Records</ServiceTitle>
          <ServiceDescription>
            Secure storage of guest medical information for emergencies.
          </ServiceDescription>
        </ServiceCard>
      </ServicesGrid>

      <FacilitiesSection>
        <SectionTitle>Medical Facilities</SectionTitle>
        <FacilitiesList>
          {[
            { name: 'City General Hospital', distance: '2.5 km', phone: '+1 234-567-8901' },
            { name: 'Downtown Medical Center', distance: '3.1 km', phone: '+1 234-567-8902' },
            { name: 'Emergency Care Clinic', distance: '1.8 km', phone: '+1 234-567-8903' },
          ].map((facility, index) => (
            <FacilityCard key={index}>
              <FacilityName>{facility.name}</FacilityName>
              <FacilityDetails>
                <span>{facility.distance}</span>
                <span>{facility.phone}</span>
              </FacilityDetails>
              <DirectionsButton>Get Directions</DirectionsButton>
            </FacilityCard>
          ))}
        </FacilitiesList>
      </FacilitiesSection>

      <MedicalForm>
        <SectionTitle>Medical Information Form</SectionTitle>
        <Form>
          <InputGroup>
            <Label>Medical Conditions</Label>
            <TextArea placeholder="Please list any medical conditions..." />
          </InputGroup>
          <InputGroup>
            <Label>Allergies</Label>
            <TextArea placeholder="Please list any allergies..." />
          </InputGroup>
          <InputGroup>
            <Label>Emergency Contact</Label>
            <Input type="text" placeholder="Contact Name" />
            <Input type="tel" placeholder="Contact Phone Number" />
          </InputGroup>
          <SubmitButton>Save Medical Information</SubmitButton>
        </Form>
      </MedicalForm>
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
  flex-wrap: wrap;
  gap: 1rem;
`;

const Title = styled.h1`
  color: #191654;
`;

const EmergencyContact = styled.div`
  display: flex;
  gap: 1rem;
`;

const EmergencyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: ${props => props.$variant === 'hotel' ? '#43c6ac' : '#ff6b6b'};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #43c6ac;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: #191654;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const FacilitiesSection = styled.div`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  color: #191654;
  margin-bottom: 1.5rem;
`;

const FacilitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const FacilityCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const FacilityName = styled.h4`
  color: #191654;
  margin-bottom: 1rem;
`;

const FacilityDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: #666;
  margin-bottom: 1rem;
`;

const DirectionsButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #43c6ac;
  border-radius: 8px;
  background: white;
  color: #43c6ac;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #43c6ac;
    color: white;
  }
`;

const MedicalForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #191654;
  font-weight: 500;
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

export default MedicalPage;