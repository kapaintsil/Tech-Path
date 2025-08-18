import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './Python.css';

const Python = () => {
  return (
    <div>
      <NavBar />
      <section className="course-section">
        <div className="python-topic">
          <img
            className="java-image"
            src="Course-Logos/python-logo.png"
            alt="Python Logo"
             draggable={false}
          />
          <h3>
            Programming With <strong className="python-strong">Python</strong>
          </h3>
        </div>

        <div>
          <p><b>Python Programming</b></p>
          <p>
            Python is a high-level, interpreted programming language that emphasizes code readability and simplicity. It was created by Guido van Rossum and first released in 1991. Python's design philosophy focuses on clear, concise, and easily understandable code, which makes it an excellent choice for beginners and experienced programmers alike.
          </p>
          <p>
            Python programming is the process of writing, testing, and executing code in the Python language. It offers a wide range of features and capabilities that cater to various domains, including web development, data analysis, scientific computing, machine learning, artificial intelligence, automation, and more.
          </p>
        </div>

        <div>
          <p><b>Installation and Setup:</b></p>
          <ul>
            <li>
              Python can be downloaded from the official website (
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">python.org</a>) and installed on various platforms (Windows, macOS, Linux).
            </li>
            <li>
              Python comes with an integrated development environment (IDLE), but many programmers prefer using third-party IDEs like{' '}
              <a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">PyCharm</a>,{' '}
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>, or{' '}
              <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">Jupyter Notebook</a>.
            </li>
          </ul>
        </div>

        <div>
          <p><b>Key Features:</b></p>
          <ul>
            <li><b>Readability:</b> Python's syntax is designed to be clear and readable, emphasizing the use of whitespace (indentation) to define code blocks. This helps reduce the chances of syntax errors and enhances code readability.</li>
            <li><b>Interpreted Language:</b> Python doesn’t require compilation before running.Python is an interpreted language, meaning you don't need to compile your code before running it. This makes the development process faster and more interactive. You write your code, save it in a .py file, and then run it using the Python interpreter.</li>
            <li><b>Easy to Learn:</b>Python's simplicity and readability make it easy to learn, especially for beginners with no prior programming experience.</li>
            <li><b>Large Standard Library:</b>  Python comes with a comprehensive standard library that provides modules and functions for a wide range of tasks, from file handling and networking to data manipulation and more.</li>
            <li><b>Cross-Platform Compatibility:</b>Python is available on various platforms, including Windows, macOS, and different flavors of Linux. This cross-platform compatibility ensures that your code can be executed on different operating systems without major modifications, making it a highly portable language.</li>
            <li><b>Extensibility:</b> You can easily integrate Python with other programming languages such as C, C++, and Java, allowing you to leverage existing code and libraries.</li>
            <li><b>Libraries and Modules:</b> : Python's strength lies in its rich ecosystem of libraries and modules. Libraries like NumPy, Pandas, Matplotlib, TensorFlow, and Django provide pre-built functions and tools to solve specific problems. These libraries save time and effort by abstracting complex tasks.</li>
            <li><b>Community and Support:</b>  Python has a large and active community of developers, which means you'll find extensive documentation, tutorials, forums, and resources online. This community-driven approach fosters collaboration and continuous improvement.</li>
          </ul>
        </div>

        <div>
          <p><b>Data Types and Variables:</b></p>
          <ul>
            <li><b>Numbers:</b> Integers (`int`) and floating-point (`float`).</li>
            <li><b>Strings:</b> Text data (e.g., "Hello").</li>
            <li><b>Lists:</b> Ordered collections (e.g., [1, 2, 3]).</li>
            <li><b>Tuples:</b> Immutable ordered collections (e.g., (1, 2, 3)).</li>
            <li><b>Dictionaries:</b> Key-value pairs (e.g.,).</li>
            <li><b>Sets:</b> Unordered collections of unique values.</li>
          </ul>
        </div>

        <div className="resource-section">
          <p>Resourceful Websites To Learn More About Python</p>
          <div className="resource-buttons">
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              <img src="/Python-files/python-web-logo.png" alt="Python.org Logo" />
            </a>
            <a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer" className="w3schools-logo">
              <span>W3 Schools Python</span>
            </a>
            <a href="https://www.programiz.com/python-programming/" target="_blank" rel="noopener noreferrer">
              <img src="/Python-files/pc_logo.svg" alt="Programiz Logo" />
            </a>
            <a href="https://realpython.com/" target="_blank" rel="noopener noreferrer">
             <img src="/Python-files/real-python-logo.svg" alt="Real Python Logo" />
            </a>
            <a href="https://www.codecademy.com/catalog/language/python" target="_blank" rel="noopener noreferrer">
              <img src="/Python-files/codecademy-logo.png" alt="Codecademy Logo" />
            </a>
          </div>
        </div>

        <div className="videos-section">
          <p>The Best YouTube Tutorials to Get You Started With Python</p>
          <div className="video-grid">
            <iframe
              src="https://www.youtube.com/embed/rfscVS0vtbw"
              title="Python Tutorial for Beginners - FreeCodeCamp"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/_uQrJ0TkZlc"
              title="Python Full Course - Programming with Mosh"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/nLRL_NcnK-4"
              title="Python Crash Course - Traversy Media"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/WGJJIrtnfpk"
              title="Learn Python - CS50 Harvard"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/jBzwzrDvZ18"
              title="Python for Data Science - Krish Naik"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/hEgO047GxaQ"
              title="Python Basics for Beginners - Edureka"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Python;
