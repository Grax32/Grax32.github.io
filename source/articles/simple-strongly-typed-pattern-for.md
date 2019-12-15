---
layout: pages
permalink: /2013/06/simple-strongly-typed-pattern-for.html
title: Simple Strongly-Typed pattern for ViewData, Session, Request, etc
tags:
 - coding
---
Here is a simple pattern for setting up strongly-typed but flexible access to your ViewData, Session, and Request variables.<br />
<div>
<br />
If you have worked with jQuery much, you are familiar with the pattern of using "SomeMethod(value)" to set a value and "SomeMethod()" to get the value back. What we are going to do is create extension methods on ViewData, Session, or Request to set and/or get strongly typed data.</div>
<ol>
<li>Add a new class titled "ObjectDictionaryExtensions" (or whatever you want to call it)&nbsp;</li>
<li>Add a static modifier to the ObjectDictionaryExtensions class</li>
<ul>
<li>"public static class ObjectDictionaryExtensions"</li>
</ul>
</ol>
Add a ViewData "property" by adding the following methods<br />
<ol>
</ol>
<pre>public static ViewDataDictionary FirstName(this ViewDataDictionary collection, string value)
{
    collection["FirstName"] = value;
    return collection;
}

public static string FirstName(this ViewDataDictionary collection)
{
    return collection["FirstName"] as string;
}
</pre>
<br />
Add a Session "property" by adding the following methods
<br />
<br />
<pre>public static HttpSessionState FirstName(this HttpSessionState collection, string value)
{
    collection["FirstName"] = value;
    return collection;
}

public static string FirstName(this HttpSessionState collection)
{
    return collection["FirstName"] as string;
}
</pre>
<br />
Add a Request "property" by adding the following method.  Note that the Request collection is read-only
<br />
<br />
<pre>public static string FirstName(this HttpRequest collection)
{
    return collection["FirstName"];
}
</pre>
<br />
Accessing these methods looks like this<br />
<br />
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;">ViewState.FirstName(<span style="color: #a31515;">"Jason"</span>);
<span style="color: blue;">var</span>&nbsp;firstName&nbsp;=&nbsp;ViewState.FirstName();

Session.FirstName(<span style="color: #a31515;">"Johnny"</span>);
<span style="color: blue;">var</span>&nbsp;firstName&nbsp;=&nbsp;Session.FirstName();

<span style="color: blue;">var</span>&nbsp;firstName&nbsp;=&nbsp;Request.FirstName();</pre>
<h4>
Namespaces</h4>
If your extension methods are not in the same namespace as the code that will be using them, you will either need to put a "using (namespace of extension method static class)" on every page you plan to use it, or change the namespace of your extension method static class to be the same as the other pages. &nbsp;This will enable Intellisense and make the extension methods very easy to use.<br />
<br />
To add the equivalent of a global using statement to your Razor views, edit your Views/web.config file.<br />
Locate the key "/configuration/system.web.webPages.razor/pages/namespaces"<br />
and add your own namespace by adding an element that looks like&nbsp;<span style="color: blue; font-family: Consolas; font-size: 13px;">&lt;</span><span style="color: #a31515; font-family: Consolas; font-size: 13px;">add</span><span style="color: blue; font-family: Consolas; font-size: 13px;">&nbsp;</span><span style="color: red; font-family: Consolas; font-size: 13px;">namespace</span><span style="color: blue; font-family: Consolas; font-size: 13px;">=</span><span style="background-color: white; font-family: Consolas; font-size: 13px;">"</span><span style="color: blue; font-family: Consolas; font-size: 13px;">DefaultNamespace.Extensions</span><span style="background-color: white; font-family: Consolas; font-size: 13px;">"</span><span style="color: blue; font-family: Consolas; font-size: 13px;">&nbsp;/&gt;</span><br />
<br />
<h4>
Selecting a Key</h4>
In the examples, I use "FirstName" as the key. &nbsp;However, your key (at least with the ViewState and Session objects) can be anything you like, as long as you use the same key in the getter and the setter. &nbsp;You can reduce the chance of name collisions with other parts of your application by selecting something more complex or obscure for the key.<br />
<br />
<h4>
Value types</h4>
For non-nullable types, be sure to handle the situation where the item is not found in the collection. &nbsp;One solution is to return a default value (preferably "default(type)") when the item is not found. &nbsp;The other solution is to return a Nullable&lt;type&gt; that returns the value when found, else null.<br />
<br />
