const projectsData = [
  {
    id: 'resto-cafe',
    title: 'Resto Cafe',
    description: "This React project is a restaurant ordering application that fetches live restaurant and menu data from an API. It allows users to browse menu items, add them to a cart, update quantities, and view total costs. The cart state is persisted using `localStorage`, and real-time notifications inform users of cart actions.",
    tech: ['React + Vite', 'Context API', 'React Router', 'React Hooks', 'CSS'],
    githubLink: 'https://github.com/Akhil07-ctrl/Resto-Cafe.git',
    liveLink: 'https://akhil07-ctrl.github.io/Resto-Cafe/',
    images: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    features: ['Live Menu Fetching', 'Add to Cart', 'Cart Persistence (localStorage)', 'Real-time Notifications']
  },
  {
    id: 'nxt-watch',
    title: 'Nxt Watch',
    description: "This project is a YouTube-like video streaming app built with React + Vite. It features authentication, protected routes, theme switching (dark/light mode), and functionalities like saving, liking, and disliking videos using global state via React Context. The app includes pages like Home, Trending, Gaming, Saved Videos, and individual Video view.",
    tech: ['Styled Components', 'React Context', 'Protected Route', 'React + Vite'],
    githubLink: 'https://github.com/Akhil07-ctrl/Youtube-Clone.git',
    liveLink: 'https://akhil07-ctrl.github.io/Youtube-Clone/login',
    images: [
      'https://plus.unsplash.com/premium_photo-1683287925874-f8b46c6437ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1682124935364-c449f6193d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1684017834521-ac0d1edbd23d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    features: ['Video Browsing', 'Theme Toggle', 'Save/Like/Dislike Videos', 'Authentication & Protected Routes']
  },
  {
    id: 'jobby-app',
    title: 'Jobby App',
    description: "Jobby App is a React-based job search platform that allows users to browse, search, and filter job listings. The application features user authentication, detailed job views with company information and skill requirements, and the ability to filter jobs by employment type, salary range, and location. It also provides a responsive interface.",
    tech: ['React + Vite', 'CSS', 'Protected Route', 'React Hooks'],
    githubLink: 'https://github.com/Akhil07-ctrl/Jobby-App.git',
    liveLink: 'https://jobby-app-silk.vercel.app/login',
    images: [
      'https://plus.unsplash.com/premium_photo-1664910158904-e3bb114858d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    features: ['Job Search & Filters', 'Detailed Job View', 'Authentication', 'Responsive Design']
  },
  {
    id: 'tourism-website',
    title: 'Tourism Website',
    description: "This project is a travel-themed React application with routing and UI components using React Router and Bootstrap. It features a homepage with a Bootstrap carousel, a list of travel destinations, detailed destination pages, and a contact form. The app includes a header, footer, and dynamic navigation for an engaging user experience.",
    tech: ['React + Vite', 'React Icons', 'Carousel', 'React Bootstrap', 'CSS'],
    githubLink: 'https://github.com/Akhil07-ctrl/Tourism-Website.git',
    liveLink: 'https://akhil07-ctrl.github.io/Tourism-Website/',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
    ],
    features: ['Destination Listings', 'Detailed Pages', 'Carousel UI', 'Contact Form', 'Favorites Feature']
  },
  {
    id: 'movie-database',
    title: 'Movie Database',
    description: "A responsive React application that showcases popular, top-rated, and upcoming movies using The Movie Database (TMDB) API. Users can browse movie collections, search for specific titles, and view detailed information about each film including ratings, release dates, and descriptions.",
    tech: ['Bootstrap', 'Context API', 'React Hooks', 'React + Vite'],
    githubLink: 'https://github.com/Akhil07-ctrl/Movie-Database.git',
    liveLink: 'https://movie-database-pi-dun.vercel.app/',
    images: [
      'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1511875762315-c773eb98eec0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1559108318-39ed452bb6c9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    features: ['TMDB API Integration', 'Search Functionality', 'Movie Details Page', 'Responsive Layout']
  },
  {
    id: 'alcami-website',
    title: 'Alcami Website',
    description: "This project is a modern e-commerce website for Alcami, featuring a clean and interactive UI. It includes a navigation bar with dropdown menus, a promotional banner, and action buttons for shopping, searching, and trying the product.",
    tech: ['HTML', 'CSS', 'JavaScript', 'Event Listeners'],
    githubLink: 'https://github.com/Akhil07-ctrl/Alcami-Website.git',
    liveLink: 'https://akhil07-ctrl.github.io/Alcami-Website/',
    images: [
      'https://plus.unsplash.com/premium_photo-1661503301338-a5a506714ef1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1746487045930-f393ba72d2d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1723358049627-db9f64f569af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    features: ['Interactive Navigation', 'Promotional Banner', 'Responsive Design', 'Call-to-Action Buttons']
  }
];

export default projectsData;
