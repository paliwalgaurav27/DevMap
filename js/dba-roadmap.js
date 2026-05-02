/*
  File: js/dba-roadmap.js
  Purpose: Database Administrator roadmap data and rendering logic for DevMap
  Author: Placeholder
*/

const nodes = [
  // SPINE
  {
    id: "computer-basics", type: "spine", 
    icon: "💻", name: "Computer Basics", 
    desc: "How memory, CPU, and disks work.",
    what: "Understanding the physical limitations of the hardware your database runs on.",
    why: "You cannot optimize a database if you don't know the difference between RAM and SSD.",
    time: "1-2 weeks"
  },
  {
    id: "sql", type: "spine", 
    icon: "🔍", name: "SQL Fundamentals", 
    desc: "The language of databases.",
    what: "Structured Query Language is how you ask the database for information.",
    why: "It is the fundamental skill every data professional must master.",
    time: "3-4 weeks"
  },
  {
    id: "rdbms", type: "spine", 
    icon: "🗄️", name: "Relational Databases", 
    desc: "Systems that manage tables of data.",
    what: "Software like Postgres or MySQL that actually stores the data securely.",
    why: "Writing SQL is useless without a database to run it against.",
    time: "2-3 weeks"
  },
  {
    id: "db-design", type: "spine", 
    icon: "📐", name: "Database Design", 
    desc: "Structuring your tables properly.",
    what: "Figuring out what tables to make and how they connect to each other.",
    why: "Bad design early on leads to catastrophically slow queries later.",
    time: "3-4 weeks"
  },
  {
    id: "optimization", type: "spine", 
    icon: "⚡", name: "Query Optimization", 
    desc: "Making slow queries fast.",
    what: "Analyzing why a query takes 10 seconds and rewriting it to take 0.1 seconds.",
    why: "When the app goes viral, slow queries will crash the entire system.",
    time: "1-2 months"
  },
  {
    id: "backups", type: "spine", 
    icon: "🛡️", name: "Backups and Recovery", 
    desc: "Saving the day when things break.",
    what: "Making copies of the data and knowing how to restore them.",
    why: "If a developer accidentally deletes a table, you are the only one who can save the company.",
    time: "2-3 weeks"
  },
  {
    id: "cloud", type: "spine", 
    icon: "☁️", name: "Cloud Databases", 
    desc: "Running databases on AWS/GCP.",
    what: "Managed database services hosted in the cloud.",
    why: "Very few companies host their own physical database servers anymore.",
    time: "2-3 weeks"
  },
  {
    id: "advanced", type: "spine", 
    icon: "🏗️", name: "Advanced Topics", 
    desc: "Scaling to millions of users.",
    what: "Distributed systems, sharding, and data warehousing.",
    why: "When one database server isn't enough, you have to split the data across many.",
    time: "Ongoing"
  },

  // SQL Fundamentals Branches
  {
    id: "select", parent: "sql", side: "left", type: "branch",
    icon: "🎯", name: "SELECT and Filtering", desc: "Get exactly the data you need",
    what: "Using SELECT, WHERE, and LIMIT to pull specific rows.",
    why: "The most common operation you will ever do.",
    time: "1 week"
  },
  {
    id: "joins", parent: "sql", side: "left", type: "branch",
    icon: "🔗", name: "JOINs", desc: "Combine data across tables",
    what: "Connecting Users to Orders using shared IDs.",
    why: "Relational databases are built on relationships. JOINs are how you traverse them.",
    time: "1-2 weeks"
  },
  {
    id: "aggregations", parent: "sql", side: "right", type: "branch",
    icon: "📊", name: "Aggregations", desc: "COUNT, SUM, GROUP BY",
    what: "Summarizing thousands of rows into a single number or group.",
    why: "Essential for analytics and reporting.",
    time: "1 week"
  },
  {
    id: "subqueries", parent: "sql", side: "right", type: "branch",
    icon: "📥", name: "Subqueries", desc: "Queries inside queries",
    what: "Using the result of one query as the filter for another query.",
    why: "Needed for complex logic where a simple JOIN isn't enough.",
    time: "1-2 weeks"
  },

  // Relational Databases Branches
  {
    id: "postgres", parent: "rdbms", side: "left", type: "branch",
    icon: "🐘", name: "PostgreSQL", desc: "Powerful, open source",
    what: "The world's most advanced open-source relational database.",
    why: "It is the industry standard for modern, robust applications.",
    time: "2-3 weeks"
  },
  {
    id: "mysql", parent: "rdbms", side: "left", type: "alternative",
    icon: "🐬", name: "MySQL", desc: "Alternative",
    what: "Another massively popular open-source database.",
    why: "Very common in older tech stacks (like PHP/WordPress).",
    time: "1 week"
  },
  {
    id: "sqlite", parent: "rdbms", side: "right", type: "branch",
    icon: "🪶", name: "SQLite", desc: "Lightweight, great for learning",
    what: "A database that lives in a single file on your computer.",
    why: "Perfect for local development and mobile apps without needing a server.",
    time: "3-5 days"
  },
  {
    id: "sqlserver", parent: "rdbms", side: "right", type: "branch",
    icon: "🏢", name: "SQL Server", desc: "Enterprise environments",
    what: "Microsoft's proprietary relational database.",
    why: "Heavily used in corporate, enterprise, and .NET environments.",
    time: "1-2 weeks"
  },

  // Database Design Branches
  {
    id: "normalization", parent: "db-design", side: "left", type: "branch",
    icon: "📏", name: "Normalization", desc: "Remove redundant data",
    what: "Rules for structuring tables so data is only stored in one place.",
    why: "Prevents data anomalies (like updating an address in one place but missing another).",
    time: "1-2 weeks"
  },
  {
    id: "er", parent: "db-design", side: "left", type: "branch",
    icon: "🗺️", name: "Entity Relationships", desc: "How tables connect",
    what: "Designing 1-to-1, 1-to-many, and many-to-many relationships.",
    why: "You have to map real-world concepts (users, posts, tags) to tables.",
    time: "1 week"
  },
  {
    id: "indexes", parent: "db-design", side: "right", type: "branch",
    icon: "📑", name: "Indexes", desc: "Make queries fast",
    what: "A data structure that helps the DB find rows instantly instead of scanning the whole table.",
    why: "The #1 easiest way to speed up a slow database.",
    time: "1-2 weeks"
  },
  {
    id: "migrations", parent: "db-design", side: "right", type: "branch",
    icon: "🏗️", name: "Schema Migrations", desc: "Change structure safely",
    what: "Code scripts that alter tables without losing data.",
    why: "Your app will evolve. You need a safe way to add columns to a table with 10 million rows.",
    time: "1-2 weeks"
  },

  // Query Optimization Branches
  {
    id: "explain", parent: "optimization", side: "left", type: "branch",
    icon: "🔍", name: "EXPLAIN and Plans", desc: "See what the DB is doing",
    what: "A command that tells you exactly how the database executed your query.",
    why: "You cannot fix a slow query if you don't know why it's slow.",
    time: "1-2 weeks"
  },
  {
    id: "index-strategy", parent: "optimization", side: "left", type: "branch",
    icon: "🎯", name: "Index Strategy", desc: "Which columns to index",
    what: "Knowing when to use b-tree vs hash indexes, and when too many indexes hurt performance.",
    why: "Every index slows down INSERTs. You must balance read vs write speed.",
    time: "2-3 weeks"
  },
  {
    id: "slow-query", parent: "optimization", side: "right", type: "branch",
    icon: "🐢", name: "Slow Query Log", desc: "Find and fix bottlenecks",
    what: "A log file that records any query that took longer than a specified time.",
    why: "It is how you hunt down the bad queries killing your server.",
    time: "1 week"
  },
  {
    id: "pooling", parent: "optimization", side: "right", type: "later",
    icon: "🏊", name: "Connection Pooling", desc: "Later",
    what: "Reusing a small number of database connections for thousands of requests.",
    why: "Opening a new connection for every user is extremely slow and will crash the DB.",
    time: "1 week"
  },

  // Backups and Recovery Branches
  {
    id: "auto-backups", parent: "backups", side: "left", type: "branch",
    icon: "🕰️", name: "Automated Backups", desc: "Scheduled and reliable",
    what: "Scripts that automatically dump the database to secure storage daily.",
    why: "If you have to remember to do it manually, you will eventually forget.",
    time: "1 week"
  },
  {
    id: "pitr", parent: "backups", side: "left", type: "branch",
    icon: "⏪", name: "Point in Time Recovery", desc: "Roll back to any moment",
    what: "Restoring a database to its exact state at 2:14 PM before the bad code ran.",
    why: "Daily backups lose a whole day of data. PITR loses almost nothing.",
    time: "1-2 weeks"
  },
  {
    id: "replication", parent: "backups", side: "right", type: "later",
    icon: "👯", name: "Replication", desc: "Later",
    what: "Copying data from a primary server to replica servers in real time.",
    why: "Allows you to route heavy read-queries to replicas, saving the primary for writes.",
    time: "2 weeks"
  },
  {
    id: "failover", parent: "backups", side: "right", type: "later",
    icon: "🚑", name: "Failover", desc: "Later",
    what: "Automatically switching to a replica if the main server physically dies.",
    why: "Ensures the app stays online even if the data center catches fire.",
    time: "2 weeks"
  },

  // Cloud Databases Branches
  {
    id: "aws-rds", parent: "cloud", side: "left", type: "branch",
    icon: "☁️", name: "AWS RDS", desc: "Managed cloud database",
    what: "Amazon's service that handles updates, backups, and failovers for you.",
    why: "It frees the DBA from managing hardware and focuses them on queries.",
    time: "1-2 weeks"
  },
  {
    id: "supabase", parent: "cloud", side: "left", type: "branch",
    icon: "⚡", name: "Supabase", desc: "Modern Postgres platform",
    what: "A backend-as-a-service built entirely around Postgres.",
    why: "Extremely popular for modern fullstack apps, gives APIs out of the box.",
    time: "1-2 weeks"
  },
  {
    id: "planetscale", parent: "cloud", side: "right", type: "alternative",
    icon: "🪐", name: "PlanetScale", desc: "Alternative",
    what: "A serverless MySQL platform designed for massive scale and easy migrations.",
    why: "Great alternative if you prefer the MySQL ecosystem.",
    time: "1 week"
  },
  {
    id: "firebase", parent: "cloud", side: "right", type: "branch",
    icon: "🔥", name: "Firebase", desc: "Document based for apps",
    what: "Google's NoSQL document database often used for mobile apps.",
    why: "Good to understand how non-relational cloud data works.",
    time: "1 week"
  },

  // Advanced Topics Branches
  {
    id: "nosql", parent: "advanced", side: "left", type: "branch",
    icon: "🍃", name: "NoSQL", desc: "MongoDB, Redis",
    what: "Databases that don't use tables, rows, or SQL.",
    why: "Some data (like chat logs or user sessions) doesn't fit well in a strict table.",
    time: "2-3 weeks"
  },
  {
    id: "data-warehouse", parent: "advanced", side: "left", type: "later",
    icon: "🏭", name: "Data Warehousing", desc: "Later",
    what: "Massive databases (like Snowflake or Redshift) specifically for analytics.",
    why: "Running heavy analytics on your production DB will slow it down for users.",
    time: "3-4 weeks"
  },
  {
    id: "sharding", parent: "advanced", side: "right", type: "later",
    icon: "🔪", name: "Sharding", desc: "Later",
    what: "Splitting one massive table across multiple physical servers.",
    why: "When a table hits 10 billion rows, one computer simply cannot hold it.",
    time: "3-4 weeks"
  },
  {
    id: "cap-theorem", parent: "advanced", side: "right", type: "later",
    icon: "⚖️", name: "CAP Theorem", desc: "Later",
    what: "A theory stating distributed data stores can only provide two of: Consistency, Availability, Partition tolerance.",
    why: "Crucial theoretical knowledge for architecting global databases.",
    time: "1 week"
  }
];

// Layout logic
document.addEventListener('DOMContentLoaded', () => {
  const mapElement = document.getElementById("roadmap-map");
  const svgElement = document.getElementById("roadmap-svg");
  const nodesContainer = document.getElementById("roadmap-nodes");
  
  if (!mapElement || !svgElement || !nodesContainer) return;

  const SPINE_GAP = 220;
  const BRANCH_GAP_Y = 100;
  const BRANCH_GAP_X = 280;
  
  const layout = {};
  
  // 1. Layout Spine
  const spineNodes = nodes.filter(n => n.type === 'spine' || n.type === 'gate');
  const centerX = Math.max(mapElement.clientWidth / 2, 500); // Ensure minimum canvas width
  
  spineNodes.forEach((node, index) => {
    layout[node.id] = {
      x: centerX,
      y: 50 + (index * SPINE_GAP),
      node: node
    };
  });

  // 2. Layout Branches
  const parents = [...spineNodes];
  const frameworkNodes = nodes.filter(n => n.type === 'framework');
  
  // Frameworks branch off the gate
  let fLeftCount = 0;
  let fRightCount = 0;
  frameworkNodes.forEach(node => {
    const parentPos = layout["framework-gate"];
    if (!parentPos) return; // Prevent error if gate doesn't exist
    const isLeft = node.side === 'left';
    const count = isLeft ? fLeftCount++ : fRightCount++;
    layout[node.id] = {
      x: parentPos.x + (isLeft ? -BRANCH_GAP_X : BRANCH_GAP_X),
      y: parentPos.y + 120 + (count * BRANCH_GAP_Y),
      node: node
    };
  });

  nodes.forEach(node => {
    if (node.type !== 'spine' && node.type !== 'gate' && node.type !== 'framework') {
      const parentPos = layout[node.parent];
      if (!parentPos) return;
      
      // Count siblings on same side to stack vertically
      const siblingsOnSide = nodes.filter(n => n.parent === node.parent && n.side === node.side);
      const myIndex = siblingsOnSide.findIndex(n => n.id === node.id);
      
      layout[node.id] = {
        x: parentPos.x + (node.side === 'left' ? -BRANCH_GAP_X : BRANCH_GAP_X),
        y: parentPos.y + (myIndex * BRANCH_GAP_Y),
        node: node
      };
    }
  });

  // Calculate maximum height to adjust container
  let maxY = 0;
  Object.values(layout).forEach(pos => {
    if (pos.y > maxY) maxY = pos.y;
  });
  mapElement.style.height = `${maxY + 200}px`;

  // Draw Nodes
  Object.values(layout).forEach(pos => {
    const el = document.createElement('div');
    el.className = `roadmap-node ${pos.node.type}`;
    
    let dataType = 'core';
    if (pos.node.type === 'alternative') dataType = 'alternative';
    if (pos.node.type === 'later') dataType = 'later';
    el.setAttribute('data-type', dataType);

    // Center element on coordinate
    // Width is defined in CSS, typically ~260-300px
    const halfWidth = (pos.node.type === 'spine' ? 140 : (pos.node.type === 'gate' ? 150 : 130));
    el.style.left = `${pos.x - halfWidth}px`;
    el.style.top = `${pos.y}px`;
    
    let labelHTML = '';
    if (pos.node.type === 'later' || pos.node.type === 'alternative') {
      labelHTML = `<span class="node-label">${pos.node.type}</span>`;
    }

    el.innerHTML = `
      ${labelHTML}
      <div class="node-header">
        <span class="node-icon">${pos.node.icon}</span>
        <span class="node-title">${pos.node.name}</span>
      </div>
      <div class="node-desc">${pos.node.desc}</div>
    `;

    el.addEventListener('click', () => {
      if (window.DevMap && window.DevMap.openPopup) {
        window.DevMap.openPopup(`
          <h3 style="margin-bottom: 1rem; font-size: 1.5rem; display: flex; align-items: center; gap: 8px;">
            ${pos.node.icon} ${pos.node.name}
          </h3>
          <p style="margin-bottom: 1rem;"><strong>What it is:</strong> ${pos.node.what}</p>
          <p style="margin-bottom: 1.5rem;"><strong>Why you need it:</strong> ${pos.node.why}</p>
          <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; text-align: center; display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <div style="font-weight: 600; color: #1f2937;">
              Realistic Time: ${pos.node.time}
            </div>
            <a href="https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(pos.node.name)}" target="_blank" class="btn" style="background: var(--color-primary); color: #ffffff; width: 100%; border-radius: 6px; text-decoration: none;">
              Read more on MDN Web Docs
            </a>
          </div>
        `);
      }
    });

    nodesContainer.appendChild(el);
  });

  // Draw SVG Lines
  svgElement.innerHTML = `
    <defs>
      <marker id="arrow-spine" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#7C3AED" />
      </marker>
      <marker id="arrow-branch" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#A855F7" />
      </marker>
    </defs>
  `;

  // Draw spine connections
  for (let i = 0; i < spineNodes.length - 1; i++) {
    const from = layout[spineNodes[i].id];
    const to = layout[spineNodes[i + 1].id];
    
    // Line from bottom of current to top of next
    const startY = from.y + 100; // Approx height
    const endY = to.y - 15; // Gap for arrow
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    path.setAttribute('x1', from.x);
    path.setAttribute('y1', startY);
    path.setAttribute('x2', to.x);
    path.setAttribute('y2', endY);
    path.setAttribute('class', 'roadmap-spine-line');
    path.setAttribute('marker-end', 'url(#arrow-spine)');
    svgElement.appendChild(path);
  }

  // Draw branch connections
  nodes.forEach(node => {
    if (node.parent && layout[node.parent]) {
      const from = layout[node.parent];
      const to = layout[node.id];
      
      const isSpineParent = (from.node.type === 'spine' || from.node.type === 'gate');
      const startX = from.x + (node.side === 'left' ? -140 : 140);
      const startY = from.y + 40; // Mid height
      
      const endX = to.x + (node.side === 'left' ? 130 : -130);
      const endY = to.y + 40;
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      
      if (node.type === 'framework') {
        // Drop down and out
        path.setAttribute('d', `M ${from.x} ${from.y + 100} Q ${from.x} ${endY}, ${endX} ${endY}`);
      } else {
        path.setAttribute('d', `M ${startX} ${startY} Q ${(startX + endX)/2} ${startY}, ${(startX + endX)/2} ${(startY + endY)/2} T ${endX} ${endY}`);
      }
      
      path.setAttribute('class', 'roadmap-branch-line');
      path.setAttribute('marker-end', 'url(#arrow-branch)');
      svgElement.appendChild(path);
    }
  });

  // Legend Filtering Logic
  const legendChips = document.querySelectorAll('.legend-chip');
  const allNodeElements = document.querySelectorAll('.roadmap-node');

  function applyFilter(filterType) {
    // Reset all
    allNodeElements.forEach(node => node.classList.remove('faded'));
    legendChips.forEach(chip => chip.classList.remove('active'));

    if (!filterType) return;

    const activeChip = document.querySelector(`.legend-chip[data-filter="${filterType}"]`);
    if (activeChip) activeChip.classList.add('active');

    allNodeElements.forEach(node => {
      const type = node.getAttribute('data-type');
      
      if (filterType === 'core') {
        if (type === 'alternative' || type === 'later') {
          node.classList.add('faded');
        }
      } else if (filterType === 'alternative') {
        if (type === 'later') {
          node.classList.add('faded');
        }
      } else if (filterType === 'later') {
        // all nodes full opacity
      }
    });
  }

  legendChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      const filter = e.target.getAttribute('data-filter');
      
      if (e.target.classList.contains('active')) {
        applyFilter(null);
      } else {
        applyFilter(filter);
      }
    });
  });

});
