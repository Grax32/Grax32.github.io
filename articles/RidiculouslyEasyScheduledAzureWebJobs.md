---
layout: default
---
If you are hosting on Azure, you might have been introduced to WebJobs.  WebJobs are great for performing background or batch tasks.

When you do a deployment of an Azure WebJob, the job will end up in your root-level site's App_Data/jobs folder. 

I use (and love) the staging and production slots for deployment.  This means that I deploy to the staging slot, perform a smoke test, and then swaps the staging and production slots.  If I had a job that I had deployed to the production slot, it would now be in the staging slot.  While I could always make sure that I added my WebJobs to my staging site before swapping slots, I find it easier to add the jobs as source files in my web project.

Please note that if your site is not set to "Always On" (requires at least a Standard web app account), then your scheduled tasks will stop running when your Web App is unloaded.

> "I find it easier to add the jobs as source files in my web project."

Create the "Apps_Data/jobs/triggered" folder in your web project.  This folder will contain a folder for each of the WebJobs that can be triggered.

I am calling our sample WebJob "MyEasyJob" and so I have created a folder with the path "/App_Data/jobs/triggered/MyEasyJob"

We are going to use curl.exe to request a URL on a scheduled basis, so download curl.exe and add it to the MyEasyJob folder.  Go to [http://www.confusedbycode.com/curl/](http://www.confusedbycode.com/curl/) and download the latest "Files Only" zip file.  Extract the curl.exe from the zip file and add it to your MyEasyJob folder.

Add a script file called run.cmd.  The WebJobs system uses conventions to determine what file to execute and by calling it "run" with the appropriate extensions, the WebJobs system prefers that file to other executables in the folder.

Add the following to run.cmd to fetch the requested page whenever this script is executed.

```
curl --fail --silent http://%WEBSITE_HOSTNAME%/Tasks/SendDailyNotifications
```

Add a text file called settings.job.  This file can contain job-related settings, including the schedule which is our main concern in this article.

```
{
 "schedule": "0 * * * * *"
 //{second} {minute} {hour} {day} {month} {day of the week}
}
```

This tells our job to run once per minute (specifically, run on the "0" second of every minute of every hour of every day of every month of every day of the week).

Feel free to customize the time string.  Try "0 0 * * * *" for every minute, "0 0 0 * * *", for every hour, "0 */15 * * * *" for every 15 minutes. 

# Quick side-trip about Cron format

Cron format usually has 5 fields but WebJobs adds a 6th so that you can control the seconds as well.  The formats work the same for each of the fields. 

* means always match

"0" or any number means match exactly

a "/" slash means match when divisible.  

i.e. */15 means match whenever the number is divisible by 15.  This would match 0, 15, 30, and 45, so if this expression is in the minutes position, it would match every quarter hour, if it is in the day position, it would match the 15th and the 30th

a "-" dash indicates a range, so 3-5 would match the Mar, Apr, May if in the month field, or Wed, Thurs, Frid in the day of the week field.

The ranges of the fields are 0-59 for seconds and minutes, 0-23 for hour, 1-31 for day, 1-12 for month, and  0-6 for day of week.

# And back to Easy WebJobs...

You should now have a folder that looks like this:


Each of those 3 files has the "Build Action" set to "Content" and the "Copy to Output Directory" set to "Do not copy".

And ... we're done.  
Now we just need to publish to an Azure instance.

After you publish this web site to the root instance of an Azure web app, visit https://YOURSITE.scm.azurewebsites.net/azurejobs/#/jobs/triggered/MyEasyJob to see that the job is recognized, is running, and to view the results.


The results of a running WebJob
Click on a specific result to see the details of the job run.

Detailed output from a specific run
Note that you can see the command it ran with the environment variable substituted (the red portion is where it put the web site's host name) and the results that the web page returned are on the 2nd to last line.  Our web page returned just "OK" and that result is printed here.

Today we decided to take advantage of Azure's ability to recognize a WebJob that has been added as content to your web site.  We placed 3 files in the appropriate directory, published the web site, and observed that the WebJob had been recognized and was running on a schedule.


For more on WebJobs, see [https://github.com/projectkudu/kudu/wiki/Web-jobs](https://github.com/projectkudu/kudu/wiki/Web-jobs)
