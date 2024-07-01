import React, {useEffect, useState} from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import ButtonComponent from "./ButtonComponent";

export const App = () =>{
    /**
     * 에러 원인
     * 해당 컴포넌트 여기서는 ButtonComponent 를 불러올때
     * 트리상의 불일치가 발생하여 Hydrate 를 정상적으로 실행할 수 없는 문제가 발생
     * 해당 코드가 초기 View 를 Pre-rendering 하는 SSR 과정에서 존재하지 않는
     * Document 에 접근하려 하기 때문에 발생하는 문제
     * next.js 에서 발견한 해결 방법
     * Hydration 불일치를 방지하려면 구성요소가 초기 클라이언트 측 렌더링 중에 동일한
     * 콘텐츠 서버 측을 렌더링하는지 확인해야함
     * Hook 를 사용하여 클라이언트에서 의도적으로 다양한 콘텐츠를 렌더링 할 수 있다.
     */
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

 return (
     <>
         <h1>Welcome to Meteor!</h1>
         <Hello/>
         { mounted &&<Info/> }
         <ButtonComponent/>
     </>
 )
};