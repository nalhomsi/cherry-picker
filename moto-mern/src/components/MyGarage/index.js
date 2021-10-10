import React from "react";

function MyGarage() {

    return (
        <section>
            <div>
            <header className="comp-header">
                <h1>MyGarage</h1>
            </header>
            <div className="gallery">

            </div>
            </div>
        </section>
    )
}

var urls = [
    'http://example.com/file1',
    'http://example.com/file2',
    'http://example.com/file3'
  ]
  
  var interval = setInterval(download, 300, urls);
  
  function download(urls) {
    var url = urls.pop();
  
    var a = document.createElement("a");
    a.setAttribute('href', url);
    a.setAttribute('download', '');
    a.setAttribute('target', '_blank');
    a.click();
  
    if (urls.length == 0) {
      clearInterval(interval);
    }
  }
export default MyGarage;