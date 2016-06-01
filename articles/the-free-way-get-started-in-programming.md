---
layout: pages
permalink: /2014/04/the-free-way-get-started-in-programming.html
title: The Free Way To Get Started In Programming 
tags:
 - coding
---
<h3>
Introduction</h3>
At our recent Code Camp, our keynote speaker was <a href="http://www.irisclasson.com/">Iris Classon</a>. &nbsp;She told us the inspiring tale of her journey into software development. &nbsp;Several of her stories struck a chord with me and reminded me of some of my own experiences. &nbsp;One part that stood out in particular was how she responded when she got her first exposure to computers and computer programming and how she really took to it and things just made sense.<br />
<br />
In my case, I was a little third-grader exposed to a Commodore Vic-20 for the first time when someone donated one to my school. &nbsp;The Vic-20 came with a manual that detailed Commodore Basic and that was all I needed to get started programming.<br />
<br />
I am of the opinion that there are a number of people out there with an aptitude for programming that do not realize it because they have never had the chance. &nbsp;As I was thinking about this, it occurred to me that Microsoft is giving away everything you need to program (Visual Studio Express 2013 for Web) and host (free Azure web site) an ASP.NET web site. &nbsp;You do need a credit card to set it up, but it is definitely free.<br />
<br />
If you are at all curious about programming, I recommend downloading Visual Studio Express 2013 for Web and getting started.<br />
<h3>
Download, Install Visual Studio Express and Configure VisualStudio.com</h3>
If you are a student, I recommend signing up with&nbsp;<a href="https://www.dreamspark.com/">Microsoft's Dreamspark project</a>&nbsp;and downloading the free Visual Studio 2013 Professional from them, but otherwise, just use free&nbsp;<a href="http://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx">Visual Studio Express 2013 for Web</a><br />
<br />
When you start the download for Visual Studio Express, it will ask you to log in with your live.com account. &nbsp;If you already have one, go ahead and use that, otherwise create a new one.<br />
<br />
If you are under a certain age, I think the age is 13, you need a parent's permission to set up your live.com account. &nbsp;The parent will be charged .50 as age verification. &nbsp;This is the only cost incurred on this entire walk-through.<br />
<br />
<div style="background-color: yellow; border: 1px solid gray; padding: 3px;">
<b>Warning: There is no spending limit on this account once you enter it. &nbsp;As long as you use the free VisualStudio.com features and the free Azure web site feature, you will not be charged.</b><br />
<b>However, there is nothing (other than your desire to not spend a bunch of money) stopping you from making a few clicks and spending a bunch of money on a standard web site, a virtual machine, or any number of Azure services.</b></div>
<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-I-YmPJ8biz8/Uz18FNYUu1I/AAAAAAAAl7U/1tsrY2ftEOE/s1600/downloadVSExpress.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-I-YmPJ8biz8/Uz18FNYUu1I/AAAAAAAAl7U/1tsrY2ftEOE/s1600/downloadVSExpress.png" height="237" width="400" /></a></div>
<br />
<br />
Create your Visual Studio Online account&nbsp;by entering a name for your account on the "few more details" screen. &nbsp;Say that we call our account "something" then the url for your account will be something.visualstudio.com. &nbsp;You will use this later on to tell Azure where to find the code for your web site.<br />
<span class="Apple-tab-span" style="white-space: pre;"> </span><br />
Create a new Visual Studio Online project from the something.visualstudio.com web page.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-LfchsorO98Q/Uz18DVzHKqI/AAAAAAAAl7Q/OmmcdLxAI0A/s1600/createNewProject.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-LfchsorO98Q/Uz18DVzHKqI/AAAAAAAAl7Q/OmmcdLxAI0A/s1600/createNewProject.png" height="185" width="400" /></a></div>
<br />
<br />
Complete the install of Visual Studio Express but don't open it yet.<br />
<span class="Apple-tab-span" style="white-space: pre;"> </span><br />
Click the "Open with Visual Studio" button on your new project web page. &nbsp;This will open Visual Studio Express with a connection to your Visual Studio Online project.<br />
<br />
Signing in to Visual Studio Express with your Live account is optional, but it will save your settings so that you can customize your Visual Studio environment and share the customizations between more than one computer.<br />
<br />
In Visual Studio Express, click the File menu and select "New Project."<br />
<br />
From the templates menu, pick "Templates\Visual C#\Web" and click on "ASP.NET Web Application."<br />
<br />
Give it a name, I usually just call mine "WebSite"<br />
Solution: "Create new solution"<br />
Solution Name: Pick something<br />
Make sure that "Create directory for solution" and "Add to source control" are checked.<br />
<br />
A popup will appear allowing you to customize your project. &nbsp;Pick "MVC" if you are not sure what to pick.<br />
<br />
Click OK<br />
<br />
A popup will appear asking you to choose source control. &nbsp;Select "Team Foundation Server" and click "OK" to accept the defaults on the next screen.<br />
<br />
Find the Solution Explorer window on the right side of your screen. &nbsp;Press CTRL-ALT-L if you don't see it right away.<br />
<br />
Right-click on the Solution and select "Check in"<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-UsoNJOc5JGw/Uz2CNKuDpBI/AAAAAAAAl8Y/gqPH6IbZA30/s1600/vs-solution-view.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-UsoNJOc5JGw/Uz2CNKuDpBI/AAAAAAAAl8Y/gqPH6IbZA30/s1600/vs-solution-view.png" height="308" width="320" /></a></div>
<br />
On the check-in screen, enter a comment and click "Check in"<br />
<br />
<h3>
Configure Azure Free Web Site</h3>
Now go to <a href="https://manage.windowsazure.com/">https://manage.windowsazure.com/</a> and log in with your live account<br />
Click on "Sign Up for Windows Azure" on the screen that says it cannot find subscription<br />
Enter phone number and Click Send text message to verify you are you.<br />
<br />
Enter the code you receive and click Verify Code. &nbsp;It is easy to overlook this step.<br />
<br />
Enter credit card information and press "Purchase". &nbsp;Trust me, you haven't spent any money yet (except you are underage and your parent spent .50 proving it).<br />
<br />
At this point, you see a page listing your subscriptions. &nbsp;It shows only "Free Trial". &nbsp;You can use this subscription to test and experiment with all kinds of Azure services for 30 days.<br />
<br />
However, we want to set up a free web site, not a trial web site. &nbsp;Click "Add Subscription" and select "Pay-As-You-Go", review your payment information and click "Purchase" (I know, you have clicked "Purchase" twice now for something I have been telling is free. &nbsp;Trust me. &nbsp;It is actually free.)<br />
<br />
Now you should see 2 Subscriptions. &nbsp;"Free Trial" and "Pay-As-You-Go"<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-VGnlF-f8Ras/Uz2AU3qrpnI/AAAAAAAAl7o/tHtCCoSDPzw/s1600/subscriptionsPage.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-VGnlF-f8Ras/Uz2AU3qrpnI/AAAAAAAAl7o/tHtCCoSDPzw/s1600/subscriptionsPage.png" height="213" width="400" /></a></div>
<br />
Click "Portal" to set up your free web site.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-gJQHZcvYH5I/Uz2AEz6qacI/AAAAAAAAl7g/8iZasgTGjiw/s1600/azure-main.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-gJQHZcvYH5I/Uz2AEz6qacI/AAAAAAAAl7g/8iZasgTGjiw/s1600/azure-main.png" height="250" width="400" /></a></div>
<br />
<br />
Take the little tour if you wish, but then click "New" from the bottom left of the main page.<br />
<br />
Select "COMPUTE", "WEB SITE", and "CUSTOM CREATE" to create your web site.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-Lv_ku5IXSu8/Uz2BIYrmEeI/AAAAAAAAl70/AbVAHXg_8KQ/s1600/newWebSite.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-Lv_ku5IXSu8/Uz2BIYrmEeI/AAAAAAAAl70/AbVAHXg_8KQ/s1600/newWebSite.png" height="92" width="320" /></a></div>
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-3SCjXB3f8j0/Uz2BX1jvoII/AAAAAAAAl78/WWkyXW8OeO8/s1600/azure-custom-create.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-3SCjXB3f8j0/Uz2BX1jvoII/AAAAAAAAl78/WWkyXW8OeO8/s1600/azure-custom-create.png" height="228" width="320" /></a></div>
<br />
<br />
Enter the URL. &nbsp;something.azurewebsites.net &nbsp;Since this is a free web site, you will not be able to set the domain name to anything that azurewebsites.net, even if you own your own domain.<br />
<br />
Leave "Web Hosting Plan" set to "Create new web hosting plan"<br />
<br />
Select a reasonable region for you current location. &nbsp;I picked "East US" for mine.<br />
<br />
Select "Pay-As-You-Go" as your Subscription.<br />
<br />
Select your Database choice, if you know what you want, otherwise select "No Database"<br />
<br />
Check the box "Publish from source control"<br />
<br />
Click the Check Mark to create<br />
<br />
"Where is your source code?"<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-cgcLn6nQpM0/Uz2Bnt16L8I/AAAAAAAAl8E/EIEjZzaF4HY/s1600/azure-where-is-your-source.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-cgcLn6nQpM0/Uz2Bnt16L8I/AAAAAAAAl8E/EIEjZzaF4HY/s1600/azure-where-is-your-source.png" height="263" width="400" /></a></div>
<br />
<br />
Click "Visual Studio Online"<br />
<br />
Enter the name of you Visual Studio Online account and click "Authorize Now"<br />
<br />
A screen will pop up, it may or may not ask you to log in with your live account and then you will get a "CONNECTION REQUEST" telling you that "MANAGE-PROD WEBSITES from Windows Azure" wants access to your project.<br />
<br />
Click "Accept"<br />
<br />
A screen will pop up asking you to select a repository. &nbsp;Select the one you set up earlier and click the check mark.<br />
<br />
The build and deploy process will kick off automatically and will probably take about 3 to 5 minutes. &nbsp;Once that is complete, your web site is set up. &nbsp;You should see the default pages from your MVC web site when you visit the address of your site from your browser. &nbsp;Any time you make changes to your web site, go through the check-in process and it will automatically be deployed to your web site.<br />
<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-Bg4BQwdZl-A/Uz2CDwWN6UI/AAAAAAAAl8Q/i7byBfMfzzA/s1600/default-page.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-Bg4BQwdZl-A/Uz2CDwWN6UI/AAAAAAAAl8Q/i7byBfMfzzA/s1600/default-page.png" height="232" width="400" /></a></div>
<br />
<br />
You now have Visual Studio Express 2013 for Web installed on your machine, your source code is safely housed at your VisualStudio.com site (you can add up to four additional users to your project), and your code is automatically built and deployed to your Azure web site whenever you check in. &nbsp;You are practically a professional developer already, all you need now is to learn to program.<br />
<br />
Double-click on files to open and edit. &nbsp;Press the green triangle/play button to show the web page output in the selected browser. &nbsp;Right-click the Solution and select Check-in when your changes are ready for the world to see.<br />
<br />
If you get stuck, search Google.com, Stackoverflow.com, etc or post a question here in the comments.<br />
<br />
Good luck and get programming!<br />
