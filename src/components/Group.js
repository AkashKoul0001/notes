// import React, { useState } from 'react';
// import NoteEditor from './NoteEditor';
// import styled from 'styled-components';
// import { FaArrowLeft } from 'react-icons/fa';

// const GroupContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   background-color: #dae5f5;
   
//   @media (max-width: 768px) {
//     padding: 0; // Remove padding for mobile devices
//     height: 100vh; // Ensure full screen height
//   }
// `;

// const NotesContainer = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   padding: 20px;
//   background-color:  #dae5f5;
//   border-radius: 8px;
//   // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// `;

// const Note = styled.div`
//   margin-bottom: 10px;
//   padding: 10px;
//   background-color: #f0f0f0;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const Header = styled.div`
// padding: 10px;
// background-color:#001F8B;
// display: flex;
// flex-direction:row;
//   gap: 10px;
// `

// const BackButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 20px;
//   color: #001f8b;
//   cursor: pointer;
//   display: ${(props) => (props.show ? 'block' : 'none')};

//   &:hover {
//     color: #4caf50;
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

// const Group = ({ group, updateNotes , closeGroup }) => {
//   const [noteContent, setNoteContent] = useState('');

//   const handleAddNote = () => {
//     if (noteContent.trim()) {
//       const formattedDate = () => {
//         const date = new Date();
//         const day = date.getDate(); // Get the day of the month
//         const monthNames = [
//           'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//         ];
//         const month = monthNames[date.getMonth()]; // Get the abbreviated month name
//         const year = date.getFullYear(); // Get the full year
//         const hours = date.getHours(); // Get the hour (24-hour format)
//         const minutes = String(date.getMinutes()).padStart(2, '0'); // Format minutes as two digits
//         const period = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
//         const formattedHours = hours % 12 || 12; // Convert to 12-hour format, handle "00" as "12"
  
//         return `${day} ${month} ${year} ${formattedHours}:${minutes} ${period}`; // Return formatted date
//       };
  
//       const newNote = {
//         id: Date.now(), // Unique ID for the note (using timestamp)
//         content: noteContent, // Note content
//         createdAt: formattedDate(), // Formatted date for creation
//         updatedAt: formattedDate(), // Formatted date for update
//       };
  
//       // Add the new note to the group's note list
//       const updatedNotes = [...group.notes, newNote];
//       updateNotes(updatedNotes); // Pass updated notes to parent component
      
//       setNoteContent(''); // Clear the input field after adding the note
//     }
//   };
  

//   const getInitials = (name) => {
//     // Split the name into words and take the first letter of each word
//     const initials = name
//       .split(' ')
//       .map((word) => word[0])
//       .join('')
//       .toUpperCase();
  
//     // Return only the first two characters of the initials
//     return initials.slice(0, 2);
//   };
  

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') handleAddNote();
//   };

//   return (
//     <GroupContainer>
//       <Header>
//       <BackButton
//             show={window.innerWidth <= 768}
//             onClick={closeGroup} 
//           >
//             <FaArrowLeft color='white'/>
//           </BackButton>
//       <GroupColour color={group.colour}>
//             {getInitials(group.name)}
//           </GroupColour>
//       <h2 style={{color:"white" , marginTop:"10px"}}>{group.name}</h2>
//       </Header>
      
//       <NotesContainer>
//         {group.notes.map((note) => (
//           <Note key={note.id}>
//             <p>{note.content}</p>
//             <small style={{alignSelf:"flex-end",justifyContent:'flex-start'}}> {note.createdAt}</small>
//           </Note>
//         ))}
//       </NotesContainer>
//       <NoteEditor
//   value={noteContent}
//   onChange={setNoteContent} // Ensure this updates the state in parent
//   onAddNote={handleAddNote} // Ensure this function adds the note
//   onKeyPress={handleKeyPress} // Optional: for extra key handling
// />
//     </GroupContainer>
//   );
// };

// export default Group;



import React, { useState,useEffect } from 'react';
import NoteEditor from './NoteEditor';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  background-color: #dae5f5;
  

  @media (max-width: 768px) {
    padding: 0; // Remove padding for mobile devices
    height: 100vh; // Ensure full screen height
  }
`;

const NotesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #dae5f5;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Note = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Header = styled.div`
  padding: 10px;
  background-color: #001f8b;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #001f8b;
  cursor: pointer;
  display: ${(props) => (props.show ? 'block' : 'none')};

  &:hover {
    color: #4caf50;
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

const CreatedAt = styled.small`
  align-self: flex-end;  /* Align to the right */
  font-size: 12px;
  // color: gray;
`;

const Group = ({ group, updateNotes, closeGroup }) => {

  var count = 0;
  const [noteContent, setNoteContent] = useState('');

  const [messages, setMessages] = useState([]);

  const [localNotes, setLocalNotes] = useState(group.notes);


 
 

  const addMessage = (newMessage) => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const handleAddNote = () => {
    count = count + 1;
    // console.log("abcd")
    if (noteContent.trim()) {
      const formattedDate = () => {
        const date = new Date();
        const day = date.getDate(); // Get the day of the month
        const monthNames = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const month = monthNames[date.getMonth()]; // Get the abbreviated month name
        const year = date.getFullYear(); // Get the full year
        const hours = date.getHours(); // Get the hour (24-hour format)
        const minutes = String(date.getMinutes()).padStart(2, '0'); // Format minutes as two digits
        const period = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format, handle "00" as "12"
  
        return `${day} ${month} ${year} ${formattedHours}:${minutes} ${period}`; // Return formatted date
      };
  
      const newNote = {
        id: Date.now(), // Unique ID for the note (using timestamp)
        content: noteContent, // Note content
        createdAt: formattedDate(), // Formatted date for creation
        updatedAt: formattedDate(), // Formatted date for update
      };
  
      // Add the new note to the group's note list
      // const updatedNotes = [...group.notes, newNote];
      // updateNotes(updatedNotes); // Pass updated notes to parent component
      // setNoteContent(''); // Clear the input field after adding the note
       // Find the group and update its notes in the saved groups
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    const updatedGroups = savedGroups.map((savedGroup) => {
      if (savedGroup.id === group.id) {
        // If this is the current group, append the new note to its notes
        return { ...savedGroup, notes: [...savedGroup.notes, newNote] };
      }
      return savedGroup;
    });

    // Update localStorage with the new group data
    localStorage.setItem('groups', JSON.stringify(updatedGroups));

    // Update the state to reflect the new note
    setLocalNotes((prevNotes) => [...prevNotes, newNote]);

    // Clear the note content after adding the note
    setNoteContent('');
    }
  };
  // useEffect(()=>{
  //   //const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
  //   console.log("use Effect called")
  // },[handleAddNote])

  // useEffect(() => {
  //   // This effect will trigger whenever `group.notes` changes
  //   const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
  //   const curr = savedGroups.map((m)=>{console.log("mappp : " , m)})
  //   console.log("saved groups are :" , savedGroups)

  //   console.log("currewnt group : " , group.id)
  //   setLocalNotes(group.notes);

  // }, [group.notes , handleAddNote]);

  useEffect(() => {
    // This effect will trigger whenever `group.notes` or `handleAddNote` changes
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
  
    console.log("saved groups are: ", savedGroups);
    console.log("current group id: ", group.id);
  
    // Find the group where the group.id matches the saved group's id
    const currentGroup = savedGroups.find((savedGroup) => savedGroup.id === group.id);
  
    if (currentGroup) {
      // If the group is found, update the localNotes with that group's notes
      console.log("Current group found: ", currentGroup);
      setLocalNotes(currentGroup.notes);
    } else {
      console.log("Group not found in saved groups.");
    }
  
  }, [group.notes, handleAddNote]);



  const getInitials = (name) => {
    const initials = name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
    return initials.slice(0, 2);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAddNote(); 
  };

  return (
    <GroupContainer>
      <Header>
        <BackButton show={window.innerWidth <= 768} onClick={closeGroup}>
          <FaArrowLeft color="white" />
        </BackButton>
        <GroupColour color={group.colour}>{getInitials(group.name)}</GroupColour>
        <h2 style={{ color: 'white', marginTop: '10px' }}>{group.name}</h2>
      </Header>

      <NotesContainer>
        {localNotes.map((note) => (
          <Note key={note.id}>
            <p>{note.content}</p>
            <CreatedAt>{note.createdAt}</CreatedAt>  {/* CreatedAt now aligned right */}
          </Note>
        ))}
      </NotesContainer>
      
      <NoteEditor
        value={noteContent}
        onChange={setNoteContent} // Ensure this updates the state in parent
        onAddNote={() => {
          handleAddNote();
          addMessage({ content: noteContent, createdAt: new Date() });
        }} // Ensure this function adds the note
        onKeyPress={handleKeyPress} // Optional: for extra key handling
        
      />
    </GroupContainer>
  );
};

export default Group;

