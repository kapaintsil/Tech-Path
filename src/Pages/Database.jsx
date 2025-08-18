import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import database_files from '../Data/DatabaseFiles';
import './Database.css';

function Database() {
  return (
    <div>
      <NavBar />
       <section className="course-section">
      {/* Header Section */}
      <div className="database-topic">
        <img className="database-image" src="images/sql-logo-2.png" alt="" />
        <h3>
          <strong className="database-strong">SQL</strong> and{" "}
          <strong className="database-strong">Database Management</strong>
        </h3>
      </div>

      {/* Content */}
      <div>
        <p>
          Before we delve into what <b>Database Management</b> and <b>SQL</b> is,
          let is talk about what <b>Data</b> is.
        </p>
        <p>
          <b>Data</b> refers to raw facts, observations, measurements, or values
          that have been collected or recorded. It is the basic building block of
          information and knowledge. In its raw form, data may not hold any
          specific meaning or context. However, when processed and analyzed, data
          can provide valuable insights and help make informed decisions.
        </p>
        <p>Data can take various forms, including:</p>
        <ol type="1">
          <li>
            <b>Textual data:</b> Written or typed information, such as articles,
            documents, emails, and messages.
          </li>
          <li>
            <b>Numeric data:</b> Quantitative information expressed in numbers,
            such as temperatures, prices, or counts.
          </li>
          <li>
            <b>Categorical data:</b> Data that falls into specific categories or
            groups, such as colors, product types, or customer segments.
          </li>
          <li>
            <b>Image data:</b> Visual information stored as images or pictures.
          </li>
          <li>
            <b>Audio data:</b> Sound recordings or waveforms.
          </li>
          <li>
            <b>Video data:</b> Moving visual information stored as videos.
          </li>
        </ol>

        <p>
          Data can be further classified into structured, semi-structured, and
          unstructured data:
        </p>
        <ol type="1">
          <li>
            <b>Structured data:</b> Data that is well-organized and follows a
            predefined format. It is typically stored in relational databases and
            represented as rows and columns. Structured data is easy to query and
            analyze using SQL.
          </li>
          <li>
            <b>Semi-structured data:</b> Data that does not have a rigid
            structure like relational databases but contains some level of
            organization. It may be represented in formats like JSON (JavaScript
            Object Notation) or XML (eXtensible Markup Language).
          </li>
          <li>
            <b>Unstructured data:</b> Data that has no predefined structure and
            does not fit into traditional databases easily. Examples include text
            documents, social media posts, images, videos, and audio files.
            Analyzing unstructured data often requires more advanced techniques,
            such as natural language processing (NLP) for text data or computer
            vision for image data.
          </li>
        </ol>

        <p>
          Data plays a crucial role in various fields and industries, including
          business, science, healthcare, finance, marketing, and more. It is the
          foundation for building machine learning models, conducting research,
          making predictions, and gaining insights into complex systems and
          processes.
        </p>
        <p>
          When data is processed, organized, and presented in a meaningful way,
          it becomes information that can be used to make informed decisions,
          identify patterns, and extract knowledge. Effective data management,
          analysis, and interpretation are essential to harness the full
          potential of data and unlock its value.
        </p>
        <p>
          Now that we have a fair idea of what <b>data</b> is we can dive what{" "}
          <b>Database Management</b> and <b>SQL</b> are.
        </p>
        <p>
          <b>Database Management</b> and{" "}
          <b>SQL (Structured Query Language)</b> are essential components in the
          field of computer science and data management. They are used to
          organize, store, retrieve, and manipulate data efficiently and
          securely. Let's dive into each of them in detail:
        </p>

        {/* Database Management */}
        <p>
          <b>Database Management:</b>
        </p>
        <ol type="a">
          <li>
            <b>Data Modeling:</b> In this phase, database designers create a
            conceptual representation of the data and its relationships. Various
            techniques like Entity-Relationship (ER) diagrams are used to map out
            the structure of the database.
          </li>
          <li>
            <b>Database Schema: </b>The database schema is a formal description of
            the database's structure, defining the tables, their columns, data
            types, constraints, and relationships between tables.
          </li>
          <li>
            <b>Database Operations:</b> These are the basic functions performed on
            a database, such as inserting, updating, deleting, and querying data.
            Database management systems (DBMS) provide an interface to interact
            with the database using SQL or other programming languages.
          </li>
          <li>
            <b>Data Integrity and Security:</b> Maintaining data integrity ensures
            that the data remains accurate and consistent throughout its
            lifecycle. Database administrators implement security measures to
            protect sensitive information from unauthorized access.
          </li>
          <li>
            <b>Data Backup and Recovery:</b> Regularly backing up the database
            ensures data is recoverable in case of hardware failures or data
            corruption.
          </li>
          <li>
            <b>Database Optimization:</b> Database administrators optimize the
            database's performance by creating indexes, managing query execution
            plans, and tuning the configuration to improve response times.
          </li>
          <li>
            <b>Database Administration:</b> Database administrators (DBAs) are
            responsible for managing and maintaining the database system,
            ensuring its availability, security, and performance.
          </li>
        </ol>

        {/* SQL Section */}
        <p>
          <b>SQL (Structured Query Language):</b> SQL is a domain-specific language
          used for managing and manipulating relational databases. It provides a
          standardized way to interact with the database and perform various
          operations on the data. SQL is both a declarative and procedural
          language, meaning that it allows users to specify what they want to
          achieve without specifying how to do it. The key aspects of SQL include:
        </p>
        <ol type="a">
          <li>
            <b>Data Querying: </b>SQL allows users to retrieve data from one or
            more tables using the SELECT statement. Users can specify conditions
            using WHERE clauses to filter data based on specific criteria.
          </li>
          <li>
            <b>Data Manipulation: </b>SQL supports INSERT, UPDATE, and DELETE
            statements to modify data in the database. These statements help add
            new records, update existing records, or delete unwanted data.
          </li>
          <li>
            <b>Data Definition: </b>SQL provides statements for creating, altering,
            and dropping database objects such as tables, views, indexes, and
            stored procedures. The CREATE, ALTER, and DROP commands are used for
            these operations.
          </li>
          <li>
            <b>Data Control:</b> SQL includes commands for granting and revoking
            privileges to users to control access to the database.
          </li>
          <li>
            <b>Data Transactions:</b> SQL supports transaction management using
            the BEGIN TRANSACTION, COMMIT, and ROLLBACK statements, ensuring data
            consistency and integrity even in the presence of failures.
          </li>
          <li>
            <b>Joins and Aggregations: </b>SQL allows users to combine data from
            multiple tables using JOIN operations and perform aggregations like
            SUM, COUNT, AVG, etc., to summarize data.
          </li>
        </ol>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img className="sql-photos" src="photos/sqlcheatsheet1.jpg" alt="sql-photo" />
          <img className="sql-photos" src="photos/sqlcheatsheet2.jpg" alt="sql-photo" />
        </div>

        <p>
          SQL is supported by almost all major database management systems like
          MySQL, PostgreSQL, Oracle, SQL Server, SQLite, and others. While the
          core SQL syntax remains fairly consistent across these systems, there
          may be slight variations and additional features specific to each
          database implementation.
        </p>
        <p>
          In summary, Database Management involves the overall administration and
          maintenance of databases, while SQL is the language used to interact
          with databases, perform queries, and manage data within them. Together,
          they form the foundation for data-driven applications and
          decision-making in various domains.
        </p>
      </div>

      {/* File and Document Downloads */}
      <div style={{ color: "gray", textAlign: "center", paddingTop: "50px" }}>
        <p>
          Files and Documents on Everything You Need To Know About{" "}
          <b>Database Management</b> and <b>SQL</b>
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        {database_files.map((file, index) => (
          <a
            key={index}
            style={{ textDecoration: "none" }}
            href={file.href}
            download
          >
            <div className="files-buttons">
              <img style={{ height: "100px" }} src={file.img} alt="" />
              <div>
                <b>{file.text}</b>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Websites */}
      <div style={{ color: "gray", textAlign: "center", paddingTop: "50px" }}>
        <p>
          Resourceful Websites To Get Everything You Need To Know About Database
          and Database Management
        </p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button className="websites-link-button">
            <a
              href="https://learn.microsoft.com/en-us/sql/relational-databases/databases/databases?view=sql-server-ver16"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ height: "35px" }}
                src="images/microsoft-logo.png"
                alt=""
              />
              <b style={{ fontSize: "40px", color: "rgb(161, 160, 160)" }}>
                Learn
              </b>
            </a>
          </button>
          <button className="websites-link-button">
            <a
              href="https://www.w3schools.com/sql/sql_intro.asp"
              target="_blank"
              rel="noreferrer"
            >
              <b
                style={{
                  fontSize: "36px",
                  color: "rgb(4,170,109)",
                  fontFamily: "'Lobster Two', cursive",
                }}
              >
                W3
              </b>
              <b style={{ fontSize: "24px", color: "rgb(4,170,109)" }}> SQL</b>
            </a>
          </button>
          <button className="websites-link-button">
            <a
              href="https://www.codecademy.com/learn/learn-sql"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ height: "70px" }}
                src="images/codecademy-logo.png"
                alt=""
              />
            </a>
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button
            style={{ backgroundColor: "rgb(3, 3, 37)" }}
            className="websites-link-button"
          >
            <a href="https://learnsql.com/" target="_blank" rel="noreferrer">
              <b style={{ color: "white", fontSize: "40px" }}>Learn</b>
              <b style={{ color: "blue", fontSize: "40px" }}>SQL</b>
              <br />
              <b style={{ color: "blue", fontSize: "30px" }}>.</b>
              <b style={{ color: "white", fontSize: "20px" }}>com</b>
            </a>
          </button>
          <button
            style={{ backgroundColor: "rgb(32, 33, 36)" }}
            className="websites-link-button"
          >
            <a
              href="https://teamtreehouse.com/tracks/beginning-sql"
              target="_blank"
              rel="noreferrer"
            >
              <b style={{ color: "lightgreen", fontSize: "30px" }}>
                TreeHouse
              </b>
            </a>
          </button>
        </div>
      </div>

      {/* YouTube Tutorials */}
      <div style={{ color: "gray", textAlign: "center", paddingTop: "50px" }}>
        <p>The Best YouTube Tutorials to get you Started on Database and SQL</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <iframe
            style={{ margin: "10px" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4cWkVbC2bNE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            style={{ margin: "10px" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6Iu45VZGQDk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <iframe
            style={{ margin: "10px" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5OdVJbNCSso"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            style={{ margin: "10px" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7S_tz1z_5bA"
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

export default Database;