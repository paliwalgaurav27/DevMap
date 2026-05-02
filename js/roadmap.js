/*
  File: js/roadmap.js
  Purpose: Frontend roadmap data, responsive node positioning, SVG connector drawing, and roadmap rendering logic.
  Author: Placeholder
*/

const frameworksNote = "React has the most job listings right now. If your goal is employment, React is the safest bet. Vue is beginner friendly. Angular is enterprise heavy. Solid is fast but has the smallest job market.";

const nodes = [
  // SPINE
  {
    id: "frontend", type: "spine", 
    icon: "🧭", name: "Frontend Developer", 
    desc: "Builds the interfaces users see and interact with.",
    what: "Frontend development is the work of building what users see and interact with in a web product. It combines structure, styling, behavior, and practical debugging.",
    why: "Beginners need this big picture first so they stop treating every random tool as equally urgent.",
    time: "8-12 months for job-ready basics"
  },
  {
    id: "html5", type: "spine", 
    icon: "🏗", name: "HTML5", 
    desc: "Gives every page structure, meaning, and useful building blocks.",
    what: "HTML is the structure layer of the web. It tells the browser what each part of the page is, like a heading, form, button, or image.",
    why: "If your structure is sloppy, everything built on top becomes harder to style, debug, and make accessible.",
    time: "2-3 weeks"
  },
  {
    id: "css3", type: "spine", 
    icon: "🎨", name: "CSS3", 
    desc: "Controls layout, spacing, color, responsiveness, and visual polish.",
    what: "CSS is the language that styles HTML and controls how it behaves across screen sizes. It handles spacing, layout, typography, and color.",
    why: "Nobody hires a frontend developer to ship ugly broken layouts.",
    time: "4-6 weeks"
  },
  {
    id: "javascript", type: "spine", 
    icon: "⚙", name: "JavaScript", 
    desc: "Makes the page react, update, fetch data, and actually behave.",
    what: "Vanilla JavaScript is plain JavaScript without a framework. It handles user actions, updates the page, and talks to APIs.",
    why: "You need to master plain JavaScript before frameworks because frameworks are built on the same ideas.",
    time: "3-4 months"
  },
  {
    id: "framework-gate", type: "gate", 
    icon: "🔒", name: "Master Vanilla JS Before This", 
    desc: "Clear visual barrier before frameworks.",
    what: "This gate exists to remind you that frameworks do not replace JavaScript. They just organize it in a different way.",
    why: "Skipping straight to frameworks feels fast for a month and painful for the next six. A solid foundation makes every framework easier.",
    time: "Hold here until JavaScript feels solid"
  },
  {
    id: "version-control", type: "spine", 
    icon: "🗂", name: "Version Control", 
    desc: "Saves your work, tracks changes, and lets you collaborate.",
    what: "Version control is how developers track changes to code over time. It keeps one bad edit from turning into a disaster.",
    why: "Professional frontend work is not just writing code alone on one machine. You need a reliable way to save progress.",
    time: "1-2 weeks"
  },
  {
    id: "deployment", type: "spine", 
    icon: "🚀", name: "Deployment", 
    desc: "Gets your work live so other humans can actually use it.",
    what: "Deployment is the process of publishing your frontend so it runs on the internet. It is how projects become real products.",
    why: "Finished code nobody can access does not help much in interviews or real life. Shipping is part of the job.",
    time: "4-7 days"
  },

  // HTML5 Branches
  {
    id: "semantic-html", parent: "html5", side: "left", type: "branch",
    icon: "📄", name: "Semantic HTML", desc: "Writing meaningful structured markup",
    what: "Semantic HTML means using the right tags for what content really is, like header, nav, or button. It gives the browser real meaning.",
    why: "Strong frontend work starts with correct structure. It improves accessibility and maintainability.",
    time: "4-6 days"
  },
  {
    id: "forms-validation", parent: "html5", side: "right", type: "branch",
    icon: "📝", name: "Forms & Validation", desc: "Handling user input correctly",
    what: "Forms are how users send information into your app. Validation is how you catch missing or clearly broken input.",
    why: "Almost every real product has forms. If your forms are confusing or fragile, users leave.",
    time: "1 week"
  },
  {
    id: "a11y", parent: "html5", side: "left", type: "branch",
    icon: "♿", name: "Accessibility (a11y)", desc: "Making web usable for everyone",
    what: "Accessibility means building interfaces that work for keyboard users, screen readers, and people with different needs. It is part of solid frontend work.",
    why: "Accessible habits are easier to build early than retrofit later.",
    time: "1-2 weeks"
  },
  {
    id: "seo-basics", parent: "html5", side: "right", type: "branch",
    icon: "🔍", name: "SEO Basics", desc: "Helping search engines read your page",
    what: "SEO basics are the habits that make a page easier for search engines to read and rank. For beginners, this mostly means good structure and metadata.",
    why: "Many frontend pages exist to be found. You need to avoid basic mistakes that hide good work.",
    time: "3-5 days"
  },
  {
    id: "meta-tags", parent: "html5", side: "left", type: "branch",
    icon: "🏷️", name: "Meta Tags", desc: "Page info for browsers and social sharing",
    what: "Meta tags are small pieces of page information stored in the head of a document. They help browsers and social platforms understand the page.",
    why: "Pages should look correct when shared and indexed.",
    time: "2-3 days"
  },

  // CSS3 Branches
  {
    id: "flexbox", parent: "css3", side: "left", type: "branch",
    icon: "📦", name: "Flexbox", desc: "One dimensional layouts",
    what: "Flexbox is a CSS layout system that makes it easier to align and space items in a row or a column. It is the most-used layout tool daily.",
    why: "It solves a huge amount of real layout pain fast. If this feels shaky, building interfaces becomes very slow.",
    time: "4-6 days"
  },
  {
    id: "grid", parent: "css3", side: "right", type: "branch",
    icon: "🔲", name: "Grid", desc: "Two dimensional layouts",
    what: "CSS Grid is a layout system made for arranging content in rows and columns at the same time. Useful for page-level structure.",
    why: "Real pages often need more than a simple row or column. Once Flexbox makes sense, Grid is the next upgrade.",
    time: "4-7 days"
  },
  {
    id: "animations", parent: "css3", side: "left", type: "branch",
    icon: "🎬", name: "Animations & Transitions", desc: "Motion and interactivity",
    what: "Animations are visual movements that show change or feedback. Good motion helps users understand what happened.",
    why: "Modern interfaces use motion everywhere. The goal is to make the product feel clearer.",
    time: "1-2 weeks"
  },
  {
    id: "responsive", parent: "css3", side: "right", type: "branch",
    icon: "📱", name: "Responsive Design", desc: "Works on all screen sizes",
    what: "Responsive design is making a layout adapt to different screen sizes. It involves fluid sizing and media queries.",
    why: "Users do not all show up on the same screen. A page that only works on your laptop is not done.",
    time: "1-2 weeks"
  },
  {
    id: "tailwind", parent: "css3", side: "left", type: "branch",
    icon: "🌀", name: "Tailwind CSS", desc: "Utility first CSS framework",
    what: "Tailwind is a utility-first CSS framework that speeds up styling with lots of small classes. It is highly productive once CSS makes sense.",
    why: "Treat it as a speed tool, not a shortcut around learning CSS.",
    time: "1-2 weeks"
  },
  {
    id: "bootstrap", parent: "css3", side: "right", type: "alternative",
    icon: "🅱️", name: "Bootstrap", desc: "Alternative",
    what: "Bootstrap is a UI framework with prebuilt components. It is usable, but not usually the first recommendation today.",
    why: "You should know it exists, but React plus plain CSS/Tailwind is more aligned with entry-level expectations.",
    time: "4-7 days"
  },
  {
    id: "sass", parent: "css3", side: "left", type: "later",
    icon: "✏️", name: "SASS/SCSS", desc: "Later",
    what: "SASS and SCSS are CSS extensions that add features like variables and nesting. They help when styling grows large.",
    why: "Modern CSS is already much stronger than it used to be. Safely learn this later.",
    time: "3-5 days"
  },

  // JavaScript Vanilla Branches
  {
    id: "es6", parent: "javascript", side: "left", type: "branch",
    icon: "⚡", name: "ES6+", desc: "Modern JavaScript syntax",
    what: "ES6+ is the newer JavaScript syntax used in modern code, including arrow functions and modules. It is a cleaner version of JS.",
    why: "Almost every tutorial, framework, and codebase uses modern syntax.",
    time: "1-2 weeks"
  },
  {
    id: "dom-apis", parent: "javascript", side: "right", type: "branch",
    icon: "🌐", name: "DOM APIs", desc: "Manipulating the webpage with JS",
    what: "DOM APIs are browser tools JavaScript uses to read and change the actual page. They let you find elements and listen for clicks.",
    why: "Frameworks abstract these ideas. If DOM work feels like magic, framework code becomes harder to debug.",
    time: "1-2 weeks"
  },
  {
    id: "fetch", parent: "javascript", side: "left", type: "branch",
    icon: "🔄", name: "Fetch & Promises", desc: "Getting data from servers",
    what: "Fetch is how JS asks servers for data, and Promises are how JS handles work that finishes later. They make apps dynamic.",
    why: "Most useful frontend apps talk to APIs. You must be able to request data.",
    time: "1-2 weeks"
  },
  {
    id: "async", parent: "javascript", side: "right", type: "branch",
    icon: "⏳", name: "Async/Await", desc: "Cleaner async code",
    what: "Async and await are a cleaner way to write code that waits for something. They are easier to read than long chains of callbacks.",
    why: "It makes real app logic much easier to follow.",
    time: "3-5 days"
  },
  {
    id: "web-apis", parent: "javascript", side: "left", type: "branch",
    icon: "🛠️", name: "Web APIs", desc: "Browser built-in powers",
    what: "Web APIs are browser-provided features like localStorage or geolocation. They make apps more than just documents.",
    why: "The browser gives you useful powers without extra libraries.",
    time: "1 week"
  },
  {
    id: "typescript", parent: "javascript", side: "right", type: "later",
    icon: "🔷", name: "TypeScript", desc: "Typed JS, learn after Vanilla is solid — Later",
    what: "TypeScript is JavaScript with type checking. It helps catch mismatched data before bugs hit the browser.",
    why: "Many real teams use it. Learn it after JavaScript feels solid, otherwise it feels like extra friction.",
    time: "2-3 weeks"
  },

  // Frameworks
  {
    id: "react", parent: "framework-gate", side: "left", type: "framework",
    icon: "⚛️", name: "React.js", desc: "Component based library",
    what: "React is a popular library for building interfaces from reusable components. It helps larger apps stay manageable.",
    why: "Many frontend jobs expect it. " + frameworksNote,
    time: "4-6 weeks"
  },
  {
    id: "vue", parent: "framework-gate", side: "right", type: "framework",
    icon: "🟢", name: "Vue.js", desc: "Progressive framework",
    what: "Vue is a frontend framework with a clean reputation and a gentler learning curve. Very useful in right teams.",
    why: frameworksNote,
    time: "3-4 weeks"
  },
  {
    id: "angular", parent: "framework-gate", side: "left", type: "framework",
    icon: "🟥", name: "Angular", desc: "Enterprise framework",
    what: "Angular is a full framework with strong opinions and many built-in features. It is powerful but heavier.",
    why: frameworksNote,
    time: "5-7 weeks"
  },
  {
    id: "solid", parent: "framework-gate", side: "right", type: "framework",
    icon: "🟣", name: "Solid.js", desc: "Fast reactive core",
    what: "Solid is a modern UI library with a fast reactive model. Promising but smaller job market.",
    why: frameworksNote,
    time: "2-4 weeks"
  },

  // Framework Branches (Hooks, etc)
  {
    id: "react-hooks", parent: "react", side: "left", type: "branch",
    icon: "🪝", name: "React Hooks", desc: "useState, useEffect, core patterns",
    what: "Hooks are built-in React tools that let components use state and effects. Central to modern React code.",
    why: "React without hooks is not how most teams build now.",
    time: "1-2 weeks"
  },
  {
    id: "react-router", parent: "react", side: "right", type: "branch",
    icon: "🧭", name: "React Router", desc: "Navigation between pages",
    what: "React Router handles navigation inside a React app, letting URLs show different parts of the interface.",
    why: "Real apps almost always have more than one screen.",
    time: "4-6 days"
  },
  {
    id: "zustand", parent: "react", side: "left", type: "branch",
    icon: "🐻", name: "Zustand", desc: "Simple state management",
    what: "Zustand is a lightweight state management library. It keeps shared data organized simply.",
    why: "Beginners often do better with a simpler state library first.",
    time: "3-5 days"
  },
  {
    id: "redux", parent: "react", side: "right", type: "alternative",
    icon: "🔴", name: "Redux", desc: "Alternative",
    what: "Redux is a powerful state management approach. It comes with more structure and concepts.",
    why: "Many codebases use it, but it is heavier than beginners need at first.",
    time: "1-2 weeks"
  },
  
  {
    id: "vue-comp", parent: "vue", side: "left", type: "branch",
    icon: "🧩", name: "Vue Components", desc: "Building blocks of Vue apps",
    what: "Components are reusable pieces of interface in Vue.",
    why: "This is how you organize any real Vue application.",
    time: "1-2 weeks"
  },
  {
    id: "vue-router", parent: "vue", side: "right", type: "branch",
    icon: "🛣️", name: "Vue Router", desc: "Navigation in Vue",
    what: "Official routing for Vue applications.",
    why: "Needed to move between pages without reloading the browser.",
    time: "4-6 days"
  },
  {
    id: "pinia", parent: "vue", side: "left", type: "branch",
    icon: "🍍", name: "Pinia", desc: "Vue state management",
    what: "Pinia is the standard state management tool for Vue.",
    why: "You need it when multiple components need to share the same data.",
    time: "1 week"
  },

  {
    id: "ng-di", parent: "angular", side: "left", type: "branch",
    icon: "💉", name: "Dependency Injection", desc: "Angular's core pattern",
    what: "Dependency Injection is how Angular provides components with the services they need.",
    why: "It is a fundamental concept for writing any real Angular code.",
    time: "1-2 weeks"
  },
  {
    id: "ng-router", parent: "angular", side: "right", type: "branch",
    icon: "🛣️", name: "Angular Router", desc: "Navigation in Angular",
    what: "Angular's built-in way to handle changing views.",
    why: "Essential for building single page applications.",
    time: "1 week"
  },
  {
    id: "rxjs", parent: "angular", side: "left", type: "branch",
    icon: "📡", name: "RxJS", desc: "Reactive programming in Angular",
    what: "RxJS is a library for composing asynchronous code using observable sequences.",
    why: "Angular uses it heavily for data fetching and event handling.",
    time: "2-3 weeks"
  },

  {
    id: "solid-signals", parent: "solid", side: "left", type: "branch",
    icon: "⚡", name: "Signals", desc: "Solid's reactive core",
    what: "Signals are the core reactive primitives in Solid.",
    why: "You must understand signals to manage data changing over time in Solid.",
    time: "1 week"
  },
  {
    id: "solid-comp", parent: "solid", side: "right", type: "branch",
    icon: "🧱", name: "Solid Components", desc: "Fine grained rendering",
    what: "Components in Solid execute once and rely on signals to update the DOM.",
    why: "This is the fundamental building block of a Solid app.",
    time: "1 week"
  },

  // Version Control Branches
  {
    id: "git", parent: "version-control", side: "left", type: "branch",
    icon: "🐙", name: "Git", desc: "Track and manage code changes",
    what: "Git tracks what changed in your code and when. It saves progress professionally.",
    why: "Mistakes are normal. Without version control, one broken experiment can cost hours.",
    time: "4-7 days"
  },
  {
    id: "github", parent: "version-control", side: "right", type: "branch",
    icon: "🐱", name: "GitHub", desc: "Host and collaborate on code",
    what: "GitHub hosts Git repositories and gives tools for sharing and collaborating.",
    why: "Modern work is collaborative. It turns local progress into something teams can access.",
    time: "3-5 days"
  },
  {
    id: "terminal", parent: "version-control", side: "left", type: "branch",
    icon: "💻", name: "Basic Terminal", desc: "Navigate and run commands",
    what: "The terminal is a text-based way to move around your computer and run tools.",
    why: "Many frontend workflows use it for setup, Git, and builds. You need enough to move confidently.",
    time: "3-5 days"
  },

  // Deployment Branches
  {
    id: "vercel", parent: "deployment", side: "left", type: "branch",
    icon: "▲", name: "Vercel", desc: "Easiest frontend deployment",
    what: "Vercel is a platform that makes publishing frontend apps very simple.",
    why: "You need a low-friction way to ship projects. It lets you focus on learning.",
    time: "1-2 days"
  },
  {
    id: "netlify", parent: "deployment", side: "right", type: "branch",
    icon: "🌐", name: "Netlify", desc: "Simple static hosting",
    what: "Netlify works well for static sites and frontend projects.",
    why: "It is a reliable and beginner-friendly alternative for hosting.",
    time: "1-2 days"
  },
  {
    id: "gh-pages", parent: "deployment", side: "left", type: "branch",
    icon: "📄", name: "GitHub Pages", desc: "Free static hosting",
    what: "GitHub Pages is a free way to host static websites from a GitHub repository.",
    why: "It is free and easy for small portfolio pieces.",
    time: "1 day"
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

});
