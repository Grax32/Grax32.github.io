Grax Coding: T-SQL ForEach style loop

Here is a simple pattern that I came up with for executing a ForEach style loop in t-sql against a set of data in T-SQL.<br />
<br />
<pre style="background: #EEEEEE;">declare @Enumerator table (id int)

insert into @Enumerator
select UserId
from Users
where IsActive = 1  <span style="color: #38761d;">-- your query to select a list of ids goes here</span>

declare @id int

while exists (select 1 from @Enumerator)
begin
     select top 1 @id = id from @Enumerator<span class="Apple-tab-span" style="white-space: pre;"> </span>

     exec dbo.DoSomething @id
     <span style="color: #38761d;">-- your code to do something for a particular id goes here</span>

     delete from @Enumerator where id = @id
end

</pre>
<br />
First, I declared a table variable that I called&nbsp;@Enumerator. &nbsp;Then, I am inserting a list of UserId into the table variable.<br />
<br />
The loop is set to keep looping as long as there is at least a row of data in&nbsp;@Enumerator. &nbsp;Inside the loop, we first select the next id from&nbsp;@Enumerator. <br />
<br />
Now that we have our id, we perform whatever action necessary against it and then delete if from our&nbsp;@Enumerator table.<br />
<br />
The loop continues until&nbsp;@Enumerator is out of rows and we're done.<br />
<br />
<h3>
Update: What About SQL Server Cursors?</h3>
The same functionality can be accomplished using cursors in TSQL.<br />
<br />
<pre style="background: #EEEEEE;">declare @Enumerator CURSOR

SET @Enumerator = CURSOR LOCAL FAST_FORWARD FOR
select UserId
from Users
where IsActive = 1

OPEN @Enumerator

declare @id int

while (1=1)
begin
 FETCH NEXT FROM @Enumerator into @id
 if (@@FETCH_STATUS &lt;&gt; 0) break
 
 exec dbo.DoSomething @id
end

CLOSE @Enumerator
DEALLOCATE @Enumerator

</pre>
<br />
Here is why I don't like to do it this way.<br />
<br />
<br />
<ol>
<li>Too many ways to screw up the declaration. &nbsp;"<i>If neither GLOBAL or LOCAL is specified, the default is controlled by the setting of the default to local cursor database option</i>" -- <a href="http://msdn.microsoft.com/en-us/library/ms180169.aspx">MSDN</a></li>
<li>"OPEN" statement. &nbsp;Picking nits but I don't want to bother opening it, I just want to use it.</li>
<li>"CLOSE" and "DEALLOCATE". &nbsp;I am under the impression that since this is defined as a local cursor with a local variable, that everything will be closed and cleaned up when procedure or function completes, but not CLOSEing and DEALLOCATEing your cursors is a bad habit to get into, so I would still always specify these 2 commands when using a CURSOR</li>
</ol>
<div>
<br /></div>
<div>
The first solution, based on a table variable, works for me. &nbsp;It is something I can remember and hard for me to screw up.&nbsp;</div>
