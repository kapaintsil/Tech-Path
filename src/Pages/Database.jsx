import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import database_files from '../Data/DatabaseFiles';
import './CoursePage.css'; // Changed import

function Database() {
  return (
    <div className="course-page">
      <NavBar />
      <header className="course-header">
        <img className="course-logo" src="/images/sql-logo-2.png" alt="SQL Logo" />
        <h1 className="course-title">
          <span className="highlight">SQL</span> and <span className="highlight">Database Management</span>
        </h1>
      </header>

      <main className="course-content">
        <p>
          Before we delve into what <b>Database Management</b> and <b>SQL</b> is,
          let's talk about what <b>Data</b> is.
        </p>
        <p>
          <b>Data</b> refers to raw facts, observations, measurements, or values
          that have been collected or recorded. It is the basic building block of
          information and knowledge. In its raw form, data may not hold any
          specific meaning or context. However, when processed and analyzed, data
          can provide valuable insights and help make informed decisions.
        </p>
        <h4>Data can take various forms, including:</h4>
        <ul>
          <li><b>Textual data:</b> Written or typed information, such as articles, documents, emails, and messages.</li>
          <li><b>Numeric data:</b> Quantitative information expressed in numbers, such as temperatures, prices, or counts.</li>
          <li><b>Categorical data:</b> Data that falls into specific categories or groups, such as colors, product types, or customer segments.</li>
          <li><b>Image data:</b> Visual information stored as images or pictures.</li>
          <li><b>Audio data:</b> Sound recordings or waveforms.</li>
          <li><b>Video data:</b> Moving visual information stored as videos.</li>
        </ul>

        <h4>Data can be further classified into:</h4>
        <ul>
            <li><b>Structured data:</b> Data that is well-organized and follows a predefined format. It is typically stored in relational databases and represented as rows and columns. Structured data is easy to query and analyze using SQL.</li>
            <li><b>Semi-structured data:</b> Data that does not have a rigid structure like relational databases but contains some level of organization. It may be represented in formats like JSON or XML.</li>
            <li><b>Unstructured data:</b> Data that has no predefined structure and does not fit into traditional databases easily. Examples include text documents, social media posts, images, videos, and audio files.</li>
        </ul>

        <p>
          Data plays a crucial role in various fields and industries, including
          business, science, healthcare, finance, marketing, and more. It is the
          foundation for building machine learning models, conducting research,
          making predictions, and gaining insights into complex systems and
          processes.
        </p>

        <h3>Database Management</h3>
        <p>Database Management involves the overall administration and maintenance of databases. Key aspects include:</p>
        <ul>
          <li><b>Data Modeling:</b> Creating a conceptual representation of the data and its relationships, often using Entity-Relationship (ER) diagrams.</li>
          <li><b>Database Schema:</b> A formal description of the database's structure, defining tables, columns, data types, constraints, and relationships.</li>
          <li><b>Database Operations:</b> Basic functions like inserting, updating, deleting, and querying data.</li>
          <li><b>Data Integrity and Security:</b> Ensuring data remains accurate and consistent, and protecting it from unauthorized access.</li>
          <li><b>Data Backup and Recovery:</b> Regularly backing up the database to ensure data is recoverable.</li>
          <li><b>Database Optimization:</b> Improving database performance through indexing, query tuning, and configuration management.</li>
          <li><b>Database Administration:</b> Managing and maintaining the database system to ensure its availability, security, and performance.</li>
        </ul>

        <h3>SQL (Structured Query Language)</h3>
        <p>SQL is a domain-specific language used for managing and manipulating relational databases. Key aspects of SQL include:</p>
        <ul>
          <li><b>Data Querying:</b> Retrieving data from tables using the `SELECT` statement, with `WHERE` clauses for filtering.</li>
          <li><b>Data Manipulation:</b> Modifying data using `INSERT`, `UPDATE`, and `DELETE` statements.</li>
          <li><b>Data Definition:</b> Creating and managing database objects like tables, views, and indexes with `CREATE`, `ALTER`, and `DROP` commands.</li>
          <li><b>Data Control:</b> Granting and revoking user privileges to control access to the database.</li>
          <li><b>Data Transactions:</b> Ensuring data consistency with transaction management statements like `BEGIN TRANSACTION`, `COMMIT`, and `ROLLBACK`.</li>
          <li><b>Joins and Aggregations:</b> Combining data from multiple tables using `JOIN` operations and performing aggregations like `SUM`, `COUNT`, `AVG`, etc.</li>
        </ul>

        <div className="resource-grid">
            <img src="/photos/sqlcheatsheet1.jpg" alt="SQL Cheat Sheet 1" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/sqlcheatsheet2.jpg" alt="SQL Cheat Sheet 2" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
        </div>
      </main>

      <section className="resource-section">
        <h3>Files and Documents</h3>
        <p>Downloadable resources to supplement your learning.</p>
        <div className="resource-grid">
          {database_files.map((file, index) => (
            <a key={index} href={file.href} download className="resource-card">
              <img src={file.img} alt="File Icon" />
              <div className="resource-card-title">{file.text}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="resource-section">
        <h3>Helpful Websites</h3>
        <p>Curated links to external resources for further learning.</p>
        <div className="resource-grid">
          <a href="https://learn.microsoft.com/en-us/sql/relational-databases/databases/databases?view=sql-server-ver16" target="_blank" rel="noreferrer" className="resource-card">
            <img src="/images/microsoft-logo.png" alt="Microsoft Logo" />
            <div className="resource-card-title">Microsoft Learn</div>
          </a>
          <a href="https://www.w3schools.com/sql/sql_intro.asp" target="_blank" rel="noreferrer" className="resource-card">
             <div className="resource-card-title">W3Schools SQL</div>
          </a>
          <a href="https://www.codecademy.com/learn/learn-sql" target="_blank" rel="noreferrer" className="resource-card">
            <img src="/images/codecademy-logo.png" alt="Codecademy Logo" />
            <div className="resource-card-title">Codecademy</div>
          </a>
          <a href="https://learnsql.com/" target="_blank" rel="noreferrer" className="resource-card">
            <div className="resource-card-title">LearnSQL.com</div>
          </a>
          <a href="https://teamtreehouse.com/tracks/beginning-sql" target="_blank" rel="noreferrer" className="resource-card">
            <div className="resource-card-title">Team Treehouse</div>
          </a>
        </div>
      </section>

      <section className="youtube-section">
        <h3>YouTube Tutorials</h3>
        <p>Hand-picked video tutorials to get you started.</p>
        <div className="youtube-grid">
          <iframe className="youtube-video" src="https://www.youtube.com/embed/4cWkVbC2bNE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/6Iu45VZGQDk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/5OdVJbNCSso" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/7S_tz1z_5bA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Database;