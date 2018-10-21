//create globale style from styled components
import { createGlobalStyle } from 'styled-components'

const primaryColor = '#380616'

const GlobalStyle = createGlobalStyle<{ width: number }>`

.bg-main{
     background-color: ${primaryColor};
}

.white{
   color:white;  
}

.section-wrapper {
     width:${({ width: w }) => (w < 500 ? '90%' : w < 786 ? '85%' : '85%')};
     margin: 0 auto;
}

.mt-large{
     /* margin-top: ${({ width: w }) => (w < 500 ? '7rem' : '8rem')} */
     margin-top:15vh;
}

.mt-medium{
     /* margin-top: ${({ width: w }) => (w < 500 ? '4rem' : '5rem')} */
     margin-top:10vh;
}

.mt-small{
     /* margin-top: ${({ width: w }) => (w < 500 ? '1rem' : '2rem')} */
     margin-top:5vh;
}
.mt-small-pixel{
     margin-top: ${({ width: w }) => (w < 500 ? '1rem' : '1.5rem')}
}



.flexCenter{
     display:flex;
     justify-content:center;
     align-items:center;
}

.featureCard{
     width:${({ width: w }) => (w < 500 ? '100%' : '320px')};
     min-height:auto;  
}

.primary-heading {
      font-size: ${({ width: w }) => (w <= 500 ? '2.5rem' : '60px')};
      color: #ffffff;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;   
      color:${primaryColor};
    }
.secondary-heading {
     font-size: ${({ width: w }) => (w <= 500 ? '1.5rem' : '35px')};
      color: #ffffff;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;   
      color:${primaryColor};
}
.tertiary-heading{
     
}

.paragraph {
 font-size: ${({ width: w }) => (w <= 500 ? '1.3rem' : '1.7rem')};
}
`
export default GlobalStyle
