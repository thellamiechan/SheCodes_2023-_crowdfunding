Crowdfunding Platform Project Requirements

This document outlines the requirements for a crowdfunding platform project, which will consist of two distinct projects: an API built using Django RestFramework and a website built using React. The project should have a creative name, and it should cater to a clear target audience. Below are the detailed requirements for the project:
Project Name

     The project should have an interesting and catchy name, with bonus points awarded for incorporating puns and/or missing vowels. For inspiration, visit namelix.com.

User Accounts

 Users should have the ability to create accounts with the following attributes:

 Username
 Email address

         Password

Crowdfunding Projects

 Users should be able to create "projects" to be crowdfunded. Each project should have the following attributes:

 Title
 Owner (a user)
 Description
 Image
 Target amount to fundraise
 Whether the project is currently open to accepting new supporters or not

         Date when the project was created

Pledging to Projects

 Users should have the ability to "pledge" to a project. Each pledge should include the following attributes:

 An amount
 The project to which the pledge is made
 The supporter/user who created the pledge
 An option to make the pledge anonymous

         A comment to accompany the pledge

Functionality and Permissions

 Implement suitable update and delete functionality for various entities (e.g., project owners should be allowed to update a project description).

     Implement appropriate permissions and access control (e.g., define who is allowed to delete a pledge).

API Design

 The API should return relevant HTTP status codes for both successful and unsuccessful requests.

     Failed requests should be handled gracefully, displaying custom 404 pages rather than default error pages.

By adhering to these requirements, the crowdfunding platform should provide a comprehensive and user-friendly experience for both project creators and supporters.
