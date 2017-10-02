/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs": [
	    {
            "employer": "Insight Genomics Co., Ltd",
            "title": "Data Analyst",
            "location": "Tainan City",
            "years": 1,
            "dates": "Oct 2016 - current",
            "description": "bioinformatics analysis and web development",
            "URL": "http://www.i-genomics.com.tw"
	    },
	    {
            "employer": "National Cheng Kung Univesity Hospital",
            "title": "Web Administrator",
            "location": "Tainan City",
            "years": 1,
            "dates": "Jul 2014 - Jun 2015",
            "description": "webpage design",
            "URL": "http://www.hosp.ncku.edu.tw"
	    }
	]
};

var projects = {
    "projects": [
        {
            "title": "Digits Data Classification",
            "dates": "Oct 2017",
            "description": "Scikit Learn",
            "URL": "http://nbviewer.jupyter.org/github/pfowenli/data-science-in-python/blob/b18ba4ecdd6336ba680b9380c414b055f529cc27/Scikit-Learn/scikit-learn-digits-dataset.ipynb"
            //"images": ["images/197x148.gif"]
        },
        {
            "title": "Just Java - User Input",
            "dates": "Sep 2017",
            "description": "Android application development",
            "URL": "https://github.com/pfowenli/android-app-development/tree/master/basics/JustJava"
            //"images": ["images/197x148.gif"]
        },
        {
            "title": "Belgian Traffic Signs Prediction Using Neural Networks",
            "dates": "Aug 2017",
            "description": "TensorFlow",
            "URL": "http://nbviewer.jupyter.org/github/pfowenli/data-science-in-python/blob/b18ba4ecdd6336ba680b9380c414b055f529cc27/TensorFlow/tensorflow-for-beginners.ipynb"
            //"images": ["images/197x148.gif"]
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
	"skills": [
	    "programming language - Java, JavaScript, Python", 
	    "Java framework - Spring, Hibernate",
	    "JavaScript library - jQuery",
	    "Python data analytcis package - Matplotlib, Scikit-learn, Pandas, Tensorflow", 
	    "database - MySQL, PostgreSQL, MongoDB",
	    "mobile application - Android",
	    "version control - git"
	]
};

var education = {
	"schools": [
	    {
	    	"name": "National Cheng Kung University",
	    	"location": "Tainan City",
	    	"degree": "Masters",
	    	"years": 2.5,
	    	"dates": "Feb 2013 - Jun 2015",
	    	"majors": ["Medical Informatics"],
	    	"url": "http://www.ncku.edu.tw"
	    },
	    {
	    	"name": "National Taiwan University of Science and Technology",
	    	"location": "Taipei City",
	    	"degree": "BA",
	    	"years": 3.5,
	    	"dates": "Sep 2009 - Jan 2013",
	    	"majors": ["Electrical Engineering"],
	    	"url": "http://www.ntust.edu.tw"
	    }
	],
	"onlineCourses": [
	    {
            "title": "Data Visualization and D3.js",
            "school": "Udacity",
            "dates": "Sep 2017 - current",
            "URL": "https://www.udacity.com/courses/ud507"
	    },
	    {
            "title": "Android Basics: User Input",
            "school": "Udacity & Google",
            "dates": "Aug 2017 - Sep 2017",
            "URL": "https://www.udacity.com/courses/ud836"
	    },
	    {
            "title": "Android Basics: User Interface",
            "school": "Udacity & Google",
            "dates": "Sep 2017",
            "URL": "https://www.udacity.com/courses/ud834"
	    },
	    {
            "title": "Intro to JavaScript",
            "school": "Udacity",
            "dates": "Aug 2017",
            "URL": "https://www.udacity.com/courses/ud803"
	    },
	    {
	    	"title": "JavaScript Basics",
	    	"school": "Udacity",
            "dates": "Aug 2017",
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
    	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]+"<br><br>"));
    }
}

work.display = function () {
    for (var i = 0; i < work.jobs.length; i++) {
	    $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", work.jobs[i].URL) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry:last").append(HTMLprojectDescription.replace("%data%", work.jobs[i].description));
    }
};

projects.display = function () {
	for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].URL));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
		/*
		for (var j = 0; j < projects.projects[i].images.length; j++) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
		}
		*/
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

	for (var i = 0; i < education.onlineCourses.length; i++) {
		$("#online").append(HTMLonlineStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].URL) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
	    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
	    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", "").replace("#", education.onlineCourses[i].URL));
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
