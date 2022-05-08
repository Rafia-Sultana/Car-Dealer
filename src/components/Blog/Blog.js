import React from 'react';

const Blog = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 p-4 ">
            <div className="shadow  rounded">
                <h5 className="card-header">Difference between javascript and nodejs</h5>
                <p>Answer : JavaScript is a interpreted scripting programming language which used for client-side scripting and run in any browser that supports the JavaScript Engine like Firefox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). It's built into both Java and HTML.
                    Node.js is a server-side scripting language based on the Google Chrome V8 engine.It is well-versed in creating a clear binding with the file system, allowing the developer to read and write to disk </p>
            </div>
            <div className="shadow rounded">
                <h5 className="card-header">When should you use nodejs and when should you use mongodb?</h5>
                <p>Answer: NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.MongoDB is NoSQL database which  stores data and also document oriented. It represents data as of JSON documents.Simply,we can say  MongoDB is a database where we can store data and NodeJS helps us to  connect our client site to database by it's server site.</p>
            </div>
            <div className="shadow rounded">
                <h5 className="card-header">Differences between sql and nosql databases</h5>
                <p className="card-body">Answer: 	SQL databases are known as table-based database because of displaying data in form of tables whereas NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.In SQL,Databases are categorized as Relational Database Management System .On the other hand,NoSQL databases are categorized as Non-relational database system.NoSQL databases have dynamic schema.</p>
            </div>

        </div>
    );
};

export default Blog;