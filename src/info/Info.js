import self from "../img/self.png"
import solutions from '../img/solutions.png';
import accenture from '../img/accenture.png';
import cloud from '../img/cloud.png';
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;



export const info = {
    firstName: " Sai Vineeth",
    lastName: " Arumalla",
    initials: "SV", 
    position: "a Java Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in the US'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Bank of America"
        },
        {
            emoji: "📧",
            text: "saivineeth147@gmail.com"
        },
        {
            emoji:"📝",
            text: (
                <>
                    download my <a 
                        href="/Sai_Vineeth_Resume.pdf" 
                        download 
                        style={{ 
                            textDecoration: 'underline', 
                            color: 'inherit', 
                            backgroundColor: '#64b5f6',// Highlight color
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px' // Optional: for rounded corners
                        }}
                    >
                    resume
                    </a>
                </>
            )
        }
    ],
    socials: [
       
        {
            link: "https://www.instagram.com/sai_vin_th/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Saivineeth147/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/a-sai-vineeth/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: [
        " Hello! I'm Sai Vineeth, a passionate developer with a Master's in Computer Science from the University at Buffalo.",
        "I specialize in implementing robust authentication mechanisms using OAuth2 and JWT, ensuring top-notch security for enterprise systems. Additionally, I have extensive experience working with microservices and containerization technologies like Docker and Kubernetes to streamline deployments and improve system performance.",
        "In my current role at Bank of America, I’ve contributed to complex systems, including the development of IVR solutions, integrated Kafka to handle real-time event streaming, such as customer consents and authentication data, I optimized database interactions using DAO design patterns with Oracle SQL, PL/SQL, PostgreSQL, and Cassandra, improving query performance. I also leveraged CI/CD tools like Jenkins, Bitbucket, and Ansible to automate deployments, streamlining operations. ",
    ],
    skills:
        {
            languages: ['C', 'C++', 'Java', 'Python', 'GoLang'],
            web: ['SOAP and REST ', 'Servlets', 'JSP', 'JavaScript', 'jQuery', 'AJAX', 'React'],
            cms: ['AEM 6.5'],
            databases: ['Oracle', 'MySQL', 'Mongo DB', 'Cassandra'],
            tools: ['Maven', 'Junit', 'GIT', 'Tableau', 'Splunk', 'Hibernate', 'Spring MVC', 'Spring Boot', 'Spring JPA', 'Ansible', 'Jenkins',  'Docker', 'Kubernetes', 'OpenCV', 'PyTorch', 'scikit-learn', 'Keras', 'Tensorflow'],
        }
    ,
    Awards: [

        {
            label: 'AWS Certified Solutions Architect – Associate',
            icon: solutions
        },
        {
            label: 'AWS Certified Cloud Practitioner',
            icon: cloud
        },
        
        {
            label: 'IChamp Award',
            icon: accenture
        }
    ],
    portfolio: [ 
        {
            title: "Portfolio Website",
            source: "https://github.com/Saivineeth147", 
            image: mock1
        },
        {
            title: "Facial Spoof Detection",
            source: "https://github.com/Saivineeth147",
            image: mock2
        },
        {
            title: "Finger Detection",
            source: "https://github.com/Saivineeth147",
            image: mock3
        },
        {
            title: "Face Detection and Recognition",
            source: "https://github.com/Saivineeth147",
            image: mock4
        }
    ]
}