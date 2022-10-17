import React from "react";
import FuncComp from '../Components/Functional';

class ClassComponent extends React.Component{
    render(){
        return(
            <h3><FuncComp></FuncComp>I AM the FIRST CLASS COMPONENT<ClassComponent1></ClassComponent1></h3>
        )
    }
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            <h3>2nd class<FunctionalComponent/></h3>
        )
    }
}

function FunctionalComponent()
{
 return(
    <h4>Hello</h4>
 )
}

export default ClassComponent;