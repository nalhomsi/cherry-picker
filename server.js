const express = require('express');
//const { ApolloServer } = require('apollo-server-express');
//const { typeDefs, resolvers } = require('./schemas');
//const db = require('./config/connection');
const axios = require('axios');
const cheerio = require('cheerio');
const PORT = process.env.PORT || 3001;
const app = express();

//const server = new ApolloServer({
//  typeDefs,
//   resolvers,
// });

//server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/getcars",(req, res) => {
    axios.get("https://old.reddit.com/r/webdev/").then(function(response){
     var $=cheerio.load(response.data)
     var results = [];
     // With cheerio, find each p-tag with the "title" class
     // (i: iterator. element: the current element)
     $("p.title").each(function(i, element) {
       // Save the text of the element in a "title" variable
       var title = $(element).text();
       // In the currently selected element, look at its child elements (i.e., its a-tags),
       // then save the values for any "href" attributes that the child elements may have
       var link = $(element).children().attr("href");
       // Save these results in an object that we'll push into the results array we defined earlier
       results.push({
         title: title,
         link: link
       });
     });
     // Log the results once you've looped through each of the elements found with cheerio
     console.log(results);
     res.json(results);
})})
//db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
//});