const App = (props) => {
  const { notes } = props

  // return (
  //   <div>
  //     <h1>Notes</h1>
  //     <ul>
  //       {notes.map(note => 
  //         <li key={note.id}>
  //           {note.content}
  //         </li>
  //       )}  
  //     </ul>
  //   </div>
  // )

  const result = notes.map(note => note.content)
  return result
  
}


export default App