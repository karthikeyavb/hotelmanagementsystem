import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaBed, FaCreditCard, FaStar } from 'react-icons/fa';

const HistoryPage = () => {
  const bookingHistory = [
    {
      id: 1,
      date: 'March 15-18, 2024',
      room: 'Deluxe Ocean View',
      amount: 750,
      status: 'Completed',
      rating: 5,
    },
    {
      id: 2,
      date: 'January 5-7, 2024',
      room: 'Executive Suite',
      amount: 980,
      status: 'Completed',
      rating: 4,
    },
    // Add more booking history as needed
  ];

  return (
    <PageContainer>
      <Header>
        <Title>Booking History</Title>
        <FilterSection>
          <FilterButton>All Time</FilterButton>
          <FilterButton>This Year</FilterButton>
          <FilterButton>Last 6 Months</FilterButton>
        </FilterSection>
      </Header>

      <HistoryList>
        {bookingHistory.map(booking => (
          <HistoryCard key={booking.id}>
            <BookingInfo>
              <DateSection>
                <FaCalendarAlt />
                <span>{booking.date}</span>
              </DateSection>
              
              <RoomSection>
                <FaBed />
                <RoomDetails>
                  <RoomType>{booking.room}</RoomType>
                  <BookingStatus $status={booking.status.toLowerCase()}>
                    {booking.status}
                  </BookingStatus>
                </RoomDetails>
              </RoomSection>

              <PaymentSection>
                <FaCreditCard />
                <PaymentDetails>
                  <PaymentAmount>${booking.amount}</PaymentAmount>
                  <PaymentStatus>Paid</PaymentStatus>
                </PaymentDetails>
              </PaymentSection>

              <RatingSection>
                {[...Array(5)].map((_, index) => (
                  <StarIcon 
                    key={index}
                    $active={index < booking.rating}
                  >
                    <FaStar />
                  </StarIcon>
                ))}
              </RatingSection>
            </BookingInfo>

            <BookingActions>
              <ActionButton>View Details</ActionButton>
              <ActionButton $variant="secondary">Book Again</ActionButton>
            </BookingActions>
          </HistoryCard>
        ))}
      </HistoryList>

      <StatsSection>
        <StatCard>
          <StatTitle>Total Stays</StatTitle>
          <StatValue>12</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Nights Stayed</StatTitle>
          <StatValue>36</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Total Spent</StatTitle>
          <StatValue>$4,320</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Average Rating</StatTitle>
          <StatValue>4.8</StatValue>
        </StatCard>
      </StatsSection>
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

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
    border-color: #43c6ac;
    color: #43c6ac;
  }
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const HistoryCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const BookingInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const DateSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #191654;
  
  svg {
    color: #43c6ac;
  }
`;

const RoomSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #43c6ac;
  }
`;

const RoomDetails = styled.div``;

const RoomType = styled.div`
  color: #191654;
  font-weight: 500;
`;

const BookingStatus = styled.div`
  font-size: 0.9rem;
  color: ${props => props.$status === 'completed' ? '#43c6ac' : '#666'};
`;

const PaymentSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #43c6ac;
  }
`;

const PaymentDetails = styled.div``;

const PaymentAmount = styled.div`
  color: #191654;
  font-weight: 500;
`;

const PaymentStatus = styled.div`
  font-size: 0.9rem;
  color: #43c6ac;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const StarIcon = styled.div`
  color: ${props => props.$active ? '#ffd700' : '#e1e1e1'};
`;

const BookingActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e1e1e1;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$variant === 'secondary' ? 'white' : '#43c6ac'};
  color: ${props => props.$variant === 'secondary' ? '#43c6ac' : 'white'};
  border: ${props => props.$variant === 'secondary' ? '1px solid #43c6ac' : 'none'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(67, 198, 172, 0.2);
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const StatTitle = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  color: #191654;
  font-size: 1.5rem;
  font-weight: 700;
`;

export default HistoryPage;