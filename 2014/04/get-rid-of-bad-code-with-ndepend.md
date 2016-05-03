---
layout: pages
permalink: /2011/11/post.html
title: Get Rid of Bad Code once and for all with nDepend 5
---
<h3>
<b>What is nDepend?</b></h3>
<a href="http://www.ndepend.com/">nDepend</a> is a tool used for analyzing a .NET code base. &nbsp;It can find issues, track metrics, and create reports.<br />
<br />
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://www.ndepend.com/Res/CQLEdition2.PNG" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" src="http://www.ndepend.com/Res/CQLEdition2.PNG" height="362" width="400" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">nDepend version 5</td></tr>
</tbody></table>
<br />
<h3>
What I like</h3>
nDepend comes with a lot of rules for analyzing your code base. &nbsp;It comes with over 150 rules to check your code against industry best practices.<br />
<br />
But I also like that you can easily modify the rules to match your needs. &nbsp; Each rule is a query that you can modify to suit your needs. &nbsp;Perhaps you don't agree with a naming convention or your organization has some specific coding standards. &nbsp;With CQLinq, you can write and enforce your own rules.<br />
<br />
Being able to set a baseline and then monitor trends is a great way to set and reach code-quality goals. &nbsp;If you can express it in a CQLinq query, you can track it. &nbsp;Over time, you can produce graphs to show management how awesome your refactoring project is going.<br />
<br />
I didn't get around to doing this yet, but you can integrate nDepend into your build process. &nbsp;This should allow you to automatically track metrics over time across your team.<br />
<br />
<h3>
What I don't like (and I'm being nitpicky)</h3>
The installation method is different from most other tools I use. &nbsp;You place nDepend placed in a directory, launch the program, and click on a button to associate with the various Visual Studio versions. &nbsp;It isn't hard and never failed to work properly for me. &nbsp;However, I just found it a little unusual compared to other Visual Studio add-ins.<br />
<br />
<h3>
Summary</h3>
nDepend is easy to use and powerful. &nbsp;Within 15 minutes of installing it, I found that someone in my project had written code that incorrectly crossed layers. &nbsp;I love the Abstractness VS Instability chart. &nbsp;(More on that <a href="http://www.hanselman.com/blog/ExitingTheZoneOfPainStaticAnalysisWithNDepend.aspx">here</a> from Scott Hanselman).<br />
<br />
