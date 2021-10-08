import React, {useEffect} from "react";
import img1 from '../../assets/Cars/ac-cobra.jpg';
import img2 from '../../assets/Cars/austin-healey.jpg';
import img3 from '../../assets/Cars/bmw-e30.jpg';
import img4 from '../../assets/Cars/cadillac-deville.jpg';
import img5 from '../../assets/Cars/chevrolet-c10.jpg';
import img6 from '../../assets/Cars/ferrari-250gto.jpg';

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