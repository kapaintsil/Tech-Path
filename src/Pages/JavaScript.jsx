import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './CoursePage.css'; // Changed import

function JavaScript() {
  return (
    <div className="course-page">
      <NavBar />
      <header className="course-header">
        <img className="course-logo" src="/images/javascript-logo.png" alt="JavaScript Logo" />
        <h1 className="course-title">
          <span className="highlight">JavaScript</span> Programming
        </h1>
      </header>

      <main className="course-content">
        <p>
          <b>JavaScript</b> is a versatile and widely-used programming language
          that was initially developed to make web pages interactive. Over the
          years, it has evolved into a powerful tool for both front-end and
          back-end web development, as well as for building various types of
          applications beyond the web.
        </p>

        <h3>History</h3>
        <p>
          JavaScript was created by Brendan Eich at Netscape in 1995. Initially named "LiveScript," it
          was later renamed JavaScript to capitalize on the growing popularity
          of Java. Despite the name similarity, JavaScript and Java are distinct
          languages with different purposes and syntax.
        </p>

        <h3>Key Features of JavaScript</h3>
        <ul>
          <li><b>High-level Language:</b> Abstracts away many low-level details, making it more human-readable.</li>
          <li><b>Interpreted Language:</b> Executed directly by an interpreter (like a web browser) without a separate compilation step.</li>
          <li><b>Dynamic Typing:</b> The data type of a variable is determined at runtime, providing flexibility.</li>
          <li><b>Functions as First-Class Citizens:</b> Functions can be assigned to variables, passed as arguments, and returned from other functions.</li>
          <li><b>Prototype-based Object-Oriented Programming:</b> Objects inherit from other objects, allowing for flexible object composition.</li>
          <li><b>Event-Driven and Asynchronous:</b> Well-suited for interactive web applications, with support for asynchronous operations through callbacks, Promises, and async/await.</li>
        </ul>

        <h3>Core Concepts</h3>
        <ul>
            <li><b>Syntax:</b> Similar to C++ and Java, making it relatively easy to learn for developers with a background in those languages.</li>
            <li><b>Variables and Data Types:</b> Uses `var`, `let`, and `const` for variable declaration. Supports numbers, strings, booleans, arrays, objects, and more.</li>
            <li><b>Operators:</b> Includes arithmetic, comparison, logical, and assignment operators.</li>
            <li><b>Control Structures:</b> Supports `if/else` statements, `while` and `for` loops, and `switch` statements.</li>
            <li><b>DOM Manipulation:</b> A primary role of JavaScript is to dynamically change the content, structure, and style of web pages.</li>
            <li><b>Libraries and Frameworks:</b> A rich ecosystem including React, Vue.js, and Angular for the front-end, and Node.js for the back-end.</li>
        </ul>

        <div className="resource-grid">
            <img src="/photos/jscheatsheet1.jpg" alt="JavaScript Cheat Sheet 1" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/jscheatsheet2.jpg" alt="JavaScript Cheat Sheet 2" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
        </div>

        <h3>Common Use Cases</h3>
        <ul>
            <li><b>Front-End Web Development:</b> Creating dynamic and interactive user experiences on websites.</li>
            <li><b>Back-End Web Development:</b> Building server-side applications with Node.js.</li>
            <li><b>Mobile App Development:</b> Creating mobile apps with frameworks like React Native and Ionic.</li>
            <li><b>Desktop App Development:</b> Building cross-platform desktop applications with tools like Electron.</li>
            <li><b>Game Development:</b> Creating games with libraries like Phaser and Three.js.</li>
        </ul>

        <h3>Basic Syntax Example</h3>
        <div className="code-block">
          <pre>
            <code>
{`// Variable declaration
let greeting = "Hello, ";
const name = "John";

// Function definition
function greet(person) {
  return greeting + person;
}

// Function call
let message = greet(name);
console.log(message); // Output: Hello, John`}
            </code>
          </pre>
        </div>
      </main>

      <section className="resource-section">
        <h3>Helpful Websites</h3>
        <p>Curated links to external resources for further learning.</p>
        <div className="resource-grid">
          <a href="https://www.javascript.com/" target="_blank" rel="noreferrer" className="resource-card">
            <img src="/images/js-logo.png" alt="JavaScript.com Logo" />
            <div className="resource-card-title">JavaScript.com</div>
          </a>
          <a href="https://www.w3schools.com/js/" target="_blank" rel="noreferrer" className="resource-card">
            <div className="resource-card-title">W3Schools JS</div>
          </a>
          <a href="https://www.tutorialspoint.com/javascript/index.htm" target="_blank" rel="noreferrer" className="resource-card">
            <img src="/images/tutorialspoint-logo.png" alt="TutorialsPoint Logo" />
             <div className="resource-card-title">TutorialsPoint</div>
          </a>
          <a href="https://javascript.info/" target="_blank" rel="noreferrer" className="resource-card">
            <div className="resource-card-title">JavaScript.info</div>
          </a>
           <a href="https://teamtreehouse.com/library/topic:javascript" target="_blank" rel="noreferrer" className="resource-card">
            <div className="resource-card-title">Team Treehouse</div>
          </a>
        </div>
      </section>

      <section className="youtube-section">
        <h3>YouTube Tutorials</h3>
        <p>Hand-picked video tutorials to get you started.</p>
        <div className="youtube-grid">
          <iframe className="youtube-video" src="https://www.youtube.com/embed/BI1o2H9z9fo" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/lI1ae4REbFM" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/3PHXvlpOkf4" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/jS4aFq5-91M" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/SBmSRK3feww" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/8dWL3wF_OMw" title="YouTube video player" allowFullScreen></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default JavaScript;