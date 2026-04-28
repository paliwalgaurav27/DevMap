/*
  File: js/main.js
  Purpose: Global interactions and popup modal behavior for DevMap.
  Author: Placeholder
*/

// Execute immediately to reduce FOUC since script is loaded at the end of body
const currentTheme = localStorage.getItem('devmap-theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Setup
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('devmap-theme', 'dark');
        themeToggle.textContent = '☀️';
      } else {
        localStorage.setItem('devmap-theme', 'light');
        themeToggle.textContent = '🌙';
      }
    });
  }

  const popupOverlay = document.getElementById('popup-overlay');
  const popupModal = document.getElementById('popup-modal');
  const popupClose = document.getElementById('popup-close');
  const popupContent = document.getElementById('popup-content');

  // Check if we are on a page with a popup (Role Pages)
  if (popupOverlay && popupModal && popupClose && popupContent) {
    function openPopup(contentHTML) {
      popupContent.innerHTML = contentHTML;
      popupOverlay.classList.add('active');
      popupModal.classList.add('active');
      // Basic accessibility focus
      popupClose.focus();
    }

    function closePopup() {
      popupOverlay.classList.remove('active');
      popupModal.classList.remove('active');
    }

    popupClose.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', closePopup);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && popupModal.classList.contains('active')) {
        closePopup();
      }
    });

    // Expose to global scope for roadmap.js to use
    window.DevMap = window.DevMap || {};
    window.DevMap.openPopup = openPopup;
  }

  // Quiz Modal Logic (Index Page)
  const btnHelp = document.getElementById('btn-help');
  const quizModal = document.getElementById('quiz-modal');
  const closeQuiz = document.getElementById('close-quiz');
  const quizContent = document.getElementById('quiz-dynamic-content');

  if (btnHelp && quizModal && closeQuiz && quizContent) {
    const quizQuestions = [
      {
        question: "What type of problems do you enjoy solving most?",
        options: [
          { text: "Making things look beautiful and interactive", scores: { Frontend: 3, Mobile: 1 } },
          { text: "Organizing data and building solid logic", scores: { Backend: 3, DBA: 1 } },
          { text: "Automating tasks and managing systems", scores: { DevOps: 3, Backend: 1 } },
          { text: "A mix of everything, I like seeing the whole picture", scores: { Fullstack: 3 } }
        ]
      },
      {
        question: "How do you feel about user interfaces (UI) and design?",
        options: [
          { text: "I love them! I want to build what people see.", scores: { Frontend: 3 } },
          { text: "I prefer building for mobile devices specifically.", scores: { Mobile: 3 } },
          { text: "I don't care about UI, I want to build the engine behind the scenes.", scores: { Backend: 2, DBA: 2, DevOps: 1 } },
          { text: "I can do it if I have to, but I'd rather focus on functionality.", scores: { Fullstack: 1, Backend: 1 } }
        ]
      },
      {
        question: "When things break, what do you prefer debugging?",
        options: [
          { text: "Visual bugs, layout issues, and browser compatibility.", scores: { Frontend: 3 } },
          { text: "Server errors, slow queries, and data inconsistencies.", scores: { Backend: 2, DBA: 3 } },
          { text: "App crashes on different devices and OS versions.", scores: { Mobile: 3 } },
          { text: "Deployment failures, server crashes, and pipeline issues.", scores: { DevOps: 3 } }
        ]
      },
      {
        question: "How do you prefer to handle data?",
        options: [
          { text: "I just want to consume it from an API and display it nicely.", scores: { Frontend: 2, Mobile: 2 } },
          { text: "I want to design the schemas, write complex queries, and optimize storage.", scores: { DBA: 3, Backend: 1 } },
          { text: "I want to build the APIs that serve the data securely and efficiently.", scores: { Backend: 3, Fullstack: 1 } },
          { text: "I want to ensure the databases are backed up, highly available, and scalable.", scores: { DevOps: 2, DBA: 2 } }
        ]
      },
      {
        question: "Which of these sounds like the most satisfying achievement to you?",
        options: [
          { text: "Creating an incredibly smooth, pixel-perfect user experience.", scores: { Frontend: 3, Mobile: 1 } },
          { text: "Building a secure system that can handle millions of requests per second.", scores: { Backend: 3, DevOps: 1 } },
          { text: "Releasing an app that gets downloaded thousands of times on App Stores.", scores: { Mobile: 3 } },
          { text: "Building a complete app from scratch, handling both database and UI.", scores: { Fullstack: 3 } }
        ]
      }
    ];

    const roleLinks = {
      "Frontend": "pages/frontend.html",
      "Backend": "pages/backend.html",
      "Fullstack": "pages/fullstack.html",
      "DBA": "pages/dba.html",
      "DevOps": "pages/devops.html",
      "Mobile": "pages/mobile.html"
    };

    let currentStep = 0;
    let scores = { Frontend: 0, Backend: 0, Fullstack: 0, DBA: 0, DevOps: 0, Mobile: 0 };

    function renderQuestion() {
      if (currentStep >= quizQuestions.length) {
        showResult();
        return;
      }
      
      const q = quizQuestions[currentStep];
      let html = `
        <h3>Question ${currentStep + 1} of ${quizQuestions.length}</h3>
        <p class="mt-1" style="margin-bottom: 1.5rem;">${q.question}</p>
        <div class="quiz-options">
      `;
      
      q.options.forEach((opt, index) => {
        html += `<button class="quiz-option" data-index="${index}">${opt.text}</button>`;
      });
      
      html += `</div>`;
      quizContent.innerHTML = html;

      // Add event listeners to options
      const buttons = quizContent.querySelectorAll('.quiz-option');
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const optIndex = parseInt(e.target.getAttribute('data-index'));
          const selectedOption = q.options[optIndex];
          
          // Add scores
          for (const [role, score] of Object.entries(selectedOption.scores)) {
            scores[role] += score;
          }
          
          currentStep++;
          renderQuestion();
        });
      });
    }

    function showResult() {
      // Find role with max score
      let bestRole = "";
      let maxScore = -1;
      for (const [role, score] of Object.entries(scores)) {
        if (score > maxScore) {
          maxScore = score;
          bestRole = role;
        }
      }

      quizContent.innerHTML = `
        <h3 style="margin-bottom: 1rem;">Your Recommended Path: <span style="color: var(--accent-color);">${bestRole}</span></h3>
        <p class="mt-1" style="font-size: 1.1rem; line-height: 1.5; margin-bottom: 2rem;">Based on your answers, we think you'd be a great fit for <strong>${bestRole}</strong>.</p>
        <div class="quiz-options" style="display: flex; gap: 1rem; flex-direction: column;">
          <a href="${roleLinks[bestRole]}" class="btn btn-primary" style="text-decoration: none; text-align: center;">Explore ${bestRole} Roadmap</a>
          <button class="btn btn-outline" id="retake-quiz" style="text-align: center;">Retake Quiz</button>
        </div>
      `;

      document.getElementById('retake-quiz').addEventListener('click', () => {
        currentStep = 0;
        scores = { Frontend: 0, Backend: 0, Fullstack: 0, DBA: 0, DevOps: 0, Mobile: 0 };
        renderQuestion();
      });
    }

    btnHelp.addEventListener('click', () => {
      currentStep = 0;
      scores = { Frontend: 0, Backend: 0, Fullstack: 0, DBA: 0, DevOps: 0, Mobile: 0 };
      renderQuestion();
      quizModal.classList.add('active');
    });

    closeQuiz.addEventListener('click', () => {
      quizModal.classList.remove('active');
    });

    quizModal.addEventListener('click', (e) => {
      if (e.target === quizModal) {
        quizModal.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && quizModal.classList.contains('active')) {
        quizModal.classList.remove('active');
      }
    });
  }
});
