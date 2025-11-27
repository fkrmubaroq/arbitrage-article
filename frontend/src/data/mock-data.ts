export const articleContent: Article = {
  id: "1",
  title: "The Art of Mindful Programming: Finding Flow in Your Code",
  excerpt:
    "Explore how to achieve a state of flow and produce higher quality code through mindfulness techniques specific to programming.",
  content: `<p>Welcome to a journey into mindful programming. In this article, we'll explore the concepts that help developers achieve a state of flow and produce higher quality code.</p>
<h2>Understanding the Flow State</h2>
<p>Flow, a concept identified by psychologist Mihaly Csikszentmihalyi, is that mental state where you are fully immersed in a feeling of energized focus, full involvement, and enjoyment in the process of an activity. For programmers, this is that magical time when code seems to write itself.</p>
<p>To achieve flow while programming, consider these practices:</p>
<ul>
<li>Eliminate distractions in your environment</li>
<li>Set clear goals for your coding session</li>
<li>Choose tasks that balance challenge and skill</li>
<li>Take regular breaks to maintain peak mental performance</li>
</ul>
<h2>Mindfulness in Code Reviews</h2>
<p>Code reviews present an excellent opportunity to practice mindfulness. Instead of rushing through them as a checkbox exercise, approach each review with curiosity.</p>
<p>Ask yourself:</p>
<ul>
<li>What can I learn from how this problem was solved?</li>
<li>How might this code affect the system as a whole?</li>
<li>What constructive feedback can I offer that helps the team grow?</li>
</ul>
<p>Remember that the goal isn't just to find bugs but to share knowledge and improve collectively.</p>
<h2>The Role of Environment</h2>
<p>Your physical and digital environments significantly impact your ability to program mindfully. Consider evaluating:</p>
<ul>
<li>Your IDE setup and customizations</li>
<li>Ambient noise or music that helps you focus</li>
<li>Lighting and ergonomics of your workspace</li>
<li>Times of day when you typically feel most productive</li>
</ul>
<p>Small adjustments to your environment can yield substantial improvements in your focus and code quality.</p>
<h2>Practical Mindfulness Techniques</h2>
<p>Here are some specific techniques to incorporate mindfulness into your development workflow:</p>
<ol>
<li><strong>Intention setting:</strong> Begin each coding session by clearly stating what you intend to accomplish</li>
<li><strong>Pomodoro technique:</strong> Work in focused 25-minute intervals followed by short breaks</li>
<li><strong>Code journaling:</strong> Keep notes about your thought process and decisions</li>
<li><strong>Conscious refactoring:</strong> Regularly revisit your code with fresh eyes</li>
</ol>
<h2>Conclusion</h2>
<p>Mindful programming isn't just about producing better code—it's about enjoying the process of creation and problem-solving. By bringing awareness to how we work, we can find more satisfaction in our craft while delivering higher quality results.</p>
<p>The next time you sit down to code, take a deep breath, set a clear intention, and notice how your experience transforms.</p>`,
  publishedAt: "May 12, 2023",
  readingTime: "8 min read",
  coverImage:
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  author: {
    id: "1",
    name: "Alexandra Chen",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Full-stack developer and mindfulness practitioner. Passionate about creating technology that enhances human potential.",
    followers: 1420,
  },
  likes: 246,
  comments: [
    {
      id: "1",
      content:
        "This article completely changed how I approach my coding sessions. I've been using the Pomodoro technique for a week now and my productivity has improved dramatically!",
      author: {
        name: "Maxine Rivera",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      publishedAt: "2 days ago",
      likes: 24,
    },
    {
      id: "2",
      content:
        "I'd love to see a follow-up piece on handling flow disruptions in an open office environment. That's my biggest challenge!",
      author: {
        name: "Julian Edwards",
        avatar: "https://i.pravatar.cc/150?img=8",
      },
      publishedAt: "5 days ago",
      likes: 17,
    },
    {
      id: "3",
      content:
        "The section on code reviews resonated with me. I've been treating them as a chore rather than a learning opportunity. Will definitely change my approach.",
      author: {
        name: "Sophia Washington",
        avatar: "https://i.pravatar.cc/150?img=14",
      },
      publishedAt: "1 week ago",
      likes: 32,
    },
  ],
  tags: ["Programming", "Productivity", "Mindfulness", "Software Development"],
  relatedArticles: [
    {
      id: "2",
      title: "The Developer's Guide to Deep Work",
      excerpt:
        "Strategies for achieving profound focus in an age of distraction...",
      coverImage:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      author: {
        name: "Michael Stevens",
      },
      readingTime: "12 min read",
    },
    {
      id: "3",
      title: "Ergonomics for Programmers: Saving Your Body While Coding",
      excerpt:
        "Practical tips for maintaining physical health during long coding sessions...",
      coverImage:
        "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      author: {
        name: "Dr. Rebecca Chen",
      },
      readingTime: "10 min read",
    },
    {
      id: "4",
      title: "Building a Personal Development System for Coders",
      excerpt:
        "How to track your growth and continuously improve your skills...",
      coverImage:
        "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      author: {
        name: "James Wilson",
      },
      readingTime: "15 min read",
    },
  ],
  monetization: {
    enableAds: true,
    adDensity: "medium",
    enableAffiliates: true,
    memberOnly: false,
  },
};

// Create additional articles based on the template
export const articles: Article[] = [
  articleContent,
  {
    id: "2",
    title: "The Developer's Guide to Deep Work",
    excerpt:
      "Strategies for achieving profound focus in an age of distraction and improving your productivity as a developer.",
    content:
      "<p>Strategies for achieving profound focus in an age of distraction...</p>",
    publishedAt: "April 28, 2023",
    readingTime: "12 min read",
    coverImage:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: {
      id: "2",
      name: "Michael Stevens",
      avatar: "https://i.pravatar.cc/150?img=3",
      bio: "Software architect and productivity expert. Author of 'Deep Coding' and 'The Focused Developer'.",
      followers: 2150,
    },
    likes: 378,
    comments: [
      {
        id: "1",
        content: "This article transformed my work habits completely!",
        author: {
          name: "Chris Johnson",
          avatar: "https://i.pravatar.cc/150?img=11",
        },
        publishedAt: "3 days ago",
        likes: 42,
      },
    ],
    tags: ["Productivity", "Focus", "Work Habits"],
    relatedArticles: [],
    monetization: {
      enableAds: true,
      adDensity: "low",
      enableAffiliates: true,
      memberOnly: false,
    },
  },
  {
    id: "3",
    title: "Ergonomics for Programmers: Saving Your Body While Coding",
    excerpt:
      "Practical tips for maintaining physical health during long coding sessions to prevent strain and increase productivity.",
    content:
      "<p>Practical tips for maintaining physical health during long coding sessions...</p>",
    publishedAt: "May 5, 2023",
    readingTime: "10 min read",
    coverImage:
      "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: {
      id: "3",
      name: "Dr. Rebecca Chen",
      avatar: "https://i.pravatar.cc/150?img=5",
      bio: "Physical therapist specializing in tech worker health. Consultant for major tech companies on workplace wellness.",
      followers: 1870,
    },
    likes: 265,
    comments: [
      {
        id: "1",
        content: "My wrist pain is finally gone after following your advice!",
        author: {
          name: "Sarah Miller",
          avatar: "https://i.pravatar.cc/150?img=6",
        },
        publishedAt: "1 week ago",
        likes: 31,
      },
    ],
    tags: ["Health", "Ergonomics", "Wellness"],
    relatedArticles: [],
    monetization: {
      enableAds: true,
      adDensity: "medium",
      enableAffiliates: false,
      memberOnly: false,
    },
  },
  {
    id: "4",
    title: "Building a Personal Development System for Coders",
    excerpt:
      "How to track your growth and continuously improve your skills with a structured approach to learning and practice.",
    content:
      "<p>How to track your growth and continuously improve your skills...</p>",
    publishedAt: "May 14, 2023",
    readingTime: "15 min read",
    coverImage:
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: {
      id: "4",
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=7",
      bio: "Senior developer and learning specialist. Created the 'Developer Growth Framework' used by tech companies worldwide.",
      followers: 3240,
    },
    likes: 412,
    comments: [
      {
        id: "1",
        content:
          "I've implemented this system and seen huge improvements in my skills!",
        author: {
          name: "David Chang",
          avatar: "https://i.pravatar.cc/150?img=12",
        },
        publishedAt: "2 days ago",
        likes: 47,
      },
    ],
    tags: ["Learning", "Growth", "Career Development"],
    relatedArticles: [],
    monetization: {
      enableAds: false,
      adDensity: "low",
      enableAffiliates: true,
      memberOnly: true,
    },
  },
  {
    id: "5",
    title: "The Future of TypeScript: What's Coming in 2025",
    excerpt:
      "An inside look at the upcoming features in TypeScript that will transform your development workflow, making coding more enjoyable and productive.",
    content:
      "<p>An inside look at the upcoming features in TypeScript that will transform your development workflow...</p>",
    publishedAt: "May 10, 2023",
    readingTime: "11 min read",
    coverImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: {
      id: "5",
      name: "Elena Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=9",
      bio: "TypeScript core contributor and educator. Speaker at TypeScript Congress and author of 'TypeScript Mastery'.",
      followers: 4120,
    },
    likes: 589,
    comments: [
      {
        id: "1",
        content: "Can't wait for the pattern matching feature!",
        author: {
          name: "Martin Fowler",
          avatar: "https://i.pravatar.cc/150?img=13",
        },
        publishedAt: "3 days ago",
        likes: 52,
      },
    ],
    tags: ["TypeScript", "JavaScript", "Web Development"],
    relatedArticles: [],
    monetization: {
      enableAds: true,
      adDensity: "high",
      enableAffiliates: true,
      memberOnly: false,
    },
  },
];

// Featured article (for homepage)
export const featuredArticle = {
  id: "5",
  title: "The Future of TypeScript: What's Coming in 2025",
  excerpt:
    "An inside look at the upcoming features in TypeScript that will transform your development workflow, making coding more enjoyable and productive than ever before.",
  coverImage:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  author: {
    name: "Elena Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  publishedAt: "May 10, 2023",
  readingTime: "11 min read",
  likes: 589,
  comments: 23,
  tags: ["TypeScript", "JavaScript", "Web Development"],
};

// Trending tags
export const trendingTags = [
  { name: "TypeScript", count: 42 },
  { name: "React", count: 38 },
  { name: "NextJS", count: 35 },
  { name: "JavaScript", count: 29 },
  { name: "Web Development", count: 27 },
  { name: "Programming", count: 24 },
  { name: "Productivity", count: 22 },
  { name: "Machine Learning", count: 21 },
  { name: "User Experience", count: 19 },
  { name: "AI", count: 18 },
];

// Popular authors
export const popularAuthors = [
  {
    id: "1",
    name: "Alexandra Chen",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Full-stack developer and mindfulness practitioner.",
    followers: 1420,
  },
  {
    id: "4",
    name: "James Wilson",
    avatar: "https://i.pravatar.cc/150?img=7",
    bio: "Senior developer and learning specialist.",
    followers: 3240,
  },
  {
    id: "5",
    name: "Elena Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=9",
    bio: "TypeScript core contributor and educator.",
    followers: 4120,
  },
  {
    id: "3",
    name: "Dr. Rebecca Chen",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Physical therapist specializing in tech worker health.",
    followers: 1870,
  },
];


export const adPlacements: AdPlacement[] = [
    {
      id: "sidebar-1",
      position: "sidebar",
      type: "banner",
      content: "Premium Ad Space",
      isActive: true,
    },
    {
      id: "content-1",
      position: "middle",
      type: "native",
      content: "Discover our premium tools to boost your content strategy",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      isActive: true,
    },
  ];