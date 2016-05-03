---
layout: pages
permalink: /2014/11/use-of-unassigned-local-variable-in-c.html
title: Use of unassigned local variable in C\#
---
Here is a simple tip that you may not have run across yet. <br />
<br />
TLDR: Initialize a variable to null to indicate to the compiler that you plan to assign it later.<br />
<br />
Suppose you have a situation where you need to create a variable but you will be assigning a value to it within a conditional statement (if, for, foreach, while, etc). &nbsp;In the code that follows the conditional section you then want to reference the variable.<br />
<br />
<pre>string myvar;
if (condtion)
{
&nbsp; &nbsp; &nbsp;myvar = "Information";
}

Console.WriteLine(<u><span style="color: red;">myvar</span></u>);
</pre>
<br />
But this code generates the error "Use of unassigned local variable 'myvar'"<br />
<br />
However, if you initialize the variable to null, the compiler sees is as an assigned variable and compiles correctly.<br />
<br />
<pre>string myvar = null;
if (condtion)
{
&nbsp; &nbsp; &nbsp;myvar = "Information";
}

Console.WriteLine(<u>myvar</u>);
</pre>
<br />
This code works. &nbsp;Be aware that now you are responsible for assigning a value or you will get a null reference exception. &nbsp;To be on the safer side, I only initialize a variable to null when I have reviewed the following code and I am satisfied that I will not get a null reference exception.<br />
