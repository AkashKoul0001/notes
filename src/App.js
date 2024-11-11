// import React, { useState, useEffect } from 'react';
// import Sidebar from './components/Sidebar';
// import Group from './components/Group';
// import styled from 'styled-components';
// import { FaLock } from 'react-icons/fa';

// // App Container (Flexbox Layout)
// const AppContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   overflow: hidden;
//   margin: 0;
//   padding: 0;

//   @media (max-width: 768px) {
//     flex-direction: column; // Stack sidebar and content vertically on mobile
//   }
// `;

// // Content Area Styling (Main area on the right of the sidebar)
// const Content = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   background-color: #dae5f5;
//   overflow-y: auto;
//   padding: 20px; // Add some padding for better spacing

//   @media (max-width: 768px) {
//     margin-left: 0; // Ensure no margin on mobile if sidebar is at the top
//   }
// `;

// const MyImg = styled.img`
//   width: 40%;
// `;

// // Centered Container for Main Screen (on mobile view)
// const Mydiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   margin-top: 100px;
// `;


// // App Component
// const App = () => {
//   const [groups, setGroups] = useState([]);
//   const [activeGroup, setActiveGroup] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Control sidebar visibility on mobile
  

//   // Load saved groups from localStorage when the component mounts
//   useEffect(() => {
//     const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
//     setGroups(savedGroups);
//   }, []);

//   // Update localStorage whenever groups state changes
//   useEffect(() => {
//     if (groups.length) {
//       localStorage.setItem('groups', JSON.stringify(groups));
//     }
//   }, [groups]);

//   // Function to add a new group
//   const addGroup = (name, colour) => {
//     const newGroup = {
//       id: Date.now(),
//       name,
//       colour,
//       notes: [],
//     };
//     setGroups([...groups, newGroup]);
//   };

//   // Function to add a new note to a specific group
//   const addNoteToGroup = (groupId, noteContent) => {
//     const updatedGroups = groups.map((group) =>
//       group.id === groupId
//         ? {
//             ...group,
//             notes: [
//               ...group.notes,
//               {
//                 id: Date.now(),
//                 content: noteContent,
//                 createdAt: new Date().toLocaleString(),
//                 updatedAt: new Date().toLocaleString(),
//               },
//             ],
//           }
//         : group
//     );

//     setGroups(updatedGroups);

//     const updatedActiveGroup = updatedGroups.find(group => group.id === groupId);
//     setActiveGroup(updatedActiveGroup);
//   };

//   // Function to update active group's notes
//   const updateActiveGroupNotes = (notes) => {
//     const updatedGroups = groups.map((group) =>
//       group.id === activeGroup.id ? { ...group, notes } : group
//     );
//     setGroups(updatedGroups);
//   };

//   // Handle Group Click to close sidebar on mobile
//   const handleGroupClick = (group) => {
//     setActiveGroup(group);
//     if (window.innerWidth <= 768) {
//       setIsSidebarOpen(false); // Close the sidebar on mobile
//     }
//   };
//   const closeGroup = () => {
//     setActiveGroup(null);
//     if (window.innerWidth <= 768) {
//       setIsSidebarOpen(true); // Open the sidebar on mobile
//     }
//   };

//   return (
//     <AppContainer>
//       {/* Sidebar - Always visible on mobile */}
//       <Sidebar
//         groups={groups}
//         setActiveGroup={handleGroupClick} // Pass the function to close sidebar on group click
//         addGroup={addGroup}
//         isSidebarOpen={isSidebarOpen} // Pass the sidebar state
//         setIsSidebarOpen={setIsSidebarOpen} // Pass the function to control sidebar visibility
//       />

//       <Content>
//         {activeGroup ? (
//           <Group
//             group={activeGroup}
//             addNote={addNoteToGroup}
//             updateNotes={updateActiveGroupNotes}
//             closeGroup={closeGroup}
//           />
//         ) : (
//           // Only show this section on larger screens, hide on mobile
//           <Mydiv>
//           <MyImg src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aD2Bf80EeBa6oAql2KO7pwJLIeRmuDeQNMeNT3vU8JH0znwlmvviiOQypMn0Rk~jxEYr6rPmE8-Ecs0csnwvYIHzdi7flaHXfVAYlPgwlpZx3hXIN~np4q3QAZGi6OwnS~K-OYz-gjzXkhB7dYctrO2XDRV0cd5IB4dc0O9e3I3DTb1T-nhlji6HbTpidNbMl3AvfxI7QJ4URKha-Yb78fHI6SahJ8wt0cnf4701KGyW1Ko483RvflRxQKQjr0mq5pee8v9ZPyD~v-Z23gFFlR19uC0T8jmu9GGy4I3krl~zAaXnvhRGgC1DmkgSlPO3LeKDKMO3mNdlOsjd27nLYw__" />
//           <h1>Pocket Notes</h1>
//           <h3>
//             Send and receive messages without keeping your phone online.
//             <br />
//             Use Pocket Notes on up to 4 linked devices and 1 mobile phone
//           </h3>
//           <div style={{ marginTop: "180px" }}>
//             <FaLock size={10} color="black" />
//             end-to-end encrypted
//           </div>
//         </Mydiv>
//         )}
//       </Content>
//     </AppContainer>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Group from './components/Group';
import styled from 'styled-components';
import { FaLock } from 'react-icons/fa';
import createGlobalStyle from 'styled-components';
import './App.css'

// Global reset to prevent page scrolling
const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden; // Prevent page scrolling
  }
`;

// App Container (Flexbox Layout)
const AppContainer = styled.div`
  display: flex;
  height: 100vh; // Full viewport height
  overflow: hidden; // Prevent scrolling on the outer container
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column; // Stack sidebar and content vertically on mobile
  }
`;

// Content Area Styling (Main area on the right of the sidebar)
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #dae5f5;
  overflow-y: auto; // Allow scrolling inside content
  padding: 0px; // Add some padding for better spacing
  height: 100vh; // Ensure content takes full height

  @media (max-width: 768px) {
    margin-left: 0; // Ensure no margin on mobile if sidebar is at the top
  }
`;

const MyImg = styled.img`
  width: 40%;
`;

// Centered Container for Main Screen (on mobile view)
const Mydiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

// App Component
const App = () => {
  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Control sidebar visibility on mobile
  
  // Load saved groups from localStorage when the component mounts
  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(savedGroups);
  }, []);

  // Update localStorage whenever groups state changes
  useEffect(() => {
    if (groups.length) {
      localStorage.setItem('groups', JSON.stringify(groups));
    }
  }, [groups]);

  // Function to add a new group
  const addGroup = (name, colour) => {
    const newGroup = {
      id: Date.now(),
      name,
      colour,
      notes: [],
    };
    setGroups([...groups, newGroup]);
  };

  // Function to add a new note to a specific group
  const addNoteToGroup = (groupId, noteContent) => {
    const updatedGroups = groups.map((group) =>
      group.id === groupId
        ? {
            ...group,
            notes: [
              ...group.notes,
              {
                id: Date.now(),
                content: noteContent,
                createdAt: new Date().toLocaleString(),
                updatedAt: new Date().toLocaleString(),
              },
            ],
          }
        : group
    );

    setGroups(updatedGroups);

    const updatedActiveGroup = updatedGroups.find(group => group.id === groupId);
    setActiveGroup(updatedActiveGroup);
  };

  // Function to update active group's notes
  const updateActiveGroupNotes = (notes) => {
    const updatedGroups = groups.map((group) =>
      group.id === activeGroup.id ? { ...group, notes } : group
    );
    setGroups(updatedGroups);
  };

  // Handle Group Click to close sidebar on mobile
  const handleGroupClick = (group) => {
    setActiveGroup(group);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false); // Close the sidebar on mobile
    }
  };
  const closeGroup = () => {
    setActiveGroup(null);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(true); // Open the sidebar on mobile
    }
  };

  return (
    <>
      <GlobalStyle /> {/* Global styles to prevent page scrolling */}
      <AppContainer>
        {/* Sidebar - Always visible on mobile */}
        <Sidebar
          groups={groups}
          setActiveGroup={handleGroupClick} // Pass the function to close sidebar on group click
          addGroup={addGroup}
          isSidebarOpen={isSidebarOpen} // Pass the sidebar state
          setIsSidebarOpen={setIsSidebarOpen} // Pass the function to control sidebar visibility
        />

        <Content>
          {activeGroup ? (
            <Group
              group={activeGroup}
              addNote={addNoteToGroup}
              updateNotes={updateActiveGroupNotes}
              closeGroup={closeGroup}
            />
          ) : (
            // Only show this section on larger screens, hide on mobile
            <Mydiv>
              <MyImg src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aD2Bf80EeBa6oAql2KO7pwJLIeRmuDeQNMeNT3vU8JH0znwlmvviiOQypMn0Rk~jxEYr6rPmE8-Ecs0csnwvYIHzdi7flaHXfVAYlPgwlpZx3hXIN~np4q3QAZGi6OwnS~K-OYz-gjzXkhB7dYctrO2XDRV0cd5IB4dc0O9e3I3DTb1T-nhlji6HbTpidNbMl3AvfxI7QJ4URKha-Yb78fHI6SahJ8wt0cnf4701KGyW1Ko483RvflRxQKQjr0mq5pee8v9ZPyD~v-Z23gFFlR19uC0T8jmu9GGy4I3krl~zAaXnvhRGgC1DmkgSlPO3LeKDKMO3mNdlOsjd27nLYw__" />
              <h1>Pocket Notes</h1>
              <h3>
                Send and receive messages without keeping your phone online.
                <br />
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone
              </h3>
              <div style={{ marginTop: "180px" }}>
                <FaLock size={10} color="black" />
                end-to-end encrypted
              </div>
            </Mydiv>
          )}
        </Content>
      </AppContainer>
    </>
  );
};

export default App;

