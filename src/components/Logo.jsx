import React from 'react';
import '../assets/style/Logo.css';
import mainLogo from "../assets/images/filmhouse-logo.png"
import {Link} from "react-router-dom";



export const Logo =()=> (
  <Link to="/"><img className="logo" src={mainLogo} alt="img" /></Link>
);