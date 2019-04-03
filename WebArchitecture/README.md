SQL VS NOSQL
https://www.youtube.com/watch?v=ZS_kXvOeQ5Y
Sql is a structured query language which works on relational databses where you have one or more table and tables have their schemas
like id | username | email
data is distribute across multiple tables
need to write n number of queries to get the data
horizontal scaling is queit impossible and vertical can be done
[hrizontal scaling means adding more servers to handle data | Vertical scaling means add more power to your CPU (but it has limits) may be extra RAM or Hard drive	] 

No sql is relationless database where you have colletions and no mandatory schema you store as JSON/ a document
Its tough to update a nosql database.
Good performance when you want to return some data
horizontal scaling can be done


HTTP
its an IP/TCP based application protocol helps to communicate data b/w two computers
Its stateless and connectionless every time you connect to server connection is made and data is transffered
Any kind of data is send
HTTP message contain start line , header and body
   - Star line is www.abc.com/products.html
   - Headers are params like accept type / tokens etc
   - Body is the data 



 REST - Representation state transfer 
 Its the concept how http proctocl or software should talk
 like POST / GET / DELETE/ PUT /

What Happens when you www.google.com
 URL -  Protocol / domain / Path 
        https  www.abc.com  ab. [abc.com/ab.html]

        - create a connection
        - converts domain into some IP
        - looks up for DNS - domaain name server
        - Connect to TCP or server 10.1.1.1 (whatever ip is)



