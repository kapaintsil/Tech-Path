import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './CoursePage.css'; // Changed import

function IntroToProgramming() { // Fixed function name
  return (
    <div className="course-page">
      <NavBar />
      <header className="course-header">
        <img
          className="course-logo"
          src="/Course-Logos/intro-to-programming.png"
          alt="Intro to Programming"
        />
        <h1 className="course-title">
          <span className="highlight">Introduction To Programming</span>
        </h1>
      </header>

      <main className="course-content">
        <p>
          <b>Programming</b> is the process of creating instructions for a
          computer to execute specific tasks. It's a fundamental skill that
          empowers humans to communicate with computers and leverage their
          capabilities to solve a wide range of problems. Through programming,
          you can develop software applications, websites, games, automation
          scripts, and much more.
        </p>

        <h3>Why Programming Matters</h3>
        <p>
          Programming is the backbone of software development and is
          responsible for creating the applications and systems that power our
          digital lives. From mobile apps to web applications, from operating
          systems to video games, programming is the underlying force that
          brings technology to life. It allows us to automate repetitive tasks,
          manipulate data, analyze information, and create new tools and
          experiences.
        </p>

        <h3>Core Programming Concepts</h3>
        <ul>
          <li>
            <b>Algorithm:</b> A step-by-step set of instructions to solve
            problems or perform tasks. They form the basis for writing
            structured and efficient code.
          </li>
          <li>
            <b>Data Types:</b> The classification of data, such as numeric (integers, floats), string (text), boolean (true/false), arrays, etc.
          </li>
          <li>
            <b>Control Structures:</b> The flow of execution in a program, using conditionals (if/else), loops (for, while), and branching.
          </li>
        </ul>

        <h3>Programming Languages</h3>
        <p>
          Languages like <a href="/python">Python</a>,{" "}
          <a href="/java">Java</a>, and <a href="/cplusplus">C++</a> are
          considered core programming languages. Others like{" "}
          <a href="/javascript">JavaScript</a>,{" "}
          <a href="/html-css">HTML/CSS</a>, and{" "}
          <a href="/database">SQL</a> are essential tools that support web
          development and data handling. Each language has its strengths, and learning multiple languages makes you a more versatile developer.
        </p>

        <h3>Integrated Development Environments (IDEs)</h3>
        <p>
          An IDE is a software application that provides comprehensive facilities to computer programmers for software development. Some popular IDEs include:
        </p>
        <ul>
            <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> (multi-language support)</li>
            <li><a href="https://www.codeblocks.org/downloads/" target="_blank" rel="noopener noreferrer">Code::Blocks</a> (for C++)</li>
            <li><a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">PyCharm</a> (for Python)</li>
            <li><a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">IntelliJ IDEA</a> (for Java/Kotlin)</li>
            <li><a href="https://www.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">MySQL Workbench</a> (for SQL)</li>
        </ul>

        <h3>Why Learn Programming?</h3>
        <ul>
          <li><b>Problem Solving:</b> Break down complex problems into logical, manageable steps.</li>
          <li><b>Creativity:</b> Build unique applications, websites, and tools from scratch.</li>
          <li><b>Career Opportunities:</b> Programming is a high-demand skill across many industries.</li>
          <li><b>Automation:</b> Save time by automating repetitive tasks.</li>
          <li><b>Innovation:</b> Drive advancements in fields like AI, data science, and more.</li>
        </ul>
      </main>

      <section className="resource-section">
        <h3>Downloadable Files</h3>
        <p>Downloadable resources to supplement your learning.</p>
        <div className="resource-grid">
          <a href="/intro-to-programming-files/Principles of Programming.pdf" download className="resource-card">
            <img src="/Logos/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">Principles of Programming</div>
          </a>
          <a href="/intro-to-programming-files/Introduction to Algorithms and Programming.pdf" download className="resource-card">
            <img src="/Logos/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">Intro to Algorithms</div>
          </a>
          <a href="/intro-to-programming-files/PROGRAMMING TRY QUESTIONS.pdf" download className="resource-card">
            <img src="/Logos/pdf-icon.png" alt="PDF Icon" />
            <div className="resource-card-title">Programming Try Questions</div>
          </a>
        </div>
      </section>

      <section className="resource-section">
        <h3>Helpful Websites</h3>
        <p>Curated links to external resources for further learning.</p>
        <div className="resource-grid">
          <a href="https://www.coursera.org/articles/what-is-programming" target="_blank" rel="noopener noreferrer" className="resource-card">
           <img src="/Logos/coursera-logo.svg" alt="Coursera Logo" />
           <div className="resource-card-title">Coursera</div>
          </a>
          <a href="https://www.simplilearn.com/best-programming-languages-start-learning-today-article" target="_blank" rel="noopener noreferrer" className="resource-card">
            <img src="/Logos/simplilearn_logo.svg" alt="Simplilearn Logo" />
            <div className="resource-card-title">Simplilearn</div>
          </a>
          <a href="https://www.computerscience.org/resources/computer-programming-languages/" target="_blank" rel="noopener noreferrer" className="resource-card">
            <img src="/Logos/computerscienceorg-logo.svg" alt="ComputerScience.org Logo" />
            <div className="resource-card-title">ComputerScience.org</div>
          </a>
        </div>
      </section>

      <section className="youtube-section">
        <h3>YouTube Tutorials</h3>
        <p>Hand-picked video tutorials to get you started.</p>
        <div className="youtube-grid">
          <iframe className="youtube-video" src="https://www.youtube.com/embed/zOjov-2OZ0E" title="Intro to Programming 1" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/ykSsccKKNh4" title="Intro to Programming 2" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/8mAITcNt710" title="Intro to Programming 3" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/F7CWjuaC6gw" title="Intro to Programming 4" allowFullScreen></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default IntroToProgramming; // Fixed export name

