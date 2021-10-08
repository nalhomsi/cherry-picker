import React, {useEffect} from "react";

function ShowVroom() {
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
            </div>
        </section>
    ) 
}

export default ShowVroom;