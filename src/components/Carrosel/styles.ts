import styled from 'styled-components';

export const Post = styled.div`
    max-width: 300px;
    margin: 8px 12px;
    min-height: 420px;
    border-radius: 7px;
    box-shadow: 2px 2px 10px -1px #1d164d3b;

        > img {
            width: 100%;
            margin-bottom: 12px;

        }

        >div.content-post{
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 12px;
            padding: 18px;

            > h4{
                font-size: 24px;
                margin-bottom: 12px;
            }

            >.author {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 0;
                 margin-top: auto;

                    >p {
                        font-size: 16px;
                        color: var(--tertiary-color)
                    }
            }

        }

        @media (max-width: 576px){
            min-height: 350px;

            >div.content-post{
            gap: 8px;
            padding: 18px 8px;

                > h4{
                    font-size: 18px;
                    margin-bottom: 8px;
                }
            }
        }
`