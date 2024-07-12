import Student from "./Student";
import "./App.css";

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={30} isStudent={false} />
      <Student name="Sandy" age={30} isStudent={true} />
    </>
  );
}

export default App;
