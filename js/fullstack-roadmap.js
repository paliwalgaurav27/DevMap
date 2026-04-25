/*
  File: js/fullstack-roadmap.js
  Purpose: Fullstack roadmap data and rendering logic for DevMap
  Author: Placeholder
*/

const nodes = [
  // SPINE
  {
    id: "html-css", type: "spine", 
    icon: "🏗", name: "HTML and CSS", 
    desc: "The structural and visual foundation.",
    what: "HTML provides structure, CSS provides style. They are the only way browsers render interfaces.",
    why: "You can't build a web app if you don't know how to put a box on the screen.",
    time: "3-4 weeks"
  },
  {
    id: "javascript", type: "spine", 
    icon: "⚙", name: "JavaScript", 
    desc: "The logic of the web.",
    what: "The programming language that runs in the browser and handles interactivity.",
    why: "It is the only language that natively runs in every web browser.",
    time: "2-3 months"
  },
  {
    id: "react", type: "spine", 
    icon: "⚛️", name: "React.js", 
    desc: "Building the interface with components.",
    what: "A JavaScript library for building UI out of reusable pieces.",
    why: "The industry standard for building complex frontends.",
    time: "1-2 months"
  },
  {
    id: "node", type: "spine", 
    icon: "🟢", name: "Node.js and Express", 
    desc: "JavaScript on the server.",
    what: "Node lets you run JS outside the browser. Express makes building APIs easy.",
    why: "You already learned JS for the frontend—this lets you use it for the backend too.",
    time: "1-2 months"
  },
  {
    id: "databases", type: "spine", 
    icon: "🗄️", name: "Databases", 
    desc: "Storing your app's data.",
    what: "Systems designed to store, retrieve, and manage data efficiently.",
    why: "Without a database, your app forgets everything the moment it restarts.",
    time: "1 month"
  },
  {
    id: "apis", type: "spine", 
    icon: "🔌", name: "REST APIs", 
    desc: "Connecting the frontend and backend.",
    what: "The communication layer that lets your React app ask your Node app for data.",
    why: "Without this, your frontend and backend are completely isolated.",
    time: "2-3 weeks"
  },
  {
    id: "auth", type: "spine", 
    icon: "🔐", name: "Authentication", 
    desc: "Identifying users securely.",
    what: "The process of logging users in and keeping them logged in.",
    why: "If you want user accounts, you must understand auth.",
    time: "2-3 weeks"
  },
  {
    id: "deployment", type: "spine", 
    icon: "🚀", name: "Deployment", 
    desc: "Putting it on the internet.",
    what: "Moving your code from your laptop to public servers.",
    why: "It's not a real product until anyone with the link can use it.",
    time: "1-2 weeks"
  },
  {
    id: "system-basics", type: "spine", 
    icon: "🏗️", name: "System Basics", 
    desc: "How everything fits together.",
    what: "General knowledge about architecture, version control, and environments.",
    why: "A fullstack developer must understand the entire lifecycle of an app.",
    time: "Ongoing"
  },

  // HTML and CSS Branches
  {
    id: "semantic", parent: "html-css", side: "left", type: "branch",
    icon: "📄", name: "Semantic HTML", desc: "Structure with meaning",
    what: "Using the correct tags (like nav, article, footer) instead of just divs.",
    why: "Crucial for accessibility and SEO.",
    time: "1 week"
  },
  {
    id: "tailwind", parent: "html-css", side: "right", type: "branch",
    icon: "🌀", name: "Tailwind CSS", desc: "Utility first styling",
    what: "A CSS framework that lets you style elements directly in your HTML.",
    why: "It speeds up frontend development massively once you learn the classes.",
    time: "1-2 weeks"
  },
  {
    id: "responsive", parent: "html-css", side: "right", type: "branch",
    icon: "📱", name: "Responsive Design", desc: "Works on all screens",
    what: "Making your layout adapt to mobile phones, tablets, and desktops.",
    why: "Over 50% of web traffic is mobile.",
    time: "1-2 weeks"
  },

  // JavaScript Branches
  {
    id: "es6", parent: "javascript", side: "left", type: "branch",
    icon: "⚡", name: "ES6+", desc: "Modern JS syntax",
    what: "The modern features added to JS since 2015 (arrow functions, destructuring).",
    why: "React heavily relies on these modern patterns.",
    time: "1-2 weeks"
  },
  {
    id: "dom", parent: "javascript", side: "left", type: "branch",
    icon: "🌐", name: "DOM APIs", desc: "Control the page",
    what: "Browser tools JS uses to change the HTML and listen for clicks.",
    why: "You need to know how the browser works before using a framework that abstracts it.",
    time: "1-2 weeks"
  },
  {
    id: "async", parent: "javascript", side: "right", type: "branch",
    icon: "⏳", name: "Async / Await", desc: "Handle timing and data",
    what: "Cleaner syntax for handling operations that take time, like fetching data.",
    why: "Every time you talk to your backend, you will use this.",
    time: "1-2 weeks"
  },
  {
    id: "typescript", parent: "javascript", side: "right", type: "later",
    icon: "🔷", name: "TypeScript", desc: "Later",
    what: "JavaScript with syntax for types.",
    why: "Catches bugs before they run, but adds complexity. Learn standard JS first.",
    time: "2-3 weeks"
  },

  // React.js Branches
  {
    id: "hooks", parent: "react", side: "left", type: "branch",
    icon: "🪝", name: "React Hooks", desc: "useState, useEffect",
    what: "Functions that let you hook into React state and lifecycle features.",
    why: "This is how all modern React components manage data and side effects.",
    time: "2-3 weeks"
  },
  {
    id: "router", parent: "react", side: "left", type: "branch",
    icon: "🧭", name: "React Router", desc: "Page navigation",
    what: "A library that handles changing 'pages' without actually reloading the browser.",
    why: "Single Page Applications need a way to have multiple views.",
    time: "1 week"
  },
  {
    id: "zustand", parent: "react", side: "right", type: "branch",
    icon: "🐻", name: "Zustand", desc: "Simple state management",
    what: "A small, fast state management solution for React.",
    why: "When passing data between components gets messy, this keeps it clean without Redux's boilerplate.",
    time: "1 week"
  },
  {
    id: "redux", parent: "react", side: "right", type: "alternative",
    icon: "🔴", name: "Redux", desc: "Alternative",
    what: "A powerful, standard state management library.",
    why: "Used in many enterprise apps, but often overkill for smaller projects.",
    time: "2 weeks"
  },

  // Node.js and Express Branches
  {
    id: "nodejs", parent: "node", side: "left", type: "branch",
    icon: "🟢", name: "Node.js", desc: "JS on the server",
    what: "The runtime that allows executing JS on a server.",
    why: "The foundation of the JS backend ecosystem.",
    time: "1-2 weeks"
  },
  {
    id: "express", parent: "node", side: "left", type: "branch",
    icon: "🚂", name: "Express.js", desc: "Build APIs fast",
    what: "A minimal web framework for Node.",
    why: "It is the standard way to build servers and handle routes in Node.",
    time: "1-2 weeks"
  },
  {
    id: "rest-design", parent: "node", side: "right", type: "branch",
    icon: "📐", name: "REST API Design", desc: "Structure endpoints",
    what: "The principles of designing clean, predictable URLs for your API.",
    why: "If your API is a mess, connecting your frontend will be a nightmare.",
    time: "1 week"
  },
  {
    id: "middleware", parent: "node", side: "right", type: "branch",
    icon: "🔗", name: "Middleware", desc: "Request processing layer",
    what: "Functions that have access to the request and response objects in Express.",
    why: "Used for everything from logging to checking if a user is logged in.",
    time: "1 week"
  },

  // Databases Branches
  {
    id: "postgres", parent: "databases", side: "left", type: "branch",
    icon: "🐘", name: "PostgreSQL", desc: "Relational, reliable",
    what: "A highly advanced, open-source relational database.",
    why: "It is the safest, most robust choice for structured data.",
    time: "2-3 weeks"
  },
  {
    id: "mongodb", parent: "databases", side: "left", type: "branch",
    icon: "🍃", name: "MongoDB", desc: "Flexible document storage",
    what: "A NoSQL database that stores JSON-like documents.",
    why: "Very popular in the Node/JS ecosystem (the 'M' in MERN stack).",
    time: "2 weeks"
  },
  {
    id: "sql-basics", parent: "databases", side: "right", type: "branch",
    icon: "🔍", name: "SQL Basics", desc: "Query your data",
    what: "Structured Query Language, used to talk to relational databases.",
    why: "You must know how to select, insert, and join data.",
    time: "1-2 weeks"
  },
  {
    id: "redis", parent: "databases", side: "right", type: "later",
    icon: "⚡", name: "Redis", desc: "Later",
    what: "A fast in-memory database used for caching.",
    why: "Speeds up slow database queries, but unnecessary until you have scale.",
    time: "1 week"
  },

  // Authentication Branches
  {
    id: "jwt", parent: "auth", side: "left", type: "branch",
    icon: "🎫", name: "JWT", desc: "Token based auth",
    what: "JSON Web Tokens used for stateless authentication.",
    why: "The standard way modern single-page apps handle login state with APIs.",
    time: "1-2 weeks"
  },
  {
    id: "bcrypt", parent: "auth", side: "left", type: "branch",
    icon: "🔒", name: "bcrypt", desc: "Secure password storage",
    what: "A tool to cryptographically hash passwords.",
    why: "Never store passwords in plain text.",
    time: "1-2 days"
  },
  {
    id: "oauth", parent: "auth", side: "right", type: "branch",
    icon: "🔑", name: "OAuth", desc: "Login with Google/GitHub",
    what: "A standard for letting users log in using third-party accounts.",
    why: "Users prefer clicking 'Login with Google' over making a new password.",
    time: "1-2 weeks"
  },
  {
    id: "sessions", parent: "auth", side: "right", type: "alternative",
    icon: "🍪", name: "Sessions", desc: "Alternative",
    what: "Storing user login state on the server memory.",
    why: "The classic way to do auth, but harder to scale across multiple servers than JWT.",
    time: "1 week"
  },

  // Deployment Branches
  {
    id: "vercel", parent: "deployment", side: "left", type: "branch",
    icon: "▲", name: "Vercel", desc: "Frontend deployment",
    what: "A platform explicitly built to host frontend apps instantly.",
    why: "It is the easiest way to get a React app live on the internet.",
    time: "1-2 days"
  },
  {
    id: "railway", parent: "deployment", side: "left", type: "branch",
    icon: "🚆", name: "Railway or Render", desc: "Backend deployment, easy",
    what: "Platforms designed to host backend Node apps and databases easily.",
    why: "Deploying a backend is harder than a frontend. These tools make it manageable.",
    time: "3-5 days"
  },
  {
    id: "docker", parent: "deployment", side: "right", type: "later",
    icon: "🐳", name: "Docker", desc: "Later",
    what: "Containers that package your app and its environment together.",
    why: "Ensures your app runs the exact same way anywhere.",
    time: "2 weeks"
  },
  {
    id: "aws", parent: "deployment", side: "right", type: "later",
    icon: "☁️", name: "AWS", desc: "Later",
    what: "Amazon Web Services, the massive cloud provider.",
    why: "Incredibly powerful but overwhelmingly complex for a beginner.",
    time: "Ongoing"
  },

  // System Basics Branches
  {
    id: "mvc", parent: "system-basics", side: "left", type: "branch",
    icon: "🏗️", name: "MVC Pattern", desc: "Organize your codebase",
    what: "Model-View-Controller architecture.",
    why: "Keeps your backend code organized instead of putting everything in one file.",
    time: "1 week"
  },
  {
    id: "git", parent: "system-basics", side: "left", type: "branch",
    icon: "🐙", name: "Git and GitHub", desc: "Version control",
    what: "Tracking code changes and hosting them online.",
    why: "Essential for moving code between your laptop and your server.",
    time: "1 week"
  },
  {
    id: "env", parent: "system-basics", side: "right", type: "branch",
    icon: "🤐", name: "Environment Variables", desc: "Keep secrets safe",
    what: "Variables hidden outside your code for sensitive things like API keys.",
    why: "If you push your database password to GitHub, you will get hacked.",
    time: "1-2 days"
  },
  {
    id: "sys-design", parent: "system-basics", side: "right", type: "later",
    icon: "🌐", name: "System Design Basics", desc: "Later",
    what: "How all the pieces (frontend, backend, DB, cache) fit together securely.",
    why: "Needed to build apps that don't crash when more than 10 people use them.",
    time: "Ongoing"
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
          <div style="background: #f3f4f6; padding: 12px; border-radius: 8px; font-weight: 600; text-align: center;">
            Realistic Time: ${pos.node.time}
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
