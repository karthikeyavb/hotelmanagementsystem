import React from 'react';
import styled from 'styled-components';
import { FaBed, FaPlus, FaSearch } from 'react-icons/fa';

const RoomsPage = () => {
  const rooms = [
    { id: 1, number: '101', type: 'Deluxe', status: 'Available', price: 200, floor: '1st' },
    { id: 2, number: '102', type: 'Suite', status: 'Occupied', price: 350, floor: '1st' },
    // Add more room data as needed
  ];

  return (
    <PageContainer>
      <Header>
        <Title>Room Management</Title>
        <ActionButtons>
          <SearchBar>
            <FaSearch />
            <input type="text" placeholder="Search rooms..." />
          </SearchBar>
          <AddButton>
            <FaPlus /> Add New Room
          </AddButton>
        </ActionButtons>
      </Header>

      <RoomGrid>
        {rooms.map(room => (
          <RoomCard key={room.id}>
            <RoomIcon>
              <FaBed />
            </RoomIcon>
            <RoomInfo>
              <RoomNumber>Room {room.number}</RoomNumber>
              <RoomType>{room.type}</RoomType>
              <RoomDetails>
                <StatusBadge $status={room.status.toLowerCase()}>
                  {room.status}
                </StatusBadge>
                <Price>${room.price}/night</Price>
              </RoomDetails>
              <FloorInfo>Floor: {room.floor}</FloorInfo>
            </RoomInfo>
            <ActionButtons>
              <ActionButton>Edit</ActionButton>
              <ActionButton $variant="danger">Delete</ActionButton>
            </ActionButtons>
          </RoomCard>
        ))}
      </RoomGrid>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #191654;
  font-size: 2rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  
  svg {
    color: #666;
    margin-right: 0.5rem;
  }
  
  input {
    border: none;
    outline: none;
    font-size: 1rem;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #43c6ac;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3ab19a;
  }
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const RoomCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RoomIcon = styled.div`
  font-size: 2rem;
  color: #43c6ac;
`;

const RoomInfo = styled.div`
  flex: 1;
`;

const RoomNumber = styled.h3`
  color: #191654;
  margin-bottom: 0.5rem;
`;

const RoomType = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const RoomDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  background: ${props => {
    switch(props.$status) {
      case 'available': return 'rgba(67, 198, 172, 0.2)';
      case 'occupied': return 'rgba(255, 99, 99, 0.2)';
      default: return 'rgba(255, 159, 67, 0.2)';
    }
  }};
  color: ${props => {
    switch(props.$status) {
      case 'available': return '#43c6ac';
      case 'occupied': return '#ff6363';
      default: return '#ff9f43';
    }
  }};
`;

const Price = styled.span`
  color: #191654;
  font-weight: 600;
`;

const FloorInfo = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: ${props => props.$variant === 'danger' ? '#ff6363' : '#43c6ac'};
  color: white;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default RoomsPage;