'use strict';

(function () {
	angular.module('michaelabeln').value('ResumeData', {

		forms:[

            {
                title: 'Education',
                times: [
                    {
                        main: 'University of Cincinnati, DAAP.',
                        role: 'Graphic Communication Design',
                        time: 'Class of 2017',
                        text: 'UC College of DAAP, Design Architecture, Art, and Planning. Graduated in April 2017 with a Bachelors of Science in Design. 3.6 GPA'
                    },
                    {
                        main: 'Treehouse.',
                        role: 'Full-Stack Javascript',
                        time: 'January 2016 - December 2016',
                        text: 'Full-stack Javascript track through the online development education school. Treehouse taught me a solid foundation of Javascript and web technologies and how to implement them.'
                    }
                ]
            },


            {
                title: 'Work Experience',
                times: [
                	{
                        main: 'Landor Associates: BX Team',
                        role: 'Media Design Intern',
                        time: 'August 2016 - December 2016',
                        text: 'Full time, four-month internship focused on brand activations into consumer spaces through primary means of digital media. A majority of my work with Landor&apos;s BX team focused around using a camera or computer to create the most fitting activation for the client&apos;s brand.'
                    },
                    {
                        main: 'LiveWell Collaborative',
                        role: 'Motion Design Lead',
                        time: 'June 2016 - April 2016',
                        text: 'Part time work, while taking classes at UC, focused on creating 2D animated videos for Cincinnati Childrens Hospital explaining systems and illnesses to in-patient children and families.'
                    },
                    {
                        main: 'Sequence',
                        role: 'UI / UX + Motion Design Intern',
                        time: 'January 2016 - April 2016',
                        text: 'Full time, four-month internship focused partially on interaction design and partially on motion design / videography. I worked closely with Nest, the learning thermostat company, to prototype application screens for a workflow innovation. I also shot, edited, and produced videos showcasing confidential work to be used in new business pitches.'
                    },

                    {
                        main: 'The Swift Collective',
                        role: 'Production Design Intern',
                        time: 'September 2014 - December 2014 | May 2015 - August 2015',
                        text: 'Two full time, four-month internships focused on social design and content creation. I worked closely with a team of designers and writers to create social content for brands such as HTC, Google, and Made With Code among others.'
                    },

                    {
                        main: 'Real Art Design Group',
                        role: 'Digital Design Intern',
                        time: 'January 2014 - April 2014',
                        text: 'Full time, four-month internship focused on digital design and web development. I created small videos and graphic explorations, and designed and developed a research application for LOreal to help with product development.'
                    }
                ]
            },


            {
                title: 'Skills',
                times: [
                    {
                        main: 'Design',
                        text: 'Graphic Design (print, UI/UX, digital, motion, brand, social), Communication Systems, Web &amp; App Design, publication design, animation.'
                    },

                    {
                        main: 'Photography',
                        text: 'Studio lighting &amp; photography rigs, landscape &amp; portrait photography, social media promotions, Image editing &amp; retouching, film photography, mobile photography.'
                    },

                    {
                        main: 'Technical',
                        text: 'Full-stack JavaScript, HTML, CSS &amp; pre-processors (SCSS, LESS), developer tools, Amazon web services, Git &amp; GitHub, front-end development, server development, NODE JS, Angular JS, React JS.'
                    }
                ]
            }

        ]

	});
})();