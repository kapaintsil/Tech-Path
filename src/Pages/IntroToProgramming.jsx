import React from 'react';
import NavBar from '../Components/NavBar';
import './IntroToProgramming.css'; 
import Footer from '../Components/Footer';

function IntroToPragramming() {
  return (
    <div>
      <NavBar />
      <section className="course-section">
      <div className="intro-to-programming-topic">
        <img
          className="intro-to-programming-image"
          src="Course-Logos/intro-to-programming.png"
          alt="Intro to Programming"
          draggable={false}
        />
        <h3>
          <strong className="intro-to-programming-strong">
            Introduction To Programming
          </strong>
        </h3>
      </div>

      <div>
        <p>
          <b>Programming</b> is the process of creating instructions for a
          computer to execute specific tasks. It's a fundamental skill that
          empowers humans to communicate with computers and leverage their
          capabilities to solve a wide range of problems. Through programming,
          you can develop software applications, websites, games, automation
          scripts, and much more. This introduction will provide a detailed
          overview of programming concepts, languages, and the essential steps
          involved in creating a program.
        </p>
      </div>

      <div>
        <p>
          <b>Why Programming Matters:</b>
        </p>
        <p>
          Programming is the backbone of software development and is
          responsible for creating the applications and systems that power our
          digital lives. From mobile apps to web applications, from operating
          systems to video games, programming is the underlying force that
          brings technology to life. It allows us to automate repetitive tasks,
          manipulate data, analyze information, and create new tools and
          experiences.
        </p>
      </div>

      <div>
        <p>
          <b>Programming Concepts:</b>
        </p>
        <ul>
          <li>
            <p>
              <b>Algorithm:</b> A step-by-step set of instructions to solve
              problems or perform tasks. They form the basis for writing
              structured and efficient code.
            </p>
          </li>
          <li>
            <p>
              <b>Data:</b> The core element processed by programs. It comes in
              types such as:
            </p>
            <ul>
              <li><b>Numeric:</b> Integers, floats</li>
              <li><b>String:</b> Text data</li>
              <li><b>Boolean:</b> True/False values</li>
              <li><b>Array/List:</b> Ordered data structures</li>
              <li><b>Set:</b> Unique elements</li>
              <li><b>Map/Dict:</b> Key-value pairs</li>
              <li><b>Tuple:</b> Immutable list-like structure</li>
              <li><b>Character:</b> Single letters or digits</li>
              <li><b>Custom:</b> User-defined types</li>
            </ul>
          </li>
          <li>
            <p>
              <b>Coding Structures:</b> Flow control using:
              conditionals (if/else), loops (while/for), and branching (break,
              continue).
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h4>Programming Languages</h4>
        <p>
          Languages like <a href="/python">Python</a>,{" "}
          <a href="/java">Java</a>, and <a href="/cplusplus">C++</a> are
          considered core programming languages. Others like{" "}
          <a href="/javascript">JavaScript</a>,{" "}
          <a href="/html-css">HTML/CSS</a>, and{" "}
          <a href="/database">SQL</a> are essential tools that support web
          development and data handling.
        </p>
        <p>
          Each language has its strengths depending on the task, platform, and
          performance needs. Learning multiple languages makes you more
          versatile and capable across domains.
        </p>
      </div>

      <div>
        <h4>IDE</h4>
        <p>
          An IDE (Integrated Development Environment) is a tool that helps you
          write and manage code efficiently. Popular examples include:
          <ul>
            <li>
              <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
              — supports all languages
            </li>
            <li>
              <a href="https://www.codeblocks.org/downloads/" target="_blank">CodeBlocks</a>
              — best for C++
            </li>
            <li>
              <a href="https://www.jetbrains.com/pycharm/" target="_blank">PyCharm</a>
              — great for Python
            </li>
            <li>
              <a href="https://www.jetbrains.com/idea/" target="_blank">IntelliJ IDEA</a>
              — great for Java/Kotlin
            </li>
            <li>
              <a href="https://www.mysql.com/downloads/" target="_blank">MySQL</a>
              — for SQL and database interaction
            </li>
          </ul>
        </p>
      </div>

      <div>
        <h4>Learning Programming</h4>
        <p>
          Start with beginner-friendly languages like Python. Use online
          tutorials, coding platforms, and resources to build hands-on projects
          and learn problem-solving.
        </p>
      </div>

      <div>
        <h4>Why Learn Programming</h4>
        <ul>
          <li><b>Problem Solving:</b> Break down problems into logical steps</li>
          <li><b>Creativity:</b> Build unique apps and tools</li>
          <li><b>Career:</b> High-demand skill across tech industries</li>
          <li><b>Automation:</b> Save time by automating tasks</li>
          <li><b>Innovation:</b> Power advancements in AI and tech</li>
        </ul>
      </div>

      <div>
        <p>
          Programming is a foundational skill that can unlock countless
          opportunities. It combines logic, creativity, and constant learning.
          Whether you pursue web development, data science, or app building,
          the journey starts here.
        </p>
      </div>

      <div className="resource-section">
        <h4>📂 Downloadable Files</h4>
        <div className="file-links">
          <a href="./intro-to-programming-files/Principles of Programming.pdf" download>
            <button className="files-buttons">
              <img src="Logos/pdf-icon.png" alt="PDF" />
              <div><b>Principles of Programming</b></div>
            </button>
          </a>
          <a href="./intro-to-programming-files/Introduction to Algorithms and Programming.pdf" download>
            <button className="files-buttons">
              <img src="Logos/pdf-icon.png" alt="PDF" />
              <div><b>Intro to Algorithms</b></div>
            </button>
          </a>
          <a href="./intro-to-programming-files/PROGRAMMING TRY QUESTIONS.pdf" download>
            <button className="files-buttons">
              <img src="Logos/pdf-icon.png" alt="PDF" />
              <div><b>Try Questions</b></div>
            </button>
          </a>
        </div>
      </div>

      <div className="resource-section">
        <h4>🔗 Resourceful Websites</h4>
        <div className="external-links">
          <a href="https://www.coursera.org/articles/what-is-programming" target="_blank" rel="noopener noreferrer">
           <img src="/Logos/coursera-logo.svg" alt="Coursera" />
          </a>
          <a href="https://www.simplilearn.com/best-programming-languages-start-learning-today-article" target="_blank" rel="noopener noreferrer">
            <img src="/Logos/simplilearn_logo.svg" alt="Simplilearn" />
          </a>
          <a href="https://www.computerscience.org/resources/computer-programming-languages/" target="_blank" rel="noopener noreferrer">
            <img src="Logos/computerscienceorg-logo.svg" alt="ComputerScience.org" />
          </a>
        </div>
      </div>

      <div className="resource-section">
        <h4>🎥 YouTube Tutorials</h4>
        <div className="video-grid">
          <iframe src="https://www.youtube.com/embed/zOjov-2OZ0E" title="Intro to Programming 1" allowFullScreen />
          <iframe src="https://www.youtube.com/embed/ykSsccKKNh4" title="Intro to Programming 2" allowFullScreen />
          <iframe src="https://www.youtube.com/embed/8mAITcNt710" title="Intro to Programming 3" allowFullScreen />
          <iframe src="https://www.youtube.com/embed/F7CWjuaC6gw" title="Intro to Programming 4" allowFullScreen />
        </div>
      </div>
      </section>
      <Footer />
    </div>
  )
}

export default IntroToPragramming;

