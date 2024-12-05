<p align="center">
  <img src="documentation/logo.png" alt="Chronicle Logo" style="width: 250px; height: auto;">
</p>
<h1 align="center">Chronicle</h1>

<h2>Welcome</h2>

Link to live website: [CLICK HERE!](https://chronicle-ci-fad840fb8771.herokuapp.com/)

<div align="center">
  <img src="documentation/responsive.png" alt="Responsive Image" style="width: 800px; height: auto;" >
</div>  

<br>

[Chronicle Django Rest Framework API Backend Live Link](https://chronicle-api-8dba6c70f37d.herokuapp.com/)

[Chronicle Backend Github Repo](https://github.com/Ahmadk-g/chronicle-api)


## Introduction

Welcome to Chronicle, a vibrant social platform where connections come to life! Chronicle is designed to bring people together through shared stories, engaging posts, and memorable events. Whether you’re here to connect with others, showcase your experiences, or discover inspiring content, Chronicle is your go-to destination for meaningful social engagement.


**With Chronicle, you can:**
- Share your stories through posts and media.
- Discover and join exciting events in your community.
- Interact with others through likes, comments, and follows.
- Stay updated with real-time notifications for all your activities.
- Manage your profile and personalize your Chronicle experience.

Our frontend is built using React to ensure a sleek and responsive interface that provides users with an intuitive and enjoyable experience. It seamlessly integrates with a powerful Django backend, enabling robust and reliable functionality.

**Join the Chronicle Community**

Dive into Chronicle today and become part of a thriving community! Whether you're here to create, connect, or simply explore, Chronicle has something for everyone. Share your voice, engage with others, and be inspired. Together, let’s make every moment count.

<br>

## UX - User Experience

Chronicle is designed to provide an intuitive, engaging, and inclusive experience for users who want to connect, share, and explore. Our platform prioritizes seamless interaction, personalization, and accessibility, ensuring a delightful journey for all. Here's how Chronicle delivers an exceptional user experience:

- **Intuitive Navigation:**
With a clean and organized interface, Chronicle makes it easy for users to explore posts, events, and profiles. Our straightforward navigation ensures that everything you need is just a few clicks away.

- **Responsive Design:**
Chronicle is optimized for desktops, tablets, and mobile devices, ensuring a smooth and consistent experience across all platforms. Whether you're browsing on the go or at home, the platform adapts perfectly to your screen size.

- **Personalization:**
Users can manage their profiles, save their favorite content, and curate their experience by following users and interacting with posts. Chronicle tailors itself to your unique preferences, making every visit meaningful.

- **Engaging Interactions:**
Chronicle fosters connections through features like likes, comments, follows, and event RSVPs. These interactive elements create a vibrant and dynamic community where everyone can participate and engage.

- **Real-Time Notifications:**
Stay up-to-date with real-time notifications about your posts, events, followers, and more, ensuring that you never miss an important moment.

- **Event-Centric Features:**
Chronicle’s events feature allows users to discover, RSVP to, and engage with events effortlessly. Whether you're organizing or attending, events are seamlessly integrated into the user experience.

Chronicle’s UX is crafted to empower users to connect, share, and explore in a supportive and accessible environment. With its thoughtful design and engaging features, Chronicle ensures every user feels at home in its thriving community.

<br>

## Design

### Color Scheme

The color palette used across the site is inspired by the vibrant tones of our logo, creating a visually cohesive and engaging experience. To enhance usability and guide user interaction, different shades of these core colors are applied strategically throughout the app. From subtle background hues to dynamic hover effects, each color and shade is chosen to complement the design and improve user experience based on context and functionality. 

![Palette](documentation/colorpalette.png)

Below is a breakdown of the primary colors and their contextual usage:

**Primary Colors**
- **Main Background** `#f8f8f8`: Used as the primary background color across the app for a clean and neutral base.
- **Content Background** `#ffffff`: Applied to cards, containers, and main content areas to maintain a bright and focused look.

**Intercative Elements**
- **Navbar Icons**: Default `#a5a4a7`, Hover `#ff76f4`, Active `#802ac7`
- **Buttons**: 
  - Primary: `#76bbfa`
  - Following: `#9671ee`
  - Comment Post: Default `#9671ee`, Hover `#cfced3`
  - Event Attending: Default `#000`, Hover `#ff76f4`, Active `#a02ac7`

Text colors are also dynamically adjusted to ensure strong contrast and optimal readability across various backgrounds. This thoughtful approach ensures a harmonious and accessible interface, while maintaining consistency with the brand's identity.

---

### Fonts

The primary font used throughout the site is **DM Sans**, which provides a clean and modern look, enhancing readability and aesthetics. 

To ensure consistency, **sans-serif** is designated as a backup font, serving as a fallback in cases where the primary font fails to load correctly.

<br>

# Project Planning

## Scope Plane

#### Purpose and Goal
Chronicle is a modern social media platform designed to bring communities closer by enabling users to share posts, create events, and interact seamlessly with others. It empowers users to connect, engage, and stay updated on topics and activities that matter most to them. The goal is to provide a vibrant, inclusive, and interactive digital space that fosters meaningful connections, creativity, and collaboration.

#### Target Audience
- **Social Enthusiasts**: Individuals who enjoy sharing posts, following trends, and staying connected with friends and communities.
- **Event Organizers**: Users looking for a platform to promote, manage, and engage attendees for events.
- **Content Creators**: Those who wish to share creative content and interact with a wide audience.
- **Community Builders**: Users passionate about fostering relationships and engaging with like-minded individuals.

#### User Needs
- Effortless sharing of posts and events to express ideas and creativity.
- Reliable notifications to stay informed about interactions and upcoming activities.
- User-friendly tools to discover and RSVP to events.
- A personalized experience through customizable profiles and tailored content.
- A seamless way to engage with posts, events, and other users via likes, comments, and follows.
- An intuitive and responsive interface accessible on all devices.

#### Key Features
- **Post Sharing**: Create, edit, and delete posts with text, images, or media attachments.
- **Engagement Tools**: Interact with content through likes, comments, and follows.
- **Event Management**: Create, RSVP to, and manage events.
- **Notification System**: Real-time updates on interactions, followers, and events.
- **Search and Discovery**: Advanced search functionality to find users, posts, and events.
- **Profile Customization**: Manage profile details and view personalized activity feeds.
- **Responsive Design**: A seamless experience across desktops, tablets, and mobile devices.
- **Authentication Features**: Secure sign-up, sign-in, and refreshable access tokens.


## Agile Methodologies

Chronicle was developed using Agile methodology, fostering iterative development and adaptability throughout the project. The use of GitHub Projects and Issues allowed for efficient task management via a Kanban-style board. This approach facilitated the organization of tasks into Epics, User Stories, and actionable Tasks, ensuring continuous progress tracking and a user-focused final product.


### Epics and User Stories

- **Epics**: Represent large features or overarching objectives, broken down into smaller, actionable components to enable a structured and manageable development process.

- **User Stories**: Define specific functionalities or features from a user's perspective, with clear acceptance criteria to ensure completeness. Each user story often comprises several tasks that need to be completed to meet the user’s needs.

You can explore the project's epics and user stories on the [GitHub Kanban Board](https://github.com/users/Ahmadk-g/projects/5).

### MoSCoW Prioritization

To manage priorities and allocate resources effectively, the MoSCoW method was used, categorizing tasks as follows:

- **Must Have**: Essential features that are critical for the app’s core functionality.
- **Should Have**: Important features that enhance user experience but are not immediately critical.
- **Could Have**: Desirable features addressed only after "Must Have" and "Should Have" requirements are completed.
- **Won’t Have**: Features not considered for the initial release but potentially included in future updates.

### Kanban Board
A Kanban board was utilized for visualizing the workflow, tracking the status of user stories, and ensuring efficient task management. The board highlights tasks in various stages: To Do, In Progress, and Completed, promoting transparency and streamlined development.

You can view the project's Kanban board [here](https://github.com/users/Ahmadk-g/projects/5).

---

Below is an outline of the Epics and their respective User Stories implemented in the project:

#### Epic 1: Authentication and User management
User account creation, login/logout processes, profile personalization, and secure token-based session management.

**User Stories**
| Title | User Story | MoSCoW Priority |
|---------|----------------------|------------------------------|
| Authentication - Sign up | As a user, I can create a new account so that I can access all the features available to registered users. | MUST HAVE |
| Authentication - Sign in and Logged-In Status | As a user, I can sign in to the app and know whether I am logged in or not so that I can acess functionality for logged-in users. | MUST HAVE |
| Authentication - Refreshing Access Tokens    | As a user, I can maintain a Logged-in status until I choose to log out so that my user experience is not compromised. | SHOULD HAVE |
| Profile Management | As a user, I can create and update my profile details and profile picture so that others can learn more about me. | SHOULD HAVE |
| View User Profiles     | As a user, I can view other user profiles so that I can learn about their interests and activities. | SHOULD HAVE |

#### Epic 2: Navigation and Content Discovery
Enabling users to seamlessly navigate the platform and discover content through menus, search functionality, and curated feeds.

**User Stories**
| Title | User Story | MoSCoW Priority |
|---------|----------------------|------------------------------|
| Navigation | As a user, I can view a navbar from every page so that I can navigate easily between pages. | MUST HAVE |
| Search Content | As a user, I can search for posts, events, or profiles by keyword so that I can easily discover. | SHOULD HAVE |
| View List of Posts | As a user I can view all posts, ordered by most recently created first so that I am up to date with the newest content. | MUST HAVE |
| View a Post | As a user, I can view the details of a single post so that I can learn more about it and comment on it. | Must HAVE |
| View Liked Posts | As a logged-in user I can view the posts I have liked so that I can revisit and engage with the content I enjoy the most. | SHOULD HAVE |
| View Posts of Followed Users | As a logged-in user I can view posts created by users I follow so that I can keep up with their latest updates and activity. | SHOULD HAVE |
| View List of Events | As a user I can view all events so that I can stay informed about upcoming activities. | MUST HAVE |

#### Epic 3: Posts and Engagement
Creating, editing, and deleting posts, as well as interacting with them through likes, comments, and threaded discussions.

**User Stories**
| Title | User Story | MoSCoW Priority |
|---------|----------------------|------------------------------|
| Create a Post | As a user, I can create a post so that I can share experiences and interests. | MUST HAVE |
| Edit and Delete Post | As a user, I can edit and delete my posts so that I keep my content accurate. | SHOULD HAVE |
| Like and Unlike Posts | As a user, I can like and unlike posts so that I can show appreciation. | MUST HAVE |
| Comment on Posts | As a user, I can comment on posts so that I can engage in discussions. | Must HAVE |
| Edit and Delete Comments | As a user, I can edit and delete my comments so that I can maintain the accuracy of my feedback and remove any comments I no longer want to share. | SHOULD HAVE |

#### Epic 4: Events Management
Creating, managing, and engaging with events, including RSVP functionality and viewing attendee count.

**User Stories**
| Title | User Story | MoSCoW Priority |
|---------|----------------------|------------------------------|
| Create an Event | As a user, I can create events so that others can join. | MUST HAVE |
| Edit and Delete Event | As a user, I can edit and delete my events so that I keep my content accurate. | SHOULD HAVE |
| RSVP to Events | As a user, I can RSVP to an event so that I indicate if I'm attending. | MUST HAVE |

#### Epic 5: Social Interaction and Notifications
Encapsulates user connections (following/unfollowing) and notification systems that keep users informed about relevant interactions and updates.

**User Stories**
| Title | User Story | MoSCoW Priority |
|---------|----------------------|------------------------------|
| Follow Other Users | As a user, I can follow and unfollow other users so that I can stay updated on their content. | MUST HAVE |
| Follower Notifications | As a user, I can be notified when someone new follows me so that I am aware of my profile engagement. | SHOULD HAVE |
| Post and Event Engagement Notifications | As a user, I can recieve notifications so that I am aware of my content engagement. | MUST HAVE |
| Notifications Page | As a logged-in user, I can view all my notifications on a dedicated page so that I can stay updated on interactions related to my posts, follows, and events. | MUST HAVE |



## Structural Plane

### Information Architecture

1. **Navigation**
    - **NavBar**: Fixed on every page with links to essential pages.
    - **Primary Links:** Links to the Home page and Events page
    - **Registered Users:** Links to the posts feed page, liked posts page, Notifications page, Profile page, and Sign-out
    - **Unregistered Users:** Links to Sign-in/Sign-up pages

2. **Home Page**

    - Overview of the platform
    - List of posts displayed in reverse chronological order (most recent first)
    - Links to individual post detail pages for further engagement.
    - Search bar for finding posts
    - Most popular profiles container

3. **Post Feed**
    - Displays posts from users you follow

4. **Liked Posts**
    - Displays posts you’ve liked

5. **Events Page**
    - Display list of events
    - Link to individual event pages

6. **Detailed Pages of Posts or Events**
    - Show all post/event details
    - Allow user interaction:
        - **For posts:** Liking/unliking and commenting
        - **For events:** Marking attendance

7. **User Profile Page**
    - Profile customization and editing options
    - Display of user’s posts, events, followers, and following

8. **User Authentication**
    - **Login Page:** Secure login form
    - **Registration Page:** User registration form

9. **Social Interactions**
    - Interacting with posts and events through comments, likes, and RSVPs
    - Interacting with users by following and unfollowing
    - Receiving notifications for user interactions

10. **Notifications**
    - Display notifications for user activity
    - Links to the relevant user, post, or event

11. **Search Functionality**
    - Global search bar for posts and events

## Skeleton & Surface Planes

### WireFrames

I've used [Balsamiq](https://balsamiq.com/wireframes) to design the site wireframes.

**Home Page Wireframes**
<details>
<summary>Click to View Home Page wireframes</summary>


**Desktop**

![wireframes](documentation/wireframes/home.png)
</details>


<details>
<summary>Click to View Home Page after Login wireframes</summary>

**Desktop**

![wireframes](documentation/wireframes/logged-inhome.png)
</details>

<br>

**My Feed, My likes Page Wireframes**
<details>
<summary>"Click to View User-Specific Post Page Wireframes"</summary>


**Desktop**

![wireframes](documentation/wireframes/feed-liked.png)
</details>

<br>

**Post Detail Page Wireframes**
<details>
<summary>"Click to View Post Detail Page Wireframes"</summary>


**Desktop**

![wireframes](documentation/wireframes/detail-view.png)
</details>

<br>

**Events, My Events Page Wireframes**
<details>
<summary>"Click to View Page Wireframes"</summary>


**Desktop**

![wireframes](documentation/wireframes/events-myevents.png)
</details>

<br>

**Notifications Page Wireframes**
<details>
<summary>"Click to View Notifications Page Wireframes"</summary>


**Desktop**

![wireframes](documentation/wireframes/notifications.png)
</details>

<br>

**Add and Edit Post Page Wireframes**
<details>
<summary>"Click to View Content create or edit Page Wireframes"</summary>


**Desktop**

![wireframes](documentation/wireframes/add-editpost.png)
</details>

The Event Creation and Edit pages are similar but with a different form.

<br>

**Profile Page Wireframes**
<details>
<summary>"Click to View Profile Page Wireframes"</summary>


**Desktop**

![wireframes](documentation/wireframes/myprofile.png)
</details>




##  Database Schema - Entity relationship Diagram

### **Entity Relationship Diagram (ERD**)
The ERD visually maps out the relationships and dependencies among various entities in the system. It provides a clear representation of how users interact with posts, events, and other users, while also highlighting the notification and social engagement processes. This diagram acts as a blueprint for developers, making it easier to understand the data flow and identify key relationships within the application. 

[dbdiagram.io](https://dbdiagram.io) was utilized to design the ERD.

![Chronicle ERD](documentation/erd.png)


### **Key Model Relationships**

- Users:
  - **Profile**: Extends the default Django User model with additional fields for personalization.
  - **Followers**: Creates a many-to-many relationship, enabling users to follow and unfollow one another, fostering a social network.

- Posts:
  - **User-generated content**: Posts include text, images, and multimedia to encourage user engagement.
  - **Likes and Comments**: Linked to Likes and Comments for user interaction with posts, enabling likes and threaded discussions.
  - **Notifications**: Post interactions trigger notifications, keeping users updated on likes, comments, and more.
  - **Timestamps**: Tracks creation and update times, ensuring content freshness.

- Followers
  - **User Connections**: Manages who follows whom by using two ForeignKey fields, creating a many-to-many relationship between users.
  - **Notifications**: Following users triggers notifications, alerting new followers and activity.
  - **Dynamic Relationship**: Users can follow and unfollow at any time, with real-time updates.

- Notifications:
  - **Event-Driven**: Triggered by user actions (likes, comments, follows, event participation) to keep users informed.
  - **Notification Types**: Flexible notification_type field allows new notification types to be added easily.
  - **User-Centric**: Notifications are linked to users, ensuring personalized updates.

- Events:
  - **User-Generated**: Users create events for social gatherings, online meetups, etc.
  - **RSVP & Status**: Tracks participation with statuses like "interested" or "attending" via the Attending model.
  - **Notifications**: Event updates trigger notifications to participants and hosts.
  - **Timestamps**: Events have start and end times to track scheduling.

- Interactions
  - **Likes, Comments & Attendings**: Users interact with posts and events through likes, comments, and attending statuses.
  - **Nested Comments**: Supports threaded comments for deeper discussions.
  - **Dynamic Updates**: Interactions update in real-time, with notifications for new likes, comments, followers or event RSVP's.

<br>

### **Entity Relationships Overview:**
- **One-to-One:** Each user profile is uniquely tied to a Django User model instance.
- **One-to-Many:** 
  - Users can create multiple posts, comments, likes, or events.
  - Posts can have multiple comments and likes.
- **Many-to-Many:**
  - Follower relationships enable users to connect with each other.
  - Event attendance is facilitated through intermediary models.

<br>  

<u>Comprehnsive Relationship Table</u>

| Primary Model |  Related Model | Relationship Type | Description |
|---------|---------|----------|------------------|
| User | Profile | One-to-One | Each user has one profile. |
| User | Post | One-to-Many | One user can create multiple posts. |
| User | Event | One-to-Many | One user can create multiple events. |
| User | Comment | One-to-Many | One user can create multiple comments. |
| User | Like | One-to-Many | One user can like many posts. |
| User | Attendings | One-to-Many | One user can attend multiple Events. |
| User | Follower | Many-to-Many | Users can follow each other. |
| Post | Like | One-to-Many | A post can have many likes. |
| Post | Comment | One-to-Many | A post can have many comments. |
| Event | Attendings | Many-to-Many | Events can have multiple participants. |
| Notification | User | Many-to-One | Many Notifications belong to one users |
| Notification | Post | Many-to-One | Many Notifications belong can be associated with one post |
| Notification | Events | Many-to-One | Many Notifications belong can be associated with one event |

<br>

## Security
Security is essential for protecting user data and platform integrity.

- **Data Encryption**: Sensitive data, including passwords and personal information, is encrypted to prevent unauthorized access.
- **CSRF Tokens**: Each form submission includes a CSRF token to guard against cross-site request forgery attacks.
- **Authentication**: User authentication is managed by Django AllAuth, ensuring secure user registration and login.
- **API Security**: The API is protected with token-based authentication, limiting actions like creating posts or updating profiles to authenticated users. Superuser permissions are required for admin actions.

This ensures a secure experience for all users on the platform.

## CRUD Functionalities

The "Chronicle" project, built with a React frontend and Django REST framework backend, leverages Django's robust tools to manage Create, Read, Update, and Delete (CRUD) functionalities securely and efficiently.

### Posts:
- **Create**: Post new content (text, images, media).
- **Read**: View posts.
- **Update**: Edit post content.
- **Delete**: Delete posts.

### Events:
- **Create**: Create events.
- **Read**: View event details.
- **Update**: Edit event details.
- **Delete**: Delete events.

### Profiles:
- **Create**: Set up profile (details, photo).
- **Read**: View profiles.
- **Update**: Edit profile info.
- **Delete**: Delete profile.

### Followers:
- **Create**: Follow users.
- **Read**: View followers/following.
- **Delete**: Unfollow users.

### Likes:
- **Create**: Like posts.
- **Read**: View likes.
- **Delete**: Unlike posts.

### Comments:
- **Create**: Comment on posts.
- **Read**: View comments.
- **Update**: Edit comments.
- **Delete**: Delete comments.

### Attendances:
- **Create**: Mark event attendance.
- **Read**: View attendance lists.
- **Update**: Change attendance status.
- **Delete**: Remove attendance.

---

<br>

# Features

### Logo

The logo is not just a visual element but also a functional feature. Clicking on it will always bring you back to the homepage, providing an easy way to navigate to the starting point of the site.

<details>
<summary><strong>Click to View Logo</strong></summary>


<img src="documentation/logo.png" alt="Chronicle Logo" style="width: 250px; height: auto;">

</details>


### Responsice Navigation Bar

The Chronicle Navbar is designed to provide seamless navigation throughout the platform. It features intuitive icons for core functionalities, with descriptive labels appearing on hover for clarity. For actions like "Sign In" and "Sign Up," visible text is displayed alongside the icons to prioritize accessibility for new users.

The navbar dynamically adapts based on user authentication status.
- For unauthenticated users, options like "Sign In" and "Sign Up" are prominently displayed. 
- Once signed in, the navbar updates to include personalized elements like access to "My Feed" "My likes," and user-specific features, ensuring an efficient and tailored experience.

<details>
<summary><strong>Click to View NavBar</strong></summary>

#### Before user login
<!-- ![Features](documentation/features/navbar/guestnavbar.png) -->
<img src="documentation/features/navbar/guestnavbar.png" alt="Features" style="width: 800px; height: auto;">


#### After user login
<!-- ![Features](documentation/features/navbar/navbar.png) -->
<img src="documentation/features/navbar/navbar.png" alt="Features" style="width: 800px; height: auto;">


#### Add content dropdown
<!-- ![Features](documentation/features/navbar/addmenu.png) -->
<img src="documentation/features/navbar/addmenu.png" alt="Features" style="width: 250px; height: auto;">


#### User-specific Side dropdown
<!-- ![Features](documentation/features/navbar/user-sidenav.png) -->
<img src="documentation/features/navbar/user-sidenav.png" alt="Features" style="width: 250px; height: auto;">


<br>

On smaller screens, the navbar compresses inro a dropdown for easier navigation

#### Compressed NavBar
<!-- ![Features](documentation/features/navbar/compressednav.png) -->
<img src="documentation/features/navbar/compressednav.png" alt="Features" style="width: 250px; height: auto;">


#### Hamburger Menu
<!-- ![Features](documentation/features/navbar/burgermenu.png) -->
<img src="documentation/features/navbar/burgermenu.png" alt="Features" style="width: 250px; height: auto;">


#### Hamburger Menu with user-specific links
<!-- ![Features](documentation/features/navbar/burgermenu-user.png) -->
<img src="documentation/features/navbar/burgermenu-user.png" alt="Features" style="width: 250px; height: auto;">


</details>


### Home Page

The Home Page, serving as the welcome page for the site, displays a list of posts, popular profiles, and includes a search bar for filtering posts, offering users easy content discovery and engagement.

<details>
<summary><strong>Click to View Home Page</strong></summary>

<!-- ![Features](documentation/features/homepage.png) -->
<img src="documentation/features/homepage.png" alt="Features" style="width: 800px; height: auto;">

</details>

### Popular Profiles

The Popular Profiles section showcases a dynamic list of the most followed users, rendered across nearly all pages. This section is dynamically updated based on user authentication, with a "Follow" button appearing next to profiles once a user is signed in, allowing them to follow or unfollow other profiles to enhance social interaction and content discovery.

<details>
<summary><strong>Click to View Popular Profiles</strong></summary>

#### Unregistered
<img src="documentation/features/popularprofiles/unregistered.png" alt="Features" style="width: 250px; height: auto;">


#### Registered
<img src="documentation/features/popularprofiles/registered.png" alt="Features" style="width: 250px; height: auto;">

</details>

### Search Bar

The search bar, available on both the event and post list pages, allows users to filter content based on their query, providing a more streamlined and efficient way to find specific posts or events.

<details>
<summary><strong>Click to View Search Bar</strong></summary>

<img src="documentation/features/searchbar.png" alt="Features" style="width: 400px; height: auto;">

</details>


### Events Page

The Events Page serves a similar function to the home/post page but is focused on displaying upcoming events. It features a list of events, allowing users to view details and join or interact with them. Just like the home page, it includes a search bar for filtering events based on user input, making it easier to discover relevant activities.

<details>
<summary><strong>Click to View Events Page</strong></summary>

<img src="documentation/features/eventspage.png" alt="Features" style="width: 800px; height: auto;">

</details>

### Events Detail Page

The Event Detail page offers a comprehensive view of the event, with options for the owner to edit or delete the post through a dropdown menu.


<details>
<summary><strong>Click to View Event Detail Page</strong></summary>

<img src="documentation/features/event-detail.png" alt="Features" style="width: 800px; height: auto;">

</details>

### Post Detail Page

The Post Detail page offers a comprehensive view of the post, with options for the owner to edit or delete the post through a dropdown menu, and a comment section for user engagement.

<details>
<summary><strong>Click to View Pose Details Page</strong></summary>

<img src="documentation/features/postdetail/postdetail.png" alt="Features" style="width: 800px; height: auto;">

#### Comment section

<img src="documentation/features/postdetail/comment.png" alt="Features" style="width: 400px; height: auto;">

</details>

### **User Specific Features**

### My profile

The My Profile page displays detailed information about the user, including their personal data and counts for created posts, created events, followers, and followings. It features interactive buttons for easily toggling between the user’s posts and events. 

<details>
<summary><strong>Click to View My Profile Page</strong></summary>

<img src="documentation/features/myprofile/profilepage.png" alt="Features" style="width: 800px; height: auto;">

No events message

<img src="documentation/features/myprofile/noevents.png" alt="Features" style="width: 400px; height: auto;">


Profile Info Dropdown 

<img src="documentation/features/myprofile/dropdown.png" alt="Features" style="width: 400px; height: auto;">

Profile Info Edit Page 

<img src="documentation/features/myprofile/editinfo.png" alt="Features" style="width: 600px; height: auto;">


</details>


### My Feed & My Likes

**My Feed** shows posts from users the user follows.

**My Likes** shows posts likes by the user.

<details>
<summary><strong>Click to View User-specific Post Pages</strong></summary>
<br>

**My Feed**

<img src="documentation/features/myfeed.png" alt="Features" style="width: 400px; height: auto;">

**My Likes**

<img src="documentation/features/mylikes.png" alt="Features" style="width: 400px; height: auto;">

</details>

### Notifications

Displays activity notifications, such as likes, comments on your posts, attendance marks on your events, and new followers.
Each notification links directly to the relevant user, post, or event for easy access and interaction.

<details>
<summary><strong>Click to View Notifications Page</strong></summary>

<img src="documentation/features/notifications/notificationspage.png" alt="Features" style="width: 800px; height: auto;">

#### Notifications (Navbar Alert)

The navbar includes a notification alert that displays the count of new notifications.
Once the Notifications page is opened, all notifications are marked as read, and the alert count disappears, ensuring a clean and updated user experience.

<img src="documentation/features/notifications/alert.png" alt="Features" style="width: 400px; height: auto;">

</details>

### Add & Edit Content

This feature includes forms for adding new posts and events. The edit form is identical to the add form, but prefilled with the existing model data, allowing users to modify content easily.

<details>
<summary><strong>Click to view Content Pages</strong></summary>

<img src="documentation/features/contentpages/createpost.png" alt="Features" style="width: 500px; height: auto;">

<img src="documentation/features/contentpages/editpost.png" alt="Features" style="width: 500px; height: auto;">

<img src="documentation/features/contentpages/createevent.png" alt="Features" style="width: 500px; height: auto;">

<img src="documentation/features/contentpages/editevent.png" alt="Features" style="width: 500px; height: auto;">

</details>

### Interactive Features

The interactive features allow users to engage with content by liking and unliking posts, commenting (with options to edit or delete), marking event attendance as "Interested" or "Attending," and following or unfollowing other users, enhancing the overall user experience and social interaction on the platform.

<details>
<summary><strong>Click to View Interactive Features</strong></summary>

### Post interactive buttons

<img src="documentation/features/interactive/postbuttons.png" alt="Features" style="width: 250px; height: auto;">

#### On hover:

<img src="documentation/features/interactive/hovered.png" alt="Features" style="width: 250px; height: auto;">

#### Liked:

<img src="documentation/features/interactive/liked.png" alt="Features" style="width: 250px; height: auto;">


#### Comment:

<img src="documentation/features/interactive/comment.png" alt="Features" style="width: 250px; height: auto;">

#### Comment Dropdown:

<img src="documentation/features/interactive/edit-deletecomment.png" alt="Features" style="width: 250px; height: auto;">

### Event interactive buttons

The 'attending' button is active in this picture:

<img src="documentation/features/interactive/attending.png" alt="Features" style="width: 250px; height: auto;">

</details>

### Trigger messages
Trigger messages provide helpful prompts to guide user interactions. For example, when an unregistered user attempts to like a post, an overlay message appears on hover, notifying them that they need to sign in to perform this action.

<details>
<summary><strong>Click to View Trigger messages</strong></summary>

<img src="documentation/features/interactive/trigger.png" alt="Features" style="width: 250px; height: auto;">

<img src="documentation/features/interactive/triggerlike.png" alt="Features" style="width: 250px; height: auto;">

<img src="documentation/features/interactive/triggermark.png" alt="Features" style="width: 250px; height: auto;">

</details>


### Authentication pages
The Authentication pages allow users to register and log in securely to access personalized content and features on the platform. The Sign Up page facilitates account creation, while the Sign In page ensures secure access for existing users.

<details>
<summary><strong>Click to View Auth Pages</strong></summary>

Sign Up Page

<img src="documentation/features/auth/signup.png" alt="Features" style="width: 600px; height: auto;">

Sign In Page

<img src="documentation/features/auth/signin.png" alt="Features" style="width: 600px; height: auto;">

</details>

### Spinner
A loading spinner appears as the data is being fetched.

<details>
<summary><strong>Click to View Loading Spinner</strong></summary>

<img src="documentation/features/spinner.png" alt="Features" style="width: 600px; height: auto;">

</details>

### Not Found 
When a user enters an invalid URL, a dedicated Not Found page is displayed with a message indicating that the requested page could not be found. 

<details>
<summary><strong>Click to View page</strong></summary>

<img src="documentation/features/notfound.png" alt="Features" style="width: 600px; height: auto;">

</details>

### Input Error Messages
Error messages are displayed whenever invalid input is submitted, ensuring users are informed about issues and can correct their submissions quickly. 

<details>
<summary><strong>Click to View page</strong></summary>

<img src="documentation/features/error1.png" alt="Features" style="width: 600px; height: auto;">

<img src="documentation/features/error2.png" alt="Features" style="width: 600px; height: auto;">

</details>


<br>

# Future Features & Improvements

#### Event Related
- **Event Cleanup**: Automatically remove passed events to keep the calendar up-to-date and relevant.
- **Event Categories Expansion:** Introduce more diverse event categories to cater to a wider range of activities and interests.
- **Event Filtering:** Implement robust filtering options for events by category, ensuring users can easily find events that match their preferences.
- **Ordering by Date:** Allow users to automatically order events based on their proximity to the current date, ensuring that upcoming events are always prioritized and easy to find.
- **Location-based Filtering:** Allow users to filter events by region, such as country or city, making it simpler to find events nearby.
- **Enhanced Location Input**: Refine the event location input to support counties, cities, and detailed addresses, providing greater accuracy and convenience.
- **Event Attendance list**: On the event detail page, display lists of profiles for users who are attending or interested in the event, fostering a sense of community and interaction.
- **Events Date Validation:** Users cannot create events with past dates. This ensures that all events are scheduled for the future.

#### User Experience
- **Auto Image Resizing:** Introduce automatic image resizing for posts and events, ensuring optimal display across all devices without manual adjustments.
- **Footer**: Footer: Add a consistent website footer across all pages, with links to important sections like "Contact" and social media profiles, ensuring users have quick access to essential information.
- **View Password:** Users can now see their password when entering it (useful for verifying their input).
- **Profile Deletion:** Users have the option to delete their profile from the platform, removing all their data and associated records.

#### Notifications and Alerts
- **Unread Notifications Indicator:** Visually distinguish between read and unread notifications for a more intuitive user experience.
- **Event Alerts:** Implement alerts for critical actions such as signing in/out or deleting content, ensuring users are notified of important changes.

# Technologies used

### Frontend

### Frontend

- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5): Defines the structure and content of web pages with modern multimedia and accessibility features.
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS): Handles layout, styling, and animations for responsive and visually appealing designs.
- [**JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript): Adds interactivity and dynamic behavior to the application.
- [**React**](https://reactjs.org/): Builds efficient user interfaces with component-based architecture and virtual DOM.
- [**React Bootstrap**](https://react-bootstrap.github.io/): Integrates Bootstrap components with React for consistent and responsive designs.
- [**React Router**](https://reactrouter.com/): Enables navigation and routing for single-page applications.
- [**Axios**](https://axios-http.com/): Handles HTTP requests for seamless communication with the backend.

### Backend

- [**Django**](https://www.djangoproject.com/): A robust Python framework for backend development with built-in authentication, database management, and security.
- [**Django REST Framework (DRF)**](https://www.django-rest-framework.org/): Simplifies building RESTful APIs with features like serializers and viewsets.
- [**Python**](https://www.python.org/): Powers backend logic with simplicity and versatility.
- [**SQLite**](https://www.sqlite.org/index.html) / **PostgreSQL**: Lightweight database for development and scalable production-ready database.

### Deployment and Version Control
- [**Git**](https://git-scm.com/): A distributed version control system that tracks changes and collaborates across multiple developers.
- [**GitHub**](https://github.com/): A platform for hosting Git repositories, enabling version control, collaboration, and code management.
- [**Heroku**](https://www.heroku.com/): Cloud platform for easy deployment, scaling, and management of applications.
- [**Cloudinary**](https://cloudinary.com/): Provides cloud-based image and video management, including upload, storage, and optimization.

### Development Tools
- [**GitPod**](https://www.gitpod.io/): A cloud-based IDE that offers an environment pre-configured for your project.
- [**Django Extensions**](https://github.com/django-extensions/django-extensions): Extends Django’s functionalities with custom management commands and utilities.
- [**Django AllAuth**](https://django-allauth.readthedocs.io/en/latest/): Simplifies user authentication, including third-party social accounts.
- [**Balsamiq**](https://balsamiq.com/wireframes/): A wireframing tool for quickly creating mockups and UI designs.
- [**dbdiagram**](https://dbdiagram.io/home): A tool for designing and visualizing database schema and ERD.

### Security
- **Django AllAuth**: Manages user registration, authentication, and third-party logins securely.
- **Data Encryption**: Ensures user data and sensitive information are encrypted at rest and in transit.
- **CSRF Tokens**: Safeguards forms against Cross-Site Request Forgery by validating the origin of requests.

### Validation Tools

- [JS validation](https://jshint.com/): For Validating JavaScript code.
- [W3C CSS Validation Service](https://validator.w3.org/): For validating CSS code.
- [HTML W3C Markup Validator](https://validator.w3.org/): For validating HTML code.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview): For website accessibility testing.

### Others
- [**React Infinite Scroll Component**](https://github.com/ankeetmaini/react-infinite-scroll-component): Implements infinite scrolling for large datasets to enhance user experience.
- **Custom Hooks**: Provides reusable hooks like `useRedirect` to handle app-specific logic.
- [**Font Awesome**](https://fontawesome.com/): A library of scalable icons for enhancing the user interface.
- [**Favicon generator**](https://www.favicon-generator.org/to): Generates different sizes of favicons.
- [**Adobe lightroom**](https://lightroom.adobe.com/): A tool used for compressing images and reducing file sizes without losing quality.
- [**Imageresizer**](https://imageresizer.com/): Website and tool for compressing image size.
- [**logo**](https://logo.com/): Website for creating your own logo



# Testing & Validation
Comprehensive testing has been conducted on both the backend API and the frontend application. For detailed information on the testing procedures and results, please refer to the following:

### Frontend Testing
Frontend testing details can be found in the [TESTING.md](TESTING.md) file in the frontend repository.

### Backend API Testing
The backend API testing is documented in the chronicle-api [TESTING.md](https://github.com/Ahmadk-g/chronicle-api/blob/main/TESTING.md) file. 

# Deployment 

The "Chronicle" project uses various platforms and services for deployment and management.

For hosting and running the application, **Heroku** is utilized. Heroku is a cloud platform that makes deployment seamless, offering auto-scaling and monitoring tools to ensure smooth operation. The **Code Institute (CI)** provides PostgreSQL for database hosting during the development and deployment phases.

Additionally, **Cloudinary** is used to handle images and media, offering an efficient solution for storing, optimizing, and serving media assets for the "Chronicle" platform.

## **Github**
**Repository Setup**: [GitHub](https://github.com) serves as the version control system, hosting the project codebase and facilitating collaboration.  

## Gitpod
**Development Environment**: [Gitpod](https://www.gitpod.io/) provides a cloud-based IDE, offering a pre-configured workspace to streamline development.  

### **CI Database** (PostgreSQL): 
The Code Institute provides PostgreSQL-based database systems for students, offering reliable data storage and management during development and deployment. The database offers a stable environment for students to develop and manage real-world applications.


### **Cloudinary**:
To improve performance and scalability, the project uses [Cloudinary](https://cloudinary.com/) for hosting media files like images. This offloads the task of serving static content from Heroku, optimizing both storage and delivery. 
  

## Heroku

**Application Hosting**: [Heroku](https://www.heroku.com) hosts and runs the application with easy deployment, automatic scaling, and management tools for monitoring.  
  

__Steps for deploying with Heroku__:

1. **Log into Heroku**: Navigate to the Heroku website and log into your account to access the dashboard.
2. **Create a New App**:
  - Click the "New" button in the top-right corner and select "Create New App" from the dropdown menu.
  - Choose a unique name for your app that will be used as part of the URL.
  - Choose the preferred region for your app, either "United States" or "Europe", from the dropdown menu.
  - click the "Create App" button to create the app.
6. **Connect to GitHub**:
  - In the app’s dashboard, go to the "Deploy" tab, scroll down to "Deployment Method", and select "GitHub" as the source.
  - Connect your GitHub repository with Heroku.
7. **Go to Settings**: Navigate to the "Settings" tab in the top menu.
8. **Set Up Environment Variables**: Under the "Config Vars" section, click the "Reveal Config Vars" button and add the following keys and values:
- `SECRET_KEY`: The secret key for your Django project.
- `DATABASE_URL`: The URL for your database (e.g., Heroku Postgres).
- `CLOUDINARY_URL`: The URL for your Cloudinary account (for media storage).
9. **Enable Automatic Deploys**: In the "Deploy" section, enable automatic deploys from your GitHub repository. This will allow Heroku to automatically update your app whenever new changes are pushed to the repository.
10. **Manual Deployment**: In case of manual deployment, choose the specific `branch` (e.g., main) of your GitHub repository that you want to deploy. Afterwards, click on the`Deploy Branch* button,

You can see how HEROKU build your version of the website by looks on `building logs` in the activity menu item.

Once the deployment is successful, Heroku will provide a URL to access your application. Click on "Open App" in the Heroku dashboard to view your live site.


**For deployment, Heroku needs two additional files in order to deploy properly.**
- **requirements.txt**:
    - You can update the requirements file after installing more packages with the command:
    ```bash
    pip3 freeze --local > requirements.txt
    ```
    - You can install this project'S requirements using:
    ```bash
    pip3 install -r requirements.txt
    ```

- **Procfile**, which can be created with the following steps:
    1. echo web: gunicorn app_name.wsgi > Procfile
    2. replace app_name with the name of your primary Django app name; the folder where settings.py is located


# Cloning and Forking

## Cloning the Repository

To set up a local copy of the "**Chronicle**" project, follow these steps:

#### 1. Clone the Repository:
   Clone from [Chronicle GitHub Repository](https://github.com/Ahmadk-g/chronicle).
   ```bash
   git clone https://github.com/Ahmadk-g/chronicle
   ```

### 2. Navigate to the project directory:
    ```bash
    cd chronicle
    ```

### 3. Install dependencies:
    ```bash
    npm install
    ```

### 3. Start development server :
    ```bash
    npm start
    ```


The app will be available at http://localhost:3000.


## Forking the Repository

To contribute or create your own version of the **Chronicle** project, follow these steps:

1. **Fork the repository**
Go to the [Chronicle GitHub repository](https://github.com/Ahmadk-g/chronicle) and click on the **Fork** button in the top-right corner of the page. This will create a copy of the repository under your own GitHub account.

2. **Clone your forked repository**
  Once the repository is forked, clone it to your local machine using the following command:

  ```bash
  git clone https://github.com/YOUR_USERNAME/chronicle.git
  ```

  Replace YOUR_USERNAME with your GitHub username.

3. **Navigate to project directory**
  ```bash
  cd chronicle
  ```

4. **Install Dependencies**
  ```bash
  npm install
  ```

5. **Start the development server**
  ```bash
  npm start
  ```

  This will start the React app on your local machine, typically available at http://localhost:3000.

6. **Make changes and commit them**
7. **Push your changes**
8. **Create a pull request**

# Credits

## code

During the development of the Chronicle API application, several valuable resources were used for inspiration and knowledge:

**The Chronicle API project draws inspiration from the following sources:**
  - **Code Institute's "Django Rest Framework" Walkthrough Project:**
  This resource provided a crucial foundation for building the API. It helped me understand the principles of building a RESTful API using Django Rest Framework (DRF), including serialization, authentication, and endpoints. The walkthrough was key in setting up the core structure of the API and understanding best practices for backend development.
  It provided the essential features such as user profiles, posts, comments, likes, and followers. 

  - **Code Institute's "Moments" Walkthrough Project:** While this was primarily used as a reference for the front-end, the concepts and structure from Moments also inspired some of the API endpoints and how data is managed and structured for the Chronicle API.
---


**React**

- [Using CSS Modules](https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87)
- [React Functional Components VS Class Components](https://articles.wesionary.team/react-functional-components-vs-class-components-86a2d2821a22)
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/getting-started/introduction/)

- [DEV Community](https://dev.to/vivek_44751fc408644cbd80b/how-to-use-the-tag-with-multiple-values-using-the-map-method-in-reactjs-59df)

**Django REST framework**

- [Django REST framework](https://www.django-rest-framework.org/)

**Code Institute Template**

- [Code Institute Template](https://github.com/Code-Institute-Org/ci-full-template)
- [Setting up basic Django Project with Cloudinary](https://docs.google.com/document/d/1LCLxWhmW_4VTE4GXsnHgmPUwSPKNT4KyMxSH8agbVqU/edit#heading=h.mpopj7v69qqn)

<br>

## media

Media elemets for the site were gathered, managed, or edited through these platforms:

- [**Favicon-generator**:](https://www.favicon-generator.org/to) Used to create various sizes of the favicon for compatibility across different devices and platforms.
- [**Font Awesome:**](https://fontawesome.com/) Provided the icons used throughout the website.
- [**Balsamiq**:](https://balsamiq.com/wireframes/) To design site's wireframe.
- [**dbdiagram**:](https://dbdiagram.io/d) to design site's database schema (ERD).
- [am i responsive:](https://ui.dev/amiresponsive) was used to get a responsive image for README.
- [**Favicon generator**](https://www.favicon-generator.org/to): Generates different sizes of favicons.
- [**logo**](https://logo.com/): Website for creating your own logo
- [**Pexels**](https://www.pexels.com/discover/): Sourced all content pictures.


## Readme and Testing Inpiration

- [Readme and Testing by Swathi Keshavamurthy](https://github.com/SwathiKeshavamurthy/fitandfine-react-p5)
- [Readme and Testing by Amir Shkolnik](https://github.com/AmirShkolnik/DivingCenter)
- [Readme and Testing by AlAliMazen](https://github.com/AlAliMazen/tech-roadmap/)

## Acknowlegements

The development of the Chronicle project has been an enriching experience, and I am sincerely grateful for the guidance, resources, and encouragement that have been essential in bringing this project to fruition.

- Juliia Konovalova, my Code Institute mentor, whose insightful guidance and unwavering support helped me overcome numerous challenges.

- Kristyna, our facilitator at Code Institute, whose positivity and constant encouragement made all the difference during the more difficult moments.

- To my classmates, for their camaraderie and inspiration, and for offering help whenever things seemed daunting. Your support was invaluable.

- Most importantly, my partner Siba, for always being there for me throughout this entire course. Your unwavering support and encouragement made this journey much smoother.

Thank you to everyone who contributed to this journey, whether through direct assistance or by simply providing motivation.