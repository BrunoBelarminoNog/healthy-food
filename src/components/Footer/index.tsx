import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    height: 100px;
    width: 90%;
    max-width: 1092px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--tertiary-color);

        > .terms-privacy {
            display: flex;
            gap: 32px;
        }
        
        @media (max-width: 768px) {
            font-size: 12px;

            > .terms-privacy {
                gap: 8px;
            }
        }
        
`


export default function Footer() {
    return (
        <StyledFooter>
            <div className="copy">
                &copy; Copyrights 2019 Stack. All Rights Reserved.
            </div>

            <div className="terms-privacy">
                <span>
                    Privacy Policy
                </span>
                <span>
                    Terms ands Conditions
                </span>
            </div>
        </StyledFooter>
    )
}