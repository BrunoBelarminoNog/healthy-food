import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom';


import { Container, Headline, ContentWrapper, TitleWrapper, Cards } from './styles'

import Carrosel from '../../components/Carrosel';


import illustration from '../../assets/Illustration.svg'
import comida1 from '../../assets/comida_1.svg';
import comida2 from '../../assets/comida_2.svg';
import comida3 from '../../assets/comida_3.svg';
import comida4 from '../../assets/comida_4.svg';
import servicesImg from '../../assets/bloco_services.svg';
import joinImg from '../../assets/bloco_final_image.svg'


function Landing() {
    return (
        <main>
            <ContentWrapper>
                <Container id="initial">
                    <Headline>
                        <h1 className="custom-title">
                            Ready for Trying a new recipe?
                        </h1>
                        <form action="/" method="get" id="search">
                            <input type="text" name="" id="" placeholder="Search healthy recipes" />
                            <button type="submit">
                                <BsSearch size={16} />
                            </button>
                        </form>
                    </Headline>
                    <img src={illustration} alt="Ilustração página inicial" className="d-none d-md-block"/>
                </Container>
            </ContentWrapper>

            <ContentWrapper className="bg-gray">
                <Container id="recipes">
                    <TitleWrapper>
                        <h2 className="custom-title">Our Best Recipes</h2>
                        <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </TitleWrapper>
                    <Cards>
                        <div className="card">
                            <img src={comida1} alt="" />
                            <div>
                                <h3 className="custom-title">Broccoli Salad with Bacon</h3>
                                <div>
                                    <Link to="#" className="links" >
                                        See Recipe
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={comida2} alt="" />
                            <div>
                                <h3 className="custom-title">Classic Beef Burgers</h3>
                                <div>
                                    <Link to="#" className="links" >
                                        See Recipe
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={comida3} alt="" />
                            <div>
                                <h3 className="custom-title">Classic Potato Salad</h3>
                                <div>
                                    <Link to="#" className="links" >
                                        See Recipe
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={comida4} alt="" />
                            <div>
                                <h3 className="custom-title">Cherry Cobbler on the Grill</h3>
                                <div>
                                    <Link to="#" className="links" >
                                        See Recipe
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Cards>
                </Container>
            </ContentWrapper>

            <ContentWrapper>
                <Container id="services">
                    <img src={servicesImg} alt="Mulher cozinhando" className="img-left d-none d-md-block"/>
                    <div className="d-none d-xl-block"></div>
                    <TitleWrapper className="content-services">
                        <h2 className="custom-title">The best services ready To serve you</h2>
                        <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

                        <div>
                            <Link to="#" className="links" >
                                Know More
                            </Link>
                        </div>
                    </TitleWrapper>
                </Container>
            </ContentWrapper>
            
            <ContentWrapper className="bg-gray">
                <Container id="blog">
                    <TitleWrapper>
                        <h2 className="custom-title">Read Our Blog</h2>
                        <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </TitleWrapper>
                    
                    <div className="carrousel responsive">
                        <Carrosel />
                    </div>
                </Container>
            </ContentWrapper>

            <ContentWrapper>
                <Container id="join">
                    <TitleWrapper className="join-content">
                        <h2 className="custom-title">
                            Join our membership to get special offer
                        </h2>
                        <Headline id="form-join">
                        <form action="/" method="get" id="search">
                            <input type="text" name="" id="" placeholder="Enter your email address" />
                            <button type="submit">
                                Join
                            </button>
                        </form>
                        </Headline>
                    </TitleWrapper>
                    <img src={joinImg} alt="Ilustração página inicial" className="d-none d-md-block" />
                </Container>
            </ContentWrapper>
        </main>
    )
}

export default Landing;