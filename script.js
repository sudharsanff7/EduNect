const courses = [
    { id: 1, title: "HTML Basics", description: "Learn the basics of HTML.", tutor: { name: "John Doe", specialty: "Web Development", email: "john@example.com", phone: "+1 (123) 456-7890", image: "https://placehold.co/100x100" } },
    { id: 2, title: "CSS Fundamentals", description: "Understand CSS for styling web pages.", tutor: { name: "Jane Smith", specialty: "Web Design", email: "jane@example.com", phone: "+1 (123) 456-7891", image: "https://placehold.co/100x100" } },
    { id: 3, title: "JavaScript Essentials", description: "Get started with JavaScript programming.", tutor: { name: "Alice Johnson", specialty: "JavaScript", email: "alice@example.com", phone: "+1 (123) 456-7892", image: "https://placehold.co/100x100" } },
    { id: 4, title: "Data Analysis with Python", description: "Learn data analysis techniques using Python.", tutor: { name: "Bob Brown", specialty: "Data Science", email: "bob@example.com", phone: "+1 (123) 456-7893", image: "https://placehold.co/100x100" } },
    { id: 5, title: "Cybersecurity Basics", description: "Introduction to cybersecurity principles.", tutor: { name: "Charlie Green", specialty: "Cybersecurity", email: "charlie@example.com", phone: "+1 (123) 456-7894", image: "https://placehold.co/100x100" } },
    {
        id: 6,
        title: "Python Programming Fundamentals",
        description: "Master the basics of Python concepts and algorithms",
        category: "Programming",
        image: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Python+Fundamentals",
        tutor: {
            name: "James Wilson",
            image: "https://placehold.co/100x100/8A2BE2/FFFFFF?text=JW",
            specialty: "Senior Python Developer",
            about: "10+ years of Python development experience in AI and web applications.",
            email: "james.wilson@educonnect.com",
            phone: "+1 (555) 234-5678"
        }
    },
    {
        id: 7,
        title: "Python Programming Advanced",
        description: "Master advanced Python concepts and algorithms",
        category: "Programming",
        image: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Python+Advanced",
        tutor: {
            name: "James Wilson",
            image: "https://placehold.co/100x100/8A2BE2/FFFFFF?text=JW",
            specialty: "Senior Python Developer",
            about: "10+ years of Python development experience in AI and web applications.",
            email: "james.wilson@educonnect.com",
            phone: "+1 (555) 234-5678"
        }
    },
    {
        id: 8,
        title: "UI/UX Design Fundamentals",
        description: "Learn the basics of user interface and experience design",
        category: "Design",
        image: "https://placehold.co/600x400/9C51E0/FFFFFF?text=UI/UX",
        tutor: {
            name: "Sofia Rodriguez",
            image: "https://placehold.co/100x100/9C51E0/FFFFFF?text=SR",
            specialty: "UX Design Lead",
            about: "Award-winning designer with expertise in user-centered design.",
            email: "sofia.rodriguez@educonnect.com",
            phone: "+1 (555) 345-6789"
        }
    },
    {
        id: 9,
        title: "Digital Marketing Essentials",
        description: "Master the fundamentals of digital marketing",
        category: "Business",
        image: "https://placehold.co/600x400/6A1B9A/FFFFFF?text=Marketing",
        tutor: {
            name: "Mark Thompson",
            image: "https://placehold.co/100x100/6A1B9A/FFFFFF?text=MT",
            specialty: "Digital Marketing Strategist",
            about: "Digital marketing expert with focus on ROI-driven campaigns.",
            email: "mark.thompson@educonnect.com",
            phone: "+1 (555) 456-7890"
        }
    },
    {
        id: 10,
        title: "Machine Learning Basics",
        description: "Introduction to machine learning algorithms",
        category: "Data Science",
        image: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=ML",
        tutor: {
            name: "Dr. Lisa Chen",
            image: "https://placehold.co/100x100/8A2BE2/FFFFFF?text=LC",
            specialty: "AI Researcher",
            about: "PhD in Machine Learning with industry experience.",
            email: "lisa.chen@educonnect.com",
            phone: "+1 (555) 567-8901"
        }
    },
    {
        id: 11,
        title: "Node.js Backend Development",
        description: "Build scalable backend applications with Node.js",
        category: "Web Development",
        image: "https://placehold.co/600x400/9C51E0/FFFFFF?text=Node.js",
        tutor: {
            name: "Tom Anderson",
            image: "https://placehold.co/100x100/9C51E0/FFFFFF?text=TA",
            specialty: "Backend Developer",
            about: "Experienced in building large-scale Node.js applications.",
            email: "tom.anderson@educonnect.com",
            phone: "+1 (555) 678-9012"
        }
    },
    {
        id: 12,
        title: "Adobe Photoshop Masterclass",
        description: "Master digital image editing and manipulation",
        category: "Design",
        image: "https://placehold.co/600x400/6A1B9A/FFFFFF?text=Photoshop",
        tutor: {
            name: "Emma Davis",
            image: "https://placehold.co/100x100/6A1B9A/FFFFFF?text=ED",
            specialty: "Digital Artist",
            about: "Professional photographer and digital artist with 8+ years experience.",
            email: "emma.davis@educonnect.com",
            phone: "+1 (555) 789-0123"
        }
    },
    {
        id: 13,
        title: "Business Analytics",
        description: "Learn data-driven business decision making",
        category: "Business",
        image: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Analytics",
        tutor: {
            name: "Daniel Kim",
            image: "https://placehold.co/100x100/8A2BE2/FFFFFF?text=DK",
            specialty: "Business Analyst",
            about: "MBA with expertise in business intelligence and analytics.",
            email: "daniel.kim@educonnect.com",
            phone: "+1 (555) 890-1234"
        }
    },
    {
        id: 14,
        title: "Angular Framework",
        description: "Build modern web applications with Angular",
        category: "Web Development",
        image: "https://placehold.co/600x400/9C51E0/FFFFFF?text=Angular",
        tutor: {
            name: "Rachel Green",
            image: "https://placehold.co/100x100/9C51E0/FFFFFF?text=RG",
            specialty: "Frontend Developer",
            about: "Google certified Angular developer with 5+ years experience.",
            email: "rachel.green@educonnect.com",
            phone: "+1 (555) 901-2345"
        }
    },
    {
        id: 15,
        title: "Data Visualization with D3.js",
        description: "Create interactive data visualizations",
        category: "Data Science",
        image: "https://placehold.co/600x400/6A1B9A/FFFFFF?text=D3",
        tutor: {
            name: "Mike Brown",
            image: "https://placehold.co/100x100/6A1B9A/FFFFFF?text=MB",
            specialty: "Data Visualization Expert",
            about: "Specialized in creating interactive data stories.",
            email: "mike.brown@educonnect.com",
            phone: "+1 (555) 012-3456"
        }
    },
    {
        id: 16,
        title: "Mobile App Design",
        description: "Design user-friendly mobile applications",
        category: "Design",
        image: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Mobile",
        tutor: {
            name: "Jessica Lee",
            image: "https://placehold.co/100x100/8A2BE2/FFFFFF?text=JL",
            specialty: "Mobile UI Designer",
            about: "Experienced in iOS and Android app design.",
            email: "jessica.lee@educonnect.com",
            phone: "+1 (555) 123-4567"
        }
    },
    {
        id: 17,
        title: "Vue.js Essentials",
        description: "Learn progressive JavaScript framework",
        category: "Web Development",
        image: "https://placehold.co/600x400/9C51E0/FFFFFF?text=Vue",
        tutor: {
            name: "Chris Martin",
            image: "https://placehold.co/100x100/9C51E0/FFFFFF?text=CM",
            specialty: "Frontend Developer",
            about: "Vue.js core team contributor with extensive teaching experience.",
            email: "chris.martin@educonnect.com",
            phone: "+1 (555) 234-5678"
        }
    },
    {
        id: 18,
        title: "Project Management",
        description: "Master agile project management",
        category: "Business",
        image: "https://placehold.co/600x400/6A1B9A/FFFFFF?text=PM",
        tutor: {
            name: "Sarah Miller",
            image: "https://placehold.co/100x100/6A1B9A/FFFFFF?text=SM",
            specialty: "Project Manager",
            about: "PMP certified with 10+ years in software project management.",
            email: "sarah.miller@educonnect.com",
            phone: "+1 (555) 345-6789"
        }
    },
    {
        id: 19,
        title: "Deep Learning Fundamentals",
        description: "Introduction to neural networks",
        category: "Data Science",
        image: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=DL",
        tutor: {
            name: "Dr. John Smith",
            image: "https://placehold.co/100x100/8A2BE2/FFFFFF?text=JS",
            specialty: "AI Researcher",
            about: "Leading researcher in deep learning and computer vision.",
            email: "john.smith@educonnect.com",
            phone: "+1 (555) 456-7890"
        }
    },
    {
        id: 20,
        title: "WordPress Development",
        description: "Build custom WordPress themes and plugins",
        category: "Web Development",
        image: "https://placehold.co/600x400/9C51E0/FFFFFF?text=WP",
        tutor: {
            name: "Amanda White",
            image: "https://placehold.co/100x100/9C51E0/FFFFFF?text=AW",
            specialty: "WordPress Developer",
            about: "Full-stack WordPress developer with 6+ years experience.",
            email: "amanda.white@educonnect.com",
            phone: "+1 (555) 567-8901"
        }
    },
    {
        id: 21,
        title: "SEO Optimization",
        description: "Master search engine optimization techniques",
        category: "Digital Marketing",
        image: "https://placehold.co/600x400/6A1B9A/FFFFFF?text=SEO",
        tutor: {
            name: "Brian Taylor",
            image: "https://placehold.co/100x100/6A1B9A/FFFFFF?text=BT",
            specialty: "SEO Specialist",
            about: "Digital marketing expert focused on organic search growth.",
            email: "brian.taylor@educonnect.com",
            phone: "+1 (555) 678-9012"
        }
    },
    {
        id: 22,
        title: "iOS App Development",
        description: "Build iOS applications with Swift",
        category: "Mobile Development",
        image: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=iOS",
        tutor: {
            name: "Linda Martinez",
            image: "https://placehold.co/100x100/8A2BE2/FFFFFF?text=LM",
            specialty: "iOS Developer",
            about: "Apple certified developer with multiple App Store publications.",
            email: "linda.martinez@educonnect.com",
            phone: "+1 (555) 789-0123"
        }
    },
    {
        id: 23,
        title: "Blockchain Basics",
        description: "Introduction to blockchain technology",
        category: "Technology",
        image: "https://placehold.co/600x400/9C51E0/FFFFFF?text=Blockchain",
        tutor: {
            name: "Alex Kumar",
            image: "https://placehold.co/100x100/9C51E0/FFFFFF?text=AK",
            specialty: "Blockchain Developer",
            about: "Experienced in blockchain development and smart contracts.",
            email: "alex.kumar@educonnect.com",
            phone: "+1 (555) 890-1234"
        }
    },
    {
        id: 24,
        title: "Cloud Computing AWS",
        description: "Master Amazon Web Services",
        category: "Cloud Computing",
        image: "https://placehold.co/600x400/6A1B9A/FFFFFF?text=AWS",
        tutor: {
            name: "Paul Anderson",
            image: "https://placehold.co/100x100/6A1B9A/FFFFFF?text=PA",
            specialty: "Cloud Architect",
            about: "AWS certified solutions architect with enterprise experience.",
            email: "paul.anderson@educonnect.com",
            phone: "+1 (555) 901-2345"
        }
    },
    {
        id: 25,
        title: "Cybersecurity Fundamentals",
        description: "Learn basic cybersecurity concepts",
        category: "Security",
        image: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Security",
        tutor: {
            name: "Maria Garcia",
            image: "https://placehold.co/100x100/8A2BE2/FFFFFF?text=MG",
            specialty: "Security Expert",
            about: "Certified ethical hacker with focus on web security.",
            email: "maria.garcia@educonnect.com",
            phone: "+1 (555) 012-3456"
        }
    },
    {
        id: 26,
        title: "Docker and Kubernetes",
        description: "Master container orchestration",
        category: "DevOps",
        image: "https://placehold.co/600x400/9C51E0/FFFFFF?text=DevOps",
        tutor: {
            name: "Steve Johnson",
            image: "https://placehold.co/100x100/9C51E0/FFFFFF?text=SJ",
            specialty: "DevOps Engineer",
            about: "Specialized in container orchestration and CI/CD pipelines.",
            email: "steve.johnson@educonnect.com",
            phone: "+1 (555) 123-4567"
        }
    }
];

function showDashboard(userType) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    loadCourses();
}

function loadCourses() {
    const courseGrid = document.getElementById('courseGrid');
    courseGrid.innerHTML = ''; // Clear existing courses
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <img src="${course.tutor.image}" alt="${course.title}">
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-desc">${course.description}</p>
                <button class="view-btn" onclick="showTutorInfo(${course.id})">View Tutor</button>
            </div>
        `;
        courseGrid.appendChild(courseCard);
    });
}

function showTutorInfo(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        const tutor = course.tutor;
        document.getElementById('tutorName').innerText = tutor.name;
        document.getElementById('tutorSpecialty').innerText = tutor.specialty;
        document.getElementById('tutorEmail').innerText = tutor.email;
        document.getElementById('tutorPhone').innerText = tutor.phone;
        document.getElementById('tutorImg').src = tutor.image;
        document.getElementById('tutorModal').style.display = 'block'; // Show the modal
    }
}

function closeModal() {
    document.getElementById('tutorModal').style.display = 'none';
}

// Function to filter courses based on search input
function filterCourses() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const courseGrid = document.getElementById('courseGrid');
    courseGrid.innerHTML = ''; // Clear existing courses
    const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchInput));
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <img src="${course.tutor.image}" alt="${course.title}">
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-desc">${course.description}</p>
                <button class="view-btn" onclick="showTutorInfo(${course.id})">View Tutor</button>
            </div>
        `;
        courseGrid.appendChild(courseCard);
    });
}
