/**
 * Deepali Shah — Portfolio Interactivity & Case Study Modal Engine
 * Clean, Accessible, Zero-Dependency Modern Vanilla JavaScript
 */

(function () {
  'use strict';

  // --- 1. Comprehensive Verified Case Study Data ---
  const projectDetails = {
    mealwiser: {
      title: "MealWiser — AI Weekly Meal Planner",
      subtitle: "An AI meal planning concept exploring quick-commerce: Helping users plan weekly meals and generate smart grocery baskets based on household preferences.",
      badges: ["Product Concept", "PRD & Scoping", "Lovable Prototype", "Proposed Metrics"],
      demoUrl: "https://mealwiser.lovable.app",
      githubUrl: "https://github.com/Deepali-9119/mealwiser",
      sections: [
        {
          heading: "📌 The Problem Statement",
          content: `Busy working professionals want to eat healthier home-cooked meals but frequently lack the time and mental bandwidth to plan menus, compile grocery checklists, coordinate ingredient purchases, and schedule timely deliveries.<br><br>
          <strong>Current Quick-Commerce Limitation:</strong> Existing grocery platforms (like Blinkit, Instamart, Zepto) are fundamentally <em>reactive</em>. Users are required to know exactly what items and quantities they need before opening the app. There is no advisory or meal planning layer to guide healthy eating with zero friction.`
        },
        {
          heading: "💡 Product Solution",
          content: `MealWiser introduces a <strong>proactive AI meal planning layer</strong> on top of quick-commerce grocery delivery. Users configure dietary preferences and household size once; the intelligent engine generates customized weekly meal plans, auto-populates ingredient baskets with duplicate detection, proposes staggered fresh deliveries, and guides execution via a step-by-step Cook Mode.`
        },
        {
          heading: "🎯 User Journey Flow",
          content: `
          <div class="modal-grid-box">
            <div class="modal-box-item"><span class="modal-box-label">Step 1</span><span class="modal-box-val">Set Dietary Preferences & Goals</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Step 2</span><span class="modal-box-val">AI Generates 7-Day Meal Plan</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Step 3</span><span class="modal-box-val">Groceries Auto-Compiled & Clustered</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Step 4</span><span class="modal-box-val">Freshness-Based Staggered Deliveries</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Step 5</span><span class="modal-box-val">Guided Step-by-Step Cook Mode</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Step 6</span><span class="modal-box-val">Progress & Utilization Dashboard</span></div>
          </div>`
        },
        {
          heading: "📊 Proposed Product KPIs & Telemetry",
          content: `Proposed framework for post-launch feature validation (designed prior to production rollout):
          <ul class="modal-list">
            <li><strong>Planner Activation Rate:</strong> % of onboarded users who generate and save their first weekly meal plan.</li>
            <li><strong>Weekly Order Frequency:</strong> Average number of grocery checkout transactions per user per week (testing whether planning increases basket cadence).</li>
            <li><strong>Repeat Purchase Rate:</strong> % of users who reorder groceries via the automated meal plan in subsequent weeks.</li>
            <li><strong>Meal Plan Completion Rate:</strong> % of planned meals marked as cooked in Cook Mode.</li>
            <li><strong>Grocery Utilization Rate:</strong> Self-reported percentage of ordered ingredients consumed vs. discarded, evaluating waste reduction.</li>
          </ul>`
        },
        {
          heading: "✂️ Deliberate MVP Scope Decisions",
          content: `To maintain a laser-focused MVP and prevent feature bloat, the following features were <strong>intentionally excluded</strong> from the initial release:
          <ul class="modal-list">
            <li><strong>Calorie & Macro Tracking:</strong> Kept out to avoid turning the app into an intimidating fitness logger.</li>
            <li><strong>Wearable & Fitness Integrations:</strong> Excluded to reduce third-party API dependencies and onboarding friction.</li>
            <li><strong>Social / Community Feeds:</strong> Avoided distraction from the core utility loop (plan → buy → cook).</li>
            <li><strong>AI Nutrition Coaching Chatbots:</strong> Deferred in favor of deterministic, reliable weekly meal recommendations.</li>
          </ul>`
        },
        {
          heading: "📝 Key PM Lessons Learned",
          content: `
          <ul class="modal-list">
            <li><strong>Product Scoping Rigor:</strong> Defining what <em>not</em> to build is just as critical as defining core features.</li>
            <li><strong>E-Commerce Value Loops:</strong> Connecting high-level lifestyle aspirations (eating healthy) directly to low-friction monetization (automated cart generation) drives retention.</li>
            <li><strong>Accessibility by Default:</strong> Designing clear touch targets, generous line spacing, and strong color contrast ensures effortless one-handed use in mobile kitchen environments.</li>
          </ul>`
        }
      ]
    },

    hiremate: {
      title: "HireMate — AI Interview Preparation Coach",
      subtitle: "A conversational AI mock interview coach that simulates realistic dialogue, dynamically adapts difficulty, and provides structured diagnostic feedback.",
      badges: ["142 Commits Iterated", "Conversational AI", "Lovable Prototype", "STAR Feedback"],
      demoUrl: "https://gethiremate.lovable.app",
      githubUrl: "https://github.com/Deepali-9119/gethiremate",
      sections: [
        {
          heading: "📌 The Problem Statement",
          content: `Job seekers typically prepare for high-stakes interviews using static question lists, blog posts, and video tutorials. These mediums are <strong>passive and one-directional</strong>—they fail to replicate the conversational pressure of live interviews, cannot assess non-linear responses, and cannot point out specific structural flaws in answers.<br><br>
          <strong>Target User:</strong> Job candidates and transitioning professionals seeking realistic, judgment-free interview rehearsal with immediate diagnostic coaching.`
        },
        {
          heading: "💡 Product Solution",
          content: `HireMate is a conversational AI interview partner. Rather than filling out forms, users engage in a realistic simulated dialogue. The AI interviewer assesses answer quality in real time, adjusts the difficulty of follow-up questions dynamically, and provides card-based feedback after each exchange followed by an end-of-session scorecard.`
        },
        {
          heading: "📐 The 4-Dimension Feedback Framework",
          content: `Every user answer is systematically evaluated across four distinct diagnostic dimensions:
          <ul class="modal-list">
            <li><strong>1. Clarity:</strong> How concisely and clearly the candidate articulates their thoughts without rambling or jargon.</li>
            <li><strong>2. Structure:</strong> Adherence to proven communication frameworks (e.g., STAR method: Situation, Task, Action, Result) and logical sequencing.</li>
            <li><strong>3. Confidence:</strong> Tone, conviction, ownership language, and directness of assertions.</li>
            <li><strong>4. Relevance:</strong> Alignment with the specific role competencies and direct responsiveness to the prompt.</li>
          </ul>`
        },
        {
          heading: "🔄 Design Decisions & Product Architecture",
          content: `
          <div class="modal-grid-box">
            <div class="modal-box-item">
              <span class="modal-box-label">Chat-based UX vs. Form</span>
              <span class="modal-box-val">Simulates natural conversational flow, drastically reducing cognitive load.</span>
            </div>
            <div class="modal-box-item">
              <span class="modal-box-label">Card-Based Feedback</span>
              <span class="modal-box-val">Scannable, visually chunked critiques prevent cognitive overload after speaking.</span>
            </div>
            <div class="modal-box-item">
              <span class="modal-box-label">Adaptive Difficulty</span>
              <span class="modal-box-val">Keeps users in their optimal challenge zone—neither bored nor overwhelmed.</span>
            </div>
            <div class="modal-box-item">
              <span class="modal-box-label">Optional Resume Upload</span>
              <span class="modal-box-val">Enables hyper-personalized scenario questions without mandatory onboarding friction.</span>
            </div>
          </div>`
        },
        {
          heading: "🚀 142 Commits: The Power of Iterative Development",
          content: `With <strong>142 commits</strong>, HireMate is my most deeply iterated product. Throughout continuous cycles of usability testing and prompt refinement, the pivotal product insight was that <strong>the quality and empathy of the feedback loop matters significantly more than the difficulty of the questions</strong>. Users build genuine confidence when they understand precisely <em>why</em> an answer was weak and <em>how</em> to reframe it using structured frameworks.`
        }
      ]
    },

    cookwise: {
      title: "CookWise — AI Recipe Guide for Beginners",
      subtitle: "A focused single-flow AI culinary assistant that generates approachable, step-by-step recipes with servings scaling and timed instruction cards.",
      badges: ["Clean UX Design", "Single-Flow App", "Lovable Prototype", "n8n Orchestration"],
      demoUrl: "https://cookwise-recipe-guide.lovable.app",
      githubUrl: "https://github.com/Deepali-9119/cookwise-recipe-guide",
      sections: [
        {
          heading: "📌 The Problem Statement",
          content: `First-time and novice cooks are frequently intimidated by mainstream culinary platforms. Recipes often contain overwhelming ingredient lists, obscure terminology, and lack critical timing cues for simultaneous steps. Most platforms assume culinary knowledge that beginners simply do not have.`
        },
        {
          heading: "💡 Product Solution",
          content: `CookWise provides an ultra-clean <strong>single-flow application</strong>: input a dish name or whatever raw ingredients you have at home, select your available preparation window (e.g., &lt;15 min, 15–30 min), and receive a beginner-proof recipe with automatic serving calculations, prep checklists, and timed step cards.`
        },
        {
          heading: "🎨 Visual Identity & Intentional UX Choices",
          content: `Every visual and interaction element was selected with explicit design intent:
          <ul class="modal-list">
            <li><strong>Warm Color Palette:</strong> Terracotta (#D97A4A) paired with forest green (#2F4B3C) on an inviting warm off-white background (#FAF7F2)—evoking authentic kitchen warmth rather than cold SaaS software.</li>
            <li><strong>Avoidance of Chat UI:</strong> Cooking is a structured instructional task, not a casual chat. Dedicated card components allow users to check off items and track timers without scrolling through chat bubbles.</li>
            <li><strong>Progressive Disclosure:</strong> Cooking tips and troubleshooting tricks remain collapsed until requested, maintaining focus on active step instructions.</li>
            <li><strong>Zero Jargon Error States:</strong> Graceful recovery messages ('Something went wrong — let's try that again') prevent user frustration.</li>
          </ul>`
        },
        {
          heading: "🏗️ System Architecture & Schema Contract",
          content: `The architecture decouples the frontend UI from AI model orchestration:
          <div class="modal-grid-box">
            <div class="modal-box-item"><span class="modal-box-label">Frontend</span><span class="modal-box-val">Lovable Prototype Interface</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Transport</span><span class="modal-box-val">Webhook Payload</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Backend</span><span class="modal-box-val">n8n Workflow Engine</span></div>
            <div class="modal-box-item"><span class="modal-box-label">AI Inference</span><span class="modal-box-val">LLM Structured JSON Generation</span></div>
          </div>
          <p class="modal-text">Enforcing a strict JSON response schema (dishName, servings, totalTimeMinutes, ingredients[], steps[], tips[]) eliminated parsing errors and ensured 100% predictable component rendering.</p>`
        }
      ]
    },

    "ai-workflows": {
      title: "AI Workflows — n8n Automation Experiments",
      subtitle: "A collection of hands-on AI automation workflows and experiments exploring multi-model LLM chaining, search tools, Airtable, and webhook orchestration.",
      badges: ["n8n Workflows", "Google Gemini", "Groq", "Airtable", "API Integration"],
      demoUrl: "https://github.com/Deepali-9119/AI-Workflows--n8n",
      githubUrl: "https://github.com/Deepali-9119/AI-Workflows--n8n",
      sections: [
        {
          heading: "📌 Why AI Orchestration Matters for PMs",
          content: `As an aspiring Product Manager focusing on AI products, understanding <strong>how AI systems function end-to-end</strong>—underneath the graphical UI—is essential. Building autonomous workflows provides firsthand insight into latency trade-offs, token costs, context management, API error handling, and model routing.`
        },
        {
          heading: "🔧 The Automated Workflow Suite",
          content: `
          <ul class="modal-list">
            <li><strong>01. AI Topic Generator:</strong> Researches trending Product Management and AI discussions via Tavily and SerpApi, synthesizes structured briefs using Google Gemini and Groq, drafts ready-to-publish LinkedIn posts, and syncs directly into an Airtable content backlog.</li>
            <li><strong>02. Rumi's Muse Pipeline:</strong> Connects a standalone Lovable web application via incoming webhooks to an n8n AI agent that executes poetic metaphor synthesis with Google Gemini, returning formatted verse payloads.</li>
            <li><strong>03. ReveliaBot Multimodal Telegram Assistant:</strong> A Telegram bot with conditional routing nodes that inspects incoming message MIME types (text vs. image), routes images to Gemini Vision, maintains conversational memory buffers, and streams responses back to Telegram users.</li>
          </ul>`
        },
        {
          heading: "📝 Key PM Insights & Takeaways",
          content: `
          <ul class="modal-list">
            <li><strong>Workflow Decomposition as a PM Skill:</strong> Breaking complex human tasks into modular, deterministic orchestration nodes directly mirrors writing PRD user stories and technical edge-case boundaries.</li>
            <li><strong>Prompt Sensitivity & Latency:</strong> Subtle phrasing changes in system instructions dramatically affect structured JSON output fidelity. Hands-on testing builds deep intuition for model predictability.</li>
            <li><strong>Cost vs. Speed Trade-offs:</strong> Choosing between ultra-fast inference (Groq) for rapid drafting vs. deep reasoning (Gemini) for nuanced research informs real-world AI feature unit economics.</li>
          </ul>`
        }
      ]
    },

    rumi: {
      title: "Rumi's Muse — Reflective Poetry AI",
      subtitle: "Creative AI prototype transforming user situations and emotional reflections into Rumi-inspired contemplative poetry.",
      badges: ["Creative AI", "Prompt Engineering", "Lovable Prototype", "n8n Webhook", "Google Gemini"],
      demoUrl: "https://github.com/Deepali-9119/rumi-s-muse",
      githubUrl: "https://github.com/Deepali-9119/rumi-s-muse",
      sections: [
        {
          heading: "📌 Concept & Philosophy",
          content: `Rumi's poetry has bridged cultures and centuries by translating internal human experiences into timeless metaphors. <strong>Rumi's Muse</strong> explores how generative AI can be tuned not just for factual retrieval, but for contemplative, emotionally resonant creative expression.`
        },
        {
          heading: "💡 Minimalist Interaction Model",
          content: `The product applies a strictly minimalist interaction philosophy: one single text field, one primary action. The user enters a thought, challenge, or situation, and receives a short, formatted reflective poem. Complex prompt engineering, metaphor constraints, and webhook orchestration are completely abstracted from the end user.`
        },
        {
          heading: "⚙️ Decoupled Webhook Architecture",
          content: `
          <div class="modal-grid-box">
            <div class="modal-box-item"><span class="modal-box-label">Client Layer</span><span class="modal-box-val">Lovable Web Interface</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Orchestration</span><span class="modal-box-val">Webhook & n8n workflow</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Intelligence</span><span class="modal-box-val">Google Gemini AI agent with customized prompt guards</span></div>
          </div>`
        },
        {
          heading: "📝 Key PM Learnings",
          content: `
          <ul class="modal-list">
            <li><strong>Prompt Engineering as Product Feature:</strong> Crafting constraints around tone, vocabulary, and metaphorical distance is essential to avoid generic AI cliches.</li>
            <li><strong>Simplicity as a Differentiator:</strong> Eliminating extraneous settings or knobs allows the core emotional value of the output to shine.</li>
          </ul>`
        }
      ]
    },

    phonepe: {
      title: "PhonePe Smart Spend Coach — AI Personal Finance Concept",
      subtitle: "IIT Roorkee PM × Applied AI Capstone: Proactive AI-powered micro-nudges and financial analytics to help UPI users curb impulsive spending.",
      badges: ["IIT Roorkee Capstone", "Product Strategy", "Figma", "Behavioral Nudges"],
      demoUrl: "",
      githubUrl: "https://www.linkedin.com/in/itsdeeppp",
      sections: [
        {
          heading: "📌 The Problem Statement",
          content: `UPI apps like PhonePe have eliminated friction from digital payments. However, frictionless transactions create a new behavioral side-effect: <strong>spending blindness</strong> and post-purchase regret.<br><br>
          Users lack real-time visibility into their cumulative discretionary spending until their monthly statement arrives, making proactive budgeting nearly impossible.`
        },
        {
          heading: "💡 Product Solution",
          content: `<strong>PhonePe Smart Spend Coach</strong> is an AI-powered financial advisory layer embedded directly into the payment flow. Rather than acting as a backward-looking tracker, it provides <em>predictive, contextual micro-nudges</em> before high-frequency discretionary transactions, alerting users when they are on pace to exceed category budgets.`
        },
        {
          heading: "🎯 Product Management Lifecycle (IIT Roorkee Capstone)",
          content: `
          <div class="modal-grid-box">
            <div class="modal-box-item"><span class="modal-box-label">Discovery</span><span class="modal-box-val">User interviews & behavioral spending friction analysis</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Prioritization</span><span class="modal-box-val">RICE & ICE framework scoring for MVP feature set</span></div>
            <div class="modal-box-item"><span class="modal-box-label">PRD & Wireframing</span><span class="modal-box-val">Detailed specifications, edge cases, and Figma prototypes</span></div>
            <div class="modal-box-item"><span class="modal-box-label">Metrics Hierarchy</span><span class="modal-box-val">North Star: Monthly Budget Adherence Rate</span></div>
          </div>`
        },
        {
          heading: "📊 Proposed Product KPIs",
          content: `
          <ul class="modal-list">
            <li><strong>Budget Adherence Rate (North Star):</strong> % of users maintaining spending within self-defined limits.</li>
            <li><strong>Nudge Action Rate:</strong> % of micro-nudges leading to deferred or cancelled discretionary purchases.</li>
            <li><strong>30-Day Retention:</strong> Cohort retention for users actively engaging with the Coach dashboard.</li>
          </ul>`
        },
        {
          heading: "📝 Key PM Insights",
          content: `
          <ul class="modal-list">
            <li><strong>Behavioral Economics in Fintech:</strong> Timing of information delivery is everything. Pre-transaction nudges are 10x more effective than post-transaction monthly graphs.</li>
            <li><strong>Tone Sensitivity:</strong> Financial nudges must feel empowering and advisory, never judgmental or restrictive.</li>
          </ul>`
        }
      ]
    }
  };

  // --- 2. Theme Management (Safe Storage) ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlRoot = document.documentElement;

  function safeGetTheme() {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  }

  function safeSetTheme(theme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Gracefully ignore if storage is restricted
    }
  }

  function initTheme() {
    const savedTheme = safeGetTheme();
    if (savedTheme) {
      htmlRoot.setAttribute('data-theme', savedTheme);
    } else {
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      const initialTheme = prefersLight ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', initialTheme);
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', nextTheme);
      safeSetTheme(nextTheme);
    });
  }

  // --- 3. Mobile Navigation Drawer ---
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navItems = document.querySelectorAll('.nav-item');

  function openMobileNav() {
    if (!mainNav || !mobileNavToggle) return;
    mainNav.classList.add('open');
    mobileNavToggle.classList.add('active');
    mobileNavToggle.setAttribute('aria-expanded', 'true');
    mobileNavToggle.setAttribute('aria-label', 'Close mobile navigation');
  }

  function closeMobileNav() {
    if (!mainNav || !mobileNavToggle) return;
    mainNav.classList.remove('open');
    mobileNavToggle.classList.remove('active');
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    mobileNavToggle.setAttribute('aria-label', 'Open mobile navigation');
  }

  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close menu when clicking navigation items
    navItems.forEach(function (item) {
      item.addEventListener('click', function () {
        closeMobileNav();
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        closeMobileNav();
      }
    });
  }

  // --- 4. Project Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(function (card) {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.split(' ').includes(filterValue)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 5. Skills Category Tab Switching (WCAG Compliant) ---
  const skillTabBtns = Array.from(document.querySelectorAll('.skills-tab-btn'));
  const skillCategoryBlocks = document.querySelectorAll('.skill-category-block');

  function selectSkillTab(targetBtn) {
    if (!targetBtn) return;
    const targetCat = targetBtn.getAttribute('data-skill-cat');

    skillTabBtns.forEach(function (b) {
      const isActive = b === targetBtn;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      b.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    skillCategoryBlocks.forEach(function (block) {
      const blockCat = block.getAttribute('data-category');
      if (targetCat === 'all' || blockCat === targetCat) {
        block.style.display = 'block';
      } else {
        block.style.display = 'none';
      }
    });

    targetBtn.focus();
  }

  skillTabBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      selectSkillTab(btn);
    });

    btn.addEventListener('keydown', function (e) {
      let newIndex = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        newIndex = (index + 1) % skillTabBtns.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        newIndex = (index - 1 + skillTabBtns.length) % skillTabBtns.length;
      } else if (e.key === 'Home') {
        newIndex = 0;
      } else if (e.key === 'End') {
        newIndex = skillTabBtns.length - 1;
      }

      if (newIndex !== null) {
        e.preventDefault();
        selectSkillTab(skillTabBtns[newIndex]);
      }
    });
  });

  // --- 6. Case Study Deep-Dive Modal (with Focus Trap) ---
  const modalOverlay = document.getElementById('project-modal');
  const modalContainer = modalOverlay ? modalOverlay.querySelector('.modal-container') : null;
  const modalTarget = document.getElementById('modal-content-target');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  let lastActiveElement = null;

  function renderModalContent(projectId) {
    const data = projectDetails[projectId];
    if (!data) return false;

    let badgesHtml = data.badges.map(b => `<span class="badge badge-primary">${b}</span>`).join(' ');

    let linksHtml = '';
    if (data.demoUrl && !data.demoUrl.includes('github.com')) {
      linksHtml += `<a href="${data.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">Live App Demo ↗</a>`;
    }
    if (data.githubUrl) {
      linksHtml += `<a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">GitHub Repository ↗</a>`;
    }

    let sectionsHtml = data.sections.map(sec => `
      <div class="modal-section-block">
        <h4 class="modal-section-title">${sec.heading}</h4>
        <div class="modal-text">${sec.content}</div>
      </div>
    `).join('');

    modalTarget.innerHTML = `
      <div class="modal-header-block">
        <div class="modal-badge-row">${badgesHtml}</div>
        <h3 class="modal-title" id="modal-title">${data.title}</h3>
        <p class="modal-subtitle">${data.subtitle}</p>
        <div class="modal-links-row">${linksHtml}</div>
      </div>
      <div class="modal-body-sections">
        ${sectionsHtml}
      </div>
    `;
    return true;
  }

  function getModalFocusableElements() {
    if (!modalContainer) return [];
    return Array.from(modalContainer.querySelectorAll(
      'button:not([disabled]), a[href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ));
  }

  function openModal(projectId, triggerBtn) {
    if (!projectDetails[projectId]) return;

    lastActiveElement = triggerBtn;
    const success = renderModalContent(projectId);
    if (!success) return;

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    requestAnimationFrame(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    });
  }

  function closeModal() {
    if (!modalOverlay || !modalOverlay.classList.contains('open')) return;

    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const projectId = btn.getAttribute('data-project');
      openModal(projectId, btn);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }

  // Click on modal overlay outside container closes modal
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Keyboard accessibility: Escape key & Modal Focus Trap
  document.addEventListener('keydown', function (e) {
    // Handle Escape key
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('open')) {
        closeModal();
        return;
      }
      if (mainNav && mainNav.classList.contains('open')) {
        closeMobileNav();
        if (mobileNavToggle) mobileNavToggle.focus();
        return;
      }
    }

    // Modal Focus Trap for Tab key
    if (e.key === 'Tab' && modalOverlay && modalOverlay.classList.contains('open')) {
      const focusables = getModalFocusableElements();
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstEl || !modalContainer.contains(document.activeElement)) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastEl || !modalContainer.contains(document.activeElement)) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  });

  // --- 7. Scroll-Spy for Sticky Navigation ---
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));

  function updateScrollSpy() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const isAtBottom = (windowHeight + scrollY) >= (documentHeight - 60);

    let activeSectionId = null;

    if (isAtBottom) {
      activeSectionId = 'contact';
    } else {
      sections.forEach(function (current) {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 140;
        const sectionId = current.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          activeSectionId = sectionId;
        }
      });
    }

    navLinks.forEach(function (link) {
      const targetId = link.getAttribute('href').replace('#', '');
      const isActive = targetId === activeSectionId;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });

  // Initialize
  initTheme();
  updateScrollSpy();

})();
