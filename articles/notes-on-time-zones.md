---
layout: pages
permalink: /2014/05/notes-on-time-zones.html
title: Notes on Time Zones
---
<b>TLDR Version</b><br />
<i>In your persistence medium, database or otherwise, convert all times to UTC before storing them, store all times as UTC, and convert on-the-fly to the user's local time zone when displaying. &nbsp;In order to convert accurately, use the location style time zones such as "America/Chicago" or "Australia/Sydney".</i><br />
<br />
As a developer, time is hugely important. &nbsp;If your users span more than one time zone and you display times to them, you have to determine how to handle the fact that 5:00 PM for one user is 6:00 PM for another user.<br />
<br />
This could be as simple as stating on-screen that all times are displayed in Central Time or whatever. &nbsp;Not very complicated coding-wise and it might work for you but it gets very confusing for any user not in your target time zone.<br />
<br />
Once you are ready to start support the displaying of local times in your application, you have to understand what local times are and how to compute them. &nbsp;It is also recommended that you store all times as UTC. <br />
<br />
<b>Coordinated&nbsp;Universal Time</b><br />
Formerly known as Greenwich Mean Time, Coordinated&nbsp;Universal Time or UTC is the standard for time world-wide. &nbsp;Also sometimes referred to as Zulu time, this is the time that all other timezones refer to. &nbsp;For example, Central Standard Time in North America is UTC time minus 6 hours.<br />
<br />
<b>What is a time zone?</b><br />
You have probably have seen time written as "3/3/2003 3:45 PM CST". &nbsp;This is probably a fine notation for your area but doesn't mean a lot for defining a unique time world-wide. &nbsp;The abbreviation "CST" denotes Central Standard Time for North America, Central Standard time for Australia, China Standard Time, or Cuba Standard Time. <br />
<br />
In addition, to accurately determine the time for an area, we need to know the offset(s) from UTC time and if and when the area switches to and from daylight savings time.<br />
<br />
In the 80s, Arthur David Olson created a database to track the time zone offsets, daylight savings time changes, etc and cover both the current and historical state for those changeovers. &nbsp;This database is sometimes known as the Olson database and the format for specifying times "America/Chicago" or "Australica/Sydney" is known as the Olson Time Zone.<br />
<br />
To use US Central Time for the example, CST refers to Central Standard Time and is defined as UTC minus 6 hours, CDT refers to Central Daylight Time and is defined as UTC minus 5 hours. &nbsp;In the winter, we use CST and on the second Sunday in March, we switch to CDT and use it over the summer. &nbsp;On the first Sunday in November, we switch our clocks back. &nbsp;On the list of Olson time zones, this collection of information is called "America/Chicago" meaning we share the same time zone rules as Chicago, Illinois, United States.<br />
<br />
America/Chicago<br />
Summer: Central Daylight Time (UTC - 5)<br />
Winter: Central Standard Time (UTC - 6)<br />
Spring Switch: Second Sunday in March<br />
Fall Switch: First Sunday in November<br />
<br />
Now we finally have enough information to compute the conversion from local time to UTC and back. &nbsp;If we know that a user is in the zone "America/Chicago" we can take the times that they input into time fields and convert to UTC prior to storage. &nbsp;Suppose that is a meeting time that applies to 10 of your users across 10 different time zones. &nbsp;Each of them will see the meeting time in their local time zone because you will convert the time you show them from UTC to their local time when you display it to them or send them email messages.<br />
<br />
Whatever language you work in, I recommend looking into the tzdb to see if it is available to you.<br />
For C#, I recommend starting by looking into the <a href="https://github.com/appease/TimeZoneDb">tzdb project</a>.<br />
