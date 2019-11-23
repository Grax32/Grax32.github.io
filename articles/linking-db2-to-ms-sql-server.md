---
layout: pages
permalink: /2013/05/linking-db2-to-ms-sql-server.html
title: Linking db2 to MS Sql Server
tags:
 - coding
---
My current project has a need to read and update DB2 data in addition to MS Sql Server data.  The primary server is Sql Server, DB2 is additional.

Our selected way of doing this is by creating a linked server on Sql Server (2008 R2). &nbsp;As you will see, there are plenty of things I don't know, so if you know fixes or workarounds, I would appreciate a comment.<br />
<br />
<b>Pros:</b><br />
<ul>
<li>All data access via one driver, no messing with the DB2 drivers on the development machines or the web servers&nbsp;</li>
<li>Stored procedures can operate against data in either database or both databases</li>
</ul>
<b></b><br />
<b>Cons:</b><br />
<ul>
<li>Simple configuration mistakes or oversights lead to working but slow queries&nbsp;</li>
<li>Developing queries that are reasonably optimized can be complicated</li>
<li>Even with this configuration, we cannot update both databases within a transaction without installing MSDTC</li>
</ul>
<div>
<div style="text-align: left;">
<a imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img alt="" border="0" height="213" src="https://4.bp.blogspot.com/-oplnjJV3cfg/UYOuFFf-IDI/AAAAAAAAljo/HM0G8getifo/s320/IMG_2623-web.jpg" title="No.  It doesn't really relate to the story.  It is just a photo I took that I am proud of." width="320" /></a></div>
We recently upgraded our DB2 environment from 9.x to 10.0. &nbsp;There are differences between the 2 in a linked server environment. &nbsp;I mention this because my observations below are based on the 10.0 environment and you may not have the same experience if you use a different version or a different driver for the link.</div>
<div>
<br /></div>
<div>
<h3>
Passing the where clause to DB2</h3>
If you do not take care when constructing your queries, the where clause is not even sent to DB2. &nbsp;In that case, the entire remote table is retrieved and then handled locally. &nbsp;I try to avoid joins on DB2 tables and queries that do not send a where clause. &nbsp;If you take care to match data types so that the where clauses are handled correctly and sent to DB2, you get much better performance.</div>
<div>
<h4>
Integer parameters</h4>
</div>
<div>
Queries by integer values are simple. &nbsp;Sql server has no problem sending over a where clause containing greater than, less than, or equals clauses. &nbsp;It seems to handle inline values and parameterized values equally well.<br />
<br />
When I refer to passing values inline, I am referring to a query similar to<br />
<br />
<pre>select * from <span style="color: green;">db2server.CompanyData.MySchema.MyDb2Table</span> where <span style="color: green;">Id</span> = 1</pre>
</div>
<div>
<br />
When I refer to parameterized values, this could be in a stored procedure using a value that was passed in, or it could be done in a query like this one<br />
<br />
<pre>declare <span style="color: green;">@Id</span> int
select <span style="color: green;">@Id</span> = 1

select * from <span style="color: green;">db2server.CompanyData.MySchema.MyDb2Table</span> where <span style="color: green;">Id</span> = <span style="color: green;">@Id</span></pre>
<br />
<h4>
Date/time parameters</h4>
</div>
<div>
Datetime values are interesting. &nbsp;I haven't been able pass inline values across successfully. &nbsp;Parameterized values work great for the "date" type. &nbsp;I haven't been successful at passing values for the Sql Server types "datetime" or "datetime2". &nbsp;We don't need this functionality at the moment as we are just using "date" fields, but it seems like it would probably come up at some point. &nbsp;I have not experimented with the "time" data type.</div>
<div>
<br />
<h4>
Character Values</h4>
Character values (char, varchar, nchar) get more interesting. &nbsp;In order to get Sql Server to attempt to send the where clause with the character values, we have to set "Collation Compatible" to true in "Server Objects/Linked Servers/(link name)/Properties/Server Options." &nbsp;This tells Sql Server to assume that the collations are compatible or at least compatible enough.</div>
<div>
<br />
Parameters work well for passing character values. &nbsp;Specifying the character values inline seems to result in problems matching the character set on the DB2 side.<br />
<br />
In our case, the collation on DB2 is case-sensitive while the Sql Server collation (the default) is case-insensitive. &nbsp;As long as the developers understand this, it isn't hard to account for it. &nbsp;All of our access to the DB2 tables is done via stored procedures. &nbsp;In one case where we would like to a case-insensitive search on DB2, the data is already upper-cased in the database, so all we need to do is convert our parameter to upper-case before sending it.<br />
<br />
<h4>
Synonyms</h4>
We use synonyms to take some of the sting out of moving to different environments. &nbsp;If we were able to name the linked server the same on every environment, we might not need this. &nbsp;We had been stuck editing our stored procedures when we moved from development to QA and then again to move to production. &nbsp;As you can imagine, this would&nbsp;occasionally&nbsp;result in errors or changes being missed.<br />
<br />
We created a stored procedure that would create synonyms for each of the DB2 tables we need to access, based on a passed-in parameter. &nbsp;In our stored procedures we now reference the synonym instead of linked server naming format.<br />
<br />
There is the overview of my Sql Server/DB2 linked server experience. &nbsp;I would love to hear of other experiences or good places to find additional resources.<br />
<br /></div>
