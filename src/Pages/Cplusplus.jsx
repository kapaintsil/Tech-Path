import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './Cplusplus.css';

function Cplusplus() {
  return (
    <div>
      <NavBar />
      <section className="course-section">
      <div className="cplusplus-topic">
        <img className="cplusplus-image" src="images/C++-Logo.png" alt="C++ Logo" />
        <h3>
          Programming With <strong className="cplusplus-strong"> C ++ </strong>
        </h3>
      </div>
      <div>
        <p>
          <b>What is C++</b> <br />
          C++ is a general-purpose programming language created as an extension of the C
          programming language. It was developed by Bjarne Stroustrup in the early 1980s.
          C++ is known for its efficiency, flexibility, and power, making it suitable for a
          wide range of applications, from low-level systems programming to high-level
          application development. <br />
          It is a powerful and versatile programming language that was developed from the
          original C programming language. It was created to provide additional features and
          support for object-oriented programming (OOP). C++ allows developers to write
          efficient, low-level code like C, while also providing high-level abstractions and
          OOP capabilities.
        </p>
        <p>
          <ol type="1">
            <li>
              {" "}
              <b>Features of C++:</b>
              <ul type="disc">
                <li>
                  <b>Object-Oriented Programming (OOP):</b> C++ supports OOP, which means you
                  can create objects with their own data and functions. This makes it easier
                  to model real-world concepts and solve complex problems.
                </li>
                <li>
                  <b> Classes and Objects:</b>In C++, you define a class, which is like a
                  blueprint for creating objects. Objects are instances of classes, and they
                  encapsulate data and behavior.
                </li>
                <li>
                  <b> Inheritance:</b> You can create new classes based on existing ones,
                  inheriting their properties and behaviors. This promotes code reusability and
                  helps in organizing code.
                </li>
                <li>
                  <b>Polymorphism:</b> C++ supports polymorphism, which means you can use a
                  single interface to represent different types of objects. This allows you to
                  write more flexible and extensible code.
                </li>
                <li>
                  <b> Encapsulation:</b>You can hide the implementation details of a class from
                  the outside world, exposing only the essential interfaces. This improves code
                  maintainability and reduces dependencies.
                </li>
                <li>
                  <b>Abstraction:</b>C++ lets you create abstract data types and functions,
                  hiding the complexities and providing a simple interface for users.
                  <p></p>
                </li>
              </ul>
              <li>
                <b>Basic Syntax:</b> <br />
                A C++ program is made up of functions, and the most important function is{" "}
                <b>'main()'</b>. When you run a C++ program, it starts executing from the{" "}
                <b>'main()'</b> function. Here's a simple example of a C++ program that prints
                "Hello, World!" to the console:
                <p></p>
                <div className="cpp-code-wrapper">
                  <div className="cpp-code-wrapper">
  <pre>
    <code>
      #include &lt;iostream&gt; {/* This is a library used to perform input/output operations. */}
      <br />
      int main() {'{'}
      <br />
      &nbsp;&nbsp;std::cout &lt;&lt; "Hello, World!" &lt;&lt; std::endl; {/* Print the message to the console. */}
      <br />
      &nbsp;&nbsp;return 0; {/* The function should return an integer value (usually 0) to indicate success. */}
      <br />
      {'}'}
    </code>
  </pre>
</div>

                </div>
              </li>
            </li>
            <li>
              <p>
                <b> Variables and Data Types:</b> <br />
                In C++, you declare variables to store data. Each variable has a type that
                determines the kind of data it can hold. Here are some basic data types in
                C++:
              </p>
              <ul type="disc">
                <li>
                  <b>int:</b> Used for integers (whole numbers) like 5, -10, etc.
                </li>
                <li>
                  <b>float:</b> Used for floating-point numbers (numbers with decimal points)
                  like 3.14, -0.5, etc.
                </li>
                <li>
                  <b>double:</b> Similar to float, but with more precision.
                </li>
                <li>
                  <b>char:</b> Used for individual characters like 'a', 'b', '1', etc.
                </li>
                <li>
                  <b>bool:</b> Used for boolean values, either true or false.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <b>Control Flow:</b>C++ allows you to control the flow of your program using
                conditional statements and loops.
              </p>
              <ul type="disc">
                <li>
                  <p>
                    <b>if-else:</b> It lets you execute different code blocks based on certain
                    conditions.
                  </p>
                  <div className="cpp-code-wrapper">
                    <div className="cpp-code-wrapper">
  <pre>
    <code>
      <span>
        <strong className="strong-pink">int</strong> num = <strong className="strong-pink">10</strong>;
        <br />
        <strong className="strong-blue">if</strong> ( num &gt; <strong className="strong-pink">0</strong> ) {'{'}
      </span>
      <br />
      &nbsp;&nbsp;std::cout &lt;&lt; <strong className="strong-green">"The number is positive."</strong> &lt;&lt; std::endl;
      <br />
      {'}'}
      <br />
      <strong className="strong-blue">else</strong> {'{'}
      <br />
      &nbsp;&nbsp;std::cout &lt;&lt; <strong className="strong-green">"The number is non-positive."</strong> &lt;&lt; std::endl;
      <br />
      {'}'}
      <br />
      <span className="cpp-code-comment">// Output: The number is positive</span>
    </code>
  </pre>
</div>

                  </div>
                </li>
                <li>
                  <p>
                    <b>for loop:</b> Used for repeating a block of code a specific number of
                    times.
                  </p>
                  <div className="cpp-code-wrapper">
  <pre>
    <code>
      <span>
        <strong className="strong-blue">for </strong>(
        <strong className="strong-pink">int</strong> i = <strong className="strong-pink">1</strong>; i &lt;= <strong className="strong-pink">5</strong>; i++
        ) {'{'}
      </span>
      <br />
      &nbsp;&nbsp;std::cout &lt;&lt; i &lt;&lt; <strong className="strong-green">" "</strong>;
      <br />
      {'}'}
      <br />
      <span className="cpp-code-comment">// Output:: 1 2 3 4 5</span>
    </code>
  </pre>
</div>

                </li>
                <li>
                  <p>
                    <b>while loop:</b> Used for repeating a block of code while a condition is
                    true.
                  </p>
                  <div className="cpp-code-wrapper">
  <pre>
    <code>
      <span>
        <strong className="strong-pink">int</strong> i = <strong className="strong-pink">1</strong>;
      </span>
      <br />
      <span>
        <strong className="strong-blue">while</strong> (i &lt;= <strong className="strong-pink">5</strong>) {'{'}
      </span>
      <br />
      &nbsp;&nbsp;std::cout &lt;&lt; i &lt;&lt; <strong className="strong-green">" "</strong>;
      <br />
      &nbsp;&nbsp;i++;
      <br />
      {'}'}
      <br />
      <span className="cpp-code-comment">// Output:: 1 2 3 4 5</span>
    </code>
  </pre>
</div>

                </li>
              </ul>
            </li>
            <li>
              <p>
                <b>Functions:</b> <br />
                Functions are blocks of code that perform a specific task. They promote code
                reusability and help break down complex problems into smaller parts.
              </p>
              <div className="cpp-code-wrapper">
  <pre>
    <code>
      <p>
        <strong className="cpp-code-comment">// Function declaration</strong>
      </p>
      <p>
        <strong className="strong-pink">int </strong>
        <strong className="strong-red">addNumbers</strong> (
        <strong className="strong-pink">int</strong> a,{" "}
        <strong className="strong-pink">int</strong> b ) {'{'}
      </p>
      <p>
        &nbsp;&nbsp;<strong className="strong-blue">return</strong> a + b;
      </p>
      {'}'}
      <p>
        <strong className="strong-pink">int </strong>
        <strong className="strong-red">main</strong> () {'{'}
      </p>
      <p>
        &nbsp;&nbsp;<strong className="strong-pink">int </strong>result ={' '}
        <strong className="strong-orange">addNumbers</strong>(
        <strong className="strong-pink">5</strong>,{" "}
        <strong className="strong-pink">3</strong>);{" "}
        <strong className="cpp-code-comment">
          // Call the function with the arguments 5 and 3.
        </strong>
      </p>
      <p>
        &nbsp;&nbsp;std::cout &lt;&lt; <strong className="strong-green">"Result: "</strong> &lt;&lt; result &lt;&lt; std::endl;
      </p>
      {'}'}
      <p>
        <strong className="cpp-code-comment">// Output: Result: 8</strong>
      </p>
    </code>
  </pre>
</div>

            </li>
            <li>
              <p>
                <b>Pointers:</b> <br />
                Pointers are variables that store memory addresses of other variables. They are
                used for dynamic memory allocation and working with data structures.
              </p>
              <div className="cpp-code-wrapper">
  <pre>
    <code>
      <p>
        <strong className="strong-pink">int </strong> num ={" "}
        <strong className="strong-pink">10</strong>;
      </p>
      <p>
        <strong className="strong-pink">int</strong>* ptr = &amp;num;{" "}
        <strong className="cpp-code-comment">
          {" "}
          // Store the memory address of 'num' in 'ptr'.
        </strong>
        <br />
        std::cout &lt;&lt; <strong className="strong-green">"Value of num: "</strong>{" "}
        &lt;&lt; *ptr &lt;&lt; std::endl;{" "}
        <strong className="cpp-code-comment">
          {" "}
          // Dereference the pointer to get the value at that address.
        </strong>
      </p>
      <p>
        <strong className="cpp-code-comment">// Output: Value of num: 10</strong>
      </p>
    </code>
  </pre>
</div>

            </li>
            <li>
              <p>
                <b>Standard Template Library (STL):</b> <br />
                C++ comes with a powerful library called the Standard Template Library, which
                provides ready-to-use data structures and algorithms. It includes containers
                like vectors, lists, maps, and algorithms like sorting and searching.
                <div className="cpp-code-wrapper">
  <p>
    <strong className="cpp-code-comment">#</strong>{" "}
    <strong className="strong-blue">include</strong>{" "}
    <strong className="strong-green">{"<vector>"}</strong>
    <br />
    <strong className="cpp-code-comment">#</strong>{" "}
    <strong className="strong-blue">include</strong>{" "}
    <strong className="strong-green">{"<algorithm>"}</strong>
  </p>
  <p>
    <strong className="strong-pink">int </strong>
    <strong className="strong-red">main</strong> () {"{"}
  </p>
  <p>
    std::vector&lt;
    <strong className="strong-pink">int</strong>&gt; numbers = {"{"}
    <strong className="strong-pink">5</strong>,{" "}
    <strong className="strong-pink">2</strong>,{" "}
    <strong className="strong-pink">8</strong>,{" "}
    <strong className="strong-pink">1</strong>,{" "}
    <strong className="strong-pink">3</strong>
    {"}"};
    <br />
    std::
    <strong className="strong-orange">sort</strong>(numbers.
    <strong className="strong-orange">begin</strong>(), numbers.
    <strong className="strong-orange">end</strong>());
    <strong className="cpp-code-comment">
      {" "}
      // Sort the vector in ascending order.
    </strong>
    <br />
    <strong className="strong-blue">for</strong> (
    <strong className="strong-pink">int </strong>num : numbers) {"{"}
  </p>
  <p>
    std::cout &lt;&lt; num &lt;&lt; <strong className="strong-green">" "</strong>;
  </p>
  <p>{"}"}</p>
  <p>
    <strong className="cpp-code-comment">// Output: 1 2 3 5 8</strong>
  </p>
  <p>
    <strong className="strong-blue">return</strong> <strong className="strong-pink">0</strong>;
  </p>
  <p>{"}"}</p>
</div>

              </p>
            </li>
          </ol>
        </p>
      </div>

      {/* Files and Documents */}
      <div>
        <p style={{ color: "gray", textAlign: "center" }}>
          Files and Documents on Everything You Need To Know About C++ As Programming Language
        </p>
        <div>
          <div style={{ textAlign: "center" }}>
            <a href="c-plus-plus-files/C++ Programming Basics.pdf" download>
              <button className="files-buttons">
                <img style={{ height: "100px" }} src="images/pdf-icon.png" alt="" />
                <div>
                  <b>C++ Programming Basics</b>
                </div>
              </button>
            </a>

            <a href="c-plus-plus-files/Programming with c++.pdf" download>
              <button className="files-buttons">
                <img style={{ height: "100px" }} src="images/pdf-icon.png" alt="" />
                <div>
                  <b>Programming With C++</b>
                </div>
              </button>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="c-plus-plus-files/UNIT 1 - Introduction To Programming AND C++.pdf" download>
              <button className="files-buttons">
                <img style={{ height: "100px" }} src="images/pdf-icon.png" alt="" />
                <div>
                  <b>
                    UNIT 1: <br /> Introduction To Programming <br /> AND <br /> C++
                  </b>
                </div>
              </button>
            </a>

            <a href="c-plus-plus-files/UNIT 2 - Operators and Expressions AND  Input and Output Concepts.pdf" download>
              <button className="files-buttons">
                <img style={{ height: "100px" }} src="images/pdf-icon.png" alt="" />
                <div>
                  <b>
                    UNIT 2: <br /> Operators and Expressions <br /> AND <br /> Input and Output
                    Concepts
                  </b>
                </div>
              </button>
            </a>

            <a href="c-plus-plus-files/UINT 3 - Decision Making Control Structures AND  Looping Control Structures.pdf" download>
              <button className="files-buttons">
                <img style={{ height: "100px" }} src="images/pdf-icon.png" alt="" />
                <div>
                  <b>
                    UINT 3: <br /> Decision Making Control Structures <br /> AND <br /> Looping
                    Control Structures
                  </b>
                </div>
              </button>
            </a>

            <a href="c-plus-plus-files/UNIT 4 - Functions AND Arrays.pdf" download>
              <button className="files-buttons">
                <img style={{ height: "100px" }} src="images/pdf-icon.png" alt="" />
                <div>
                  <b>
                    UNIT 4: <br /> Functions <br /> AND <br /> Arrays
                  </b>
                </div>
              </button>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="c-plus-plus-files/UNIT 5 - Abstract Data Types AND Sorting and Searching Techniques.pdf" download>
              <button className="files-buttons">
                <img style={{ height: "100px" }} src="images/pdf-icon.png" alt="" />
                <div>
                  <b>
                    UNIT 5: <br /> Abstract Data Types <br /> AND <br /> Sorting and Searching
                    Techniques
                  </b>
                </div>
              </button>
            </a>

            <a href="c-plus-plus-files/UNIT 6 - File Handling AND Pointers.pdf" download>
              <button className="files-buttons">
                <img style={{ height: "100px" }} src="images/pdf-icon.png" alt="" />
                <div>
                  <b>
                    UNIT 6: <br /> File Handling <br /> AND <br /> Pointers
                  </b>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Websites Links */}
      <div style={{ color: "gray", textAlign: "center", paddingTop: 50 }}>
        <p>Resourceful Websites To Get Everything You Need To Know About C++</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button style={{ backgroundColor: "rgb(84, 84, 148)" }} className="websites-link-button">
            <a href="https://cplusplus.com/" target="_blank" rel="noopener noreferrer">
              <b style={{ fontSize: 80, color: "white" }}>+ </b>
              <b style={{ fontSize: 24, color: "white", marginBottom: 10 }}>cplusplus.com</b>
            </a>
          </button>
          <button style={{ backgroundColor: "rgb(40, 42, 53)" }} className="websites-link-button">
            <a href="https://www.w3schools.com/cpp/default.asp" target="_blank" rel="noopener noreferrer">
              <b
                style={{
                  fontSize: 36,
                  color: "rgb(4,170,109)",
                  fontFamily: "'Lobster Two', cursive",
                }}
              >
                W3
              </b>
              <b style={{ fontSize: 24, color: "rgb(4,170,109)" }}> Schools C++</b>
            </a>
          </button>
          <button style={{ backgroundColor: "lightgray" }} className="websites-link-button">
            <a href="https://www.cplusplus.in/" target="_blank" rel="noopener noreferrer">
              <b style={{ fontSize: 36, color: "rgb(81, 81, 81)" }}>Cplusplus</b>
            </a>
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button className="websites-link-button">
            <a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer">
              <b style={{ color: "rgb(84, 84, 148)", fontSize: 40 }}>LEARN C++</b>
            </a>
          </button>
          <button className="websites-link-button">
            <a href="https://www.cprogramming.com/" target="_blank" rel="noopener noreferrer">
              <img style={{ height: 60 }} src="images/cprog.png" alt="C Programming" />
            </a>
          </button>
        </div>
      </div>

      {/* Youtube Videos */}
      <div style={{ color: "gray", textAlign: "center", paddingTop: 50 }}>
        <p>The Best YouTube Tutorials to get you Started on HTML and CSS</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_bYFu9mBnr4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8jLOx1hD3_o"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-TkoO8Z07hI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZzaPdXTrSb8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oOmbSpOzvYg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            style={{ margin: 10 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/m2xt5KIEHvc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Cplusplus;