import styled from 'styled-components';

export const RegisterContainer = styled.main`
    height: 100%;
    width: 100vw;

        > form {
            width: 90%;
            max-width: 700px;
            margin: 64px auto;
            background: #FAFAFC;
            border: 1px solid #D3E2E5;
            border-radius: 20px;
            padding: 64px 80px;
            margin: 120px auto;

            .input-block {
                margin: 12px 0;
            }

            legend {
                color: var(--secondary-color);
                text-transform: uppercase;
                font-weight: bold;
                font-family: 'Montserrat', sans-serif !important;
            }

            label {
                font-size: 18px;
                margin-right: 12px;
            }

            input {
                width: 100%;
                padding: 8px;
                font-size: 16px;
                border-radius: 5px;
                color: var(--tertiary-color);
                border: 1px solid var(--tertiary-color);
            }

            button {
                border: none;
                font-weight: bold;
                margin-top: 12px;
            }
        }
    
`