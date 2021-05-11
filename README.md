# The Penny Jar

The Penny Jar is an anonymous donation and request site.  This was created due to the aftermath of the COVID-19 pandemic.  I had some friends and former co-workers that were laid off due to no fault of their own.  I wanted to help each of them by giving them a gift card for Christmas presents, but they would not accept it as they knew the gift was coming from me.  I also had some friends and family that wanted to do the same for others, but didn't know how to help.  The Penny Jar was created as a bridge between these two groups of people.  

The name was inspired by the Give A Penny, Take A Penny containers that are near registers in convenience stores and diners.  In those cases, strangers would donate a few pennies at a time to another stranger to assist with the changes on their bill.  

## Links

### Client
Heroku: https://thepennyjarclient.herokuapp.com/

GitHub: https://github.com/meneyer/thePennyJar__Client.git

### Server
Heroku: https://pennyjarserver.herokuapp.com/

GitHub: https://github.com/meneyer/ThePennyJar__Server.git

## About the Project

For this project, we were required to use React with TypeScript and Class Components.  We were also required to include user roles, including an admin role.  The Penny Jar has 3 roles, the recipient, the donor, and an admin.  The recipient would add a request (max of $150 in a gift card or Amazon link up to two times a month).  The donor would choose a request or donate to the Need A Penny Fund or Operations Fund through a Stripe integration.  The admin would update the recipient's request to filled after a donor chose that item, the would then fill and/or ship any items to the recipients.  The admins would also take care of any type of operational needs.  To keep anonymity, the admins are the only people that are able to access the User Profiles with the recipients and donor's address, e-mails, etc.

We were also tasked with using a different styling library.  This project is made primarily with Ant Design.  The color palette was inspired by the color of loose change.  The primary color is the copper/gold of the penny itself.  The secondary color is the silver of a quarter/nickel/dime.  These two colors were then complimented by a dark midnight blue and white.
