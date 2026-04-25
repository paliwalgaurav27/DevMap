/*
  File: js/devops-roadmap.js
  Purpose: DevOps Engineer roadmap data and rendering logic for DevMap
  Author: Placeholder
*/

const nodes = [
  // SPINE
  {
    id: "linux", type: "spine", 
    icon: "🐧", name: "Linux Basics", 
    desc: "The operating system of the cloud.",
    what: "Virtually every server you touch will be running Linux.",
    why: "You cannot automate what you do not understand.",
    time: "2-3 weeks"
  },
  {
    id: "networking", type: "spine", 
    icon: "🌐", name: "Networking Basics", 
    desc: "How computers talk to each other.",
    what: "Understanding IPs, DNS, ports, and protocols like HTTP.",
    why: "When the app is down, the first question is usually 'is it the network?'",
    time: "2-3 weeks"
  },
  {
    id: "version-control", type: "spine", 
    icon: "🗂", name: "Version Control", 
    desc: "Tracking changes to code.",
    what: "Using Git to store infrastructure code and trigger pipelines.",
    why: "Modern DevOps relies entirely on code stored in Git repositories.",
    time: "1-2 weeks"
  },
  {
    id: "scripting", type: "spine", 
    icon: "📜", name: "Scripting", 
    desc: "Automating manual tasks.",
    what: "Writing Bash or Python scripts to do things computers do better than humans.",
    why: "If you do it manually more than twice, write a script.",
    time: "3-4 weeks"
  },
  {
    id: "containers", type: "spine", 
    icon: "📦", name: "Containers", 
    desc: "Packaging apps to run anywhere.",
    what: "Wrapping code and its dependencies into a single box (container).",
    why: "It solves the 'it works on my machine' problem forever.",
    time: "3-4 weeks"
  },
  {
    id: "cicd", type: "spine", 
    icon: "🚀", name: "CI/CD", 
    desc: "Continuous Integration & Deployment.",
    what: "Pipelines that automatically test and deploy code when developers push it.",
    why: "Deploying code manually on Friday evening is a recipe for disaster.",
    time: "3-4 weeks"
  },
  {
    id: "cloud", type: "spine", 
    icon: "☁️", name: "Cloud Platforms", 
    desc: "Where the apps actually live.",
    what: "Massive platforms (AWS, Azure) that rent you servers and services.",
    why: "Companies no longer buy physical servers. You must manage their cloud.",
    time: "2-3 months"
  },
  {
    id: "monitoring", type: "spine", 
    icon: "📊", name: "Monitoring", 
    desc: "Knowing when things break.",
    what: "Collecting metrics and logs to see if servers are healthy.",
    why: "You want to fix the server before the users notice it's down.",
    time: "2-3 weeks"
  },
  {
    id: "iac", type: "spine", 
    icon: "🏗️", name: "Infrastructure as Code", 
    desc: "Servers written as code.",
    what: "Writing code to automatically create and configure cloud resources.",
    why: "Clicking through AWS menus is slow, error-prone, and impossible to track.",
    time: "1-2 months"
  },

  // Linux Branches
  {
    id: "cli", parent: "linux", side: "left", type: "branch",
    icon: "💻", name: "Command Line", desc: "Navigate and control",
    what: "Using the terminal to navigate folders and edit files without a mouse.",
    why: "Servers don't have graphical interfaces. It's text only.",
    time: "1-2 weeks"
  },
  {
    id: "permissions", parent: "linux", side: "left", type: "branch",
    icon: "🔐", name: "File Permissions", desc: "Read, write, execute",
    what: "Understanding users, groups, and who can access what files (chmod/chown).",
    why: "Bad permissions lead to massive security breaches.",
    time: "1 week"
  },
  {
    id: "shell-scripting", parent: "linux", side: "right", type: "branch",
    icon: "🐚", name: "Shell Scripting", desc: "Automate repetitive tasks",
    what: "Writing small scripts in the terminal to chain commands together.",
    why: "It is the duct tape that holds old systems together.",
    time: "1-2 weeks"
  },
  {
    id: "processes", parent: "linux", side: "right", type: "branch",
    icon: "⚙️", name: "Process Management", desc: "Run, stop, monitor",
    what: "Managing running programs (ps, top, kill, systemd).",
    why: "When a server freezes, you must find and kill the runaway process.",
    time: "1 week"
  },

  // Networking Branches
  {
    id: "ip-dns", parent: "networking", side: "left", type: "branch",
    icon: "🗺️", name: "IP and DNS", desc: "How machines find each other",
    what: "IP addresses are phone numbers; DNS is the phonebook (google.com).",
    why: "Without it, no server can talk to another.",
    time: "1-2 weeks"
  },
  {
    id: "http", parent: "networking", side: "left", type: "branch",
    icon: "🌐", name: "HTTP and HTTPS", desc: "How data travels",
    what: "The protocols that power the web and secure it with SSL/TLS.",
    why: "If certificates expire, the app goes offline. You manage them.",
    time: "1 week"
  },
  {
    id: "firewalls", parent: "networking", side: "right", type: "branch",
    icon: "🧱", name: "Firewalls", desc: "Control traffic",
    what: "Rules that decide what data is allowed into or out of a server.",
    why: "A server without a firewall will be hacked in 15 minutes.",
    time: "1-2 weeks"
  },
  {
    id: "load-balancers", parent: "networking", side: "right", type: "branch",
    icon: "⚖️", name: "Load Balancers", desc: "Split traffic",
    what: "A device that splits incoming traffic evenly across multiple servers.",
    why: "One server can't handle a million users. You need 10 servers and a balancer.",
    time: "1-2 weeks"
  },

  // Version Control Branches
  {
    id: "git", parent: "version-control", side: "left", type: "branch",
    icon: "🐙", name: "Git", desc: "Track every change",
    what: "The standard tool to track code changes over time.",
    why: "DevOps stores infrastructure configuration as code.",
    time: "1 week"
  },
  {
    id: "github", parent: "version-control", side: "left", type: "branch",
    icon: "🐱", name: "GitHub / GitLab", desc: "Collaborate and trigger",
    what: "Platforms that host Git repos and run CI/CD pipelines.",
    why: "It is the hub of all modern development workflows.",
    time: "1 week"
  },
  {
    id: "branching", parent: "version-control", side: "right", type: "branch",
    icon: "🌿", name: "Branching Strategy", desc: "Manage code flow",
    what: "Rules on how teams merge code (like GitFlow or Trunk-based development).",
    why: "If everyone pushes to the main branch at once, everything breaks.",
    time: "1 week"
  },

  // Scripting Branches
  {
    id: "bash", parent: "scripting", side: "left", type: "branch",
    icon: "🐚", name: "Bash", desc: "Automate Linux tasks",
    what: "The default scripting language on Linux.",
    why: "Every Docker container and CI pipeline runs Bash scripts.",
    time: "1-2 weeks"
  },
  {
    id: "python", parent: "scripting", side: "left", type: "branch",
    icon: "🐍", name: "Python", desc: "Scripting and automation",
    what: "A powerful, readable language perfect for complex automation.",
    why: "When Bash gets too confusing, DevOps engineers switch to Python.",
    time: "3-4 weeks"
  },
  {
    id: "yaml", parent: "scripting", side: "right", type: "branch",
    icon: "📄", name: "YAML", desc: "Config language",
    what: "A human-readable data serialization language.",
    why: "Kubernetes, CI/CD pipelines, and Ansible are all configured in YAML.",
    time: "1-3 days"
  },

  // Containers Branches
  {
    id: "docker", parent: "containers", side: "left", type: "branch",
    icon: "🐳", name: "Docker", desc: "Package apps",
    what: "The industry standard platform for building and running containers.",
    why: "It revolutionized deployment. You must know Docker.",
    time: "2-3 weeks"
  },
  {
    id: "docker-compose", parent: "containers", side: "left", type: "branch",
    icon: "🏗️", name: "Docker Compose", desc: "Multi-container apps",
    what: "A tool for defining and running multi-container Docker apps locally.",
    why: "Makes testing the frontend, backend, and database together very easy.",
    time: "1 week"
  },
  {
    id: "kubernetes", parent: "containers", side: "right", type: "later",
    icon: "☸️", name: "Kubernetes", desc: "Later",
    what: "A massive system for automating deployment and scaling of containers.",
    why: "Incredibly powerful but notoriously complex. Master Docker first.",
    time: "1-3 months"
  },
  {
    id: "helm", parent: "containers", side: "right", type: "later",
    icon: "⚓", name: "Helm", desc: "Later",
    what: "The package manager for Kubernetes.",
    why: "Makes deploying complex Kubernetes apps repeatable and easy.",
    time: "1-2 weeks"
  },

  // CI/CD Branches
  {
    id: "github-actions", parent: "cicd", side: "left", type: "branch",
    icon: "▶️", name: "GitHub Actions", desc: "Automate on push",
    what: "A modern, widely used CI/CD platform built into GitHub.",
    why: "It is the easiest and most popular way to start building pipelines.",
    time: "2-3 weeks"
  },
  {
    id: "jenkins", parent: "cicd", side: "left", type: "alternative",
    icon: "👨‍🍳", name: "Jenkins", desc: "Alternative",
    what: "The older, open-source automation server standard.",
    why: "Clunky by modern standards, but heavily used in enterprise.",
    time: "2-3 weeks"
  },
  {
    id: "gitlab-ci", parent: "cicd", side: "right", type: "alternative",
    icon: "🦊", name: "GitLab CI", desc: "Alternative",
    what: "The powerful CI/CD system built into GitLab.",
    why: "Excellent alternative to GitHub Actions if your team uses GitLab.",
    time: "2-3 weeks"
  },
  {
    id: "argocd", parent: "cicd", side: "right", type: "later",
    icon: "🐙", name: "ArgoCD", desc: "Later",
    what: "A declarative GitOps tool for Kubernetes.",
    why: "The modern way to deploy directly to Kubernetes clusters securely.",
    time: "2 weeks"
  },

  // Cloud Platforms Branches
  {
    id: "aws", parent: "cloud", side: "left", type: "branch",
    icon: "☁️", name: "AWS", desc: "Biggest market share",
    what: "Amazon Web Services. The largest cloud provider in the world.",
    why: "It has the most job demand by a massive margin.",
    time: "2-3 months"
  },
  {
    id: "gcp", parent: "cloud", side: "left", type: "alternative",
    icon: "☁️", name: "Google Cloud", desc: "Alternative",
    what: "Google's cloud platform.",
    why: "Great data tools and Kubernetes integration.",
    time: "1-2 months"
  },
  {
    id: "azure", parent: "cloud", side: "right", type: "alternative",
    icon: "☁️", name: "Azure", desc: "Alternative",
    what: "Microsoft's cloud platform.",
    why: "Heavily used in enterprise and corporate sectors.",
    time: "1-2 months"
  },
  {
    id: "digitalocean", parent: "cloud", side: "right", type: "branch",
    icon: "💧", name: "DigitalOcean", desc: "Great for learning",
    what: "A simpler cloud provider aimed at developers.",
    why: "AWS is overwhelming. DO is a great place to learn the absolute basics.",
    time: "1-2 weeks"
  },

  // Monitoring Branches
  {
    id: "prometheus", parent: "monitoring", side: "left", type: "branch",
    icon: "🔥", name: "Prometheus", desc: "Collect metrics",
    what: "An open-source monitoring system and time series database.",
    why: "It is the standard for collecting metric data from cloud systems.",
    time: "2-3 weeks"
  },
  {
    id: "grafana", parent: "monitoring", side: "left", type: "branch",
    icon: "📈", name: "Grafana", desc: "Visualize dashboards",
    what: "A platform for creating beautiful dashboards out of your metric data.",
    why: "Looking at raw data is impossible. Grafana makes it visual.",
    time: "1-2 weeks"
  },
  {
    id: "elk", parent: "monitoring", side: "right", type: "later",
    icon: "🌲", name: "ELK Stack", desc: "Later",
    what: "Elasticsearch, Logstash, and Kibana. A massive logging system.",
    why: "When you have 50 servers, you need one central place to search all their logs.",
    time: "3-4 weeks"
  },
  {
    id: "pagerduty", parent: "monitoring", side: "right", type: "later",
    icon: "📱", name: "PagerDuty", desc: "Later",
    what: "Incident response platform that calls your phone when servers crash.",
    why: "The reason DevOps engineers don't sleep well on weekends.",
    time: "1 week"
  },

  // Infrastructure as Code Branches
  {
    id: "terraform", parent: "iac", side: "left", type: "branch",
    icon: "🌍", name: "Terraform", desc: "Infrastructure in code",
    what: "An open-source tool to define and provision cloud infrastructure using code.",
    why: "It is the industry standard for creating AWS/GCP resources automatically.",
    time: "3-4 weeks"
  },
  {
    id: "ansible", parent: "iac", side: "left", type: "branch",
    icon: "🅰️", name: "Ansible", desc: "Configure servers",
    what: "A tool to automate software provisioning and configuration management.",
    why: "Terraform builds the server. Ansible installs the software on it.",
    time: "2-3 weeks"
  },
  {
    id: "pulumi", parent: "iac", side: "right", type: "alternative",
    icon: "🪄", name: "Pulumi", desc: "Alternative",
    what: "An IaC tool that lets you use real programming languages (Python, JS).",
    why: "A modern alternative to Terraform's specific language (HCL).",
    time: "2-3 weeks"
  },
  {
    id: "cloudformation", parent: "iac", side: "right", type: "branch",
    icon: "☁️", name: "CloudFormation", desc: "AWS specific IaC",
    what: "Amazon's native IaC service.",
    why: "Good to know if you only ever work inside the AWS ecosystem.",
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
