const careerData = [
{
id:1,
name:"Computer Engineer",
category:"Engineering",
route:"/engineering/computer",
aptitude:"Technology",
subjects:[
"Computer Science",
"Mathematics",
"Physics"
],
skills:[
"Coding",
"Problem Solving",
"Mathematics",
"Teamwork"
],
interests:[
"Technology",
"Research"
],
personality:[
"Introvert",
"Ambivert"
],
minScore:10
},
{
id:2,
name:"Civil Engineer",
category:"Engineering",
route:"/engineering/civil",
aptitude:"Technology",
subjects:[
"Mathematics",
"Physics"
],
skills:[
"Problem Solving",
"Leadership",
"Teamwork"
],
interests:[
"Technology"
],
personality:[
"Ambivert",
"Extrovert"
],
minScore:8
},
{
id:3,
name:"Mechanical Engineer",
category:"Engineering",
route:"/engineering/mechanical",
aptitude:"Technology",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Problem Solving",
"Creativity"
],
interests:[
"Technology"
],
personality:[
"Introvert",
"Ambivert"
],
minScore:8
},
{
id:4,
name:"Electrical Engineer",
category:"Engineering",
route:"/engineering/electrical",
aptitude:"Technology",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Problem Solving",
"Mathematics"
],
interests:[
"Technology"
],
personality:[
"Introvert"
],
minScore:8
},
{
id:5,
name:"Chemical Engineer",
category:"Engineering",
route:"/engineering/chemical",
aptitude:"Research",
subjects:[
"Chemistry",
"Physics"
],
skills:[
"Problem Solving",
"Research"
],
interests:[
"Research",
"Technology"
],
personality:[
"Introvert"
],
minScore:8
},
{
id:6,
name:"Aerospace Engineer",
category:"Engineering",
route:"/engineering/aerospace",
aptitude:"Technology",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Problem Solving",
"Coding"
],
interests:[
"Technology",
"Space",
"Research"
],
personality:[
"Introvert"
],
minScore:10
},
{
id:7,
name:"Automobile Engineer",
category:"Engineering",
route:"/engineering/automobile",
aptitude:"Technology",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Problem Solving",
"Teamwork"
],
interests:[
"Technology"
],
personality:[
"Ambivert"
],
minScore:8
},
{
id:8,
name:"Robotics Engineer",
category:"Engineering",
route:"/engineering/robotics",
aptitude:"Technology",
subjects:[
"Computer Science",
"Mathematics",
"Physics"
],
skills:[
"Coding",
"Problem Solving",
"Creativity"
],
interests:[
"Technology",
"Research",
"Space"
],
personality:[
"Introvert"
],
minScore:10
},
{
id:9,
name:"Web Developer",
category:"IT",
route:"/it/web-developer",
aptitude:"Technology",
subjects:[
"Computer Science"
],
skills:[
"Coding",
"Creativity"
],
interests:[
"Technology"
],
personality:[
"Introvert",
"Ambivert"
],
minScore:8
},
{
id:10,
name:"Mobile App Developer",
category:"IT",
route:"/it/mobile-app",
aptitude:"Technology",
subjects:[
"Computer Science"
],
skills:[
"Coding",
"Problem Solving"
],
interests:[
"Technology"
],
personality:[
"Introvert",
"Ambivert"
],
minScore:8
},
{
id:11,
name:"Frontend Developer",
category:"IT",
route:"/it/frontend",
aptitude:"Technology",
subjects:[
"Computer Science"
],
skills:[
"Coding",
"Creativity"
],
interests:[
"Technology",
"Design"
],
personality:[
"Ambivert"
],
minScore:8
},
{
id:12,
name:"Backend Developer",
category:"IT",
route:"/it/backend",
aptitude:"Technology",
subjects:[
"Computer Science"
],
skills:[
"Coding",
"Problem Solving"
],
interests:[
"Technology"
],
personality:[
"Introvert"
],
minScore:8
},
{
id:13,
name:"Full Stack Developer",
category:"IT",
route:"/it/full-stack",
aptitude:"Technology",
subjects:[
"Computer Science"
],
skills:[
"Coding",
"Problem Solving",
"Creativity"
],
interests:[
"Technology"
],
personality:[
"Ambivert"
],
minScore:9
},
{
id:14,
name:"UI/UX Designer",
category:"IT",
route:"/it/uiux",
aptitude:"Design",
subjects:[
"Computer Science"
],
skills:[
"Creativity"
],
interests:[
"Design"
],
personality:[
"Extrovert",
"Ambivert"
],
minScore:7
},
{
id:15,
name:"Cyber Security Analyst",
category:"IT",
route:"/it/cyber-security",
aptitude:"Technology",
subjects:[
"Computer Science"
],
skills:[
"Coding",
"Problem Solving"
],
interests:[
"Technology"
],
personality:[
"Introvert"
],
minScore:9
},
{
id:16,
name:"Data Analyst",
category:"IT",
route:"/it/data-analyst",
aptitude:"Research",
subjects:[
"Mathematics",
"Computer Science"
],
skills:[
"Mathematics",
"Problem Solving"
],
interests:[
"Research",
"Technology"
],
personality:[
"Introvert"
],
minScore:8
},
{
id:17,
name:"Game Developer",
category:"IT",
route:"/it/game-developer",
aptitude:"Technology",
subjects:[
"Computer Science"
],
skills:[
"Coding",
"Creativity"
],
interests:[
"Technology",
"Design"
],
personality:[
"Ambivert"
],
minScore:8
},
{
id:18,
name:"Cardiologist",
category:"Medical",
route:"/doctor/cardiologist",
aptitude:"Medical",
subjects:[
"Biology",
"Chemistry"
],
skills:[
"Communication",
"Problem Solving",
"Helping People"
],
interests:[
"Medical",
"Research"
],
personality:[
"Extrovert",
"Ambivert"
],
minScore:8
},
{
id:19,
name:"Neurologist",
category:"Medical",
route:"/doctor/neurologist",
aptitude:"Medical",
subjects:[
"Biology",
"Chemistry"
],
skills:[
"Research",
"Problem Solving"
],
interests:[
"Medical",
"Research"
],
personality:[
"Introvert",
"Ambivert"
],
minScore:8
},
{
id:20,
name:"MBBS Doctor",
category:"Medical",
route:"/doctor/mbbs",
aptitude:"Medical",
subjects:[
"Biology",
"Chemistry"
],
skills:[
"Communication",
"Leadership",
"Helping People"
],
interests:[
"Medical"
],
personality:[
"Extrovert",
"Ambivert"
],

minScore:8
},
{
id:21,
name:"Gynecologist",
category:"Medical",
route:"/doctor/gynecologist",
aptitude:"Medical",
subjects:[
"Biology"
],
skills:[
"Communication",
"Helping People"
],
interests:[
"Medical"
],
personality:[
"Extrovert"
],
minScore:7
},
{
id:22,
name:"Dermatologist",
category:"Medical",
route:"/doctor/dermatologist",
aptitude:"Medical",
subjects:[
"Biology",
"Chemistry"
],
skills:[
"Research",
"Communication"
],
interests:[
"Medical"
],
personality:[
"Ambivert"
],
minScore:7
},
{
id:23,
name:"Psychiatrist",
category:"Medical",
route:"/doctor/psychiatrist",
aptitude:"Medical",
subjects:[
"Biology"
],
skills:[
"Communication",
"Helping People"
],
interests:[
"Medical"
],
personality:[
"Extrovert",
"Ambivert"
],
minScore:7
},
{
id:24,
name:"Dentist (BDS)",
category:"Medical",
route:"/doctor/dentist",
aptitude:"Medical",
subjects:[
"Biology"
],
skills:[
"Creativity",
"Communication"
],
interests:[
"Medical"
],
personality:[
"Ambivert"
],
minScore:7
},
{
id:25,
name:"Urologist",
category:"Medical",
route:"/doctor/urologist",
aptitude:"Medical",
subjects:[
"Biology",
"Chemistry"
],
skills:[
"Research",
"Problem Solving"
],
interests:[
"Medical"
],
personality:[
"Introvert",
"Ambivert"
],
minScore:8
},
{
id:26,
name:"Radiologist",
category:"Medical",
route:"/doctor/radiologist",
aptitude:"Medical",
subjects:[
"Biology",
"Physics"
],
skills:[
"Technology",
"Problem Solving"
],
interests:[
"Medical",
"Technology"
],

personality:[
"Introvert"
],

minScore:8
},
{
id:27,
name:"IAS Officer",
category:"Government Jobs",
route:"/ias",

aptitude:"Leadership",

subjects:[
"History",
"Geography",
"English"
],

skills:[
"Leadership",
"Communication",
"Decision Making"
],

interests:[
"Government",
"Social Service"
],

personality:[
"Extrovert",
"Ambivert"
],

minScore:8
},

{
id:28,
name:"IPS Officer",
category:"Government Jobs",
route:"/ips",

aptitude:"Leadership",

subjects:[
"History",
"Political Science"
],

skills:[
"Leadership",
"Communication"
],

interests:[
"Government",
"Public Service"
],

personality:[
"Extrovert"
],

minScore:8
},

{
id:29,
name:"Police Officer",
category:"Government Jobs",
route:"/police",

aptitude:"Leadership",

subjects:[
"General Knowledge"
],

skills:[
"Leadership",
"Teamwork"
],

interests:[
"Government"
],

personality:[
"Extrovert"
],

minScore:7
},

{
id:30,
name:"Army Officer",
category:"Government Jobs",
route:"/army",

aptitude:"Leadership",

subjects:[
"General Knowledge"
],

skills:[
"Leadership",
"Teamwork"
],

interests:[
"Government",
"Defense"
],

personality:[
"Extrovert"
],

minScore:7
},

{
id:31,
name:"Income Tax Officer",
category:"Government Jobs",
route:"/income-tax",

aptitude:"Business",

subjects:[
"Mathematics",
"Commerce"
],

skills:[
"Problem Solving",
"Mathematics"
],

interests:[
"Finance",
"Government"
],

personality:[
"Introvert",
"Ambivert"
],

minScore:8
},

{
id:32,
name:"Railway Officer",
category:"Government Jobs",
route:"/railway",

aptitude:"Technology",

subjects:[
"Mathematics",
"Physics"
],

skills:[
"Problem Solving",
"Leadership"
],

interests:[
"Government"
],

personality:[
"Ambivert"
],

minScore:7
},

{
id:33,
name:"Forest Officer",
category:"Government Jobs",
route:"/forest",

aptitude:"Research",

subjects:[
"Biology",
"Environmental Science"
],

skills:[
"Research",
"Leadership"
],

interests:[
"Environment",
"Government"
],

personality:[
"Extrovert",
"Ambivert"
],

minScore:7
},

{
id:34,
name:"Food Inspector",
category:"Government Jobs",
route:"/food",

aptitude:"Research",

subjects:[
"Chemistry",
"Biology"
],

skills:[
"Research",
"Problem Solving"
],

interests:[
"Government",
"Science"
],

personality:[
"Introvert"
],

minScore:7
},

{
id:35,
name:"Talathi",
category:"Government Jobs",
route:"/talathi",

aptitude:"Leadership",

subjects:[
"General Knowledge"
],

skills:[
"Communication",
"Management"
],

interests:[
"Government"
],

personality:[
"Ambivert"
],

minScore:7
},
{
id:36,
name:"Chartered Accountant (CA)",
category:"Banking & Finance",
route:"/banking-finance/ca",

aptitude:"Business",

subjects:[
"Mathematics",
"Commerce"
],

skills:[
"Mathematics",
"Problem Solving",
"Decision Making"
],

interests:[
"Business",
"Finance"
],

personality:[
"Introvert",
"Ambivert"
],

minScore:8
},


{
id:37,
name:"Company Secretary (CS)",
category:"Banking & Finance",
route:"/banking-finance/cs",

aptitude:"Business",

subjects:[
"Commerce",
"English"
],

skills:[
"Communication",
"Leadership"
],

interests:[
"Business",
"Law"
],

personality:[
"Ambivert",
"Extrovert"
],

minScore:7
},


{
id:38,
name:"Tax Consultant",
category:"Banking & Finance",
route:"/banking-finance/tax",

aptitude:"Business",

subjects:[
"Commerce",
"Mathematics"
],

skills:[
"Problem Solving",
"Mathematics"
],

interests:[
"Finance",
"Business"
],

personality:[
"Introvert"
],

minScore:7
},


{
id:39,
name:"Investment Banker",
category:"Banking & Finance",
route:"/banking-finance/ib",

aptitude:"Business",

subjects:[
"Mathematics",
"Economics"
],

skills:[
"Decision Making",
"Communication"
],

interests:[
"Finance",
"Business"
],

personality:[
"Ambivert"
],

minScore:8
},


{
id:40,
name:"Credit Analyst",
category:"Banking & Finance",
route:"/banking-finance/credit-analyst",

aptitude:"Business",

subjects:[
"Mathematics",
"Commerce"
],

skills:[
"Analytical Thinking",
"Problem Solving"
],

interests:[
"Finance"
],

personality:[
"Introvert"
],

minScore:7
},


{
id:41,
name:"Bank Manager",
category:"Banking & Finance",
route:"/banking-finance/bm",

aptitude:"Leadership",

subjects:[
"Commerce",
"Mathematics"
],

skills:[
"Leadership",
"Communication",
"Management"
],

interests:[
"Finance",
"Business"
],

personality:[
"Extrovert",
"Ambivert"
],

minScore:7
},
{
id:42,
name:"Criminal Lawyer",
category:"Law",
route:"/law/criminal-lawyer",

aptitude:"Leadership",

subjects:[
"English",
"Social Science"
],

skills:[
"Communication",
"Public Speaking",
"Problem Solving"
],

interests:[
"Law",
"Government"
],

personality:[
"Extrovert"
],

minScore:8
},


{
id:43,
name:"Corporate Lawyer",
category:"Law",
route:"/law/corporate-lawyer",

aptitude:"Business",

subjects:[
"English",
"Commerce"
],

skills:[
"Communication",
"Leadership"
],

interests:[
"Business",
"Law"
],

personality:[
"Ambivert"
],

minScore:8
},


{
id:44,
name:"Family Lawyer",
category:"Law",
route:"/law/family-lawyer",

aptitude:"Leadership",

subjects:[
"English",
"Social Science"
],

skills:[
"Communication",
"Helping People"
],

interests:[
"Law"
],

personality:[
"Extrovert"
],

minScore:7
},


{
id:45,
name:"Cyber Lawyer",
category:"Law",
route:"/law/cyber-lawyer",

aptitude:"Technology",

subjects:[
"Computer Science",
"Law"
],

skills:[
"Coding",
"Communication",
"Problem Solving"
],

interests:[
"Technology",
"Law"
],

personality:[
"Introvert",
"Ambivert"
],

minScore:8
},


{
id:46,
name:"Tax Lawyer",
category:"Law",
route:"/law/tax-lawyer",

aptitude:"Business",

subjects:[
"Commerce",
"Law"
],

skills:[
"Mathematics",
"Problem Solving"
],

interests:[
"Finance",
"Law"
],

personality:[
"Introvert"
],

minScore:7
},


{
id:47,
name:"Judge",
category:"Law",
route:"/law/judge",

aptitude:"Leadership",

subjects:[
"English",
"Social Science"
],

skills:[
"Decision Making",
"Leadership",
"Communication"
],

interests:[
"Law",
"Government"
],

personality:[
"Ambivert",
"Extrovert"
],

minScore:9
},
{
id:48,
name:"Commercial Pilot",
category:"Aviation",
route:"/aviation/cp",

aptitude:"Technology",

subjects:[
"Physics",
"Mathematics"
],

skills:[
"Decision Making",
"Problem Solving"
],
interests:[
"Technology",
"Aviation"
],
personality:[
"Ambivert",
"Extrovert"
],
minScore:8
},
{
id:49,
name:"Air Force Pilot",
category:"Aviation",
route:"/aviation/afp",
aptitude:"Leadership",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Leadership",
"Decision Making"
],
interests:[
"Defense",
"Aviation"
],
personality:[
"Extrovert"
],
minScore:9
},
{
id:50,
name:"Cabin Crew",
category:"Aviation",
route:"/aviation/cc",
aptitude:"Leadership",
subjects:[
"English"
],
skills:[
"Communication",
"Public Speaking"
],
interests:[
"Travel",
"Aviation"
],
personality:[
"Extrovert"
],
minScore:6
},
{
id:51,
name:"Flight Instructor",
category:"Aviation",
route:"/aviation/fi",
aptitude:"Leadership",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Communication",
"Teaching"
],
interests:[
"Aviation"
],
personality:[
"Extrovert"
],
minScore:8
},
{
id:52,
name:"Airport Manager",
category:"Aviation",
route:"/aviation/am",
aptitude:"Leadership",
subjects:[
"Management",
"English"
],
skills:[
"Leadership",
"Management"
],
interests:[
"Aviation",
"Business"
],
personality:[
"Extrovert",
"Ambivert"
],
minScore:7
},
{
id:53,
name:"Scientist",
category:"Science & Research",
route:"/science-research/scientist",
aptitude:"Research",
subjects:[
"Physics",
"Chemistry",
"Biology"
],
skills:[
"Research",
"Problem Solving"
],
interests:[
"Research",
"Science"
],
personality:[
"Introvert"
],
minScore:8
},
{
id:54,
name:"Physicist",
category:"Science & Research",
route:"/science-research/physicist",
aptitude:"Research",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Analytical Thinking",
"Research"
],
interests:[
"Science",
"Technology"
],
personality:[
"Introvert"
],
minScore:8
},
{
id:55,
name:"Chemist",
category:"Science & Research",
route:"/science-research/chemist",
aptitude:"Research",
subjects:[
"Chemistry"
],
skills:[
"Research",
"Problem Solving"
],
interests:[
"Science"
],
personality:[
"Introvert"
],
minScore:7
},
{
id:56,
name:"Biologist",
category:"Science & Research",
route:"/science-research/biologist",
aptitude:"Research",
subjects:[
"Biology"
],
skills:[
"Research",
"Observation"
],
interests:[
"Science",
"Medical"
],
personality:[
"Introvert"
],
minScore:7
},
{
id:57,
name:"Microbiologist",
category:"Science & Research",
route:"/science-research/microbiologist",
aptitude:"Research",
subjects:[
"Biology",
"Chemistry"
],
skills:[
"Research",
"Analysis"
],
interests:[
"Medical",
"Research"
],
personality:[
"Introvert"
],
minScore:8
},
{
id:58,
name:"Biotechnologist",
category:"Science & Research",
route:"/science-research/biotechnologist",
aptitude:"Research",
subjects:[
"Biology",
"Chemistry"
],
skills:[
"Research",
"Problem Solving"
],
interests:[
"Medical",
"Technology"
],
personality:[
"Introvert"
],
minScore:8
},
{
id:59,
name:"Astronaut",
category:"Space & Astronomy",
route:"/space-astronomy/astronaut",
aptitude:"Technology",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Problem Solving",
"Leadership"
],
interests:[
"Space",
"Research"
],
personality:[
"Ambivert"
],
minScore:10
},
{
id:60,
name:"Space Scientist",
category:"Space & Astronomy",
route:"/space-astronomy/space-scientist",
aptitude:"Research",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Research",
"Analysis"
],
interests:[
"Space",
"Technology"
],
personality:[
"Introvert"
],
minScore:9
},
{
id:61,
name:"Astrophysicist",
category:"Space & Astronomy",
route:"/space-astronomy/astrophysicist",
aptitude:"Research",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Research",
"Problem Solving"
],
interests:[
"Space",
"Science"
],
personality:[
"Introvert"
],
minScore:9
},
{
id:62,
name:"Satellite Engineer",
category:"Space & Astronomy",
route:"/space-astronomy/satellite-engineer",
aptitude:"Technology",
subjects:[
"Physics",
"Computer Science"
],
skills:[
"Coding",
"Problem Solving"
],
interests:[
"Space",
"Technology"
],
personality:[
"Introvert"
],
minScore:9
},
{
id:63,
name:"Graphic Designer",
category:"Design",
route:"/Design/graphic-designer",
aptitude:"Design",
subjects:[
"Art",
"Computer"
],
skills:[
"Creativity",
"Design",
"Communication"
],
interests:[
"Design",
"Technology"
],
personality:[
"Extrovert",
"Ambivert"
],
minScore:7
},
{
id:64,
name:"Interior Designer",
category:"Design",
route:"/Design/interior-designer",
aptitude:"Design",
subjects:[
"Art",
"Design"
],
skills:[
"Creativity",
"Problem Solving"
],
interests:[
"Design"
],
personality:[
"Ambivert"
],
minScore:7
},
{
id:65,
name:"Fashion Designer",
category:"Design",
route:"/Design/fashion-designer",
aptitude:"Design",
subjects:[
"Art",
"Design"
],
skills:[
"Creativity",
"Innovation"
],
interests:[
"Fashion",
"Design"
],
personality:[
"Extrovert"
],
minScore:7
},
{
id:66,
name:"Product Designer",
category:"Design",
route:"/Design/product-designer",
aptitude:"Design",
subjects:[
"Design",
"Computer"
],
skills:[
"Creativity",
"Problem Solving"
],
interests:[
"Technology",
"Design"
],
personality:[
"Ambivert"
],
minScore:7
},
{
id:67,
name:"Journalist",
category:"Media & Journalism",
route:"/media-and-journalism",
aptitude:"Leadership",
subjects:[
"English",
"Social Science"
],
skills:[
"Communication",
"Writing",
"Research"
],
interests:[
"Media",
"News"
],
personality:[
"Extrovert",
"Ambivert"
],
minScore:7
},
{
id:68,
name:"News Reporter",
category:"Media & Journalism",
route:"/media-and-journalism",
aptitude:"Leadership",
subjects:[
"English"
],
skills:[
"Communication",
"Public Speaking"
],
interests:[
"Media"
],
personality:[
"Extrovert"
],
minScore:7
},
{
id:69,
name:"News Anchor",
category:"Media & Journalism",
route:"/media-and-journalism",
aptitude:"Leadership",
subjects:[
"English"
],
skills:[
"Public Speaking",
"Communication"
],
interests:[
"Media"
],
personality:[
"Extrovert"
],
minScore:7
},
{
id:70,
name:"Radio Jockey (RJ)",
category:"Media & Journalism",
route:"/media-and-journalism",
aptitude:"Leadership",
subjects:[
"English"
],
skills:[
"Communication",
"Creativity"
],
interests:[
"Media",
"Entertainment"
],
personality:[
"Extrovert"
],
minScore:6
},
{
id:71,
name:"Hotel Manager",
category:"Hotel Management",
route:"/hotel-management/hotel-manager",
aptitude:"Leadership",
subjects:[
"Management",
"English"
],
skills:[
"Leadership",
"Communication"
],
interests:[
"Business",
"Travel"
],
personality:[
"Extrovert"
],
minScore:7
},
{
id:72,
name:"Chef",
category:"Hotel Management",
route:"/hotel-management/chef",
aptitude:"Design",
subjects:[
"Food Science"
],
skills:[
"Creativity",
"Teamwork"
],
interests:[
"Food",
"Business"
],
personality:[
"Ambivert"
],
minScore:6
},
{
id:73,
name:"Event Manager",
category:"Hotel Management",
route:"/hotel-management/event-manager",
aptitude:"Leadership",
subjects:[
"Management"
],
skills:[
"Leadership",
"Communication",
"Planning"
],
interests:[
"Business",
"Events"
],
personality:[
"Extrovert"
],
minScore:7
},
{
id:74,
name:"Catering Manager",
category:"Hotel Management",
route:"/hotel-management/cafeteria-manager",
aptitude:"Leadership",
subjects:[
"Management"
],
skills:[
"Management",
"Teamwork"
],
interests:[
"Food",
"Business"
],
personality:[
"Ambivert"
],
minScore:6
},
{
id:75,
name:"Environmental Scientist",
category:"Environmental",
route:"/environmental/environmentalscientist",
aptitude:"Research",
subjects:[
"Biology",
"Environmental Science"
],
skills:[
"Research",
"Analysis"
],
interests:[
"Environment",
"Science"
],
personality:[
"Introvert"
],
minScore:7
},
{
id:76,
name:"Wildlife Biologist",
category:"Environmental",
route:"/environmental/wildlifebiologist",
aptitude:"Research",
subjects:[
"Biology"
],
skills:[
"Observation",
"Research"
],
interests:[
"Environment",
"Animals"
],
personality:[
"Ambivert"
],
minScore:7
},
{
id:77,
name:"Forest Officer",
category:"Environmental",
route:"/environmental/forestofficer",
aptitude:"Leadership",
subjects:[
"Biology"
],
skills:[
"Leadership",
"Management"
],
interests:[
"Environment",
"Government"
],
personality:[
"Extrovert"
],
minScore:7
},
{
id:78,
name:"Deck Officer",
category:"Merchant Navy",
route:"/merchant-navy/deck-officer",
aptitude:"Technology",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Leadership",
"Decision Making",
"Teamwork"
],
interests:[
"Travel",
"Technology"
],
personality:[
"Ambivert",
"Extrovert"
],
minScore:8
},
{
id:79,
name:"Marine Engineer",
category:"Merchant Navy",
route:"/merchant-navy/marine-engineer",
aptitude:"Technology",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Problem Solving",
"Technical Skills"
],
interests:[
"Technology",
"Engineering"
],
personality:[
"Introvert",
"Ambivert"
],
minScore:8
},
{
id:80,
name:"Electro-Technical Officer (ETO)",
category:"Merchant Navy",
route:"/merchant-navy/electro-technical-officer",
aptitude:"Technology",
subjects:[
"Physics",
"Electronics"
],
skills:[
"Technical Skills",
"Problem Solving"
],
interests:[
"Technology",
"Engineering"
],
personality:[
"Introvert"
],
minScore:8
},
{
id:81,
name:"Captain (Master Mariner)",
category:"Merchant Navy",
route:"/merchant-navy/captain",
aptitude:"Leadership",
subjects:[
"Physics",
"Mathematics"
],
skills:[
"Leadership",
"Decision Making",
"Communication"
],
interests:[
"Travel",
"Management"
],
personality:[
"Extrovert"
],
minScore:9
},
{
id:82,
name:"Port Manager",
category:"Merchant Navy",
route:"/merchant-navy/port-manager",
aptitude:"Leadership",
subjects:[
"Management",
"Commerce"
],
skills:[
"Leadership",
"Management",
"Communication"
],
interests:[
"Business",
"Travel"
],
personality:[
"Ambivert"
],
minScore:7
},
];
export default careerData;