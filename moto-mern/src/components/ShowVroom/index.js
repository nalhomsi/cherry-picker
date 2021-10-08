import React, {useEffect} from "react";
// Gallery Files
import img1 from '../../assets/Cars/ac-cobra.jpg';
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
import img12 from '../../assets/Cars/lancia-fulvia.jpg';
import img13 from '../../assets/Cars/land-rover-def.jpg';
import img14 from '../../assets/Cars/mercedes-230sl.jpg';
import img15 from '../../assets/Cars/mercedes-300cd.jpg';
import img16 from '../../assets/Cars/mercedes-300sl.jpg';
import img17 from '../../assets/Cars/mercedes-500sl.jpg';
import img18 from '../../assets/Cars/mini-cooper.jpg';
import img19 from '../../assets/Cars/pontiac-gto.jpg';
import img20 from '../../assets/Cars/porsche-911-back.jpg';

function ShowVroom() {
    // Gallery Data
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
        {
            id: 18,
            imgSrc: img18,
        },
        {
            id: 19,
            imgSrc: img19,
        },
        {
            id: 20,
            imgSrc: img20,
        },
    ]


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
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    ) 
}

export default ShowVroom;