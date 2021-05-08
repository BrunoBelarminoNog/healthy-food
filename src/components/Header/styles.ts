import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

        nav {
            width: 90%;
            max-width: 1092px;
            height: 100px;
            padding: 0;
            display: flex;
            align-items: center;
            margin: 0 auto;

                > div {
                    width: 100%;
                    display: flex;
                    margin: 0 auto;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo{
                    text-decoration:none;
                }

                
        }

        #burger {
            visibility: hidden;
            width: 1.75rem;
            height: 1.75rem;
            z-index: 20;
            display: none;
        }
    

        @media (max-width: 768px) {

            #burger {
                
                display: flex;
                justify-content: space-around;
                flex-flow: column nowrap;
                visibility: visible;
                z-index: 500;
                top: 36px;
                right: 24px;

                    &.open {
                        position: fixed;
                    }

                    &.closed {
                        position: absolute;
                    }

                    div {
                        width: 1.75rem;
                        height: 0.25rem;
                        border-radius: 10px;
                        transform-origin: 1px;
                        transition: all 0.3s linear;
                        background-color: rgb(0, 0, 0);
                    }


            } 

            #burger.open div:nth-child(1) {
                transform: rotate(45deg);
            }

            #burger.open div:nth-child(2) {
                transform: translateX(100%);
                opacity: 0;
            }

            #burger.open div:nth-child(3) {
                transform: rotate(-45deg);
            }

             nav div#burguer-menu {
                flex-flow: column nowrap;
                position: fixed;
                align-items: center;
                top: 0;
                right: 0;
                height: 100vh;
                width: 250px;
                padding-top: 5.5rem;
                padding-bottom: 3.5rem;
                padding-left: 0;
                background-color: #eeeded;
                transition: all 0.3s ease-in-out;

                z-index: 450;
            }

            nav div#burguer-menu.closed {
                transform: translateX(100%);
                box-shadow: 1px 0px 0px 100vw rgba(15, 15, 15, 0);
            }  
            nav div#burguer-menu.open {
                transform: translateX(0);
                box-shadow: 1px 0px 0px 100vw rgba(15, 15, 15, 0.534);
            }

        }
 
        
`

export const Logo = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    color: var(--primary-color);
    font-weight: bold;
`

export const Menus = styled.div`
    z-index: 100;
    width: 455px;

    > div {
        display: flex;
        align-items: center;        
        justify-content: space-between;

        a.navlink {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        color: #fff; 
        }

        &.nav-register {
            a.navlink {
                color: var(--secondary-color);
            }
        }
    }
    
    a.navlink.register {
        color: var(--primary-color) !important;
    }

    @media (max-width: 768px) {
        width: 100%; 

        > div {
            flex-direction: column;
        }

        a.navlink {
            width: 100%;
            padding: 12px 16px;
            text-align: right;
            color: var(--secondary-color) !important;
            border-top: 1px solid var(--tertiary-color);

            a.register {
            margin-top: 24px;
            width: 100px;      
        }
    }

}
` 