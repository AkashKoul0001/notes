// import React, { useRef, useState, useEffect } from 'react';
// import { FaPlus } from 'react-icons/fa';
// import styled from 'styled-components';

// const SidebarContainer = styled.div`
//   width: 250px;
//   background-color: white;
//   padding: 20px;
//   color: black;
//   display: ${({ isSidebarOpen }) => (isSidebarOpen ? 'flex' : 'none')};
//   flex-direction: column;
//   gap: 10px;
//   overflow-y: auto;

//   @media (max-width: 768px) {
   
//     padding: 0; // Remove padding for mobile devices
//     height: 100vh; // Ensure full screen height
//     width:100vw
//   }
// `;

// const GroupButton = styled.button`
//   background-color: #001F8B;
//   color: white;
//   border: none;
//   padding: 16px;
//   font-size: 20px;
//   cursor: pointer;
//   margin-top: auto;
//   border-radius: 50%;
//   position: fixed;
//   bottom: 20px;
//   left: 15%;
//   transform: translateX(-50%);

//   @media (max-width: 768px) {
   
//   left: 85%;
//   }

  
// `;

// const GroupItem = styled.div`
//   padding: 10px;
//   cursor: pointer;
//   border-radius: 5px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 10px;
//   &:hover {
//     background-color: #4caf50;
//   }
// `;

// const GroupColour = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 16px;
//   color: white;
//   font-weight: bold;
// `;

// const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const InternalModal = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 5px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 400px;
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// const Mydiv = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const MyInput = styled.input`
//   width: 60%;
//   height: 30px;
//   margin-left: 10px;
//   margin-top: 10px;
//   border-radius: 10px;
//   border-color: grey;
//   border-width: 1px;
// `;

// const MyButton = styled.button`
//   display: flex;
//   align-self: flex-end;
//   background-color: ${(props) => (props.disabled ? '#B0B0B0' : 'blue')};
//   color: white;
//   width: 100px;
//   justify-content: center;
//   border-radius: 5px;
//   cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};
// `;

// const Sidebar = ({ groups, setActiveGroup, addGroup , isSidebarOpen }) => {
//   const [newGroupName, setNewGroupName] = useState('');
//   const [isCreatingGroup, setIsCreatingGroup] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const modalRef = useRef(null);

//   const getInitials = (name) => {
//     const initials = name
//       .split(' ')
//       .map((word) => word[0])
//       .join('')
//       .toUpperCase();
  
//     return initials.slice(0, 2);
//   };
  
//   const handleCreateGroup = () => {
//     if (newGroupName.trim() && selectedColor) {
//       addGroup(newGroupName, selectedColor);
//       setNewGroupName('');
//       setIsCreatingGroup(false);
//       setSelectedColor(null);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       setIsCreatingGroup(false);
//     }
//   };

//   useEffect(() => {
//     if (isCreatingGroup) {
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }
//   }, [isCreatingGroup]);

//   return (
//     <SidebarContainer isSidebarOpen={isSidebarOpen}>
//       <h2>Groups</h2>
//       {groups.map((group) => (
//         <GroupItem key={group.id} onClick={() => setActiveGroup(group)}>
//           <GroupColour color={group.colour}>
//             {getInitials(group.name)}
//           </GroupColour>
//           {group.name}
//         </GroupItem>
//       ))}

//       {isCreatingGroup ? (
//         <Modal>
//           <InternalModal ref={modalRef}>
//             <h3>Create New Group</h3>

//             <Mydiv>
//               <h4>Group name</h4>
//               <MyInput
//                 type="text"
//                 placeholder="Enter group name"
//                 value={newGroupName}
//                 onChange={(e) => setNewGroupName(e.target.value)}
//               />
//             </Mydiv>
            
//             <Mydiv>
//               <h5>Choose Color</h5>
//               <div style={{ display: 'flex', gap: '10px', marginTop: '10px', marginLeft: '10px' }}>
//                 {['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'].map((color) => (
//                   <div
//                     key={color}
//                     style={{
//                       width: '30px',
//                       height: '30px',
//                       borderRadius: '50%',
//                       backgroundColor: color,
//                       cursor: 'pointer',
//                       border: selectedColor === color ? '2px solid #000' : 'none',
//                     }}
//                     onClick={() => setSelectedColor(color)}
//                   />
//                 ))}
//               </div>
//             </Mydiv>

//             <MyButton
//               onClick={handleCreateGroup}
//               disabled={!newGroupName.trim() || !selectedColor}
//             >
//               Create
//             </MyButton>
//           </InternalModal>
//         </Modal>
//       ) : (
//         <GroupButton onClick={() => setIsCreatingGroup(true)}>
//           <FaPlus />
//         </GroupButton>
//       )}
//     </SidebarContainer>
//   );
// };

// export default Sidebar;


import React, { useRef, useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: white;
  padding: 10px;
  color: black;
  display: ${({ isSidebarOpen }) => (isSidebarOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  max-height: calc(100vh - 40px); // Allow scrolling after a certain number of items
  
  @media (max-width: 768px) {
    padding: 0;
    height: 100vh;
    width: 100vw;
    margin-bottom:40px
  }
`;

const GroupButton = styled.button`
  background-color: #001F8B;
  color: white;
  border: none;
  padding: 16px;
  font-size: 20px;
  cursor: pointer;
  margin-top: auto;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  left: 15%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 85%;
  }
`;

const GroupItem = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: #4caf50;
  }
`;

const GroupColour = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const InternalModal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;

   @media (max-width: 768px) {
    padding: 0;
    height: 35vh;
    width: 50vh;
     gap: 0px;
  }
`;

const Mydiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyInput = styled.input`
  width: 60%;
  height: 30px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border-color: grey;
  border-width: 1px;
`;

const MyButton = styled.button`
  display: flex;
  align-self: flex-end;
  background-color: ${(props) => (props.disabled ? '#B0B0B0' : 'blue')};
  color: white;
  width: 100px;
  justify-content: center;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Sidebar = ({ groups, setActiveGroup, addGroup, isSidebarOpen }) => {
  const [newGroupName, setNewGroupName] = useState('');
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const modalRef = useRef(null);

  const getInitials = (name) => {
    const initials = name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();

    return initials.slice(0, 2);
  };

  const handleCreateGroup = () => {
    // Check if the group name is unique
    if (groups.some((group) => group.name.toLowerCase() === newGroupName.toLowerCase())) {
      setErrorMessage('Group name must be unique');
      return;
    }

    if (newGroupName.trim() && selectedColor) {
      addGroup(newGroupName, selectedColor);
      setNewGroupName('');
      setIsCreatingGroup(false);
      setSelectedColor(null);
      setErrorMessage('');
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsCreatingGroup(false);
    }
  };

  useEffect(() => {
    if (isCreatingGroup) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isCreatingGroup]);

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <h2>Groups</h2>
      {groups.map((group) => (
        <GroupItem key={group.id} onClick={() => setActiveGroup(group)}>
          <GroupColour color={group.colour}>
            {getInitials(group.name)}
          </GroupColour>
          {group.name}
        </GroupItem>
      ))}

      {isCreatingGroup ? (
        <Modal>
          <InternalModal ref={modalRef}>
            <h3>Create New Group</h3>

            <Mydiv>
              <h4>Group name</h4>
              <MyInput
                type="text"
                placeholder="Enter group name"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
              />
            </Mydiv>
            
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <Mydiv>
              <h5>Choose Color</h5>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px', marginLeft: '10px' }}>
                {['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'].map((color) => (
                  <div
                    key={color}
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: color,
                      cursor: 'pointer',
                      border: selectedColor === color ? '2px solid #000' : 'none',
                    }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </Mydiv>

            <MyButton
              onClick={handleCreateGroup}
              disabled={!newGroupName.trim() || !selectedColor}
            >
              Create
            </MyButton>
          </InternalModal>
        </Modal>
      ) : (
        <GroupButton onClick={() => setIsCreatingGroup(true)}>
          <FaPlus />
        </GroupButton>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
