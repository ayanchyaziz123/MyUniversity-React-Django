import React from 'react';
import { Component } from 'react';
import PP from './pp.jpg';
import Slider from '../../header/Slider';



class Home extends Component{
    render(){
        return(
            <>
            <Slider/>
            
            <div className="container mt-4">

            <img src={PP} className="img-fluid" alt="Responsive image"></img>
            <h1>this is home Welcome Message
Leading University is the first private university in Sylhet. Its a reality of my deepest dream from decades. Establishment of Leading University is the greatest work of many other deeds in my life that I could do from the mercy of Allah. To deliver the light of modern higher education in every pace of life, I establish the Leading University in 2001 by means of nominal fee structure. Today Leading University earned the name and fame not only in Sylhet but also in nationwide with the greatest support and love from the people of the country.

Leading University is a non-profit educational institution. So far I am concerned all of the institutions including Leading University are doing very well and carry out their academic activities to the highest degree of perfection and with good reputation in Bangladesh. By the leniency of Allah I also have dream to establish Science & Technology University, more Medical Colleges as well as some schools and colleges in remote area of the country.

I hope these institutions would go further to the international level in the days to come.

Danobir Dr. Syed Ragib Ali</h1>
</div>
            </>

        );
    }
}

export default Home;