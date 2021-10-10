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

var filesForDownload = [];
filesForDownload( { path: "'../../assets/Cars/ford-mustang.jpg'", name: "ford-mustang.jpg" } );
filesForDownload( { path: "/path/file2.jpg", name: "file2.jpg" } );
filesForDownload( { path: "/path/file3.png", name: "file3.png" } );
filesForDownload( { path: "/path/file4.txt", name: "file4.txt" } );

$jq('input.downloadAll').click( function( e )
{
    e.preventDefault();

    var temporaryDownloadLink = document.createElement("a");
    temporaryDownloadLink.style.display = 'none';

    document.body.appendChild( temporaryDownloadLink );

    for( var n = 0; n < filesForDownload.length; n++ )
    {
        var download = filesForDownload[n];
        temporaryDownloadLink.setAttribute( 'href', download.path );
        temporaryDownloadLink.setAttribute( 'download', download.name );

        temporaryDownloadLink.click();
    }

    document.body.removeChild( temporaryDownloadLink );
} );
export default MyGarage;