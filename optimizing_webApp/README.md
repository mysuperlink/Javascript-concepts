1. Eliminate all unused resources which are getting download and measure their performance and usage
2. Data Compression
    Content specific optimization can be done
    Compressing your html and css and js
    Enabling gzip compression check if your server is enabled with this
3.Image Optimization
    Use CSS3 effects where possible instead of gifs
    Use webfonts instead of encoding text in images
    Use of vector graphic (these are image independent of resolution it uses line points to draw image)

    Optimizing Vector images
     Svg is an xml based image format. They can be compressed with gzip.

4. Font Optimization
    Some fonts require GZIP compression

5 HTTP Caching
    its a technique where server returns collection of HTTP headers describing its content-type, length,
    caching-directive. It ask the client to cache it up for some seconds with max age provided in cache-control header


OPtimize JS Code
    - Avoid set Interval or set Timeout use requestAnimationFrame of css3 // CancelAnimationFrame to cancel
    - Use webworkers for executing task on different thread


CSS Optimization
    define media

    When declaring your style sheet assets, pay close attention to the media type and queries; they greatly impact critical rendering path performance.

    Let's consider some hands-on examples:

    <link href="style.css"    rel="stylesheet">
    <link href="style.css"    rel="stylesheet" media="all">
    <link href="portrait.css" rel="stylesheet" media="orientation:portrait">
    <link href="print.css"    rel="stylesheet" media="print">
    
    The first declaration is render blocking and matches in all conditions.

    The second declaration is also render blocking: "all" is the default type so if you don’t specify any type, it’s implicitly set to "all". Hence, the first and second declarations are actually equivalent.

    The third declaration has a dynamic media query, which is evaluated when the page is loaded. Depending on the orientation of the device while the page is loading, portrait.css may or may not be render blocking.

    The last declaration is only applied when the page is being printed so it is not render blocking when the page is first loaded in the browser.


