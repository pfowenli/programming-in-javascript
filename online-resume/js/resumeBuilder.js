/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: "Owen Pei-Fu Li",
	role: "Junior Programmar",
	contacts: {
		email: "pfowenli@gmail.com",
	    github: "pfowenli",
	    location: "Tainan City"
	},
	pictureUrl: "images/me.jpg ",
	welcomeMessage: "Welcome to Owen's Resume",
	skills: ["data analytics", "web development"]
};
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(HTMLheaderRole);

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(HTMLheaderName);

HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(HTMLemail);

HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(HTMLgithub);

HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(HTMLlocation);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
$("#header").append(HTMLbioPic);

HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(HTMLwelcomeMsg);

HTMLskills = HTMLskills.replace("%data%", bio.skills.join(", "));
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills);

var work = {};
work["position"] = "data analyst",
work.employer = "Julia Tseng",
work.years = 1;
work.city = "Taian City";

$("#workExperience").append(HTMLworkStart);

HTMLworkTitle = HTMLworkTitle.replace("%data%", work.position);
$(".work-entry").append(HTMLworkTitle);

var education = {};
education.name = "National Cheng Kung University";
education.years = 2.5;
education.city = "Tainan City";

$("#education").append(HTMLschoolStart);

HTMLschoolName = HTMLschoolName.replace("%data%", education.name);
$(".education-entry").append(HTMLschoolName);



