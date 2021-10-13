import React, {useEffect} from "react";
// Gallery Files

import img1 from '../../assets/Cars/cobra.jpg';
import img2 from '../../assets/Cars/austin-healey.jpg';
import img3 from '../../assets/Cars/bmw-e30.jpg';
import img4 from '../../assets/Cars/cadillac-deville.jpg';
import img5 from '../../assets/Cars/chevrolet-c10.jpg';
import img6 from '../../assets/Cars/ferrari-250gto.jpg';
import img7 from '../../assets/Cars/ford-bronco1.jpg';
import img8 from '../../assets/Cars/ford-f100-red.jpg';
import img9 from '../../assets/Cars/ford-f100.jpg';
import img10 from '../../assets/Cars/ford-mustang.jpg';
import img11 from '../../assets/Cars/jaguar-etype.jpg';
import img12 from '../../assets/Cars/Lancia-Fulvia.jpg';
import img13 from '../../assets/Cars/land-rover-def.jpg';
import img14 from '../../assets/Cars/mercedes-230sl.jpg';
import img15 from '../../assets/Cars/mercedes-300cd.jpg';
import img16 from '../../assets/Cars/mercedes-300sl.jpg';
import img17 from '../../assets/Cars/mercedes-500sl.jpg';
import img18 from '../../assets/Cars/mini-cooper.jpg';
import img19 from '../../assets/Cars/pontiac-gto.jpg';
import img20 from '../../assets/Cars/porsche-911-back.jpg';
import img21 from '../../assets/Cars/porsche-911.jpg';
import img22 from '../../assets/Cars/shelby-cobra.jpg';
import img23 from '../../assets/Cars/triumph-tr6.jpg';
import img24 from '../../assets/Cars/vw-beetle-or.jpg';
import img25 from '../../assets/Cars/vw-beetle-red.jpg';
import img26 from '../../assets/Cars/toyota-fj40.jpg';
import plus from '../../assets/Cars/plus-icon.png';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function ShowVroom() {
    // Gallery Data
    let data = [
        {
            id: 1,
            imgSrc: img1,
            link: "https://classics.autotrader.com/classic-cars/1965/shelby/cobra/101558262"
        },
        {
            id: 2,
            imgSrc: img2,
            link: "https//www.hemmings.com/auction/1964-austin-healey-3000-mk-iii?utm_medium=Promoted%20Listing&utm_source=Classifieds&utm_campaign=1964-austin-healey-3000-mk-iii3"
        },
        {
            id: 3,
            imgSrc: img3,
            link: "https://bringatrailer.com/listing/1989-bmw-325i-121"
        },
        {
            id: 4,
            imgSrc: img4,
            linK: "https://www.hemmings.com/classifieds/dealer/cadillac/deville/2526289.html"
        },
        {
            id: 5,
            imgSrc: img5,
            link: "https://www.hemmings.com/auction/1984-chevrolet-silverado?utm_medium=Promoted%20Listing&utm_source=Classifieds&utm_campaign=1984-chevrolet-silverado"
        },
        {
            id: 6,
            imgSrc: img6,
            link: "https://www.hemmings.com/classifieds/dealer/ferrari/250gto/2405041.html"
    
        },
        {
            id: 7,
            imgSrc: img7,
            link: "https://www.hemmings.com/auction/1970-ford-bronco?utm_medium=Promoted%20Listing&utm_source=Classifieds&utm_campaign=1970-ford-bronco"
        },
        {
            id: 8,
            imgSrc: img8,
            link:"https://www.hemmings.com/classifieds/cars-for-sale/ford/unspecified/2482203.html"
        },
        {
            id: 9,
            imgSrc: img9,
            link:"https://www.hemmings.com/auction/1972-ford-f100-2?utm_medium=Promoted%20Listing&utm_source=Classifieds&utm_campaign=1972-ford-f100-2"
        },
        {
            id: 10,
            imgSrc: img11,
            link:"https://www.hemmings.com/auction/1966-shelby-gt350h?utm_medium=Promoted%20Listing&utm_source=Classifieds&utm_campaign=1966-shelby-gt350h"
        },
        {
            id: 11,
            imgSrc: img11,
            link:"https://www.hemmings.com/classifieds/dealer/jaguar/e-type/2507147.html"
        },
        {
            id: 12,
            imgSrc: img12,
            link:"https//www.hemmings.com/classifieds/dealer/lancia/fulvia/2502051.html"
        },
        {
            id: 13,
            imgSrc: img13,
            link:"https://www.hemmings.com/classifieds/cars-for-sale/land-rover/88-series/2506169.html"
        },
        {
            id: 14,
            imgSrc: img14,
            linkhttps:"//www.hemmings.com/classifieds/dealer/mercedes-benz/230sl/2472435.html"
        },
        {
            id: 15,
            imgSrc: img15,
            link:"https://oooldtimercars.com/1980-Mercedes-Benz-300CD/27764"
        },
        {
            id: 16,
            imgSrc: img16,
            link:"https://www.hemmings.com/classifieds/dealer/mercedes-benz/300sl/2513677.html"
        },
        {
            id: 17,
            imgSrc: img17,
            link:"https://www.hemmings.com/classifieds/dealer/mercedes-benz/500sl/2391974.html"
        },
        {
            id: 18,
            imgSrc: img18,
            link:"https://www.hemmings.com/classifieds/dealer/austin/mini/2452427.html"
        },
       
        {
            id: 19,
            imgSrc: img19,
            link: "https://www.gatewayclassiccars.com/fluid-carlist4?src=5&bar=1&location=&make=Pontiac&model=GTO&category=&keyword1=&cs_action=group&keyword2=&keyword3=&keyword4=&keyword5=&keyword6="
        },
        {
            id: 20,
            imgSrc: img20,
            link: "https://www.gatewayclassiccars.com/LVS/585/2007-Porsche-911-Carrera-4S-Cabriolet"
        },
        {
            id: 21,
            imgSrc: img21,
            link: "https://www.gatewayclassiccars.com/ORD/2009/1974-Porsche-911"
        },
        {
            id: 22,
            imgSrc: img22,
            link: "https://www.hemmings.com/classifieds/dealer/shelby/cobra/2527682.html"
        },
        {
            id: 23,
            imgSrc: img24,
            link: "https://www.gatewayclassiccars.com/DEN/1031/1970-Triumph-TR6"
        },
        {
            id: 24,
            imgSrc: img24,
            link: "https://www.gatewayclassiccars.com/ORD/1536/1972-Volkswagen-Beetle"
        },
        {
            id: 25,
            imgSrc: img25,
            link: "https://www.gatewayclassiccars.com/LVS/527/1973-Volkswagen-Beetle"
        },
        {
            id: 26,
            imgSrc: img26,
            link: "https://www.gatewayclassiccars.com/DFW/1805/1968-Toyota-FJ40"
        },
    ];

    const toastifySuccess = () => {
        toast('Car Added To Garage!', {
          position: 'fixed',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
        console.log("Added to Garage!")
      };


// useEffect   (()=>{
//     console.log ("Hey")
    
//  axios.get("https://old.reddit.com/r/webdev/").then(function(response){
//      var $=cheerio.load(response.data)
//      var results = [];

//      // With cheerio, find each p-tag with the "title" class
//      // (i: iterator. element: the current element)
//      $("p.title").each(function(i, element) {
   
//        // Save the text of the element in a "title" variable
//        var title = $(element).text();
   
//        // In the currently selected element, look at its child elements (i.e., its a-tags),
//        // then save the values for any "href" attributes that the child elements may have
//        var link = $(element).children().attr("href");
   
//        // Save these results in an object that we'll push into the results array we defined earlier
//        results.push({
//          title: title,
//          link: link
//        });
//      });
   
//      // Log the results once you've looped through each of the elements found with cheerio
//      console.log(results);
//  })
// },[])

    return(
        <section>
            <div>
                <header className="comp-header">
                    <h1>ShowVroom</h1>
                </header>
                <div className="gallery">
                    {data.map((item, index) => {
                        return(
                            <div className="pics" key={index}>
                                <a className="addTo" href = {item.link}>
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                                <img src={plus} className="plus" style={{ width: '10%' }}/>
                                See Car For Sale
                                </a>
                                <ToastContainer />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    ) 
}


export default ShowVroom;