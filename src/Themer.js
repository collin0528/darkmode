import React from "react"
//this is where i imported the bootstrap
import 'bootstrap/dist/css/bootstrap.css';
class Themer extends React.Component{


    constructor(props){
        super();
        this.props = props
    }

    render(){
//  this is render method which is returning
//   four JSX elements (button) in a div
//    with className of cover and this Themer
//     component is a child component to App
        return (
            <div className="cover">
                <button className="btn btn-dark" onClick={() => this.props.changeTheme('dark')}>clickMe</button>
                <button className="btn btn-danger" onClick={() => this.props.changeTheme('danger')}>clickMe</button>
                <button className="btn btn-warning" onClick={() => this.props.changeTheme('yellow')}>clickMe</button>
                <button className="btn btn-success" onClick={() => this.props.changeTheme('white')}>clickMe</button>
            </div>
        )

    }
}

export default Themer;