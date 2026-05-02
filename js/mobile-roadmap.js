/*
  File: js/mobile-roadmap.js
  Purpose: Mobile Developer roadmap data and rendering logic for DevMap
  Author: Placeholder
*/

const nodes = [
  // SPINE
  {
    id: "programming", type: "spine", 
    icon: "💻", name: "Programming Basics", 
    desc: "Variables, loops, logic.",
    what: "The absolute fundamentals of making a computer do what you want.",
    why: "You cannot build an app without understanding logic flow.",
    time: "2-4 weeks"
  },
  {
    id: "language", type: "spine", 
    icon: "🗣️", name: "JavaScript or Dart", 
    desc: "The languages of cross-platform apps.",
    what: "JavaScript powers React Native. Dart powers Flutter.",
    why: "You need a language to build the app's logic and UI.",
    time: "1-2 months"
  },
  {
    id: "framework", type: "spine", 
    icon: "⚛️", name: "React Native or Flutter", 
    desc: "Build once, run anywhere.",
    what: "Frameworks that let you write code once and release it on both iOS and Android.",
    why: "Writing two separate apps in Swift and Kotlin is incredibly slow and expensive for beginners.",
    time: "1-2 months"
  },
  {
    id: "navigation", type: "spine", 
    icon: "🧭", name: "Navigation", 
    desc: "Moving between screens.",
    what: "How users tap a button to go from the Home screen to the Settings screen.",
    why: "Mobile navigation is fundamentally different and much harder than web navigation.",
    time: "2-3 weeks"
  },
  {
    id: "state", type: "spine", 
    icon: "🧠", name: "State Management", 
    desc: "Remembering data across screens.",
    what: "How the cart screen knows you added an item on the product screen.",
    why: "Without global state, your app forgets everything when you change screens.",
    time: "2-3 weeks"
  },
  {
    id: "device-apis", type: "spine", 
    icon: "📱", name: "Device APIs", 
    desc: "Using the phone's hardware.",
    what: "Accessing the camera, GPS, push notifications, and local storage.",
    why: "This is what makes a mobile app better than a website.",
    time: "3-4 weeks"
  },
  {
    id: "backend", type: "spine", 
    icon: "🔌", name: "Backend Integration", 
    desc: "Fetching and saving data.",
    what: "Talking to servers to log users in, fetch posts, or process payments.",
    why: "An app without a backend is just a calculator.",
    time: "2-3 weeks"
  },
  {
    id: "deployment", type: "spine", 
    icon: "🚀", name: "App Store Deployment", 
    desc: "Getting it to users.",
    what: "Packaging the app, signing it securely, and submitting it to Apple and Google.",
    why: "It is not a real app until someone can download it from the store.",
    time: "2-3 weeks"
  },

  // Language Branches
  {
    id: "javascript", parent: "language", side: "left", type: "branch",
    icon: "💛", name: "JavaScript", desc: "Use if coming from web",
    what: "The language of the web, and the foundation of React Native.",
    why: "If you already know web dev, you can build mobile apps almost instantly with JS.",
    time: "1-2 months"
  },
  {
    id: "typescript", parent: "language", side: "left", type: "branch",
    icon: "🔷", name: "TypeScript", desc: "Typed JS",
    what: "JavaScript with explicit types to catch errors before the app runs.",
    why: "Mobile debugging is painful. TypeScript prevents bugs before they happen.",
    time: "2-3 weeks"
  },
  {
    id: "dart", parent: "language", side: "right", type: "branch",
    icon: "🎯", name: "Dart", desc: "Only needed for Flutter",
    what: "An object-oriented language developed by Google.",
    why: "You literally cannot use Flutter without learning Dart.",
    time: "3-4 weeks"
  },
  {
    id: "flutter", parent: "language", side: "right", type: "alternative",
    icon: "🦋", name: "Flutter", desc: "Alternative path",
    what: "Google's UI toolkit for building natively compiled applications from a single codebase.",
    why: "Great performance and UI, but learning Dart limits you to Flutter only.",
    time: "1-2 months"
  },

  // Framework Branches
  {
    id: "core-components", parent: "framework", side: "left", type: "branch",
    icon: "🧱", name: "Core Components", desc: "View, Text, Image",
    what: "The basic building blocks of a React Native app.",
    why: "You don't use HTML divs and spans on mobile. You use Views and Texts.",
    time: "1-2 weeks"
  },
  {
    id: "stylesheet", parent: "framework", side: "left", type: "branch",
    icon: "🎨", name: "StyleSheet", desc: "CSS-like styling",
    what: "React Native's way of styling components using JavaScript objects.",
    why: "It looks like CSS, but works differently (e.g., everything is Flexbox by default).",
    time: "1 week"
  },
  {
    id: "expo", parent: "framework", side: "right", type: "branch",
    icon: "🏗️", name: "Expo", desc: "Start here, easiest setup",
    what: "A framework and platform built around React Native.",
    why: "Without Expo, installing React Native takes 3 days of fighting Android Studio and Xcode.",
    time: "1-2 weeks"
  },
  {
    id: "cli", parent: "framework", side: "right", type: "alternative",
    icon: "🛠️", name: "React Native CLI", desc: "Alternative, more control",
    what: "The bare-metal way to build React Native apps.",
    why: "Required if you need to write custom Swift/Kotlin code, but painful for beginners.",
    time: "2-3 weeks"
  },

  // Navigation Branches
  {
    id: "react-navigation", parent: "navigation", side: "left", type: "branch",
    icon: "🧭", name: "React Navigation", desc: "Standard navigation",
    what: "The official, community-standard library for moving between screens.",
    why: "It is used in almost every React Native app in existence.",
    time: "1-2 weeks"
  },
  {
    id: "stack", parent: "navigation", side: "left", type: "branch",
    icon: "🥞", name: "Stack Navigator", desc: "Screen to screen flow",
    what: "Stacking one screen on top of another (and swiping back to pop it off).",
    why: "The fundamental way you dive deeper into content in an app.",
    time: "1 week"
  },
  {
    id: "tabs", parent: "navigation", side: "right", type: "branch",
    icon: "🗂️", name: "Tab Navigator", desc: "Bottom tab bars",
    what: "The standard row of icons at the bottom of Instagram or Spotify.",
    why: "The most common top-level navigation pattern on mobile.",
    time: "1 week"
  },
  {
    id: "deep-linking", parent: "navigation", side: "right", type: "later",
    icon: "🔗", name: "Deep Linking", desc: "Later",
    what: "Clicking a link in an email and having it open a specific screen in your app.",
    why: "Crucial for marketing, but annoying to set up initially.",
    time: "1-2 weeks"
  },

  // State Management Branches
  {
    id: "usestate", parent: "state", side: "left", type: "branch",
    icon: "🪝", name: "useState & Context", desc: "Good enough for most",
    what: "Built-in React tools to hold data locally and share it globally.",
    why: "You don't need a massive state library if you are just building a simple app.",
    time: "1-2 weeks"
  },
  {
    id: "zustand", parent: "state", side: "left", type: "branch",
    icon: "🐻", name: "Zustand", desc: "Simple global state",
    what: "A tiny, fast state management library.",
    why: "When Context gets messy, this is the easiest way to hold user data across the whole app.",
    time: "1 week"
  },
  {
    id: "redux", parent: "state", side: "right", type: "alternative",
    icon: "🔴", name: "Redux", desc: "Alternative",
    what: "The heavy-duty, standard state management library.",
    why: "Very common in enterprise apps, but lots of boilerplate code.",
    time: "2-3 weeks"
  },
  {
    id: "react-query", parent: "state", side: "right", type: "later",
    icon: "🔄", name: "React Query", desc: "Later",
    what: "A library specifically for fetching, caching, and updating server data.",
    why: "Makes handling loading states and API caching incredibly easy.",
    time: "1-2 weeks"
  },

  // Device APIs Branches
  {
    id: "camera", parent: "device-apis", side: "left", type: "branch",
    icon: "📸", name: "Camera & Gallery", desc: "Capture and pick images",
    what: "Asking the user for permission to open their camera or photo album.",
    why: "Required for avatars, social posts, or scanning QR codes.",
    time: "1-2 weeks"
  },
  {
    id: "push", parent: "device-apis", side: "left", type: "branch",
    icon: "🔔", name: "Push Notifications", desc: "Re-engage users",
    what: "Sending alerts that buzz the user's phone even when the app is closed.",
    why: "It is the single most powerful tool to get users to open your app again.",
    time: "2-3 weeks"
  },
  {
    id: "location", parent: "device-apis", side: "right", type: "branch",
    icon: "📍", name: "Location Services", desc: "GPS and maps",
    what: "Getting the device's latitude/longitude and showing it on a map.",
    why: "Essential for fitness apps, delivery trackers, and local search.",
    time: "1-2 weeks"
  },
  {
    id: "storage", parent: "device-apis", side: "right", type: "branch",
    icon: "💾", name: "Local Storage", desc: "AsyncStorage, offline",
    what: "Saving data directly to the phone's hard drive.",
    why: "If you don't save their token, the user has to log in every single time they open the app.",
    time: "1 week"
  },

  // Backend Integration Branches
  {
    id: "rest", parent: "backend", side: "left", type: "branch",
    icon: "🌐", name: "REST APIs", desc: "Connect to any backend",
    what: "Using the fetch() API to GET and POST data to a server.",
    why: "The standard way mobile apps communicate with databases.",
    time: "1-2 weeks"
  },
  {
    id: "firebase", parent: "backend", side: "left", type: "branch",
    icon: "🔥", name: "Firebase", desc: "Auth, database, storage",
    what: "Google's backend-as-a-service platform.",
    why: "It lets a mobile developer build a full app without writing any server code.",
    time: "2-3 weeks"
  },
  {
    id: "graphql", parent: "backend", side: "right", type: "later",
    icon: "🕸️", name: "GraphQL", desc: "Later",
    what: "A query language that lets the app ask for exactly the data it needs.",
    why: "Mobile data is expensive. GraphQL stops you from downloading data you don't use.",
    time: "2-3 weeks"
  },
  {
    id: "websockets", parent: "backend", side: "right", type: "later",
    icon: "🔌", name: "WebSockets", desc: "Later",
    what: "A persistent connection to the server for live data.",
    why: "Required for chat apps, live sports scores, or delivery tracking.",
    time: "1-2 weeks"
  },

  // App Store Deployment Branches
  {
    id: "play-store", parent: "deployment", side: "left", type: "branch",
    icon: "🤖", name: "Google Play Store", desc: "Android release",
    what: "The process of uploading an APK/AAB to Google.",
    why: "Android is half the mobile market.",
    time: "1 week"
  },
  {
    id: "app-store", parent: "deployment", side: "left", type: "branch",
    icon: "🍎", name: "Apple App Store", desc: "iOS release, strict",
    what: "The grueling process of getting Apple to approve your app.",
    why: "Apple users spend more money, but Apple will reject your app for tiny UI mistakes.",
    time: "1-2 weeks"
  },
  {
    id: "signing", parent: "deployment", side: "right", type: "branch",
    icon: "✍️", name: "App Signing", desc: "Certificates",
    what: "Cryptographically signing your app to prove you built it.",
    why: "Neither store will accept an app unless it is signed correctly. It is often a nightmare.",
    time: "1 week"
  },
  {
    id: "ota", parent: "deployment", side: "right", type: "later",
    icon: "📡", name: "OTA Updates", desc: "Later",
    what: "Over The Air updates (like Expo Updates).",
    why: "Lets you push bug fixes directly to users instantly, bypassing the 3-day App Store review.",
    time: "1-2 weeks"
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
