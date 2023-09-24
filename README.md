Crowdfunding Platform 

This document outlines the requirements for a crowdfunding platform project, which will consist of two distinct projects: an API built using Django RestFramework and a website built using React. The project should have a creative name, and it should cater to a clear target audience. Below are the detailed requirements for the project:

Project Name 

--My project name is Bookarina, a self-publishing crowdfunding platform, 

    

User Accounts

 **If you cannot create a new user, use the username JoeSmith and password jow2476**
 
 
 --if the code worked correctly, the would-be user could create an account, as it is, they can add their info, but it doesn't get added to the database, i really cannot figure out why.

 --The pages are there for creating projects and users, and also for creating pledges and editing projects. However, I never did get them all working at the same time. 
 

Crowdfunding Projects

 -- Project creation should be operational. It works in local

Pledging to Projects

 
 --Posting a pledge ran into issues. I had a hard time getting it to work properly. i really struggled trying to get the owner pk for the projects and the supporter pk for the pledges...
 

Functionality and Permissions

  --I sorted auth permissions so that the 'create a project' and 'make a pledge' should only be available when a user is logged in. I also ensured the 'create a user account' was available to those who are not logged in. I made delete project in my back end, but not in the front end. I spent too much time trying to fix simple 'get' and 'post' options. I did make an 'edit a project' page and api, but could not figure out how to make it actually update the project in the database.
  
API Design

 The API should return relevant HTTP status codes for both successful and unsuccessful requests. Failed requests should be handled gracefully, displaying custom 404 pages rather than default error pages.

 --Status codes do show up for most errors and sucesses. However, the errors are still rather ordinary. In fact, most errors simply result in the function not working. I tried to implement error handling, but it only managed to break everything. So I deleted it.


Lachlan"s checklist from Slack:


Create a project in the UI - yes, made and working, I believe

Pledge to a project in the UI - made but not fully working

Login/Logout in the UI - yes, made and works

Delete a pledge in the UI - no not made

Render Pages for different devices nicely (media queries) - no css at all got made

Delete a project in the UI - should have done that first, it would have been easiest

Create an account in the UI - yes, made, but not working, it never adds the user to the database

[ ] A link to the deployed project. 

[ ] A screenshot of the homepage https://master--magical-nougat-3b05c8.netlify.app/
[ ] A screenshot of the project creation page:
<img width="1344" alt="home page 2023-09-24 at 9 54 01 pm" src="https://github.com/thellamiechan/SheCodes_2023-_crowdfunding/assets/133753350/afac6ca4-a8a9-4fcd-8ce3-d3f5eb925ee0">

[ ] A screenshot of the project creation form:
<img width="344" alt="project create 2023-09-24 at 10 02 33 pm" src="https://github.com/thellamiechan/SheCodes_2023-_crowdfunding/assets/133753350/4cc5beab-afb3-4e98-b1df-aaacf8d37b43">

[ ] A screenshot of a project with pledges:
<img width="408" alt="project with pledges 2023-09-24 at 10 04 47 pm" src="https://github.com/thellamiechan/SheCodes_2023-_crowdfunding/assets/133753350/aa0d58cd-5f75-4ea4-827b-0e94d55e5bf9">

[ ] A screenshot of the resulting page when an unauthorized user attempts to edita project (optional, depending on whether or not this functionality makes sense inyour app!)
<img width="405" alt="project card logged out2023-09-24 at 10 07 26 pm" src="https://github.com/thellamiechan/SheCodes_2023-_crowdfunding/assets/133753350/278e2894-4fb7-4668-a496-ace72434fb13">




