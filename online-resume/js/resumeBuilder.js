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
            "dates": "Jul 2014 - Jun 2015",
            "description": "webpage design"
	    },
	    {
            "employer": "Insight Genomics Co., Ltd",
            "title": "Data Analyst",
            "location": "Tainan City",
            "years": 1,
            "dates": "Oct 2016 - current",
            "description": "bioinformatics analysis and web system development"
	    }
	]
};

var projects = {
    "projects": [
        {
            "title": "title 1",
            "dates": "date 1",
            "description": "description 1",
            "images": ["images/197x148.gif"]
        },
        {
            "title": "title 2",
            "dates": "date 2",
            "description": "description 2",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
};

var bio = {
	"name": "Pei-Fu Li",
	"role": "Data Analyst and Web Developer",
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
	    	"location": "Taipei City",
	    	"degree": "BA",
	    	"years": 3.5,
	    	"dates": 2013,
	    	"majors": ["Electrical Engineering"],
	    	"url": "http://www.ntust.edu.tw"
	    },
	    {
	    	"name": "National Cheng Kung University",
	    	"location": "Tainan City",
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
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
//
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
//
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
if (bio.skills.length > 0) {
	// append skill start
    $("#header").append(HTMLskillsStart);
    // loop over each skill
    for (var i = 0; i < bio.skills.length; i++) {
    	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

work.display = function () {
    for (var i = 0; i < work.jobs.length; i++) {
	    $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry:last").append(HTMLprojectDescription.replace("%data%", work.jobs[i].description));
    }
};

projects.display = function () {
	for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
		for (var j = 0; j < projects.projects[i].images.length; j++) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
		}
	}
};

education.display = function() {
	for (var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[0].url) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
	    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
	    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
	    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors.join(", ")));
	}
};


function inName(name) {
	var inName = "";
	var names = name.trim().split(" ");
	var firstName = names[0];
	var lastName = names[1];
	firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.toUpperCase();
    inName = firstName + " " + lastName;
	return inName;
}

console.log(inName("sabastian thrun"));

work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
