---
layout: pages
permalink: /articles/azure-web-jobs-in-source-code
title: Azure Web Jobs in Source Code
tags: 
 - coding
---
If you are hosting on Azure, you might have been introduced to WebJobs. &nbsp;WebJobs are great for performing background or batch tasks.

When you do a deployment of an Azure WebJob, the job will end up in your root-level site's App_Data/jobs folder. 

I use (and love) the staging and production slots for deployment. &nbsp;This means that I deploy to the staging slot, perform a smoke test, and then swaps the staging and production slots. &nbsp;If I had a job that I had deployed to the production slot, it would now be in the staging slot. &nbsp;While I could always make sure that I added my WebJobs to my staging site before swapping slots, I find it easier to add the jobs as source files in my web project.

Please note that if your site is not set to "Always On" (requires at least a Standard web app account), then your scheduled tasks will stop running when your Web App is unloaded.

<i><span style="font-size: large;">"I find it easier to add the jobs as source files in my web project."</span></i>

<div>
<div>
Create the "Apps_Data/jobs/triggered" folder in your web project. &nbsp;This folder will contain a folder for each of the WebJobs that can be triggered.

I am calling our sample WebJob "MyEasyJob" and so I have created a folder with the path "/App_Data/jobs/triggered/MyEasyJob"

We are going to use curl.exe to request a URL on a scheduled basis, so download curl.exe and add it to the MyEasyJob folder. &nbsp;Go to <a href="http://www.confusedbycode.com/curl/">http://www.confusedbycode.com/curl/</a>&nbsp;and download the latest "Files Only" zip file. &nbsp;Extract the curl.exe from the zip file and add it to your MyEasyJob folder.

Add a script file called run.cmd. &nbsp;The WebJobs system uses conventions to determine what file to execute and by calling it "run" with the appropriate extensions, the WebJobs system prefers that file to other executables in the folder.

Add the following to run.cmd to fetch the requested page whenever this script is executed.

<pre>curl --fail --silent http://%WEBSITE_HOSTNAME%/Tasks/SendDailyNotifications</pre>


Add a text file called settings.job. &nbsp;This file can contain job-related settings, including the schedule which is our main concern in this article.

<pre>{
&nbsp;"schedule": "0 * * * * *"
&nbsp;//{second} {minute} {hour} {day} {month} {day of the week}
}</pre>

This tells our job to run once per minute (specifically, run on the "0" second of every minute of every hour of every day of every month of every day of the week).

Feel free to customize the time string. &nbsp;Try "0 0 * * * *" for every minute, "0 0 0 * * *", for every hour, "0 */15 * * * *" for every 15 minutes. 

<h4>
Quick side-trip about Cron format</h4>
Cron format usually has 5 fields but WebJobs adds a 6th so that you can control the seconds as well. &nbsp;The formats work the same for each of the fields. 
<ul>
<li>* means always match</li>
<li>"0" or any number means match exactly</li>
<li>a "/" slash means match when divisible. &nbsp;i.e. */15 means match whenever the number is divisible by 15. &nbsp;This would match 0, 15, 30, and 45, so if this expression is in the minutes position, it would match every quarter hour, if it is in the day position, it would match the 15th and the 30th</li>
<li>a "-" dash indicates a range, so 3-5 would match the Mar, Apr, May if in the month field, or Wed, Thurs, Frid in the day of the week field.</li>
<li>The ranges of the fields are 0-59 for seconds and minutes, 0-23 for hour, 1-31 for day, 1-12 for month, and &nbsp;0-6 for day of week.</li>
</ul>

And back to Easy WebJobs...

You should now have a folder that looks like this:
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-52YkEsz3t_o/VnVBmbDreMI/AAAAAAAAmU4/358oQXojUcQ/s1600/screenshot.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="307" src="http://1.bp.blogspot.com/-52YkEsz3t_o/VnVBmbDreMI/AAAAAAAAmU4/358oQXojUcQ/s320/screenshot.png" width="320" /></a></div>
<div class="separator" style="clear: both; text-align: center;">
</div>
Each of those 3 files has the "Build Action" set to "Content" and the "Copy to Output Directory" set to "Do not copy".

<h4>And ... we're done.</h4>

Now we just need to publish to an Azure instance.

After you publish this web site to the root instance of an Azure web app, visit&nbsp;https://YOURSITE.scm.azurewebsites.net/azurejobs/#/jobs/triggered/MyEasyJob to see that the job is recognized, is running, and to view the results.

<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://4.bp.blogspot.com/-gVeaVDqggN8/VnVMsoL-R9I/AAAAAAAAmVM/dlf130N0PQQ/s1600/screenshot-webjob-details.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" height="269" src="http://4.bp.blogspot.com/-gVeaVDqggN8/VnVMsoL-R9I/AAAAAAAAmVM/dlf130N0PQQ/s320/screenshot-webjob-details.png" width="320" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">The results of a running WebJob</td></tr>
</tbody></table>
Click on a specific result to see the details of the job run.
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://2.bp.blogspot.com/-3vPoyXWPowQ/VnVNEEy-fCI/AAAAAAAAmVY/g24_Wvu9Kmw/s1600/screenshot-webjob-results.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" height="265" src="http://2.bp.blogspot.com/-3vPoyXWPowQ/VnVNEEy-fCI/AAAAAAAAmVY/g24_Wvu9Kmw/s320/screenshot-webjob-results.png" width="320" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Detailed output from a specific run</td></tr>
</tbody></table>
Note that you can see the command it ran with the environment variable substituted (the red portion is where it put the web site's host name) and the results that the web page returned are on the 2nd to last line. &nbsp;Our web page returned just "OK" and that result is printed here.

Today we decided to take advantage of Azure's ability to recognize a WebJob that has been added as content to your web site. &nbsp;We placed 3 files in the appropriate directory, published the web site, and observed that the WebJob had been recognized and was running on a schedule.

</div>
<div>
For more on WebJobs, see <a href="https://github.com/projectkudu/kudu/wiki/Web-jobs">https://github.com/projectkudu/kudu/wiki/Web-jobs</a></div>
