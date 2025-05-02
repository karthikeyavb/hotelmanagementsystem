import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPen } from 'react-icons/fa';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <PageContainer>
      <ProfileSection>
        <ProfileHeader>
          <ProfileImageContainer>
            <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
            <EditImageButton>
              <FaPen />
            </EditImageButton>
          </ProfileImageContainer>
          <ProfileInfo>
            <ProfileName>John Doe</ProfileName>
            <ProfileBadge>Premium Member</ProfileBadge>
          </ProfileInfo>
        </ProfileHeader>

        <ProfileForm>
          <FormGroup>
            <Label>Full Name</Label>
            <InputGroup>
              <InputIcon><FaUser /></InputIcon>
              <Input type="text" defaultValue="John Doe" disabled={!isEditing} />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <InputGroup>
              <InputIcon><FaEnvelope /></InputIcon>
              <Input type="email" defaultValue="john.doe@example.com" disabled={!isEditing} />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <Label>Phone</Label>
            <InputGroup>
              <InputIcon><FaPhone /></InputIcon>
              <Input type="tel" defaultValue="+1 234 567 8900" disabled={!isEditing} />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <Label>Address</Label>
            <InputGroup>
              <InputIcon><FaMapMarkerAlt /></InputIcon>
              <Input type="text" defaultValue="123 Hotel Street, City" disabled={!isEditing} />
            </InputGroup>
          </FormGroup>

          <ButtonGroup>
            {isEditing ? (
              <>
                <SaveButton onClick={() => setIsEditing(false)}>Save Changes</SaveButton>
                <CancelButton onClick={() => setIsEditing(false)}>Cancel</CancelButton>
              </>
            ) : (
              <EditButton onClick={() => setIsEditing(true)}>Edit Profile</EditButton>
            )}
          </ButtonGroup>
        </ProfileForm>

        <PreferencesSection>
          <SectionTitle>Preferences</SectionTitle>
          <PreferenceGrid>
            <PreferenceItem>
              <PreferenceLabel>Room Type</PreferenceLabel>
              <PreferenceValue>Suite</PreferenceValue>
            </PreferenceItem>
            <PreferenceItem>
              <PreferenceLabel>Dietary</PreferenceLabel>
              <PreferenceValue>Vegetarian</PreferenceValue>
            </PreferenceItem>
            <PreferenceItem>
              <PreferenceLabel>Floor Preference</PreferenceLabel>
              <PreferenceValue>High Floor</PreferenceValue>
            </PreferenceItem>
            <PreferenceItem>
              <PreferenceLabel>Special Requests</PreferenceLabel>
              <PreferenceValue>Extra Pillows</PreferenceValue>
            </PreferenceItem>
          </PreferenceGrid>
        </PreferencesSection>
      </ProfileSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 2rem;
  background: #f5f6fa;
  min-height: calc(100vh - 64px);
`;

const ProfileSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e1e1e1;
`;

const ProfileImageContainer = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #43c6ac;
`;

const EditImageButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #43c6ac;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProfileInfo = styled.div``;

const ProfileName = styled.h2`
  color: #191654;
  margin-bottom: 0.5rem;
`;

const ProfileBadge = styled.span`
  background: linear-gradient(135deg, #43c6ac, #191654);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #666;
  font-size: 0.9rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #43c6ac;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 2.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;
  background: ${props => props.disabled ? '#f8f9fa' : 'white'};

  &:focus {
    outline: none;
    border-color: #43c6ac;
    box-shadow: 0 0 0 2px rgba(67, 198, 172, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const EditButton = styled(Button)`
  background: #43c6ac;
  color: white;
  border: none;

  &:hover {
    background: #3ab19a;
  }
`;

const SaveButton = styled(Button)`
  background: #43c6ac;
  color: white;
  border: none;

  &:hover {
    background: #3ab19a;
  }
`;

const CancelButton = styled(Button)`
  background: white;
  color: #666;
  border: 1px solid #e1e1e1;

  &:hover {
    background: #f8f9fa;
  }
`;

const PreferencesSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e1e1e1;
`;

const SectionTitle = styled.h3`
  color: #191654;
  margin-bottom: 1.5rem;
`;

const PreferenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const PreferenceItem = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
`;

const PreferenceLabel = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const PreferenceValue = styled.div`
  color: #191654;
  font-weight: 500;
`;

export default ProfilePage;