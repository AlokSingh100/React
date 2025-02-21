import Student from "./Student";


function App() {

    return (
        <>
            <Student name="John Doe" age="30" isStudent={true} />
            <Student name="Jane " age={22} isStudent={false} />
            <Student age={44}/>
        </>
    );
}
export default App;