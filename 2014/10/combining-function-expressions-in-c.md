---
layout: pages
permalink: /2011/11/post.html
title: Combining Function Expressions in C# using a ReplacementVisitor
---
When working with expressions, I often want to combine multiple expressions into one. &nbsp;Using a ReplacementVisitor enables me to do that.<br />
<h3>
ReplacementVisitor</h3>
ReplacementVisitor is a memorable pattern* for C#. &nbsp;I first saw it somewhere on StackOverflow and I have started to use it extensively.<br />
<br />
<pre>&nbsp; &nbsp; &nbsp; &nbsp; public class ReplaceVisitor : ExpressionVisitor
&nbsp; &nbsp; &nbsp; &nbsp; {
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Expression _left;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Expression _right;</pre>
<pre>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; public ReplaceVisitor(Expression left, Expression right)
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _left = left;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _right = right;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; public override Expression Visit(Expression node)
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (node.Equals(_left))
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return _right;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return base.Visit(node);
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
&nbsp; &nbsp; &nbsp; &nbsp; }
</pre>
<br />
I usually like to pair this with a function that encapsulates the replacement operation<br />
<br />
<pre>&nbsp; &nbsp; &nbsp; &nbsp; public Expression Replace(Expression main, Expression current, Expression replacement)
&nbsp; &nbsp; &nbsp; &nbsp; {
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return (new ReplaceVisitor(current, replacement)).Visit(main);
&nbsp; &nbsp; &nbsp; &nbsp; }

</pre>
<pre><h3 style="font-family: 'Times New Roman'; white-space: normal;">
Expression Composition</h3>
</pre>
Now there are lots of different ways to combine function expressions but I am going to demonstrate a fairly direct combination pattern.
<br />
<br />
We will be combining 2 expressions where the output type of the first function expression is the input type of the second function expression. &nbsp;For example, our "f" function expression takes an string and returns a string and our "g" function also takes a string and returns a string. &nbsp;Other variations would work, but as long as the output of the first is the same type as the input to the second, we can composite the functions.<br />
<br />
<pre>Expression&lt;Func&lt;string, string&gt;&gt; f = z =&gt; z.Trim();
Expression&lt;Func&lt;string, string&gt;&gt; g = v =&gt; v.ToUpper();
</pre>
<br />
Goal:<br />
<pre>  Expression&lt;Func&lt;string, string&gt;&gt; fg = z =&gt; z.Trim().ToUpper();
</pre>
<br />
1. &nbsp;Variable f is of type LambaExpression which has properties we care about of "Parameters" and "Body". <br />
&nbsp; &nbsp; &nbsp;f.Parameters is an collection containing expression parameters, so it will have a length of one and a single parameter of type string with a name of "<span style="background-color: yellow;">z</span>"<br />
&nbsp; &nbsp; &nbsp;f.Body is an expression which represents the body of our lamda expression. &nbsp;It will contain an expression of "<span style="background-color: yellow;">z.Trim()</span>"<br />
<br />
2. &nbsp;In order to composite these 2 expressions, we want to create a new expression that uses the parameter(s) from the first expression ("<span style="background-color: yellow;">z</span>" of type string) and a body combining both expressions ("<span style="background-color: yellow;">z.Trim().ToUpper()</span>"). <br />
<br />
Note: Even if we had named both parameters the same, the parameter from the first expression is different from the parameter in the second expression.<br />
<br />
3. Look at the body of the g function, which is "<span style="background-color: yellow;">v.ToUpper()</span>"<br />
<br />
2. If we replace the parameter "<span style="background-color: yellow;">v</span>" with the body of the "f"<br />
<span class="Apple-tab-span" style="white-space: pre;"> </span>function, we get an expression that looks like "<span style="background-color: yellow;">z.Trim().ToUpper()</span>".<br />
<span class="Apple-tab-span" style="white-space: pre;"> </span>As you can see, that is the body of the goal function.<br />
<br />
3.&nbsp;Assign this to a variable of fgBody.<br />
<pre>var fgBody = Replace(g.Body,g.Parameters[0],f.Body);
</pre>
<br />
4. Create the goal function from the new body we created<br />
<span class="Apple-tab-span" style="white-space: pre;"> </span>combined with the "z" parameter.<br />
<pre>var resultExpression = Expression.Lambda&lt;Func&lt;string,string&gt;&gt;(fgBody,f.Parameters[0]);
// and compile it
var func = resultExpression.Compile();
// and test that it returns "ABCD" for an input of "    abcd    "
Assert.AreEqual("ABCD", func("    abcd    "));
</pre>
<span class="Apple-tab-span" style="white-space: pre;"> </span><br />
<span class="Apple-tab-span" style="white-space: pre;"><br /></span>
<br />
<hr />
* When I say memorable pattern, I am referring to a piece of code that is easy enough and short enough to just type in if you need it in your project.
