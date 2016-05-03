---
layout: pages
permalink: /2011/11/post.html
title: Custom LINQ Filter Operators
---
<div class="NoSpacing">
Generics, expressions, and extension methods are amazing
features that open the doors to incredible new features and abilities in C#
(and .NET in general).<br />
<br />
<h4>
Quick Summary</h4>
</div>
<div class="NoSpacing">
Using C# extension methods, we will rewrite commonly used Linq "where" clauses into filter methods that we can re-use in our code. &nbsp;We will turn<br />
"DbSet.Where(v=&gt; v..EffectiveFrom &lt; DateTime.Now &amp;&amp; v.EffectiveTo &gt; DateTime.Now)"<br />
&nbsp;into "DbSet.WhereActive()" and better satisfy the Don't Repeat Yourself (DRY) principle.<br />
<br />
<h4>
Introduction</h4>
Using generics, expressions, and extension methods we can build reusable and testable Linq
filters. &nbsp;In this post, we are going to demonstrate how to create a Linq filter using C# extension methods.</div>
<div class="NoSpacing">
<br /></div>
<div class="NoSpacing">
We will be using the method syntax as opposed to the query syntax as that makes it easier to visualize the queryable as a pipeline that resembles "from -&gt; where -&gt; orderby -&gt; select".<br />
<br />
A simple Linq query consists of those 4 parts; from, where, orderby, and select. The "from" clause
specifies the data source, the "where" clause can optionally limit the results,
the "orderby" clause optionally sorts the results, and the "select"
clause optionally projects the results. &nbsp;Our projection matches the default projection and just outputs the same type of object as DbSet is. &nbsp;Since it matches the default, this clause is optional in this case.</div>
<div class="NoSpacing">
<br />
Our filters are specifically about replacing "where" clauses with our filter methods. &nbsp;There are some interesting things we can do with "orderby" and "select" but we will leave that as a subject for another day.<br />
<br /></div>
<div class="NoSpacing">
In projects, we commonly see certain clauses used
repeatedly.&nbsp; One such clause checks if an
object is active.&nbsp; In several of our
tables, "active" is defined as "the datetime value in the
EffectiveFrom column is less than the current time and the datetime value in
the EffectiveTo column is greater than the current time."&nbsp; Rather than repeating this clause over and
over, we have created an WhereActive() extension method that we can drop into any
query against this object type.</div>
<div class="NoSpacing">
<br />
<h4>
Initial Query</h4>
<div>
Our example DbSet is a collection of "StatusCode" objects and the simple query we are converting to use our filter looks like this</div>
<br />
<pre>DbSet
     .Where(v =&gt; v.EffectiveFrom &lt; DateTime.Now &amp;&amp;
            v.EffectiveTo &gt; DateTime.Now)
     .OrderBy(v =&gt; v.Id)
     .Select(v =&gt; v)
</pre>
<div>
<br /></div>
<h4>
About Extension Methods</h4>
</div>
<div class="NoSpacing">
In order to implement that clause as an extention method, we
first need an extension methods class. &nbsp;(Additional reading on extension methods at <a href="http://www.hanselman.com/blog/HowDoExtensionMethodsWorkAndWhyWasANewCLRNotRequired.aspx">Scott Hanselman's blog</a>) &nbsp;Like any extension methods class, this class must be a static
class. &nbsp;It doesn't matter what the class is called but when you want to use that extension method anywhere in your project, that class must be in the same project or in the references and the namespace of your extension methods class must be in a using statement in the file your use the extensions in.<br />
<br />
<h4>
Create an Extension Method to Implement our WhereActive filter</h4>
Now we will implement an
extension method that extends IQueryable&lt;StatusCode&gt; and returns IQueryable&lt;StatusCode&gt;.&nbsp; This gives us a method that we can put next
to any existing query to produce a result that has only active values.&nbsp; For example, where &#8220;DbSet&#8221; would return all
values from a table, &#8220;DbSet.WhereActive()&#8221; would return only the active values.</div>
<div class="NoSpacing">
<br /></div>
<pre class="brush: csharp" name="code">namespace Project.Extensions
{
    public static class FilterExtensions
    {
        public static IQueryable&lt;StatusCode&gt; WhereActive(this IQueryable&lt;StatusCode&gt; query)
        {
            return query.Where(v =&gt; v.EffectiveFrom &lt; DateTime.Now &amp;&amp;
                               v.EffectiveTo &gt; DateTime.Now);
        }
    }
}
</pre>
<div class="NoSpacing">
<br />
<h4>
Rewrite our query</h4>
At this point, we can re-write the above query using our filter.<br />
<br />
<pre>DbSet
     .WhereActive()
     .OrderBy(v =&gt; v.Id)
     .Select(v =&gt; v)</pre>
<br />
This is the same exact query as our original one but it is easier to read and debug and it allows us to put the definition for what it means to be "Active" in a single place in the code, satisfying our need to avoid repeating ourselves.<br />
<br />
It also makes it easy to change our definition of what "Active" means. &nbsp;If we later decide that &#8220;active&#8221; is defined as &#8220;has the active flag set,&#8221; we only have to rewrite the &#8220;WhereActive&#8221; filter to implement this change.<br />
<br />
<h4>
Add Another Filter</h4>
Now I can add another filter implement another commonly used clause. &nbsp;We have defined "Approved" for this entity as &#8220;ApprovalDate column is set to a non-null value.&#8221; &nbsp;As you can see, this is not something that a later developer can easily see by looking at the code or the data model. &nbsp;Our filter, however, makes that definition much more obvious.</div>
<div class="NoSpacing">
<br /></div>
<pre class="brush: csharp" name="code">     public static IQueryable&lt;StatusCode&gt; WhereApproved(this IQueryable&lt;StatusCode&gt; query)
     {
          return query.Where(v =&gt; v.ApprovalDate != null);
     }
</pre>
<br />
<div class="NoSpacing">
Now our code can execute a query consisting of<br />
<br />
<pre>DbSet
     .WhereActive()
     .WhereApproved()
     .OrderBy(v =&gt; v.Id)
     .Select(v =&gt; v)</pre>
<br />
A later developer looking at this code can more easily understand what our result set should include and why. &nbsp;It should be apparent looking at this code that we want all StatusCode objects that are currently active and approved.</div>
<div class="NoSpacing">
<br />
<h4>
Summary</h4>
We looked at creating filter methods that turns commonly used where clauses into filter functions that we can re-use within our code. &nbsp;We demonstrated how to build them and showed what the Linq query looks like before and after switching to filter functions.</div>
<div class="NoSpacing">
<br /></div>
<div class="NoSpacing">
Next time we will look at how we can write simple unit tests to verify that our filter methods are operating as intended.</div>
<div class="NoSpacing">
<br /></div>
<div class="NoSpacing">
<br /></div>
<div class="NoSpacing">
<br /></div>
