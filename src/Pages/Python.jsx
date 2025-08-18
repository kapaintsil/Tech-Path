import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './CoursePage.css'; // Changed import

const Python = () => {
  return (
    <div className="course-page">
      <NavBar />
      <header className="course-header">
        <img
          className="course-logo"
          src="/Course-Logos/python-logo.png"
          alt="Python Logo"
        />
        <h1 className="course-title">
          Programming With <span className="highlight">Python</span>
        </h1>
      </header>

      <main className="course-content">
        <p>
          Python is a high-level, interpreted programming language that emphasizes code readability and simplicity. Created by Guido van Rossum and first released in 1991, its design philosophy focuses on clear, concise, and easily understandable code, which makes it an excellent choice for beginners and experienced programmers alike.
        </p>
        <p>
          Python is used in various domains, including web development, data analysis, scientific computing, machine learning, artificial intelligence, automation, and more.
        </p>

        <h3>Installation and Setup</h3>
        <ul>
            <li>
              Python can be downloaded from the official website (<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">python.org</a>) and installed on various platforms.
            </li>
            <li>
              While Python comes with its own IDLE, many programmers prefer using IDEs like{' '}
              <a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">PyCharm</a>,{' '}
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>, or{' '}
              <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">Jupyter Notebook</a>.
            </li>
        </ul>

        <h3>Key Features of Python</h3>
        <ul>
          <li><b>Readability:</b> Python's clear and readable syntax, with its use of indentation, enhances code readability.</li>
          <li><b>Interpreted Language:</b> Python doesn't require a separate compilation step, which speeds up the development process.</li>
          <li><b>Easy to Learn:</b> Its simplicity makes it an ideal language for beginners.</li>
          <li><b>Large Standard Library:</b> Python comes with a comprehensive standard library for a wide range of tasks.</li>
          <li><b>Cross-Platform Compatibility:</b> Python code can run on different operating systems without major modifications.</li>
          <li><b>Extensibility:</b> Python can be easily integrated with other languages like C, C++, and Java.</li>
          <li><b>Rich Ecosystem of Libraries:</b> Libraries like NumPy, Pandas, Matplotlib, TensorFlow, and Django provide powerful tools for various domains.</li>
          <li><b>Active Community:</b> Python has a large and active community, providing extensive documentation and support.</li>
        </ul>

        <h3>Data Types and Variables</h3>
        <ul>
            <li><b>Numbers:</b> Integers (`int`) and floating-point (`float`).</li>
            <li><b>Strings:</b> Text data (e.g., "Hello").</li>
            <li><b>Lists:</b> Ordered, mutable collections (e.g., [1, 2, 3]).</li>
            <li><b>Tuples:</b> Ordered, immutable collections (e.g., (1, 2, 3)).</li>
            <li><b>Dictionaries:</b> Key-value pairs (e.g., {'{'} "key": "value" {'}'}).</li>
            <li><b>Sets:</b> Unordered collections of unique elements.</li>
        </ul>
      </main>

      <section className="resource-section">
        <h3>Helpful Websites</h3>
        <p>Curated links to external resources for further learning.</p>
        <div className="resource-grid">
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="resource-card">
              <img src="/Python-files/python-web-logo.png" alt="Python.org Logo" />
              <div className="resource-card-title">Python.org</div>
            </a>
            <a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer" className="resource-card">
              <div className="resource-card-title">W3Schools Python</div>
            </a>
            <a href="https://www.programiz.com/python-programming/" target="_blank" rel="noopener noreferrer" className="resource-card">
              <img src="/Python-files/pc_logo.svg" alt="Programiz Logo" />
              <div className="resource-card-title">Programiz</div>
            </a>
            <a href="https://realpython.com/" target="_blank" rel="noopener noreferrer" className="resource-card">
             <img src="/Python-files/real-python-logo.svg" alt="Real Python Logo" />
             <div className="resource-card-title">Real Python</div>
            </a>
            <a href="https://www.codecademy.com/catalog/language/python" target="_blank" rel="noopener noreferrer" className="resource-card">
              <img src="/Python-files/codecademy-logo.png" alt="Codecademy Logo" />
              <div className="resource-card-title">Codecademy</div>
            </a>
        </div>
      </section>

      <section className="youtube-section">
        <h3>YouTube Tutorials</h3>
        <p>Hand-picked video tutorials to get you started.</p>
        <div className="youtube-grid">
            <iframe className="youtube-video" src="https://www.youtube.com/embed/rfscVS0vtbw" title="Python Tutorial for Beginners - FreeCodeCamp" allowFullScreen></iframe>
            <iframe className="youtube-video" src="https://www.youtube.com/embed/_uQrJ0TkZlc" title="Python Full Course - Programming with Mosh" allowFullScreen></iframe>
            <iframe className="youtube-video" src="https://www.youtube.com/embed/nLRL_NcnK-4" title="Python Crash Course - Traversy Media" allowFullScreen></iframe>
            <iframe className="youtube-video" src="https://www.youtube.com/embed/WGJJIrtnfpk" title="Learn Python - CS50 Harvard" allowFullScreen></iframe>
            <iframe className="youtube-video" src="https://www.youtube.com/embed/jBzwzrDvZ18" title="Python for Data Science - Krish Naik" allowFullScreen></iframe>
            <iframe className="youtube-video" src="https://www.youtube.com/embed/hEgO047GxaQ" title="Python Basics for Beginners - Edureka" allowFullScreen></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Python;
