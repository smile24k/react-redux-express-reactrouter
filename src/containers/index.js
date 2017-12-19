import React from 'react'
import {connect} from "react-redux";
import {Component} from "react";
import {index} from "../action/index"
require("../../less/store/index.less")
class Index extends Component{
	constructor(props) {
        super(props);
        let {index} = this.props;
        index();
    }
    render(){
        let {data} = this.props;
         console.log(data.subjects)
    	return(
            <div>
                <div>{data.title}</div>
                <ul>
                    {
                        data.subjects && data.subjects.length > 0 && data.subjects.map((item,i) => {
                                return(
                                    <li key={i}>{item.title}</li>
                                    ) 

                        })
                    }
                </ul>
            </div>
    			)
    }
}
class Test extends Component{

}
const mapStateToProps = (state,props) => {
   
	return{
        data:state.index
    }
}
export default connect(
    mapStateToProps,
    {
       index
    }
)(Index)