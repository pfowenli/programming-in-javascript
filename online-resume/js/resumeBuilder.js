/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs": [
	    {
            "employer": "National Cheng Kung Univesity Hospital",
            "title": "Web Administrator",
            "location": "Tainan City",
            "years": 1,
            "dates": 2015,
            "description": "webpage design"
	    },
	    {
            "employer": "Insight Genomics Co., Ltd",
            "title": "Data Analyst",
            "location": "Tainan City",
            "years": 1,
            "dates": 2017,
            "description": "bioinformatics analysis and web system development"
	    }
	]
};

var projects = {
    "projects": [
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": [""]
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": [""]
        }
    ]
};

var bio = {
	"name": "Owen Pei-Fu LI",
	"role": "data analyst and web developer",
	"welcomeMessage": "Welcome to Owen's Resume",
	"contacts": {
		email: "pfowenli@gmail.com",
	    github: "pfowenli",
	    location: "Tainan City"
	},
	"biopic": "images/me.jpg ",
	"skills": ["data analytics", "web development"]
};

var education = {
	"schools": [
	    {
	    	"name": "National Taiwan University of Science and Technology",
	    	"city": "Taipei City",
	    	"degree": "BA",
	    	"years": 3.5,
	    	"dates": 2013,
	    	"majors": ["Electrical Engineering"],
	    	"url": "http://www.ntust.edu.tw"
	    },
	    {
	    	"name": "National Cheng Kung University",
	    	"city": "Tainan City",
	    	"degree": "Masters",
	    	"years": 2.5,
	    	"dates": 2015,
	    	"majors": ["Medical Informatics"],
	    	"url": "http://www.ncku.edu.tw"
	    }
	],
	"onlineCourses": [
	    {
            "title": "Intro to JavaScript",
            "school": "Udacity",
            "dates": 2017,
            "URL": "https://www.udacity.com/courses/ud803"
	    },
	    {
	    	"title": "JavaScript Basics",
	    	"school": "Udacity",
            "dates": 2017,
            "URL": "https://www.udacity.com/courses/ud804"
	    }
	]
};
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%", bio.skills.join(", ")));

$("#workExperience").append(HTMLworkStart);
for (var i = 0; i < work.jobs.length; i++) {
    $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
    $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
    $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
    $(".work-entry").append(HTMLprojectDescription.replace("%data%", work.jobs[i].description));
}

$("#education").append(HTMLschoolStart);
for (var i = 0; i < education.schools.length; i++) {
	$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[0].url) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
    $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
    $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].city));
    $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors.join(", ")));
}
