import React from "react";

 export default class ListToggle extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             toggle: false
         }
     }

     handleClick = () => {
        this.setState({toggle: !this.state.toggle})
     };

     render() {
         return (
             <div onClick={this.handleClick} className='ListToggle' data-toggled={this.state.toggle}>
                 <div>
                     <i className='fa fa-fw fa-plus'/>
                     <i className='fa fa-fw fa-check'/>
                 </div>
             </div>
         )
     }
 }