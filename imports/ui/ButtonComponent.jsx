/**
 * 제작 : Minipolarbear
 * 날짜 : 24. 6. 27.
 * 내용 : 이모션 버튼 컴포넌트
 */

import React, { useState } from 'react';
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

function ButtonComponent({}) {
    const [count, setCount] = useState(0);
    console.log('buttonComponent');
    return (
        <div>
            Count: {count} <br />
            <Button onClick={() => setCount((count) => count + 1)}>Click Me!</Button>
        </div>
    );
}

export default ButtonComponent;