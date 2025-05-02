import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBed, FaUsers, FaCalendarAlt, FaMoneyBillWave, FaChartLine, FaClipboardList, FaUtensils, FaCog } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarLogo>Luxury Hotel</SidebarLogo>
        <SidebarMenu>
          <MenuItem active>
            <FaChartLine /> Dashboard
          </MenuItem>
          <MenuItem>
            <FaBed /> Rooms
          </MenuItem>
          <MenuItem>
            <FaUsers /> Guests
          </MenuItem>
          <MenuItem>
            <FaCalendarAlt /> Bookings
          </MenuItem>
          <MenuItem>
            <FaUtensils /> Restaurant
          </MenuItem>
          <MenuItem>
            <FaMoneyBillWave /> Billing
          </MenuItem>
          <MenuItem>
            <FaClipboardList /> Reports
          </MenuItem>
          <MenuItem>
            <FaCog /> Settings
          </MenuItem>
        </SidebarMenu>
      </Sidebar>

      <MainContent>
        <Header>
          <WelcomeText>Welcome back, Admin</WelcomeText>
          <ProfileSection>
            <NotificationBadge>3</NotificationBadge>
            <ProfileImage src="https://via.placeholder.com/40" alt="Profile" />
          </ProfileSection>
        </Header>

        <StatsGrid>
          <StatCard
            as={motion.div}
            whileHover={{ scale: 1.02 }}
          >
            <StatIcon style={{ background: 'rgba(67, 198, 172, 0.2)', color: '#43c6ac' }}>
              <FaBed />
            </StatIcon>
            <StatInfo>
              <StatValue>42</StatValue>
              <StatLabel>Available Rooms</StatLabel>
            </StatInfo>
          </StatCard>

          <StatCard
            as={motion.div}
            whileHover={{ scale: 1.02 }}
          >
            <StatIcon style={{ background: 'rgba(25, 22, 84, 0.2)', color: '#191654' }}>
              <FaUsers />
            </StatIcon>
            <StatInfo>
              <StatValue>128</StatValue>
              <StatLabel>Current Guests</StatLabel>
            </StatInfo>
          </StatCard>

          <StatCard
            as={motion.div}
            whileHover={{ scale: 1.02 }}
          >
            <StatIcon style={{ background: 'rgba(255, 159, 67, 0.2)', color: '#ff9f43' }}>
              <FaCalendarAlt />
            </StatIcon>
            <StatInfo>
              <StatValue>24</StatValue>
              <StatLabel>New Bookings</StatLabel>
            </StatInfo>
          </StatCard>

          <StatCard
            as={motion.div}
            whileHover={{ scale: 1.02 }}
          >
            <StatIcon style={{ background: 'rgba(46, 213, 115, 0.2)', color: '#2ed573' }}>
              <FaMoneyBillWave />
            </StatIcon>
            <StatInfo>
              <StatValue>$12,486</StatValue>
              <StatLabel>Today's Revenue</StatLabel>
            </StatInfo>
          </StatCard>
        </StatsGrid>

        <ContentGrid>
          <ContentCard>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <ViewAllButton>View All</ViewAllButton>
            </CardHeader>
            <BookingsList>
              {[1, 2, 3].map((booking) => (
                <BookingItem key={booking}>
                  <BookingInfo>
                    <BookingName>John Doe</BookingName>
                    <BookingDetails>Room 301 • 3 Nights</BookingDetails>
                  </BookingInfo>
                  <BookingStatus $status="confirmed">Confirmed</BookingStatus>
                </BookingItem>
              ))}
            </BookingsList>
          </ContentCard>

          <ContentCard>
            <CardHeader>
              <CardTitle>Room Status</CardTitle>
              <ViewAllButton>View All</ViewAllButton>
            </CardHeader>
            <RoomStatusGrid>
              {[1, 2, 3, 4, 5, 6].map((room) => (
                <RoomStatusItem key={room} $status={room % 3 === 0 ? 'occupied' : room % 2 === 0 ? 'available' : 'maintenance'}>
                  <RoomNumber>Room {301 + room}</RoomNumber>
                  <RoomType>Deluxe Suite</RoomType>
                  <RoomStatusText>
                    {room % 3 === 0 ? 'Occupied' : room % 2 === 0 ? 'Available' : 'Maintenance'}
                  </RoomStatusText>
                </RoomStatusItem>
              ))}
            </RoomStatusGrid>
          </ContentCard>
        </ContentGrid>
      </MainContent>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f6fa;
`;

const Sidebar = styled.div`
  width: 260px;
  background: white;
  padding: 2rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const SidebarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #191654;
  margin-bottom: 2rem;
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  color: ${props => props.active ? '#43c6ac' : '#666'};
  background: ${props => props.active ? 'rgba(67, 198, 172, 0.1)' : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(67, 198, 172, 0.1);
    color: #43c6ac;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const WelcomeText = styled.h1`
  font-size: 1.8rem;
  color: #191654;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const NotificationBadge = styled.div`
  background: #43c6ac;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const StatInfo = styled.div``;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #191654;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #191654;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #43c6ac;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const BookingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BookingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
`;

const BookingInfo = styled.div``;

const BookingName = styled.div`
  font-weight: 600;
  color: #191654;
`;

const BookingDetails = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const BookingStatus = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  background: ${props => props.$status === 'confirmed' ? 'rgba(67, 198, 172, 0.2)' : '#f8f9fa'};
  color: ${props => props.$status === 'confirmed' ? '#43c6ac' : '#666'};
`;

const RoomStatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const RoomStatusItem = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background: ${props => {
    switch(props.$status) {
      case 'available': return 'rgba(67, 198, 172, 0.1)';
      case 'occupied': return 'rgba(25, 22, 84, 0.1)';
      case 'maintenance': return 'rgba(255, 159, 67, 0.1)';
      default: return '#f8f9fa';
    }
  }};
`;

const RoomNumber = styled.div`
  font-weight: 600;
  color: #191654;
`;

const RoomType = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin: 0.2rem 0;
`;

const RoomStatusText = styled.div`
  font-size: 0.8rem;
  color: #43c6ac;
`;

export default DashboardPage;