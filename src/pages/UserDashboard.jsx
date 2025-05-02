import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBed, FaHistory, FaCreditCard, FaUser, FaBell } from 'react-icons/fa';

const UserDashboard = () => {
  return (
    <DashboardContainer>
      <UserHeader>
        <UserInfo>
          <UserAvatar src="https://via.placeholder.com/100" alt="User Avatar" />
          <UserDetails>
            <UserName>John Doe</UserName>
            <UserEmail>john.doe@example.com</UserEmail>
            <MembershipBadge>Gold Member</MembershipBadge>
          </UserDetails>
        </UserInfo>
      </UserHeader>

      <ContentSection>
        <QuickActions>
          <ActionCard as={motion.div} whileHover={{ scale: 1.02 }}>
            <ActionIcon><FaCalendarAlt /></ActionIcon>
            <ActionText>Book a Room</ActionText>
          </ActionCard>
          <ActionCard as={motion.div} whileHover={{ scale: 1.02 }}>
            <ActionIcon><FaHistory /></ActionIcon>
            <ActionText>Booking History</ActionText>
          </ActionCard>
          <ActionCard as={motion.div} whileHover={{ scale: 1.02 }}>
            <ActionIcon><FaUser /></ActionIcon>
            <ActionText>Profile Settings</ActionText>
          </ActionCard>
          <ActionCard as={motion.div} whileHover={{ scale: 1.02 }}>
            <ActionIcon><FaBell /></ActionIcon>
            <ActionText>Notifications</ActionText>
          </ActionCard>
        </QuickActions>

        <GridContainer>
          <MainCard>
            <CardHeader>
              <CardTitle>Current Booking</CardTitle>
            </CardHeader>
            <CurrentBooking>
              <BookingImage src="https://via.placeholder.com/200" alt="Room" />
              <BookingDetails>
                <RoomType>Deluxe Ocean View Suite</RoomType>
                <BookingInfo>
                  <InfoItem>
                    <FaCalendarAlt /> Check-in: 26 Apr 2024
                  </InfoItem>
                  <InfoItem>
                    <FaBed /> 3 Nights
                  </InfoItem>
                  <InfoItem>
                    <FaCreditCard /> Paid: $750
                  </InfoItem>
                </BookingInfo>
                <BookingActions>
                  <ActionButton>Modify</ActionButton>
                  <ActionButton $variant="secondary">Cancel</ActionButton>
                </BookingActions>
              </BookingDetails>
            </CurrentBooking>
          </MainCard>

          <SideCard>
            <CardHeader>
              <CardTitle>Upcoming Stays</CardTitle>
            </CardHeader>
            <UpcomingList>
              {[1, 2].map(stay => (
                <UpcomingItem key={stay}>
                  <StayDate>May 15, 2024</StayDate>
                  <StayDetails>
                    <StayRoom>Premium Suite</StayRoom>
                    <StayDuration>2 Nights</StayDuration>
                  </StayDetails>
                </UpcomingItem>
              ))}
            </UpcomingList>
          </SideCard>

          <MainCard>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <ActivityList>
              {[1, 2, 3].map(activity => (
                <ActivityItem key={activity}>
                  <ActivityIcon><FaCalendarAlt /></ActivityIcon>
                  <ActivityContent>
                    <ActivityTitle>Booking Confirmed</ActivityTitle>
                    <ActivityDescription>Your booking for Deluxe Room has been confirmed</ActivityDescription>
                    <ActivityTime>2 hours ago</ActivityTime>
                  </ActivityContent>
                </ActivityItem>
              ))}
            </ActivityList>
          </MainCard>

          <SideCard>
            <CardHeader>
              <CardTitle>Rewards Points</CardTitle>
            </CardHeader>
            <RewardsContent>
              <PointsCircle>
                <PointsNumber>2,450</PointsNumber>
                <PointsLabel>Points</PointsLabel>
              </PointsCircle>
              <RewardsInfo>Next tier: 550 points away</RewardsInfo>
              <RewardsButton>Redeem Points</RewardsButton>
            </RewardsContent>
          </SideCard>
        </GridContainer>
      </ContentSection>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 2rem;
  background: #f5f6fa;
  min-height: calc(100vh - 64px);
`;

const UserHeader = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #43c6ac;
`;

const UserDetails = styled.div``;

const UserName = styled.h2`
  color: #191654;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
`;

const MembershipBadge = styled.span`
  background: linear-gradient(135deg, #ffd700, #ffb347);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const ContentSection = styled.div`
  margin-top: 2rem;
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ActionCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const ActionIcon = styled.div`
  font-size: 2rem;
  color: #43c6ac;
  margin-bottom: 1rem;
`;

const ActionText = styled.p`
  color: #191654;
  font-weight: 500;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
`;

const MainCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const SideCard = styled(MainCard)``;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  color: #191654;
  font-size: 1.2rem;
`;

const CurrentBooking = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const BookingImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const BookingDetails = styled.div`
  flex: 1;
`;

const RoomType = styled.h4`
  color: #191654;
  margin-bottom: 1rem;
`;

const BookingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
`;

const BookingActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${props => props.$variant === 'secondary' ? '#ff6363' : '#43c6ac'};
  color: white;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const UpcomingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UpcomingItem = styled.div`
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
`;

const StayDate = styled.div`
  color: #43c6ac;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const StayDetails = styled.div``;

const StayRoom = styled.div`
  color: #191654;
  font-weight: 500;
`;

const StayDuration = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
`;

const ActivityIcon = styled.div`
  color: #43c6ac;
  font-size: 1.2rem;
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.div`
  color: #191654;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const ActivityDescription = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`;

const ActivityTime = styled.div`
  color: #999;
  font-size: 0.8rem;
`;

const RewardsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const PointsCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #43c6ac, #191654);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const PointsNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;

const PointsLabel = styled.div`
  font-size: 0.9rem;
`;

const RewardsInfo = styled.div`
  color: #666;
  text-align: center;
`;

const RewardsButton = styled.button`
  background: #43c6ac;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3ab19a;
  }
`;

export default UserDashboard;