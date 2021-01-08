import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

        .header-menu {
            display: flex;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
            width: 1092px;
            height: 103px;
            padding: 0;

                .logo{
                    text-decoration:none;
                }

                @media (max-width: 1092px) {
                    padding: 0 24px;
                }

                @media (max-width: 768px) {
                    .logo{
                        margin-left: 24px
                    }
                }
        }

        button.navbar-toggler{
            visibility: hidden;
        }        
        #burger {
            width: 1.75rem;
            height: 1.75rem;
            z-index: 20;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            visibility: visible;
            z-index: 500;
        }
        #burger div {
        width: 1.75rem;
        height: 0.25rem;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
    }

    #burger.closed div {
        background-color: rgb(0, 0, 0);
    }
    #burger.open div {
        background-color: rgb(0, 0, 0);
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
`

export const Logo = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    color: var(--primary-color);
    font-weight: bold;
`

export const Menus = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 100;

    ul.navbar-nav {
        width: 455px;
        justify-content: space-between;
    }

    a.nav-link {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        color: #fff; 
    }

    ul.nav-register a.nav-link {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        color: var(--secondary-color);
    }

    
    a.nav-link.register {
        color: var(--primary-color) !important;
    }

    @media (max-width: 767px) {
        &.navbar-collapse {
            width: 100vw;
            margin: 0;
            padding: 50px 0;
            background-color:  #fff;
            box-shadow: 0px 150px 200px 0px #00000071;
        }

        a.nav-link {
            color: var(--secondary-color) !important;
        }

        a.nav-link.register {
            margin-top: 24px;
            width: 100px;      
        }

}
` 