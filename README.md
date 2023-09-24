Crowdfunding Platform Project Requirements

This document outlines the requirements for a crowdfunding platform project, which will consist of two distinct projects: an API built using Django RestFramework and a website built using React. The project should have a creative name, and it should cater to a clear target audience. Below are the detailed requirements for the project:
Project Name 
My project name is Bookarina, a self publishing crowdfunding platform

    

User Accounts

 Users should have the ability to create accounts with the following attributes: if the code worked correctly, they would

 The pages are there for creating projects and users, and also for creating pledges. However, I never did get them all working at the same time. If you cannot creat a new user use the username JoeSmith and password jow2476

Crowdfunding Projects

 Users should be able to create "projects" to be crowdfunded: Project creation should be operational. It works in local

 Title
 Owner (a user)
 Description
 Image
 Target amount to fundraise
 Whether the project is currently open to accepting new supporters or not
 Date when the project was created

Pledging to Projects

 Users should have the ability to "pledge" to a project. Each pledge should include the following attributes: Posting a plledge ran into issues. I had a hard time getting it to work properly. 

 An amount
 The project to which the pledge is made
 The supporter/user who created the pledge
 An option to make the pledge anonymous
 A comment to add to pledge

Functionality and Permissions

 Implement suitable update and delete functionality for various entities (e.g., project owners should be allowed to update a project description). Implement appropriate permissions and access control (e.g., define who is allowed to delete a pledge).
 I sorted auth permissions so that the create a project and make a pledge should only be available when a user is logged in. I also ensured the create a user account was available to those who are not logged in. I made delete project in my back end, but not in the front end. I spent too much time trying to fix simple get and post options. I did make a edit a project page and api, but could not figure out how to make it actually update the project.

API Design

 The API should return relevant HTTP status codes for both successful and unsuccessful requests. Failed requests should be handled gracefully, displaying custom 404 pages rather than default error pages.

 Status codes do show up for most errors and sucesses. However, the errors are still rather ordinary. In fact, most errors simply result in the function not working. I tried to implement error handling, but it only managed to break everything. So I deleted it.

By adhering to these requirements, the crowdfunding platform should provide a comprehensive and user-friendly experience for both project creators and supporters.

Create a project in the UI - yes, made and working, i believe
Pledge to a project in the UI - made but not fully working
Login/Logout in the UI - yes, made and works
Delete a pledge in the UI - no not made 
Render Pages for different devices nicely (media queries) - no css at all got made
Delete a project in the UI - should ahve done that first, it would have been easiest
Create an account in the UI - yes, made, but not working, it never adds the user to the database


