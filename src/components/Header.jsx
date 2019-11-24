import React from "react";

import {Logo} from "./Logo";
import {Nav} from "./Nav";
import {UserCard}  from "./User";

export const Header =() => (
    <header>
        <div>
          <Logo />
          <Nav />
        </div>
        <div>
            <UserCard />
        </div>
    </header>
);