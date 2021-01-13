import styled from 'styled-components';

export const Container = styled.section`
    height: 100vh;
    max-width: 1092px;
    margin: 0 auto;
    display: flex;
    align-items: center;

        > img {
            position: absolute;
            height: 100%;
            top: 0;
            right: 0;
            z-index: 1;
                &.img-left {
                    left: 0;
                }         
        }

        &#initial {
            display: grid;
            grid-template-columns: 30% 70%;

                > img {
                    max-height: 830px;
                }
        }

        &#recipes, &#blog{
            flex-direction: column;
            padding: 32px 0;
            max-height: 800px;
        }

        &#services, &#join {
            display: grid;
            grid-template-columns: 50% 50%;
        }

        &#blog div.carrousel {
            width: 90%;
            max-width: 1092px;
            padding-bottom: 24px;
            display: flex;
            justify-content: center;
            align-items: center;

            button.slick-next, button.slick-prev {
                border-radius: 50%;
                padding: 2px;
                border: none;
                outline: none;
                font-weight: bold;
                transition: all 300ms;

                &:hover {
                    background-color: #d4d4d4;
                }

                i::before {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                }
            }

            
        }

        @media (max-width: 1200px) {
            height: 100%;
            width: 100%;

            &#initial{
                height: 100%;
                position: relative;

                > img {
                    position: static;
                    width: 100%;
                    height: unset;
                }
            }

            &#services img , &#join img {
                position: static;
                height: auto !important;
                width: 100%;
                object-fit: cover;
                height: unset;
            }
                
        }

        @media ( max-width: 768px) {
            &#recipes, &#blog{
                max-height: 100%;
            }
        }

        @media (max-width: 768px) {
            &#initial {
                margin-top: 78px;
                padding: 48px 0;
            }

            &#initial, &#services, &#join {
                justify-self: center;
                grid-template-columns: 1fr;
            }
        }
`
export const Headline = styled.div`
    width: 412px;
    display: flex;
    flex-direction: column;

        > h1 {
            font-size: 48px;
            margin-bottom: 32px;
        }

        > #search {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 52px;
            gap: 16px;

                > input {
                    padding: 14px;
                    font-size: 16px;
                    border-radius: 5px;
                    color: var(--tertiary-color);
                }

                > button {
                    background-color: var(--primary-color);
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    color: #fff;
                    transition: opacity 300ms;
                    transition: color 300ms;

                        &:hover{
                            opacity: 0.8;
                            color: var(--secondary-color);
                        }
                }
        }

        @media (max-width: 1200px) {
            padding: 0 24px;
            width: 100%;

            > h1 {
            font-size: 36px;
            }
        }

        @media (max-width: 768px) {
            > h1 {
            font-size: 32px;
            padding-top: 32px;
            margin-bottom: 32px;
            }
        }

        @media (max-width: 576px) {
            > h1 {
            font-size: 48px;
            }
        }
`
export const ContentWrapper = styled.div`
    width: 100%;
    position: relative;
    
    margin: 0;
        &.bg-gray {
            background-color: #FAFAFC;
        }
`
export const TitleWrapper = styled.div`
    width: 90%;
    max-width: 510px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;
    margin-bottom: 32px;

        > h2 {
            font-size: 32px;
            line-height: 42px;
        }

        > p {
            color: var(--tertiary-color);
            line-height: 27px;
        }

        &.content-services {
            width: 420px;
            text-align: left;

                > h2 {
                    margin-bottom: 32px;
                }

                > div {
                    margin-top: 48px;
                }
        }

        &.join-content {
            width: 420px;
            text-align: left;
        }

        @media (max-width: 1200px) {
            &.content-services {
            width: 100%;
            text-align: left;
            gap: 8px;
            padding-right: 12px;

                > h2 {
                    font-size: 24px;
                    margin-bottom: 0;
                }

                > p {
                    margin-bottom: 0;
                }

                > div {
                    margin-top: 24px;
                }
            }

            &.join-content {
                width: 100%;
                padding-left: 24px;

                > #form-join {
                    padding: 0;
                }
            }
        }

        @media (max-width: 768px) {
            &.content-services {
                padding: 24px;
                justify-self: center;
            }

            &.join-content {
                padding: 48px 24px;
                justify-self: center;
            }
        }
`
export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;

    div.card {
        height: 100%;
        max-height: 250px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: #fff;
        border-radius: 7px;
        box-shadow: 2px 2px 10px -1px #1d164d3b;

            > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            > div {
                padding: 32px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 16px;

                > h3 {
                    font-size: 24px;
                    line-height: 34px;
                }
            }
    }

    @media (max-width: 1200px) {
        padding: 0 24px;

        div.card {

            > div {
                >h3 {
                font-size: 18px;
                }
                >div a{
                    font-size: 14px;
                    padding: 7px 12px;
                }
            }
            
        }
    }

    @media (max-width: 740px) {
        grid-template-columns: 1fr;
    }
`