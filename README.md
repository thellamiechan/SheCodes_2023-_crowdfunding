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



