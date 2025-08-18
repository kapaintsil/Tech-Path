import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './CoursePage.css'; // Changed import

function Cplusplus() {
  return (
    <div className="course-page">
      <NavBar />
      <header className="course-header">
        <img className="course-logo" src="/images/C++-Logo.png" alt="C++ Logo" />
        <h1 className="course-title">
          Programming With <span className="highlight">C++</span>
        </h1>
      </header>

      <main className="course-content">
        <h3>What is C++?</h3>
        <p>
          C++ is a general-purpose programming language created as an extension of the C
          programming language. It was developed by Bjarne Stroustrup in the early 1980s.
          C++ is known for its efficiency, flexibility, and power, making it suitable for a
          wide range of applications, from low-level systems programming to high-level
          application development.
        </p>
        <p>
          It is a powerful and versatile programming language that was developed from the
          original C programming language. It was created to provide additional features and
          support for object-oriented programming (OOP). C++ allows developers to write
          efficient, low-level code like C, while also providing high-level abstractions and
          OOP capabilities.
        </p>

        <h4>Features of C++:</h4>
        <ul>
          <li>
            <b>Object-Oriented Programming (OOP):</b> C++ supports OOP, which means you
            can create objects with their own data and functions. This makes it easier
            to model real-world concepts and solve complex problems.
          </li>
          <li>
            <b>Classes and Objects:</b> In C++, you define a class, which is like a
            blueprint for creating objects. Objects are instances of classes, and they
            encapsulate data and behavior.
          </li>
          <li>
            <b>Inheritance:</b> You can create new classes based on existing ones,
            inheriting their properties and behaviors. This promotes code reusability and
            helps in organizing code.
          </li>
          <li>
            <b>Polymorphism:</b> C++ supports polymorphism, which means you can use a
            single interface to represent different types of objects. This allows you to
            write more flexible and extensible code.
          </li>
          <li>
            <b>Encapsulation:</b> You can hide the implementation details of a class from
            the outside world, exposing only the essential interfaces. This improves code
            maintainability and reduces dependencies.
          </li>
          <li>
            <b>Abstraction:</b> C++ lets you create abstract data types and functions,
            hiding the complexities and providing a simple interface for users.
          </li>
        </ul>

        <h4>Basic Syntax:</h4>
        <p>
          A C++ program is made up of functions, and the most important function is{' '}
          <b>'main()'</b>. When you run a C++ program, it starts executing from the{' '}
          <b>'main()'</b> function. Here's a simple example of a C++ program that prints
          "Hello, World!" to the console:
        </p>
        <div className="code-block">
          <pre>
            <code>
{`#include <iostream> // This is a library used to perform input/output operations.

int main() {
  std::cout << "Hello, World!" << std::endl; // Print the message to the console.
  return 0; // The function should return an integer value (usually 0) to indicate success.
}`}
            </code>
          </pre>
        </div>

        <h4>Variables and Data Types:</h4>
        <p>
          In C++, you declare variables to store data. Each variable has a type that
          determines the kind of data it can hold. Here are some basic data types in
          C++:
        </p>
        <ul>
          <li><b>int:</b> Used for integers (whole numbers) like 5, -10, etc.</li>
          <li><b>float:</b> Used for floating-point numbers (numbers with decimal points) like 3.14, -0.5, etc.</li>
          <li><b>double:</b> Similar to float, but with more precision.</li>
          <li><b>char:</b> Used for individual characters like 'a', 'b', '1', etc.</li>
          <li><b>bool:</b> Used for boolean values, either true or false.</li>
        </ul>

        <h4>Control Flow:</h4>
        <p>C++ allows you to control the flow of your program using conditional statements and loops.</p>

        <h5>if-else:</h5>
        <p>It lets you execute different code blocks based on certain conditions.</p>
        <div className="code-block">
          <pre>
            <code>
{`int num = 10;
if (num > 0) {
  std::cout << "The number is positive." << std::endl;
} else {
  std::cout << "The number is non-positive." << std::endl;
}
// Output: The number is positive`}
            </code>
          </pre>
        </div>

        <h5>for loop:</h5>
        <p>Used for repeating a block of code a specific number of times.</p>
        <div className="code-block">
          <pre>
            <code>
{`for (int i = 1; i <= 5; i++) {
  std::cout << i << " ";
}
// Output: 1 2 3 4 5`}
            </code>
          </pre>
        </div>

        <h5>while loop:</h5>
        <p>Used for repeating a block of code while a condition is true.</p>
        <div className="code-block">
          <pre>
            <code>
{`int i = 1;
while (i <= 5) {
  std::cout << i << " ";
  i++;
}
// Output: 1 2 3 4 5`}
            </code>
          </pre>
        </div>

        <h4>Functions:</h4>
        <p>Functions are blocks of code that perform a specific task. They promote code reusability and help break down complex problems into smaller parts.</p>
        <div className="code-block">
          <pre>
            <code>
{`// Function declaration
int addNumbers(int a, int b) {
  return a + b;
}

int main() {
  int result = addNumbers(5, 3); // Call the function with the arguments 5 and 3.
  std::cout << "Result: " << result << std::endl;
}
// Output: Result: 8`}
            </code>
          </pre>
        </div>

        <h4>Pointers:</h4>
        <p>Pointers are variables that store memory addresses of other variables. They are used for dynamic memory allocation and working with data structures.</p>
        <div className="code-block">
          <pre>
            <code>
{`int num = 10;
int* ptr = &num; // Store the memory address of 'num' in 'ptr'.
std::cout << "Value of num: " << *ptr << std::endl; // Dereference the pointer to get the value at that address.
// Output: Value of num: 10`}
            </code>
          </pre>
        </div>

        <h4>Standard Template Library (STL):</h4>
        <p>C++ comes with a powerful library called the Standard Template Library, which provides ready-to-use data structures and algorithms. It includes containers like vectors, lists, maps, and algorithms like sorting and searching.</p>
        <div className="code-block">
          <pre>
            <code>
{`#include <vector>
#include <algorithm>

int main() {
  std::vector<int> numbers = {5, 2, 8, 1, 3};
  std::sort(numbers.begin(), numbers.end()); // Sort the vector in ascending order.
  for (int num : numbers) {
    std::cout << num << " ";
  }
  // Output: 1 2 3 5 8
  return 0;
}`}
            </code>
          </pre>
        </div>
      </main>

      <section className="resource-section">
        <h3>Files and Documents</h3>
        <p>Downloadable resources to supplement your learning.</p>
        <div className="resource-grid">
          <a href="/c-plus-plus-files/C++ Programming Basics.pdf" download className="resource-card">
            <img src="/images/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">C++ Programming Basics</div>
          </a>
          <a href="/c-plus-plus-files/Programming with c++.pdf" download className="resource-card">
            <img src="/images/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">Programming With C++</div>
          </a>
          <a href="/c-plus-plus-files/UNIT 1 - Introduction To Programming AND C++.pdf" download className="resource-card">
            <img src="/images/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">UNIT 1: Intro to Programming & C++</div>
          </a>
          <a href="/c-plus-plus-files/UNIT 2 - Operators and Expressions AND  Input and Output Concepts.pdf" download className="resource-card">
            <img src="/images/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">UNIT 2: Operators, Expressions & I/O</div>
          </a>
          <a href="/c-plus-plus-files/UINT 3 - Decision Making Control Structures AND  Looping Control Structures.pdf" download className="resource-card">
            <img src="/images/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">UNIT 3: Control & Loop Structures</div>
          </a>
          <a href="/c-plus-plus-files/UNIT 4 - Functions AND Arrays.pdf" download className="resource-card">
            <img src="/images/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">UNIT 4: Functions & Arrays</div>
          </a>
          <a href="/c-plus-plus-files/UNIT 5 - Abstract Data Types AND Sorting and Searching Techniques.pdf" download className="resource-card">
            <img src="/images/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">UNIT 5: ADTs, Sorting & Searching</div>
          </a>
          <a href="/c-plus-plus-files/UNIT 6 - File Handling AND Pointers.pdf" download className="resource-card">
            <img src="/images/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">UNIT 6: File Handling & Pointers</div>
          </a>
        </div>
      </section>

      <section className="resource-section">
        <h3>Helpful Websites</h3>
        <p>Curated links to external resources for further learning.</p>
        <div className="resource-grid">
          <a href="https://cplusplus.com/" target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="resource-card-title">cplusplus.com</div>
          </a>
          <a href="https://www.w3schools.com/cpp/default.asp" target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="resource-card-title">W3Schools C++</div>
          </a>
          <a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="resource-card-title">Learn C++</div>
          </a>
          <a href="https://www.cprogramming.com/" target="_blank" rel="noopener noreferrer" className="resource-card">
            <img src="/images/cprog.png" alt="C Programming logo" />
            <div className="resource-card-title">CProgramming.com</div>
          </a>
        </div>
      </section>

      <section className="youtube-section">
        <h3>YouTube Tutorials</h3>
        <p>Hand-picked video tutorials to get you started.</p>
        <div className="youtube-grid">
          <iframe className="youtube-video" src="https://www.youtube.com/embed/_bYFu9mBnr4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/8jLOx1hD3_o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/-TkoO8Z07hI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/ZzaPdXTrSb8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/oOmbSpOzvYg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/m2xt5KIEHvc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Cplusplus;