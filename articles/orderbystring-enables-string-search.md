---
layout: pages
permalink: /2015/01/orderbystring-enables-string-search.html
title: OrderByString enables string search parameters in LINQ OrderBy clauses
tags:
 - software
---
Here is something new to play with. &nbsp;I just released a package that adds commands for OrderBy that take strings for property name and direction.<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="//1.bp.blogspot.com/-1Pc3hjbN_zE/VMzf1wSKVrI/AAAAAAAAmO8/UQpYUBBcdRE/s1600/InstagramCapture_7cf04b3e-5656-48dd-ab21-572180662bff.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" src="//1.bp.blogspot.com/-1Pc3hjbN_zE/VMzf1wSKVrI/AAAAAAAAmO8/UQpYUBBcdRE/s1600/InstagramCapture_7cf04b3e-5656-48dd-ab21-572180662bff.jpg" height="200" width="200" /></a><a href="//1.bp.blogspot.com/-1Pc3hjbN_zE/VMzf1wSKVrI/AAAAAAAAmO8/UQpYUBBcdRE/s1600/InstagramCapture_7cf04b3e-5656-48dd-ab21-572180662bff.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><br /></a></div>
Usage is very flexible. &nbsp;Here are some of the different ways to use the new commands:<br />
<br />
&nbsp;.OrderBy("Property").ThenBy("OtherProperty");<br />
&nbsp;.OrderBy("Property desc").ThenBy("OtherProperty desc");<br />
&nbsp;.OrderByDescending("Property")<br />
&nbsp; &nbsp; &nbsp; &nbsp;.ThenByDescending("OtherProperty");<br />
&nbsp;.OrderBy("Property desc, OtherProperty asc");<br />
&nbsp;.OrderBy("Property, OtherProperty desc");<br />
<br />
Since these commands parse the strings and then call the standard IQueryable/IEnumerable commands for OrderBy and ThenBy, these commands will still work with your EntityFramework queries or any other LINQ queries.<br />
<br />
<br />
<br />
Get or review the source at&nbsp;<a href="https://github.com/Grax32/OrderByString" rel="nofollow" style="border: 0px; color: #0c65a5; cursor: pointer; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 19.5px; margin: 0px; padding: 0px; text-decoration: none;">https://github.com/Grax32/OrderByString</a><br/>
<br/>
Install the NuGet package from&nbsp;<a href="https://www.nuget.org/packages/OrderByString/" rel="nofollow" style="border: 0px; color: #0c65a5; cursor: pointer; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 19.5px; margin: 0px; padding: 0px; text-decoration: none;">https://www.nuget.org/packages/OrderByString/</a><br />
