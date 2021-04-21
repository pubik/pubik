import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}
body {
   font-family: "Space Mono";
   background: #333;
   color: #fff;
   line-height: 1.6;
   height:100vh;
   overflow: hidden;

   #___gatsby {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
   }
}
`;
