import React from "react";
import '../assets/style/Header.css';
import heroBack from "../assets/images/hero.jpeg";

import {Logo} from "./Logo";
import {Nav} from "./Nav";
import {UserCard}  from "./User";

export const Header =() => (
    <header>
        <div>
          <section className="section-hero">
          <figure className="section-background">
            <img src={heroBack} alt="img" />
          </figure>
          <section className="section-foreground">
           <section className="section-hero-top">
           <section className="section-overlay section-overlay-1"></section>
           <div className="container container-header">
           <section class="nav-logo">
           <Logo />
            <Nav />
            </section>
          <UserCard />
          </div>
          </section>
          <div className="container">
          <section className="section-hero-bottom">
            <h1 className="section-title unbold">Meet <b>Filmhouse</b> cinema!</h1>
            <h2 className="section-subtitle unbold">
              <span className="brandi-word">/We believe in independence of voice and genuine choice for audiences</span> 
            </h2>
            <p className="section-description">
              We are a team of professionals
            </p>
            <div className="socials">
              <a href="#"><i className="icon-twitter"></i></a>
              <a href="#"><i className="icon-facebook"></i></a>
              <a href="#"><i className="icon-google"></i></a>
              <a href="#"><i className="icon-dribbble"></i></a>
            </div>
          </section>
            </div>
         </section>
         </section>
        </div>
    </header>
);