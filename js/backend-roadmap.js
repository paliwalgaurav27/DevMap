/*
  File: js/backend-roadmap.js
  Purpose: Backend roadmap data and rendering logic for DevMap
  Author: Placeholder
*/

const nodes = [
  // SPINE
  {
    id: "programming-basics", type: "spine", 
    icon: "💻", name: "Programming Basics", 
    desc: "Variables, loops, and logic.",
    what: "The fundamental building blocks of writing any code.",
    why: "You cannot build servers if you do not understand basic logic.",
    time: "2-4 weeks"
  },
  {
    id: "language", type: "spine", 
    icon: "🗣️", name: "Python or Node.js", 
    desc: "Your primary tool for writing server code.",
    what: "The language you use to tell the computer how to handle requests and process data.",
    why: "You need a language to build anything on the backend.",
    time: "2-3 months"
  },
  {
    id: "version-control", type: "spine", 
    icon: "🗂", name: "Version Control", 
    desc: "Saves your work, tracks changes, and lets you collaborate.",
    what: "Version control is how developers track changes to code over time.",
    why: "Professional work requires saving progress securely.",
    time: "1-2 weeks"
  },
  {
    id: "databases", type: "spine", 
    icon: "🗄️", name: "Databases", 
    desc: "Where all the app's data lives securely.",
    what: "Systems designed to store, retrieve, and manage data efficiently.",
    why: "Without a database, your app forgets everything the moment it restarts.",
    time: "1-2 months"
  },
  {
    id: "apis", type: "spine", 
    icon: "🔌", name: "APIs", 
    desc: "How the frontend talks to the backend.",
    what: "Application Programming Interfaces allow different pieces of software to communicate.",
    why: "Your backend is useless if the frontend cannot ask it for data.",
    time: "2-4 weeks"
  },
  {
    id: "auth", type: "spine", 
    icon: "🔐", name: "Authentication", 
    desc: "Identifying users and keeping data secure.",
    what: "The process of verifying who a user is and what they are allowed to do.",
    why: "Without auth, anyone can delete anyone else's data.",
    time: "2-3 weeks"
  },
  {
    id: "servers", type: "spine", 
    icon: "☁️", name: "Server & Hosting", 
    desc: "Putting your code on the internet.",
    what: "The actual computers and software that keep your app running 24/7.",
    why: "Code on your laptop does not help users on their phones.",
    time: "2-4 weeks"
  },
  {
    id: "system-design", type: "spine", 
    icon: "🏗️", name: "System Design", 
    desc: "Planning architecture for scale and speed.",
    what: "How different pieces of your backend fit together to handle lots of traffic.",
    why: "As your app grows, bad design makes it slow and crash.",
    time: "Ongoing"
  },

  // Language Branches
  {
    id: "python", parent: "language", side: "left", type: "branch",
    icon: "🐍", name: "Python", desc: "Readable, beginner friendly",
    what: "A highly readable, widely-used programming language great for backend and data.",
    why: "It is structurally clean, making it easier for beginners to grasp logic.",
    time: "2-3 months"
  },
  {
    id: "nodejs", parent: "language", side: "right", type: "branch",
    icon: "🟢", name: "Node.js", desc: "JS on the server",
    what: "A runtime that lets you run JavaScript on the server.",
    why: "Allows you to use the exact same language on both frontend and backend.",
    time: "2-3 months"
  },
  {
    id: "express", parent: "language", side: "right", type: "branch",
    icon: "🚂", name: "Express.js", desc: "Lightweight Node framework",
    what: "A fast, unopinionated web framework for Node.js.",
    why: "It makes setting up servers and APIs in Node significantly easier.",
    time: "2-3 weeks"
  },

  // Version Control Branches
  {
    id: "git", parent: "version-control", side: "left", type: "branch",
    icon: "🐙", name: "Git", desc: "Track and manage code changes",
    what: "Git tracks what changed in your code and when.",
    why: "Mistakes are normal. Git saves you from yourself.",
    time: "4-7 days"
  },
  {
    id: "github", parent: "version-control", side: "right", type: "branch",
    icon: "🐱", name: "GitHub", desc: "Host and collaborate on code",
    what: "GitHub hosts Git repositories online.",
    why: "It is the industry standard for sharing code.",
    time: "3-5 days"
  },
  {
    id: "terminal", parent: "version-control", side: "left", type: "branch",
    icon: "💻", name: "Terminal", desc: "Navigate and run commands",
    what: "A text-based interface to interact with your computer.",
    why: "Backend developers live in the terminal. It is non-negotiable.",
    time: "1 week"
  },

  // Database Branches
  {
    id: "postgresql", parent: "databases", side: "left", type: "branch",
    icon: "🐘", name: "PostgreSQL", desc: "Powerful relational DB",
    what: "A highly advanced, open-source relational database using SQL.",
    why: "It is the safest, most robust choice for most standard applications.",
    time: "3-4 weeks"
  },
  {
    id: "mysql", parent: "databases", side: "left", type: "alternative",
    icon: "🐬", name: "MySQL", desc: "Alternative",
    what: "Another very popular relational database.",
    why: "Good to know, but PostgreSQL is heavily favored in modern stacks.",
    time: "1-2 weeks"
  },
  {
    id: "mongodb", parent: "databases", side: "right", type: "branch",
    icon: "🍃", name: "MongoDB", desc: "Document based, flexible",
    what: "A NoSQL database that stores data in flexible, JSON-like documents.",
    why: "Great for unstructured data or rapidly changing requirements.",
    time: "2-3 weeks"
  },
  {
    id: "redis", parent: "databases", side: "right", type: "later",
    icon: "⚡", name: "Redis", desc: "Later",
    what: "An incredibly fast in-memory database used mostly for caching.",
    why: "You don't need it until your database starts slowing down from too many requests.",
    time: "1-2 weeks"
  },

  // API Branches
  {
    id: "rest", parent: "apis", side: "left", type: "branch",
    icon: "🌐", name: "REST APIs", desc: "Standard request pattern",
    what: "An architectural style for APIs using standard HTTP methods like GET and POST.",
    why: "It is the foundation of how most of the web communicates.",
    time: "2-3 weeks"
  },
  {
    id: "json", parent: "apis", side: "left", type: "branch",
    icon: "📄", name: "JSON", desc: "Data format everything uses",
    what: "JavaScript Object Notation. A simple text format for storing and transporting data.",
    why: "It is how your backend sends data to the frontend.",
    time: "2-3 days"
  },
  {
    id: "graphql", parent: "apis", side: "right", type: "later",
    icon: "🕸️", name: "GraphQL", desc: "Later",
    what: "A query language for your API that lets clients ask for exactly what they need.",
    why: "Useful for complex apps, but overkill when you are just starting.",
    time: "2-3 weeks"
  },
  {
    id: "websockets", parent: "apis", side: "right", type: "later",
    icon: "🔌", name: "WebSockets", desc: "Later",
    what: "A protocol for real-time, two-way communication between client and server.",
    why: "Needed for chat apps or live updates, but learn standard request/response first.",
    time: "1-2 weeks"
  },

  // Auth Branches
  {
    id: "jwt", parent: "auth", side: "left", type: "branch",
    icon: "🎫", name: "JWT", desc: "Token based auth",
    what: "JSON Web Tokens securely transmit information between parties as a JSON object.",
    why: "It is the modern standard for stateless API authentication.",
    time: "1-2 weeks"
  },
  {
    id: "sessions", parent: "auth", side: "left", type: "branch",
    icon: "🍪", name: "Sessions & Cookies", desc: "Classic auth method",
    what: "Storing user state on the server and sending a session ID cookie to the browser.",
    why: "It is the traditional, robust way to keep users logged in.",
    time: "1-2 weeks"
  },
  {
    id: "oauth", parent: "auth", side: "right", type: "branch",
    icon: "🔑", name: "OAuth", desc: "Login with Google/GitHub",
    what: "An open standard for access delegation, used to log in via third parties.",
    why: "Users hate making new passwords. Letting them use Google is a massive UX win.",
    time: "1-2 weeks"
  },
  {
    id: "bcrypt", parent: "auth", side: "right", type: "branch",
    icon: "🔒", name: "bcrypt", desc: "Password hashing",
    what: "A cryptographic hash function used to safely store passwords.",
    why: "Storing raw passwords is a catastrophic security failure. Never do it.",
    time: "1-3 days"
  },

  // Server Branches
  {
    id: "linux", parent: "servers", side: "left", type: "branch",
    icon: "🐧", name: "Linux Basics", desc: "Servers run on Linux",
    what: "The operating system that powers the vast majority of web servers.",
    why: "You will eventually need to SSH into a server and fix things. Linux is mandatory.",
    time: "1-2 weeks"
  },
  {
    id: "nginx", parent: "servers", side: "left", type: "branch",
    icon: "⚙️", name: "Nginx", desc: "Web server and proxy",
    what: "A web server that can also be used as a reverse proxy, load balancer, and HTTP cache.",
    why: "It is how traffic from the internet gets routed safely to your Node or Python app.",
    time: "1-2 weeks"
  },
  {
    id: "docker", parent: "servers", side: "right", type: "later",
    icon: "🐳", name: "Docker", desc: "Later",
    what: "A tool designed to make it easier to create, deploy, and run applications by using containers.",
    why: "It guarantees your code runs the exact same way on your laptop as it does in production.",
    time: "2-3 weeks"
  },
  {
    id: "cloud", parent: "servers", side: "right", type: "later",
    icon: "☁️", name: "AWS / GCP", desc: "Later",
    what: "Massive cloud platforms that rent you servers, databases, and infrastructure.",
    why: "Essential for scaling, but complex. Start with a simple VPS first.",
    time: "Ongoing"
  },

  // System Design Branches
  {
    id: "mvc", parent: "system-design", side: "left", type: "branch",
    icon: "🏗️", name: "MVC Pattern", desc: "Organize your code",
    what: "Model-View-Controller is an architectural pattern that separates your app into logic, presentation, and data.",
    why: "Without architecture, your code turns into an unmaintainable spaghetti mess.",
    time: "1-2 weeks"
  },
  {
    id: "caching", parent: "system-design", side: "right", type: "branch",
    icon: "🚀", name: "Caching", desc: "Make things fast",
    what: "Storing copies of frequently accessed data so future requests can be served faster.",
    why: "The database is slow. Caching saves the database from doing the same work twice.",
    time: "1-2 weeks"
  },
  {
    id: "queues", parent: "system-design", side: "right", type: "later",
    icon: "📬", name: "Message Queues", desc: "Later",
    what: "A way for different parts of your system to communicate asynchronously.",
    why: "When tasks take too long (like sending 1000 emails), you queue them so the server doesn't freeze.",
    time: "2-3 weeks"
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
