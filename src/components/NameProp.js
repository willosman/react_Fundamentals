// Props
// Short for "Properties"
// Parameters of a component function that gets passed into the component to aid in its reuseability. 
// Dynamic data that can be assigned to child components. 

const NameProp = (props) => { //property returning React element. 
    return <h1>Hello,{props.name}</h1>
}

export default NameProp;

//Create a component named Contacts
//Pass name, age, school, graduationYear props into it
//Return an h3 with a name, and a <p> with the remaining info. 
