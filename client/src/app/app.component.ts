import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Live Portfolio';
    data = {
        intro: 'Eytan is a full-stack developer in the Seattle area, interested in taking on new challenges in web design and programming. Algorithm practice has been the most fun, though watching a project start coming together is a great feeling too.',
        experience: [
            {
                title: 'Travel gear blogger',
                organization: 'Self-employed',
                dates: '2013 to present',
                description: 'Produced content for my own site, focusing on travel gear and related advice for budget backpackers, running it all myself and working with various brands on product development and prototype testing.',
                skills: [
                    'Wordpress',
                    'Keyword research',
                    'Search engine optimization',
                    'Social media marketing',
                    'Affiliate marketing',
                    'Brand partnership',
                    'Product testing and development'
                    ]
            },
            {
                title: 'Affiliate Marketer',
                organization: 'Self-employed',
                dates: '2010 to 2013',
                description: 'Performed search engine keyword research to identify high-traffic search terms, analyzed competition to identify underserved topics, then wrote and self-published content using a variety of digital publication tools, managing it for search engine optimization, and monetizing through affiliate product marketing or advertising revenue.',
                skills: [
                    'Keyword research',
                    'Search engine optimization',
                    'Affiliate marketing'
                    ]
            },
            {
                title: 'Private Tutor',
                organization: 'Wyzant',
                dates: '2013 to 2015',
                description: 'Taught students of various ages, either professionally (for the dates listed) or as a family favor (for decades prior), in subjects ranging from liberal arts to physics.',
                skills: [
                    'Essay reviews',
                    'Math practice',
                    'Multi-lingual conversation'
                ]
            },
            {
                title: 'Field Manager',
                organization: 'Grassroots Campaigns',
                dates: '2008 to 2010',
                description: 'Door to door and street fundraising for a variety of non-profit organizations, including the DNC, ACLU, LCV, Save the Children, ASPCA, and NRDC, spanning the topics of political campaigns, civil rights, environmental protection, third world development, and animal welfare. Managed and coached small teams of new and experienced staff, scouted and mapped fundraising locations, and worked through rain, shine, snow, hail, heat waves, and unpleasant canines.',
                skills: [
                    'Fundraising',
                    'Team management',
                    'Contribution accounting'
                ]
            },
            {
                title: 'English Teacher',
                organization: 'TOP English Camp',
                dates: '2008',
                description: 'Conducted English language lessons and other activities with students of various ages, from elementary through high school students, in various cities throughout Taiwan.',
                skills: [
                    'Keeping the attention of a classroom of 30 high school kids with too much energy to keep still'
                ]
            },
            {
                title: 'Office Temp',
                organization: 'OfficeTeam/Accountemps',
                dates: '2006 to 2007',
                description: 'Worked various office jobs, from medical billing to quality control for a logistics operation.',
                skills: [
                    'Client communication',
                    'Error handling',
                    'Data entry',
                ]
            },
            {
                title: 'Miscellaneous',
                description: 'Held a variety of character-building jobs at the entry level, in everything from warehouse stockrooms to law firms.'
            }
        ],
        education: [
            {
                school: 'Coding Dojo',
                dates: '2018',
                degree: "Full-Stack Development Course"
            },
            {
                school: 'University of Washington',
                dates: '2005 to 2006',
                degree: "Bachelor's Degree in English"
            },
            {
                school: 'Bellevue Community College',
                dates: '2004',
                degree: "Associate's Degree"
            },
            {
                school: 'University of Granada, Spain',
                dates: '2001 to 2002'
            },
            {
                school: 'University of California, San Diego',
                dates: '2000 to 2001'
            }
        ],
        skills: [
            {
                name: 'Design',
                technologies: [
                    'HTML',
                    'CSS',
                    'JQuery',
                    'Bootstrap',
                    'Materialize',
                ]
            },
            {
                name: 'Languages',
                technologies: [
                    'JavaScript',
                    'Python',
                    'C#',
                ]
            },
            {
                name: 'Frameworks',
                technologies: [
                    'Flask',
                    'Django',
                    'Angular',
                    'ASP.NET Core',
                ]
            },
            {
                name: 'Databases',
                technologies: [
                    'SQL',
                    'SQLite',
                    'MongoDB',
                ]
            }
        ],
        projects: [
            {
                name: 'jQueryGoals',
                description: 'A Django project using jQuery animations and external data visualization libraries to create a colorful progress-tracking app.',
                video: '../assets/videos/jQueryGoalsDemo.mp4',
                repository: 'https://github.com/eslevy17/jQueryGoals',
                url: '',
                technologies: [
                    {
                        name: 'HTML5',
                        url: '../assets/images/icons/html5.png'
                    },
                    {
                        name: 'CSS3',
                        url: '../assets/images/icons/css3.png'
                    },
                    {
                        name: 'JavaScript',
                        url: '../assets/images/icons/javascript.png'
                    },
                    {
                        name: 'Python',
                        url: '../assets/images/icons/python.png'
                    },
                    {
                        name: 'Django',
                        url: '../assets/images/icons/django.png'
                    },
                    {
                        name: 'Materialize',
                        url: '../assets/images/icons/materialize.png'
                    },
                    {
                        name: 'jQuery',
                        url: '../assets/images/icons/jquery.png'
                    },
                    {
                        name: 'SQLite',
                        url: '../assets/images/icons/sqlite.png'
                    },
                ]
            },
            // {
            //     name: 'Live Portfolio',
            //     description: 'An Angular/Node project with multiple versions at the front end, from the olden days of terminal commands to the minimalism of modern-day web design.',
            //     video: '',
            //     technologies: [
            //         {
            //             name: 'HTML5',
            //             url: '../assets/images/icons/html5.png'
            //         },
            //         {
            //             name: 'CSS3',
            //             url: '../assets/images/icons/css3.png'
            //         },
            //         {
            //             name: 'JavaScript',
            //             url: '../assets/images/icons/javascript.png'
            //         },
            //         {
            //             name: 'Angular',
            //             url: '../assets/images/icons/angular.png'
            //         },
            //         {
            //             name: 'Node',
            //             url: '../assets/images/icons/node.png'
            //         },
            //         {
            //             name: 'Express',
            //             url: '../assets/images/icons/express.png'
            //         },
            //     ]
            // },
            {
                name: 'CoffeeGlyph',
                description: 'An animated infographic of different coffee recipes, written in C# and ASP.NET Core.',
                video: '../assets/videos/CoffeeGlyphDemo.mp4',
                repository: 'https://github.com/eslevy17/CoffeeGlyph',
                url: 'http://18.188.188.167',
                technologies: [
                    {
                        name: 'HTML5',
                        url: '../assets/images/icons/html5.png'
                    },
                    {
                        name: 'CSS3',
                        url: '../assets/images/icons/css3.png'
                    },
                    {
                        name: 'JavaScript',
                        url: '../assets/images/icons/javascript.png'
                    },
                    {
                        name: 'C#',
                        url: '../assets/images/icons/csharp.png'
                    },
                    {
                        name: 'ASP.NET Core',
                        url: '../assets/images/icons/aspnetcore.png'
                    },
                    {
                        name: 'MySQL',
                        url: '../assets/images/icons/mysql.png'
                    },
                    {
                        name: 'jQuery',
                        url: '../assets/images/icons/jquery.png'
                    },
                ]
            },
        ],
        interests: [
            'Learning languages (Spanish, French, and Russian so far!)',
            'Traveling',
            'Reading',
            'Rock climbing',
            'Martial arts',
            'High school debate team',
            'Outward Bound',
        ],
        contact: [
            {
                site: 'LinkedIn',
                url: 'https://www.linkedin.com/in/eytan-levy-21a885162/'
            },
            {
                site: 'GitHub',
                url: 'https://github.com/eslevy17'
            },
        ],
        email: 'eslevy17@gmail.com',
    }
}
