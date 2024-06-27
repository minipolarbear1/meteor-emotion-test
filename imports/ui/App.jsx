import React, {useEffect, useState} from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import ButtonComponent from "./ButtonComponent";

export const App = () =>{
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
 return (
     <>
         {/*<h1>Welcome to Meteor!</h1>*/}
         {/*<Hello/>*/}
         {/*<Info/>*/}
         {mounted && (<ButtonComponent/>)}
         {/*<ButtonComponent/>*/}
     </>
 )
};