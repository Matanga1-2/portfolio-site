export type ContentTag = 'AI' | 'Engineering' | 'Product' | 'Productivity' | 'Analysis'

export interface ContentItem {
  id: string
  title: string
  subtitle: string
  date: Date
  formattedDate: string
  tags: ContentTag[]
  url: string
  source: 'Blog' | 'Port' | 'TheNewStack'
}

export const contentData: ContentItem[] = [
  // === Port Blog Posts ===
  {
    id: 'introducing-port-ai-assistant',
    title: 'Introducing Port AI assistant',
    subtitle: 'Your intelligent partner for uncovering insights across your software delivery lifecycle and guiding platform building.',
    date: new Date('2025-12-04T10:00:00.000Z'),
    formattedDate: 'Dec 4, 2025',
    tags: ['AI'],
    url: 'https://www.port.io/blog/introducing-port-ai-assistant',
    source: 'Port'
  },
  {
    id: 'ai-engineering-intelligence-measuring-agentic-impact-roi',
    title: 'AI + Engineering intelligence: Measuring agentic impact and ROI',
    subtitle: 'How to adjust your measurement strategies in the AI era with Port.',
    date: new Date('2025-11-24T10:00:00.000Z'),
    formattedDate: 'Nov 24, 2025',
    tags: ['AI', 'Analysis'],
    url: 'https://www.port.io/blog/ai-engineering-intelligence-measuring-agentic-impact-roi',
    source: 'Port'
  },
  {
    id: 'how-to-implement-and-track-dora-metrics',
    title: 'How to implement and track DORA metrics in your organization',
    subtitle: 'Centralizing DORA metrics collection from git providers, CI/CD pipelines, and incident management tools.',
    date: new Date('2025-10-21T10:00:00.000Z'),
    formattedDate: 'Oct 21, 2025',
    tags: ['Engineering', 'Analysis'],
    url: 'https://www.port.io/blog/how-to-implement-and-track-dora-metrics-in-your-organization',
    source: 'Port'
  },
  {
    id: 'integrate-software-catalog-port-mcp-server',
    title: 'Integrate your software catalog into every workflow: Introducing the Port MCP Server',
    subtitle: 'Access your software catalog and take actions through AI-powered tools using natural language queries.',
    date: new Date('2025-06-05T10:00:00.000Z'),
    formattedDate: 'Jun 5, 2025',
    tags: ['AI', 'Engineering'],
    url: 'https://www.port.io/blog/integrate-software-catalog-every-workflow-port-mcp-server',
    source: 'Port'
  },
  {
    id: 'introducing-ai-agents-in-port',
    title: 'Introducing AI agents in Port',
    subtitle: 'Extending the internal developer portal to become a unified hub for running AI agents safely.',
    date: new Date('2025-05-30T10:00:00.000Z'),
    formattedDate: 'May 30, 2025',
    tags: ['AI'],
    url: 'https://www.port.io/blog/ai-agents-port',
    source: 'Port'
  },
  // === Blog Posts ===
  {
    id: '57-on-context-engineering',
    title: '#57 - On Context Engineering',
    subtitle: 'What Is Context Engineering, and How It Can Drive AI Adoption',
    date: new Date('2025-08-13T07:05:05.260Z'),
    formattedDate: 'Aug 13, 2025',
    tags: ['AI', 'Engineering'],
    url: 'https://blog.matangr.com/p/57-on-context-engineering',
    source: 'Blog'
  },
  {
    id: '56-my-ai-agent-required-more-engineering',
    title: '#56 - My AI agent required more engineering than prompts',
    subtitle: 'A case study on automating release changelogs and the messy work of building production-ready AI.',
    date: new Date('2025-07-22T14:55:32.229Z'),
    formattedDate: 'Jul 22, 2025',
    tags: ['AI', 'Engineering'],
    url: 'https://blog.matangr.com/p/my-ai-agent-required-more-engineering',
    source: 'Blog'
  },
  {
    id: '55-domain-driven-ai',
    title: '#55 - Domain-driven AI',
    subtitle: 'Why AI Needs Domain-Driven Design to Overcome Language Barriers',
    date: new Date('2025-07-10T20:48:52.120Z'),
    formattedDate: 'Jul 10, 2025',
    tags: ['AI', 'Engineering'],
    url: 'https://blog.matangr.com/p/domain-driven-ai',
    source: 'Blog'
  },
  {
    id: '54-building-my-first-google-sheets-add',
    title: '#54 - Building My First Google Sheets Add-on',
    subtitle: 'The unexpected challenges of building, testing, and publishing a Google Sheets add-on',
    date: new Date('2025-05-27T20:12:56.238Z'),
    formattedDate: 'May 27, 2025',
    tags: ['Engineering'],
    url: 'https://blog.matangr.com/p/building-my-first-google-sheets-add',
    source: 'Blog'
  },
  {
    id: '53-building-an-mcp-server',
    title: '#53 - Building an MCP Server',
    subtitle: 'The unexpected challenges of building, testing, and deploying an MCP server—and what I learned along the way.',
    date: new Date('2025-03-11T18:46:02.623Z'),
    formattedDate: 'Mar 11, 2025',
    tags: ['AI', 'Engineering'],
    url: 'https://blog.matangr.com/p/53-building-an-mcp-server',
    source: 'Blog'
  },
  {
    id: '52-wearing-a-developers-hat-for-a-few',
    title: "#52 - Wearing a Developer's Hat for a Few Weeks",
    subtitle: 'Lessons from developing an internal tool to integrate systems',
    date: new Date('2025-01-26T12:46:58.520Z'),
    formattedDate: 'Jan 26, 2025',
    tags: ['Engineering'],
    url: 'https://blog.matangr.com/p/wearing-a-developers-hat-for-a-few',
    source: 'Blog'
  },
  {
    id: '51-succeed-by-taking-one-step-at',
    title: '#51 - Succeed by Taking One Step at a Time',
    subtitle: 'How I almost lost an entire project by working in large batches, and lessons learned',
    date: new Date('2025-01-07T06:41:35.500Z'),
    formattedDate: 'Jan 7, 2025',
    tags: ['Productivity'],
    url: 'https://blog.matangr.com/p/51-succeed-by-taking-one-step-at',
    source: 'Blog'
  },
  {
    id: '55-small-doesnt-mean-fast',
    title: "#58 - Small doesn't mean fast",
    subtitle: 'My detailed experience delivering a "small" feature to production, and why it took over two days',
    date: new Date('2025-12-01T18:28:25.049Z'),
    formattedDate: 'Dec 1, 2025',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/55-small-doesnt-mean-fast',
    source: 'Blog'
  },
  {
    id: '50-is-ai-a-faster-horse-or-the-next',
    title: '#50 - Is AI A Faster Horse or the Next Tesla?',
    subtitle: 'How Generative AI is Transforming Technology, Business Models, and Our Approach to Problem-Solving',
    date: new Date('2024-12-18T20:19:20.847Z'),
    formattedDate: 'Dec 18, 2024',
    tags: ['AI'],
    url: 'https://blog.matangr.com/p/50-is-ai-a-faster-horse-or-the-next',
    source: 'Blog'
  },
  // === TheNewStack ===
  {
    id: 'how-to-track-dora-metrics-internal-developer-portal',
    title: 'How To Track DORA Metrics in an Internal Developer Portal',
    subtitle: 'Using an internal developer portal to centralize DORA metrics from git providers, CI/CD pipelines, and incident tools.',
    date: new Date('2024-11-14T10:00:00.000Z'),
    formattedDate: 'Nov 14, 2024',
    tags: ['Engineering', 'Analysis'],
    url: 'https://thenewstack.io/how-to-track-dora-metrics-in-an-internal-developer-portal/',
    source: 'TheNewStack'
  },
  {
    id: '49-how-i-reduced-costs-by-85-using-ai',
    title: '#49 - How I Reduced Costs by 85% Using AI',
    subtitle: 'Leveraging AI and free hosting to create a sleek, affordable site',
    date: new Date('2024-12-02T07:03:22.416Z'),
    formattedDate: 'Dec 2, 2024',
    tags: ['AI'],
    url: 'https://blog.matangr.com/p/how-i-reduced-costs-by-85-using-ai',
    source: 'Blog'
  },
  {
    id: '48-testing-culture',
    title: '#48 - Testing Culture',
    subtitle: 'Explore how software testing strategies can reveal valuable insights into your organization',
    date: new Date('2024-11-13T20:21:02.093Z'),
    formattedDate: 'Nov 13, 2024',
    tags: ['Engineering'],
    url: 'https://blog.matangr.com/p/48-testing-culture',
    source: 'Blog'
  },
  {
    id: '47-efficient-data-management-strategies',
    title: '#47 - Efficient Data Management Strategies',
    subtitle: 'How ETL and Reverse ETL Transform Knowledge Work and Improve Efficiency',
    date: new Date('2024-11-05T20:20:02.436Z'),
    formattedDate: 'Nov 5, 2024',
    tags: ['Engineering', 'Productivity', 'Analysis'],
    url: 'https://blog.matangr.com/p/47-efficient-data-management-strategies',
    source: 'Blog'
  },
  {
    id: '46-managing-incidents-in-code-and',
    title: '#46 - Managing Incidents in Code and Beyond',
    subtitle: 'Key concepts from production incidents applied to unstructured problems',
    date: new Date('2024-10-20T19:58:55.638Z'),
    formattedDate: 'Oct 20, 2024',
    tags: ['Engineering', 'Analysis'],
    url: 'https://blog.matangr.com/p/46-managing-incidents-in-code-and',
    source: 'Blog'
  },
  {
    id: '45-keeping-okrs-relevant-with-virtual',
    title: '#45 - Keeping OKRs Relevant with Virtual DOM',
    subtitle: 'Applying Virtual DOM Concepts to Keep OKRs Relevant and Efficient',
    date: new Date('2024-10-14T07:02:48.520Z'),
    formattedDate: 'Oct 14, 2024',
    tags: ['Product', 'Productivity'],
    url: 'https://blog.matangr.com/p/45-keeping-okrs-relevant-with-virtual',
    source: 'Blog'
  },
  {
    id: '44-learning-from-the-past-with-decision',
    title: '#44 - Learning from the Past with Decision Logs',
    subtitle: 'How Git Commit Practices Can Help Track and Improve Decisions Over Time',
    date: new Date('2024-10-09T20:52:59.638Z'),
    formattedDate: 'Oct 9, 2024',
    tags: ['Engineering', 'Product', 'Analysis'],
    url: 'https://blog.matangr.com/p/44-learning-from-the-past-with-decision',
    source: 'Blog'
  },
  {
    id: '43-risk-metrics-before-success-metrics',
    title: '#43 - Risk Metrics Before Success Metrics',
    subtitle: 'From Risk Metrics to Actionable Insights',
    date: new Date('2024-10-04T19:51:55.550Z'),
    formattedDate: 'Oct 4, 2024',
    tags: ['Analysis'],
    url: 'https://blog.matangr.com/p/43-risk-metrics-before-success-metrics',
    source: 'Blog'
  },
  {
    id: '42-breaking-down-metrics-to-build',
    title: '#42 - Breaking Down Metrics to Build Up Success',
    subtitle: 'Using the KPI Tree Approach to Create Impactful Working Agreements',
    date: new Date('2024-09-23T13:57:25.374Z'),
    formattedDate: 'Sep 23, 2024',
    tags: ['Product', 'Analysis'],
    url: 'https://blog.matangr.com/p/42-breaking-down-metrics-to-build',
    source: 'Blog'
  },
  {
    id: '41-decision-making-without-full-context',
    title: '#41 - Decision-Making Without Full Context',
    subtitle: 'Applying Software Patterns to Make Quick, Effective Decisions',
    date: new Date('2024-09-15T07:35:46.205Z'),
    formattedDate: 'Sep 15, 2024',
    tags: ['Engineering', 'Product', 'Analysis'],
    url: 'https://blog.matangr.com/p/41-decision-making-without-full-context',
    source: 'Blog'
  },
  {
    id: '40-context-in-software-design',
    title: '#40 - Context in Software Design',
    subtitle: 'How Managing Information Improves Decisions and Reduces Complexity',
    date: new Date('2024-09-08T19:32:31.854Z'),
    formattedDate: 'Sep 8, 2024',
    tags: ['Engineering', 'Product', 'Analysis'],
    url: 'https://blog.matangr.com/p/40-context-in-software-design',
    source: 'Blog'
  },
  {
    id: '39-event-driven-tracking',
    title: '#39 - Event-Driven Tracking',
    subtitle: 'Using Event Sourcing Concepts to Gain Clearer Insights',
    date: new Date('2024-08-20T19:50:29.893Z'),
    formattedDate: 'Aug 20, 2024',
    tags: ['Engineering', 'Analysis'],
    url: 'https://blog.matangr.com/p/39-event-driven-tracking',
    source: 'Blog'
  },
  {
    id: '38-golden-paths-for-efficiency',
    title: '#38 - Golden Paths for Efficiency',
    subtitle: 'How standardized workflows can streamline your organization',
    date: new Date('2024-08-12T19:25:40.539Z'),
    formattedDate: 'Aug 12, 2024',
    tags: ['Productivity'],
    url: 'https://blog.matangr.com/p/38-golden-paths-for-efficiency',
    source: 'Blog'
  },
  {
    id: '37-idempotency-in-action',
    title: '#37 - Idempotency in Action',
    subtitle: 'Ensuring Reliable Outcomes and Enhancing Resilience',
    date: new Date('2024-08-05T09:07:01.175Z'),
    formattedDate: 'Aug 5, 2024',
    tags: ['Engineering'],
    url: 'https://blog.matangr.com/p/37-idempotency-in-action',
    source: 'Blog'
  },
  {
    id: '36-online-vs-offline-approaches',
    title: '#36 - Online vs Offline Approaches',
    subtitle: 'Balancing Fresh Data and System Resilience',
    date: new Date('2024-07-29T05:31:01.067Z'),
    formattedDate: 'Jul 29, 2024',
    tags: ['Engineering', 'Analysis'],
    url: 'https://blog.matangr.com/p/36-online-vs-offline-approaches',
    source: 'Blog'
  },
  {
    id: '35-lessons-from-api-communication',
    title: '#35 - Lessons from API Communication',
    subtitle: 'Learn Communication Hacks and Tips from API Design',
    date: new Date('2024-07-17T14:40:00.496Z'),
    formattedDate: 'Jul 17, 2024',
    tags: ['Engineering'],
    url: 'https://blog.matangr.com/p/35-lessons-from-api-communication',
    source: 'Blog'
  },
  {
    id: '34-enhancing-alignment-using-git',
    title: '#34 - Enhancing Alignment Using Git',
    subtitle: 'Applying Git Commands to Organizational Alignment',
    date: new Date('2024-07-15T06:00:36.811Z'),
    formattedDate: 'Jul 15, 2024',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/34-enhancing-alignment-using-git',
    source: 'Blog'
  },
  {
    id: '33-high-availability-patterns-explained',
    title: '#33 - High Availability Patterns Explained',
    subtitle: 'How Your Favorite Restaurant Can Teach You About Cloud Infrastructure',
    date: new Date('2024-07-04T12:58:58.051Z'),
    formattedDate: 'Jul 4, 2024',
    tags: ['Engineering'],
    url: 'https://blog.matangr.com/p/33-high-availability-patterns-explained',
    source: 'Blog'
  },
  {
    id: '32-optimizing-interactions-with-genai',
    title: '#32 - Optimizing Interactions with GenAI',
    subtitle: 'Using Everyday Communication Tools to Get the Best Out of GenAI',
    date: new Date('2024-06-30T19:15:55.837Z'),
    formattedDate: 'Jun 30, 2024',
    tags: ['AI'],
    url: 'https://blog.matangr.com/p/optimizing-interactions-with-genai',
    source: 'Blog'
  },
  {
    id: '31-micro-frontend-inspired-dependency',
    title: '#31 - Micro-Frontend Inspired Dependency Management',
    subtitle: 'Streamlining Team Collaboration by Decoupling Dependencies with Micro-Frontend Architecture',
    date: new Date('2024-06-26T18:06:45.476Z'),
    formattedDate: 'Jun 26, 2024',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/micro-frontend-inspired-dependency',
    source: 'Blog'
  },
  {
    id: '30-the-power-of-pulling',
    title: '#30 - The Power Of Pulling',
    subtitle: 'Insights we can draw from Pulling (Kanban, TPS, Git) to our day-to-day tasks',
    date: new Date('2024-01-14T07:09:30.868Z'),
    formattedDate: 'Jan 14, 2024',
    tags: ['Engineering', 'Productivity'],
    url: 'https://blog.matangr.com/p/30-the-power-of-pulling',
    source: 'Blog'
  },
  // === 2023 Posts ===
  {
    id: '29-vectorized-communication',
    title: '#29 - Vectorized Communication',
    subtitle: 'How we can improve internal communication with four practices inspired from Vectorized Databases',
    date: new Date('2023-09-27T06:16:52.465Z'),
    formattedDate: 'Sep 27, 2023',
    tags: ['Engineering', 'Productivity'],
    url: 'https://blog.matangr.com/p/29-vectorized-communication',
    source: 'Blog'
  },
  {
    id: '28-how-technical-tradeoffs-shape',
    title: '#28 - How Technical Tradeoffs Shape Outcomes',
    subtitle: 'How technical decisions like environments and deployment pipelines impact the product experience, and why we should care',
    date: new Date('2023-09-16T18:19:20.090Z'),
    formattedDate: 'Sep 16, 2023',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/28-how-technical-tradeoffs-shape',
    source: 'Blog'
  },
  {
    id: '27-monitor-inefficiencies',
    title: '#27 - Monitor Inefficiencies',
    subtitle: 'The best way to measure productivity is monitoring inefficiencies',
    date: new Date('2023-09-07T17:59:50.681Z'),
    formattedDate: 'Sep 7, 2023',
    tags: ['Productivity', 'Analysis'],
    url: 'https://blog.matangr.com/p/27-monitor-inefficiencies',
    source: 'Blog'
  },
  {
    id: '26-apis-inspired-dependencies-management',
    title: '#26 - APIs Inspired Dependencies Management',
    subtitle: 'How to reduce dependencies between Product teams by taking inspiration from APIs',
    date: new Date('2023-08-22T11:15:26.477Z'),
    formattedDate: 'Aug 22, 2023',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/26-apis-inspired-dependencies-management',
    source: 'Blog'
  },
  {
    id: 'three-effective-ways-to-break-deadlocks',
    title: 'Three Effective Ways to Break Deadlocks',
    subtitle: 'What is a deadlock, and how can we creatively solve it',
    date: new Date('2023-07-19T06:43:13.528Z'),
    formattedDate: 'Jul 19, 2023',
    tags: ['Engineering', 'Productivity'],
    url: 'https://blog.matangr.com/p/three-effective-ways-to-break-deadlocks',
    source: 'Blog'
  },
  {
    id: '3-techniques-to-measure-product-debt',
    title: '3 Techniques To Measure Product Debt',
    subtitle: 'How to quantify product (tech) debt to reach better decisions',
    date: new Date('2023-05-30T06:24:10.239Z'),
    formattedDate: 'May 30, 2023',
    tags: ['Product', 'Analysis'],
    url: 'https://blog.matangr.com/p/3-techniques-to-measure-product-debt',
    source: 'Blog'
  },
  {
    id: 'cache-inspired-knowledge-management',
    title: 'Cache-Inspired Knowledge Management',
    subtitle: 'How to increase trust in knowledge management by setting expiration and ownership',
    date: new Date('2023-05-23T06:11:46.972Z'),
    formattedDate: 'May 23, 2023',
    tags: ['Engineering', 'Productivity'],
    url: 'https://blog.matangr.com/p/cache-inspired-knowledge-management',
    source: 'Blog'
  },
  {
    id: 'applying-conways-law',
    title: "Applying Conway's Law: Navigating the Build vs. Buy Dilemma",
    subtitle: "Improve decision-making by using Conway's Law",
    date: new Date('2023-05-15T06:40:20.506Z'),
    formattedDate: 'May 15, 2023',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/applying-conways-law',
    source: 'Blog'
  },
  {
    id: 'using-citizenship-and-subdomains',
    title: 'Using Citizenship and Subdomains to Improve Decision-making',
    subtitle: 'Prioritize more effectively using programming citizenship and subdomains concepts',
    date: new Date('2023-04-23T06:12:00.226Z'),
    formattedDate: 'Apr 23, 2023',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/using-citizenship-and-subdomains',
    source: 'Blog'
  },
  {
    id: 'the-story-of-alignment',
    title: 'The Story Of Alignment',
    subtitle: 'What happens when it is missing, and how to overcome it',
    date: new Date('2023-02-24T20:26:35.619Z'),
    formattedDate: 'Feb 24, 2023',
    tags: ['Product', 'Productivity'],
    url: 'https://blog.matangr.com/p/the-story-of-alignment',
    source: 'Blog'
  },
  {
    id: 'more-with-less-resourcefulness-pt-3',
    title: 'More with Less — Resourcefulness (Pt. 3)',
    subtitle: 'Resourcefulness is an essential skill that can help do more with less',
    date: new Date('2023-02-08T07:40:18.672Z'),
    formattedDate: 'Feb 8, 2023',
    tags: ['Productivity'],
    url: 'https://blog.matangr.com/p/more-with-less-resourcefulness-pt-3',
    source: 'Blog'
  },
  {
    id: 'more-with-less-focus-on-impact-pt-2',
    title: 'More With Less — Focus on Impact (Pt. 2)',
    subtitle: 'Do more by utilizing limited resources to achieve tremendous success',
    date: new Date('2023-01-09T03:43:10.935Z'),
    formattedDate: 'Jan 9, 2023',
    tags: ['Productivity'],
    url: 'https://blog.matangr.com/p/more-with-less-focus-on-impact-pt-2',
    source: 'Blog'
  },
  // === 2022 Posts ===
  {
    id: 'more-with-less-identify-waste-pt-1',
    title: 'More With Less — Identify Waste (Pt. 1 of 3)',
    subtitle: 'Improving agility by reducing waste can help do more with less',
    date: new Date('2022-12-29T12:54:32.842Z'),
    formattedDate: 'Dec 29, 2022',
    tags: ['Productivity'],
    url: 'https://blog.matangr.com/p/more-with-less-identify-waste-pt-1',
    source: 'Blog'
  },
  {
    id: 'sync-or-async',
    title: 'Sync or Async: Choosing the Right Approach',
    subtitle: 'The basics of sync and async activities and how to benefit from both worlds',
    date: new Date('2022-12-21T11:53:46.189Z'),
    formattedDate: 'Dec 21, 2022',
    tags: ['Productivity', 'Engineering'],
    url: 'https://blog.matangr.com/p/sync-or-async',
    source: 'Blog'
  },
  {
    id: 'from-technical-debt-to-organizational-wealth',
    title: 'From Technical Debt to Organizational Wealth',
    subtitle: 'Why technical debt exists, and how to reach organizational wealth instead',
    date: new Date('2022-12-14T19:45:23.354Z'),
    formattedDate: 'Dec 14, 2022',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/from-technical-debt-to-organizational-wealth',
    source: 'Blog'
  },
  {
    id: 'dont-forget-the-risk-metrics',
    title: "Don't forget the risk metrics",
    subtitle: 'Success metrics measure an outcome, while risk metrics monitor unwanted side effects',
    date: new Date('2022-11-29T13:08:20.169Z'),
    formattedDate: 'Nov 29, 2022',
    tags: ['Product', 'Analysis'],
    url: 'https://blog.matangr.com/p/dont-forget-the-risk-metrics',
    source: 'Blog'
  },
  {
    id: 'focus-on-output',
    title: 'Focus on output',
    subtitle: 'How focusing on the output can help reach the outcome',
    date: new Date('2022-11-17T05:51:08.815Z'),
    formattedDate: 'Nov 17, 2022',
    tags: ['Product', 'Productivity'],
    url: 'https://blog.matangr.com/p/focus-on-output',
    source: 'Blog'
  },
  {
    id: 'how-to-find-the-right-questions',
    title: 'How to find the right questions',
    subtitle: 'Find the right questions to ask using The Five Whys technique',
    date: new Date('2022-10-30T10:57:04.167Z'),
    formattedDate: 'Oct 30, 2022',
    tags: ['Product', 'Analysis'],
    url: 'https://blog.matangr.com/p/how-to-find-the-right-questions',
    source: 'Blog'
  },
  {
    id: 'design-for-the-worst-case',
    title: 'Design for the worst-case',
    subtitle: 'How to find the unhappy path and design user experience around it',
    date: new Date('2022-10-12T12:56:16.085Z'),
    formattedDate: 'Oct 12, 2022',
    tags: ['Product', 'Engineering'],
    url: 'https://blog.matangr.com/p/design-for-the-worst-case',
    source: 'Blog'
  },
  {
    id: 'event-driven-communication',
    title: 'Event-driven communication',
    subtitle: 'How to improve internal communication, based on insights from event-driven architecture',
    date: new Date('2022-09-08T03:11:42.627Z'),
    formattedDate: 'Sep 8, 2022',
    tags: ['Engineering', 'Productivity'],
    url: 'https://blog.matangr.com/p/event-driven-communication',
    source: 'Blog'
  },
  {
    id: 'improve-efficiency-with-better-knowledge-management',
    title: 'Improve efficiency with better knowledge management',
    subtitle: 'How to make knowledge more available to improve productivity and efficiency',
    date: new Date('2022-07-26T05:42:49.789Z'),
    formattedDate: 'Jul 26, 2022',
    tags: ['Productivity'],
    url: 'https://blog.matangr.com/p/improve-efficiency-with-better-knowledge-management',
    source: 'Blog'
  },
  {
    id: 'to-add-or-not-to-add',
    title: 'To Add Or Not To Add',
    subtitle: 'Why staffing in software projects can delay schedules, and what should we consider instead',
    date: new Date('2022-07-17T08:52:45.835Z'),
    formattedDate: 'Jul 17, 2022',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/to-add-or-not-to-add',
    source: 'Blog'
  },
  {
    id: '3-ways-to-improve-deep-work',
    title: '3 Ways To Improve Deep Work',
    subtitle: 'How to focus on improving success in a distracted world',
    date: new Date('2022-06-29T06:18:04.266Z'),
    formattedDate: 'Jun 29, 2022',
    tags: ['Productivity'],
    url: 'https://blog.matangr.com/p/3-ways-to-improve-deep-work',
    source: 'Blog'
  },
  {
    id: 'how-to-plan-better-using-johari-window',
    title: 'How To Plan Better Using The Johari Window',
    subtitle: 'Boost planning by reducing unknowns and improving self-awareness using the Johari Window',
    date: new Date('2022-06-21T18:37:24.771Z'),
    formattedDate: 'Jun 21, 2022',
    tags: ['Product', 'Productivity'],
    url: 'https://blog.matangr.com/p/how-to-plan-better-using-johari-window',
    source: 'Blog'
  },
  {
    id: 'how-domain-driven-design-can-improve-collaboration',
    title: 'How Domain-Driven Design Can Improve Collaboration',
    subtitle: 'How to reduce complexity and improve internal communication using DDD concepts',
    date: new Date('2022-06-12T09:49:14.213Z'),
    formattedDate: 'Jun 12, 2022',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/how-domain-driven-design-can-improve-collaboration',
    source: 'Blog'
  },
  {
    id: 'inbox-zero-what-and-how',
    title: 'Inbox Zero — What And How',
    subtitle: 'Learn what is Inbox Zero, how to get started, and how it will improve your productivity',
    date: new Date('2022-06-05T18:27:12.808Z'),
    formattedDate: 'Jun 5, 2022',
    tags: ['Productivity'],
    url: 'https://blog.matangr.com/p/inbox-zero-what-and-how',
    source: 'Blog'
  },
  {
    id: 'noestimates-the-leaner-approach',
    title: '#NoEstimates — The Leaner Approach',
    subtitle: 'How reducing estimation effort along with a Kanban workflow can improve velocity and reduce waste',
    date: new Date('2022-05-23T19:10:01.180Z'),
    formattedDate: 'May 23, 2022',
    tags: ['Product', 'Productivity'],
    url: 'https://blog.matangr.com/p/noestimates-the-leaner-approach',
    source: 'Blog'
  },
  {
    id: 'why-you-need-to-code',
    title: 'Why You Need To Code',
    subtitle: 'While coding a small software to help in my team\'s work, I learned important lessons as a Product Manager',
    date: new Date('2022-05-22T05:28:39.960Z'),
    formattedDate: 'May 22, 2022',
    tags: ['Engineering', 'Product'],
    url: 'https://blog.matangr.com/p/why-you-need-to-code',
    source: 'Blog'
  },
  {
    id: '3-ways-to-improve-knowledge-sharing',
    title: '3 Ways To Improve Knowledge Sharing',
    subtitle: 'Learn what is knowledge management and how to promote knowledge sharing in your organization',
    date: new Date('2022-05-17T18:42:15.759Z'),
    formattedDate: 'May 17, 2022',
    tags: ['Productivity'],
    url: 'https://blog.matangr.com/p/3-ways-to-improve-knowledge-sharing',
    source: 'Blog'
  },
]

// Pre-sorted by date (newest first)
export const sortedContentData = [...contentData].sort(
  (a, b) => b.date.getTime() - a.date.getTime()
)

export const ALL_TAGS: ContentTag[] = ['AI', 'Engineering', 'Product', 'Productivity', 'Analysis']
