/**
 * Created by dell on 2019/4/21.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { version, Button } from "antd";
import "antd/dist/antd.css";

import { Head, Footer } from "./../components/commom";
class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            info:{
                language: "Language",
                menulist: ["Chinese", "English"],
                profile:"Login",
                toLink:"/presonalInfo/",
                icon:"icon-denglu"
            }
        };
    }
    render(){
        return (
            <div id="home" className="page home">
                <Head info={this.state.info} ></Head>
                <div className="content">this is home page</div>
                <Footer>
                    <Link to="/login/">
                    </Link>
                </Footer>
                
            </div>
        )
    }
}
export default Home;
