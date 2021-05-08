import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';

import {Post} from './styles'

import blogImg1 from '../../assets/blog_image_1.svg';
import blogImg2 from '../../assets/bloco_image_2.svg';
import blogImg3 from '../../assets/bloco_image_3.svg';
import blogImg4 from '../../assets/bloco_image_4.svg';
import mike from '../../assets/mike.svg';
import brian from '../../assets/brian.svg';
import kevin from '../../assets/kevin.svg';



export default function Carrosel() {

    return (
            <>
                <Post className="item" data-value="1">
                    <img src={blogImg1} alt="" />
                    <div className="content-post">
                        <h4 className="custom-title">Quick-start guide to nuts and seeds</h4>
                        <div className="author">
                            <img src={kevin} alt="" />
                            <p>Kevin Ibrahim</p>
                        </div>
                    </div>
                </Post>
                <Post className="item" data-value="2">
                    <img src={blogImg2} alt="" />
                    <div className="content-post">
                        <h4 className="custom-title">Nutrition: Tips for Improving Your Health</h4>
                        <div className="author">
                            <img src={mike} alt="" />
                            <p>Mike Jackson</p>
                        </div>
                    </div>
                </Post>
            <Post className="item" data-value="3" >
                    <img src={blogImg3} alt="" />
                    <div className="content-post">
                        <h4 className="custom-title">The top 10 benefits of eating healthy</h4>
                        <div className="author">
                            <img src={brian} alt="" />
                            <p>Bryan McGregor</p>
                        </div>
                    </div>
                </Post>
                <Post className="item" data-value="4" >
                    <img src={blogImg4} alt="" />
                    <div className="content-post">
                        <h4 className="custom-title">What Makes a Healthy Diet?</h4>
                        <div className="author">
                            <img src={kevin} alt="" />
                            <p>Kevin Ibrahim</p>
                        </div>
                    </div>
                </Post>
            </>
    );
}