'use strict';

(function () {
	angular.module('michaelabeln').value('WorkData', {

		mainPageContent: {
	        capabilities: ['Branding', 'Design', 'Content', 'Strategy', 'Photo', 'Video', 'Web'],
	        description: 'Designer and photographer based in the Portland, OR area. I&apos;ve worked with creative agencies on dozens of projects for clients like Google, HTC, Raid, L&apos;Or&eacute;al, Secret, Stouffer&apos;s, and Sears. I design to create the unordinary, to speak to the unspoken-to, and to cross the uncrossed gaps.',
	        onlineLinks: {
	            header: 'Other places to see what I&apos;m up to:',
	            links: [
		            {
		              place: 'Working',
		              strike: 'Working',
		              url: 'https://workingnotworking.com/mikeabeln'
		            },
		            {
		              place: 'Instagram',
		              url: 'https://www.instagram.com/mikeabeln/'
		            },
		            {
		              place: 'LinkedIn',
		              url: 'https://www.linkedin.com/in/michael-abeln-04241567/'
		            },
		            {
		              place: 'Behance',
		              url: 'https://www.behance.net/mikeabeln'
		            },
		            {
		              place: 'Github',
		              url: 'https://github.com/mikeabeln'
		            }
	            ]
	        },
	        clientsLabel: 'Clients have included',
	        clientImages: [
		        {
		          img: './images/clients/google_logo.svg'
		        },
		        {
		          img: './images/clients/raid_logo.svg'
		        },
		        {
		          img: './images/clients/htc_logo.svg'
		        },
		        {
		          img: './images/clients/sears_logo.svg'
		        },
		        {
		          img: './images/clients/secret_logo.svg'
		        },
		        {
		          img: './images/clients/loreal_logo.svg'
		        },
		        {
		          img: './images/clients/stouffers_logo.svg'
		        },
		        {
		          img: './images/clients/cc_logo.svg'
		        },
		        {
		          img: './images/clients/cmc_logo.svg'
		        }
	        ]
	    },

		projects: [
			{	
				id: 0,
				title: 'Title',
				meta: ['Branding', 'Motion', 'Social'],
				cover: './images/ph/ph-1.jpg',
				client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production'],
				description: 'Social media animations created to serve as posts and web advertisements for Raid, the Proctor & Gamble product. I created the content and animated the output while I worked on Landor&apos;s BX team in Cincinnati.',
				header: false,
				headerImage: null,
				video: true,
				videos: [
					{
						header: 'Videos Title',
						body: 'These animations were created to back up the concept of everlasting protection, when you&apos;re not there, and from things you can&apos;t see. These animations were designed to loop and for Raid to post on social media feeds.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/video/ph-1.mp4'
							}
						],
						small: [
							{	
								size: 2,
								src: './images/ph/video/ph-2.mp4'
							},
							{	
								size: 2,
								src: './images/ph/video/ph-1.mp4'
							}
						]
					}
				],
				mainImg: false,
				mainImages: [],
				gallery: false,
				galleryImages: []
			},
			{	
				id: 1,
				title: 'Title',
				meta: ['Social', 'Motion', 'Illustration', 'Content'],
				cover: './images/ph/ph-2.jpg',
				client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production', 'Trends'],
				description: 'While I worked on the Google account at Swift I helped create social campaigns to promote the many features of the Google App. I followed through on the campaigns by creating post concepts and producing each post for multiple social media channels.',
				video: true,
				videos: [
					{
						header: 'Father&apos;s Day Post',
						body: 'A social promotion created for Google, celebrating Fathers all over the world and promoting the search by voice feature of the Google App.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								image: './images/ph/ph-3.jpg',
								src: './images/ph/video/ph-1.mp4',
							}
						]
					}
				],
				mainImg: true,
				mainImages: [
					{
						header: 'Project Title',
						body: 'A social promotion for Google, directing chosen Twitter influencers to use the Google App to answer their questions.',
						content: 'Images',
						technology: 'Adobe Photoshop',
						size: 2,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A series of social promotions celebrating US Womens World Cup team, and promoting the search by voice feture of the Google App.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						],
						small: [
							{	
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{	size: 2,
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A series of social promotions celebrating US Womens World Cup team, and promoting the search by voice feture of the Google App.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 2,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A celebratory post, created and ran when gay marriage was legalized across the nation.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A celebratory post, created and ran when the New Horizons rover passed Pluto, giving the world the most high-definition glimpses of the planet to date.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					},
					{
						header: 'Now Town',
						body: 'A 3-episode series of posts promoting the Google App&apos;s Now Cards feature, and their ability to come in handy while travelling.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 3,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: false,
				galleryImages: []
			},
			{	
				id: 2,
				title: 'Title',
				meta: ['Social', 'Motion', 'Illustration', 'Content', 'Print'],
				cover: './images/ph/ph-1.jpg',
				client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production', 'Trends'],
				description: 'Google&apos;s Made With Code initiative to push young girls into exploring computer science was part of my work on the Google account at Swift. I helped research trends and create social campaigns around them to help further the initiatvie. I followed through on the campaigns by creating post concepts and producing each post for multiple social media channels.',
				video: false,
				videos: [],
				mainImg: true,
				mainImages: [
					{
						header: 'Project Title',
						body: 'Social media posts created to promote the ideas behind the Made With Code Initiative. These posts were designed around general trends among the audience&apos;s demographic rather than a certain technology or campaign promotion.',
						content: 'GIF Images',
						technology: 'Adobe Photoshop + Illustrator',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						],
						small: [
							{
								size: 3,
								src: './images/ph/ph-4.jpg',
							},
							{
								size: 3,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 3,
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'Made With Code put on an event with their Blockly program based around a dress designed by Zac Posen. The dress was studded with LED lights, and the MWC users could create a Blockly animation with the winner&apos;s design being featured on the dress. These posts were created to promote the campaign leading up the event.',
						content: 'GIF Images',
						technology: 'Adobe Photoshop + After Effects',
						size: 3,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A page of laptop stickers that I designed. Made With Code produced the sticker pages and passed them out at their in-person events.',
						content: 'Sticker Page',
						technology: 'Adobe Illustrator',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: false,
				galleryImages: []
			},
			{	
				id: 3,
				title: 'Title',
	            meta: ['Social', 'Motion', 'Illustration', 'Content'],
	            cover: './images/ph/ph-2.jpg',
	            client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production', 'Trends'],
				description: 'I worked on the HTC account at Swift creating social campaigns and content based around three products: The HTC One M8, the HTC Desire EYE, and the RE camera. I created social media posts for a variety of channels to follow through on the campaigns.',
				video: true,
				videos: [
					{
						header: 'Video Title',
						body: 'I created the first installment in the HTC 300 Minutes series of videos, and set the animation style for the following two videos - the production of which were contracted out.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/video/ph-1.mp4',
							}
						]
					}
				],
				mainImg: true,
				mainImages: [
					{	
						header: 'Project Title',
						body: 'These posts were created to promote a variety of key selling points of HTC products. Some of them being the HTC battery bar, the HTC Rapid Charger, and the evolution of the HTC One series of mobile phones.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{
								src: './images/ph/ph-4.jpg',
							}
						],
						small: [
							{
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-4.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-4.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{	
						header: 'Project Title',
						body: 'These glitch based animations were created to promote the release dates of HTC&apos;s new technology.',
						content: 'GIF Images',
						technology: 'Adobe After Effects + Photoshop',
						size: 2,
						large: [
							{
								src: './images/ph/ph-3.jpg',
							},
							{
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{	
						header: 'Project Title',
						body: 'While I worked on the HTC account, HTC decided to release the RE camera. Part of my work on the account revolved around creating social channels and posts for the camera to promote the product before it hit the shelf.',
						content: 'GIF Images',
						technology: 'Adobe After Effects + Photoshop',
						size: 2,
						large: [
							{
								src: './images/ph/ph-4.jpg',
							},
							{
								src: './images/ph/ph-3.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: false,
				galleryImages: []
	        },
	        {
	        	id: 4,
	        	title: 'Title',
	            meta: ['Content', 'Motion', 'Video', 'Branding'],
	            cover: './images/ph/ph-2.jpg',
	            client: 'Client Name',
	            agency: 'Agency Name',
				roles: ['Concept', 'Branding', 'Motion', 'Video', 'Event Photography'],
				description: 'While at Landor I worked on a rebrand for Arteflame, an innovative grill company based in Cincinnati. I helped refine the logo concept while creating motion design elements based around the idea of a heatwave. Arteflame decided to unveil their rebrand by sponsoring the Cincinnati Food + Wine Classic, at which I captured the event photography and video.',
				video: true,
				videos: [
					{
						header: 'Video Title',
						body: 'Arteflame brand activation concept created for Arteflame grills. Content shot at the Cincinnati Food + Wine classic, the event that Arteflame sponsored to promote their brand relaunch and recognition.',
						content: 'Video',
						technology: 'Adobe Premiere | Canon 5d III + Canon 70-200 f2.8',
						size: 1,
						large: [
							{	
								src: './images/ph/video/ph-2.mp4'
							}
						]
					}
				],
				mainImg: true,
				mainImages: [
					{
						header: 'Project Title',
						body: 'Motion graphic activations of Arteflame&apos;s new logo. I designed and produced these for multiple social media output channels.',
						content: 'Animations',
						technology: 'Adobe After Effects',
						size: 2,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: true,
				galleryImages: [
					{
						size: 3,
						src: './images/ph/ph-4.jpg',
					}, 
					{
						size: 3,
						src: './images/ph/ph-3.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-4.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-3.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-4.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-3.jpg',
					}
				]
	        },
	        {	
				id: 5,
				title: 'Title',
				meta: ['Branding', 'Motion', 'Social'],
				cover: './images/ph/ph-1.jpg',
				client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production'],
				description: 'Social media animations created to serve as posts and web advertisements for Raid, the Proctor & Gamble product. I created the content and animated the output while I worked on Landor&apos;s BX team in Cincinnati.',
				header: false,
				headerImage: null,
				video: true,
				videos: [
					{
						header: 'Videos Title',
						body: 'These animations were created to back up the concept of everlasting protection, when you&apos;re not there, and from things you can&apos;t see. These animations were designed to loop and for Raid to post on social media feeds.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/video/ph-1.mp4'
							}
						],
						small: [
							{	
								size: 2,
								src: './images/ph/video/ph-2.mp4'
							},
							{	
								size: 2,
								src: './images/ph/video/ph-1.mp4'
							}
						]
					}
				],
				mainImg: false,
				mainImages: [],
				gallery: false,
				galleryImages: []
			},
			{	
				id: 6,
				title: 'Title',
				meta: ['Social', 'Motion', 'Illustration', 'Content'],
				cover: './images/ph/ph-2.jpg',
				client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production', 'Trends'],
				description: 'While I worked on the Google account at Swift I helped create social campaigns to promote the many features of the Google App. I followed through on the campaigns by creating post concepts and producing each post for multiple social media channels.',
				video: true,
				videos: [
					{
						header: 'Father&apos;s Day Post',
						body: 'A social promotion created for Google, celebrating Fathers all over the world and promoting the search by voice feature of the Google App.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								image: './images/ph/ph-3.jpg',
								src: './images/ph/video/ph-1.mp4',
							}
						]
					}
				],
				mainImg: true,
				mainImages: [
					{
						header: 'Project Title',
						body: 'A social promotion for Google, directing chosen Twitter influencers to use the Google App to answer their questions.',
						content: 'Images',
						technology: 'Adobe Photoshop',
						size: 2,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A series of social promotions celebrating US Womens World Cup team, and promoting the search by voice feture of the Google App.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						],
						small: [
							{	
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{	size: 2,
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A series of social promotions celebrating US Womens World Cup team, and promoting the search by voice feture of the Google App.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 2,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A celebratory post, created and ran when gay marriage was legalized across the nation.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A celebratory post, created and ran when the New Horizons rover passed Pluto, giving the world the most high-definition glimpses of the planet to date.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					},
					{
						header: 'Now Town',
						body: 'A 3-episode series of posts promoting the Google App&apos;s Now Cards feature, and their ability to come in handy while travelling.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 3,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: false,
				galleryImages: []
			},
			{	
				id: 7,
				title: 'Title',
				meta: ['Social', 'Motion', 'Illustration', 'Content', 'Print'],
				cover: './images/ph/ph-1.jpg',
				client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production', 'Trends'],
				description: 'Google&apos;s Made With Code initiative to push young girls into exploring computer science was part of my work on the Google account at Swift. I helped research trends and create social campaigns around them to help further the initiatvie. I followed through on the campaigns by creating post concepts and producing each post for multiple social media channels.',
				video: false,
				videos: [],
				mainImg: true,
				mainImages: [
					{
						header: 'Project Title',
						body: 'Social media posts created to promote the ideas behind the Made With Code Initiative. These posts were designed around general trends among the audience&apos;s demographic rather than a certain technology or campaign promotion.',
						content: 'GIF Images',
						technology: 'Adobe Photoshop + Illustrator',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						],
						small: [
							{
								size: 3,
								src: './images/ph/ph-4.jpg',
							},
							{
								size: 3,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 3,
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'Made With Code put on an event with their Blockly program based around a dress designed by Zac Posen. The dress was studded with LED lights, and the MWC users could create a Blockly animation with the winner&apos;s design being featured on the dress. These posts were created to promote the campaign leading up the event.',
						content: 'GIF Images',
						technology: 'Adobe Photoshop + After Effects',
						size: 3,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A page of laptop stickers that I designed. Made With Code produced the sticker pages and passed them out at their in-person events.',
						content: 'Sticker Page',
						technology: 'Adobe Illustrator',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: false,
				galleryImages: []
			},
			{	
				id: 8,
				title: 'Title',
	            meta: ['Social', 'Motion', 'Illustration', 'Content'],
	            cover: './images/ph/ph-2.jpg',
	            client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production', 'Trends'],
				description: 'I worked on the HTC account at Swift creating social campaigns and content based around three products: The HTC One M8, the HTC Desire EYE, and the RE camera. I created social media posts for a variety of channels to follow through on the campaigns.',
				video: true,
				videos: [
					{
						header: 'Video Title',
						body: 'I created the first installment in the HTC 300 Minutes series of videos, and set the animation style for the following two videos - the production of which were contracted out.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/video/ph-1.mp4',
							}
						]
					}
				],
				mainImg: true,
				mainImages: [
					{	
						header: 'Project Title',
						body: 'These posts were created to promote a variety of key selling points of HTC products. Some of them being the HTC battery bar, the HTC Rapid Charger, and the evolution of the HTC One series of mobile phones.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{
								src: './images/ph/ph-4.jpg',
							}
						],
						small: [
							{
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-4.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-4.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{	
						header: 'Project Title',
						body: 'These glitch based animations were created to promote the release dates of HTC&apos;s new technology.',
						content: 'GIF Images',
						technology: 'Adobe After Effects + Photoshop',
						size: 2,
						large: [
							{
								src: './images/ph/ph-3.jpg',
							},
							{
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{	
						header: 'Project Title',
						body: 'While I worked on the HTC account, HTC decided to release the RE camera. Part of my work on the account revolved around creating social channels and posts for the camera to promote the product before it hit the shelf.',
						content: 'GIF Images',
						technology: 'Adobe After Effects + Photoshop',
						size: 2,
						large: [
							{
								src: './images/ph/ph-4.jpg',
							},
							{
								src: './images/ph/ph-3.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: false,
				galleryImages: []
	        },
	        {
	        	id: 9,
	        	title: 'Title',
	            meta: ['Content', 'Motion', 'Video', 'Branding'],
	            cover: './images/ph/ph-2.jpg',
	            client: 'Client Name',
	            agency: 'Agency Name',
				roles: ['Concept', 'Branding', 'Motion', 'Video', 'Event Photography'],
				description: 'While at Landor I worked on a rebrand for Arteflame, an innovative grill company based in Cincinnati. I helped refine the logo concept while creating motion design elements based around the idea of a heatwave. Arteflame decided to unveil their rebrand by sponsoring the Cincinnati Food + Wine Classic, at which I captured the event photography and video.',
				video: true,
				videos: [
					{
						header: 'Video Title',
						body: 'Arteflame brand activation concept created for Arteflame grills. Content shot at the Cincinnati Food + Wine classic, the event that Arteflame sponsored to promote their brand relaunch and recognition.',
						content: 'Video',
						technology: 'Adobe Premiere | Canon 5d III + Canon 70-200 f2.8',
						size: 1,
						large: [
							{	
								src: './images/ph/video/ph-2.mp4'
							}
						]
					}
				],
				mainImg: true,
				mainImages: [
					{
						header: 'Project Title',
						body: 'Motion graphic activations of Arteflame&apos;s new logo. I designed and produced these for multiple social media output channels.',
						content: 'Animations',
						technology: 'Adobe After Effects',
						size: 2,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: true,
				galleryImages: [
					{
						size: 3,
						src: './images/ph/ph-4.jpg',
					}, 
					{
						size: 3,
						src: './images/ph/ph-3.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-4.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-3.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-4.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-3.jpg',
					}
				]
	        },
	        {	
				id: 10,
				title: 'Title',
				meta: ['Branding', 'Motion', 'Social'],
				cover: './images/ph/ph-1.jpg',
				client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production'],
				description: 'Social media animations created to serve as posts and web advertisements for Raid, the Proctor & Gamble product. I created the content and animated the output while I worked on Landor&apos;s BX team in Cincinnati.',
				header: false,
				headerImage: null,
				video: true,
				videos: [
					{
						header: 'Videos Title',
						body: 'These animations were created to back up the concept of everlasting protection, when you&apos;re not there, and from things you can&apos;t see. These animations were designed to loop and for Raid to post on social media feeds.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/video/ph-1.mp4'
							}
						],
						small: [
							{	
								size: 2,
								src: './images/ph/video/ph-2.mp4'
							},
							{	
								size: 2,
								src: './images/ph/video/ph-1.mp4'
							}
						]
					}
				],
				mainImg: false,
				mainImages: [],
				gallery: false,
				galleryImages: []
			},
			{	
				id: 11,
				title: 'Title',
				meta: ['Social', 'Motion', 'Illustration', 'Content'],
				cover: './images/ph/ph-2.jpg',
				client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production', 'Trends'],
				description: 'While I worked on the Google account at Swift I helped create social campaigns to promote the many features of the Google App. I followed through on the campaigns by creating post concepts and producing each post for multiple social media channels.',
				video: true,
				videos: [
					{
						header: 'Father&apos;s Day Post',
						body: 'A social promotion created for Google, celebrating Fathers all over the world and promoting the search by voice feature of the Google App.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								image: './images/ph/ph-3.jpg',
								src: './images/ph/video/ph-1.mp4',
							}
						]
					}
				],
				mainImg: true,
				mainImages: [
					{
						header: 'Project Title',
						body: 'A social promotion for Google, directing chosen Twitter influencers to use the Google App to answer their questions.',
						content: 'Images',
						technology: 'Adobe Photoshop',
						size: 2,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A series of social promotions celebrating US Womens World Cup team, and promoting the search by voice feture of the Google App.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						],
						small: [
							{	
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{	size: 2,
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A series of social promotions celebrating US Womens World Cup team, and promoting the search by voice feture of the Google App.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 2,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A celebratory post, created and ran when gay marriage was legalized across the nation.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A celebratory post, created and ran when the New Horizons rover passed Pluto, giving the world the most high-definition glimpses of the planet to date.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					},
					{
						header: 'Now Town',
						body: 'A 3-episode series of posts promoting the Google App&apos;s Now Cards feature, and their ability to come in handy while travelling.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 3,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: false,
				galleryImages: []
			},
			{	
				id: 12,
				title: 'Title',
				meta: ['Social', 'Motion', 'Illustration', 'Content', 'Print'],
				cover: './images/ph/ph-1.jpg',
				client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production', 'Trends'],
				description: 'Google&apos;s Made With Code initiative to push young girls into exploring computer science was part of my work on the Google account at Swift. I helped research trends and create social campaigns around them to help further the initiatvie. I followed through on the campaigns by creating post concepts and producing each post for multiple social media channels.',
				video: false,
				videos: [],
				mainImg: true,
				mainImages: [
					{
						header: 'Project Title',
						body: 'Social media posts created to promote the ideas behind the Made With Code Initiative. These posts were designed around general trends among the audience&apos;s demographic rather than a certain technology or campaign promotion.',
						content: 'GIF Images',
						technology: 'Adobe Photoshop + Illustrator',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						],
						small: [
							{
								size: 3,
								src: './images/ph/ph-4.jpg',
							},
							{
								size: 3,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 3,
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'Made With Code put on an event with their Blockly program based around a dress designed by Zac Posen. The dress was studded with LED lights, and the MWC users could create a Blockly animation with the winner&apos;s design being featured on the dress. These posts were created to promote the campaign leading up the event.',
						content: 'GIF Images',
						technology: 'Adobe Photoshop + After Effects',
						size: 3,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							},
							{	
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{
						header: 'Project Title',
						body: 'A page of laptop stickers that I designed. Made With Code produced the sticker pages and passed them out at their in-person events.',
						content: 'Sticker Page',
						technology: 'Adobe Illustrator',
						size: 1,
						large: [
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: false,
				galleryImages: []
			},
			{	
				id: 13,
				title: 'Title',
	            meta: ['Social', 'Motion', 'Illustration', 'Content'],
	            cover: './images/ph/ph-2.jpg',
	            client: 'Client Name',
				agency: 'Agency Name',
				roles: ['Design', 'Illustration', 'Animation', 'Production', 'Trends'],
				description: 'I worked on the HTC account at Swift creating social campaigns and content based around three products: The HTC One M8, the HTC Desire EYE, and the RE camera. I created social media posts for a variety of channels to follow through on the campaigns.',
				video: true,
				videos: [
					{
						header: 'Video Title',
						body: 'I created the first installment in the HTC 300 Minutes series of videos, and set the animation style for the following two videos - the production of which were contracted out.',
						content: 'Vector Animation',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{	
								src: './images/ph/video/ph-1.mp4',
							}
						]
					}
				],
				mainImg: true,
				mainImages: [
					{	
						header: 'Project Title',
						body: 'These posts were created to promote a variety of key selling points of HTC products. Some of them being the HTC battery bar, the HTC Rapid Charger, and the evolution of the HTC One series of mobile phones.',
						content: 'Vector Animations',
						technology: 'Adobe After Effects',
						size: 1,
						large: [
							{
								src: './images/ph/ph-4.jpg',
							}
						],
						small: [
							{
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-4.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-4.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-3.jpg',
							},
							{
								size: 2,
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{	
						header: 'Project Title',
						body: 'These glitch based animations were created to promote the release dates of HTC&apos;s new technology.',
						content: 'GIF Images',
						technology: 'Adobe After Effects + Photoshop',
						size: 2,
						large: [
							{
								src: './images/ph/ph-3.jpg',
							},
							{
								src: './images/ph/ph-4.jpg',
							}
						]
					},
					{	
						header: 'Project Title',
						body: 'While I worked on the HTC account, HTC decided to release the RE camera. Part of my work on the account revolved around creating social channels and posts for the camera to promote the product before it hit the shelf.',
						content: 'GIF Images',
						technology: 'Adobe After Effects + Photoshop',
						size: 2,
						large: [
							{
								src: './images/ph/ph-4.jpg',
							},
							{
								src: './images/ph/ph-3.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: false,
				galleryImages: []
	        },
	        {
	        	id: 14,
	        	title: 'Title',
	            meta: ['Content', 'Motion', 'Video', 'Branding'],
	            cover: './images/ph/ph-2.jpg',
	            client: 'Client Name',
	            agency: 'Agency Name',
				roles: ['Concept', 'Branding', 'Motion', 'Video', 'Event Photography'],
				description: 'While at Landor I worked on a rebrand for Arteflame, an innovative grill company based in Cincinnati. I helped refine the logo concept while creating motion design elements based around the idea of a heatwave. Arteflame decided to unveil their rebrand by sponsoring the Cincinnati Food + Wine Classic, at which I captured the event photography and video.',
				video: true,
				videos: [
					{
						header: 'Video Title',
						body: 'Arteflame brand activation concept created for Arteflame grills. Content shot at the Cincinnati Food + Wine classic, the event that Arteflame sponsored to promote their brand relaunch and recognition.',
						content: 'Video',
						technology: 'Adobe Premiere | Canon 5d III + Canon 70-200 f2.8',
						size: 1,
						large: [
							{	
								src: './images/ph/video/ph-2.mp4'
							}
						]
					}
				],
				mainImg: true,
				mainImages: [
					{
						header: 'Project Title',
						body: 'Motion graphic activations of Arteflame&apos;s new logo. I designed and produced these for multiple social media output channels.',
						content: 'Animations',
						technology: 'Adobe After Effects',
						size: 2,
						large: [
							{	
								src: './images/ph/ph-4.jpg',
							},
							{	
								src: './images/ph/ph-3.jpg',
							}
						]
					}
				],
				mainInfo: true,
				gallery: true,
				galleryImages: [
					{
						size: 3,
						src: './images/ph/ph-4.jpg',
					}, 
					{
						size: 3,
						src: './images/ph/ph-3.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-4.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-3.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-4.jpg',
					},
					{
						size: 3,
						src: './images/ph/ph-3.jpg',
					}
				]
	        }


	    ]
	});

})();