import React from 'react'
import NavBar from '../Components/NavBar';
import './JavaScript.css';
import Footer from '../Components/Footer';

function JavaScript() {
  return (
    <div>
      <NavBar />
      <section className="course-section">
      <div className="javascript-topic">
        <img className="javascript-image" src="images/javascript-logo.png" alt="" />
        <h3>
          <strong className="javascript-strong">JavaScript</strong> Programming
        </h3>
      </div>
      <div>
        <p>
          <b>JavaScript</b> is a versatile and widely-used programming language
          that was initially developed to make web pages interactive. Over the
          years, it has evolved into a powerful tool for both front-end and
          back-end web development, as well as for building various types of
          applications beyond the web. This introduction will provide you with a
          detailed overview of JavaScript, covering its history, features, use
          cases, and basic syntax
        </p>
      </div>
      <div>
        <h3>History:</h3>
        <p>
          JavaScript was created by Brendan Eich while he was working at Netscape
          Communications Corporation in 1995. Initially named "LiveScript," it
          was later renamed JavaScript to capitalize on the growing popularity
          of Java. Despite the name similarity, JavaScript and Java are distinct
          languages with different purposes and syntax.
        </p>
      </div>
      <div>
        <h3>Features:</h3>
        <ul type="disc">
          <li>
            <b>High-level Language:</b> <br /> A high-level programming language
            is a type of programming language that is designed to be
            human-readable and understandable, abstracting away many of the
            low-level details of computer hardware and memory management.
            High-level languages provide a more intuitive and user-friendly way
            for programmers to write code, focusing on the logic of the program
            rather than the intricacies of the machine's architecture
            <br />
            JavaScript is a high-level programming language, which means it
            abstracts many of the complex details of computer hardware and
            memory management, making it more human-readable and easier to
            write.
          </li>
          <li>
            <b>Interpreted Language:</b>
            <br />
            An interpreted language is a type of programming language where the
            code is executed directly by an interpreter, as opposed to being
            compiled into machine code beforehand. Interpreted languages have a
            different execution model compared to compiled languages, which go
            through a separate compilation phase before execution.
            <br />
            JavaScript is an interpreted language, which means that it doesn't
            require a separate compilation step. Instead, web browsers interpret
            the code directly, allowing for quick iteration during development.
          </li>
          <li>
            <b>Dynamic Typing:</b>
            <br /> JavaScript uses dynamic typing, meaning you don't have to
            declare the data type of a variable explicitly. The type is
            determined at runtime, providing flexibility but also requiring
            careful attention to prevent type-related errors
          </li>
          <li>
            <b>Functions as First-Class Citizens:</b>
            <br /> In JavaScript, functions are treated as first-class citizens.
            This means you can assign them to variables, pass them as arguments
            to other functions, and return them from functions.
          </li>
          <li>
            <b>Prototype-based Object-Oriented Programming:</b>
            <br /> JavaScript is object-oriented, but its inheritance mechanism
            is prototype-based. Objects can serve as prototypes for other
            objects, allowing for object composition and inheritance.
          </li>
          <li>
            <b>Event-Driven and Asynchronous:</b>
            <br /> JavaScript is well-suited for event-driven programming,
            making it the foundation for interactive web applications. It
            supports asynchronous programming through mechanisms like
            callbacks, Promises, and async/await, enabling non-blocking code
            execution.
          </li>
        </ul>
      </div>
      <div>
        <h3>Other Major Features</h3>
        <ol type="1">
          <li>
            <b>Core Principles and Purpose:</b>
            <br />
            JavaScript was initially designed to make web pages interactive by
            allowing developers to manipulate the Document Object Model (DOM),
            which represents the structure and content of a web page. Over
            time, its capabilities have expanded, and it is now used not only
            for web development but also for server-side scripting (Node.js),
            desktop application development (Electron), game development (with
            libraries like Phaser and Three.js), and more.
          </li>
          <li>
            <b>Syntax:</b>
            <br />
            JavaScript's syntax is similar to other programming languages like
            C++ and Java, making it relatively easy for developers familiar
            with those languages to learn. The language is case-sensitive and
            uses semicolons to separate statements. It also supports both
            single-line and multi-line comments.
          </li>
          <li>
            <b>Variables and Data Types</b>
            <br />
            JavaScript uses the <b>'var'</b>, <b>'let'</b>, and <b>'const'</b>{" "}
            keywords to declare variables. It supports various data types
            including numbers, strings, booleans, arrays, objects, functions,
            and more. Unlike some statically typed languages, JavaScript is
            dynamically typed, meaning variable types can change during runtime.
          </li>
          <li>
            <b>Operators:</b>
            <br />
            JavaScript includes a variety of operators for performing arithmetic,
            comparison, logical, and assignment operations. For example, <b>'+'</b>
            , <b>'-'</b>, <b>'*'</b>, <b>'/'</b> are used for arithmetic, <b>'=='</b>
            , <b>'==='</b>, <b>'!='</b>, <b>'!=='</b> for comparison, and <b>'&&'</b>
            , <b>'||'</b>, <b>'!'</b> for logical operations.
          </li>
          <li>
            <b>Control Structures:</b>
            <br />
            JavaScript supports standard control structures such as <b>'if'</b>{" "}
            statements, <b>'else'</b> clauses, <b>'while'</b> and <b>'for'</b> loops,
            and <b>'switch'</b> statements. These allow developers to control the
            flow of their programs and execute code conditionally or iteratively.
          </li>
          <li>
            <b>Functions:</b>
            <br />
            Functions are a core concept in JavaScript, allowing developers to
            encapsulate code into reusable blocks. Functions can take parameters
            and return values. They can also be assigned to variables, passed as
            arguments to other functions, and even nested within each other.
          </li>
          <li>
            <b>Objects and Classes:</b>
            <br />
            JavaScript is an object-oriented language. It uses objects to
            represent data and behavior. Objects can be created using object
            literals or constructor functions. The introduction of ES6
            (ECMAScript 2015) brought class syntax to JavaScript, making it more
            familiar to developers with experience in class-based languages
          </li>
          <li>
            <b>Asynchronous Programming:</b>
            JavaScript's asynchronous programming capabilities are crucial for
            handling tasks that take time, such as network requests or file
            operations. Callbacks were historically used for asynchronous
            operations, but modern approaches like Promises and the{" "}
            <b>'async/await'</b> syntax provide cleaner and more manageable code.
          </li>
          <li>
            <b>DOM Manipulation:</b>
            <br />
            One of JavaScript's main roles is manipulating the DOM, allowing
            developers to change the content, structure, and style of web pages
            dynamically. This enables the creation of interactive and engaging
            user interfaces.
          </li>
          <li>
            <b>Libraries and Frameworks:</b>
            <br />
            JavaScript has a rich ecosystem of libraries and frameworks that
            simplify and enhance development. Popular front-end libraries
            include React, Vue.js, and Angular, while Node.js is a popular
            runtime for server-side JavaScript.
          </li>
        </ol>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className="jsphoto" src="photos/jscheatsheet1.jpg" alt="javascript-cheatsheet" />
        <img className="jsphoto" src="photos/jscheatsheet2.jpg" alt="javascript-cheatsheet" />
      </div>
      <div>
        <h3>Use Cases</h3>
        <ul type="disc">
          <li>
            <b>Front-End Web Development:</b>
            <br /> JavaScript is primarily known for its role in enhancing the
            interactivity and user experience of websites. It's used to create
            dynamic elements, handle user input, and manipulate the Document
            Object Model (DOM) to update content without requiring full page
            reloads.
          </li>
          <li>
            <b>Back-End Web Development:</b>
            <br /> With the introduction of technologies like Node.js, JavaScript
            can now be used on the server-side as well. This enables developers
            to build complete web applications using a unified language for both
            front-end and back-end development.
          </li>
          <li>
            <b>Mobile App Development:</b>
            <br /> Frameworks like React Native and Ionic allow developers to
            create mobile applications using JavaScript, sharing a significant
            portion of code between different platforms.
          </li>
          <li>
            <b>Desktop App Development:</b>
            <br />
            Tools like Electron enable the development of cross-platform desktop
            applications using JavaScript, HTML, and CSS.
          </li>
          <li>
            <b>Game Development:</b>
            <br /> Libraries like Phaser and Three.js enable game development
            using JavaScript, providing tools for rendering graphics and handling
            user interactions.
          </li>
        </ul>
      </div>
      <div>
        <h3>Basic Syntax:</h3>
        <p>Here's a simple example of JavaScript syntax:</p>
        <div className="cpp-code-wrapper">
          <p>
            <strong className="cpp-code-comment">// Variable declaration</strong>
            <br />
            <strong className="strong-blue">let</strong> greeting ={" "}
            <strong className="strong-green">"Hello, "</strong>; <br />
            <strong className="strong-blue">const</strong> name ={" "}
            <strong className="strong-green">"John"</strong>;
          </p>
          <p>
            <strong className="cpp-code-comment">// Function definition</strong>
            <br />
            <strong className="strong-blue">function</strong>
            <strong className="strong-red"> greet</strong>(person) {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<strong className="strong-blue">return </strong>
            greeting + person;
            <br />
            {"}"}
          </p>
          <p>
            <strong className="cpp-code-comment">// Function call</strong>
            <br />
            <strong className="strong-blue">let</strong> message ={" "}
            <strong className="strong-red">greet</strong>(name);
          </p>
          <p>
            <strong className="strong-pink">console</strong>.
            <strong className="strong-red">log</strong>(message);{" "}
            <strong className="cpp-code-comment">// Output: Hello, John</strong>
          </p>
        </div>
        <p>
          This example demonstrates variable declaration, function definition,
          and function invocation in JavaScript.
        </p>
      </div>
      <div>
        <p>
          In conclusion, JavaScript is a versatile and dynamic programming
          language that has revolutionized web development and extended its
          reach into various application domains. Its ability to create
          interactive user interfaces, support asynchronous programming, and
          operate both on the front end and back end makes it an essential tool
          for modern software development.
        </p>
      </div>
      <div></div>
      <div style={{ color: "gray", textAlign: "center", paddingTop: 50 }}>
        <p>Resourceful Websites To Get Everything You Need To Know About JavaScript</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button style={{ backgroundColor: "black" }} className="websites-link-button">
            <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
              <img style={{ height: 50 }} src="images/js-logo.png" alt="" />
            </a>
          </button>
          <button style={{ backgroundColor: "rgb(40, 42, 53)" }} className="websites-link-button">
            <a href="https://www.w3schools.com/js/" target="_blank" rel="noreferrer">
              <b
                style={{
                  fontSize: 36,
                  color: "rgb(4,170,109)",
                  fontFamily: "'Lobster Two', cursive",
                }}
              >
                W3
              </b>
              <b style={{ fontSize: 24, color: "rgb(4,170,109)" }}> Schools JavaScript</b>
            </a>
          </button>
          <button className="websites-link-button">
            <a href="https://www.tutorialspoint.com/javascript/index.htm" target="_blank" rel="noreferrer">
              <img style={{ height: 50 }} src="images/tutorialspoint-logo.png" alt="" />
            </a>
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button style={{ backgroundColor: "rgb(32, 33, 36)" }} className="websites-link-button">
            <a href="https://javascript.info/" target="_blank" rel="noreferrer">
              <b style={{ color: "white", fontSize: 24 }}>JAVASCRIPT.INFO</b>
            </a>
          </button>
          <button style={{ backgroundColor: "rgb(32, 33, 36)" }} className="websites-link-button">
            <a href="https://teamtreehouse.com/library/topic:javascript" target="_blank" rel="noreferrer">
              <b style={{ color: "lightgreen", fontSize: 30 }}>TreeHouse</b>
            </a>
          </button>
        </div>
      </div>
      <div style={{ color: "gray", textAlign: "center", paddingTop: 50 }}>
        <p>The Best YouTube Tutorials to get you Started on JavaScript</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BI1o2H9z9fo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lI1ae4REbFM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3PHXvlpOkf4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jS4aFq5-91M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SBmSRK3feww"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8dWL3wF_OMw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      </section>
      <Footer />
    </div>
  )
}

export default JavaScript;