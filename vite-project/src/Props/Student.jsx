import prototype from 'prop-types';


function Student(props) {
    return (
        <div className="student"> 
            <p>Name:- {props.name}</p>
            <p>Age:- {props.age}</p>
            <p>Student : {props.isStudent ? "Yes":"No"}</p>
        </div>
    );
}
Student.prototype = {
    name: prototype.string,
    age: prototype.number,
    isStudent: prototype.bool,
}
Student.defaultProps = {
    name:"Alok",
    age:10,
    isStudent:false,
}
export default Student;