---
layout: pages
permalink: /2013/06/why.is.ffastinjector.so.fast.html
title: Why is fFastInjector so fast?  Is it thread-safe and otherwise safe?
tags:
 - software
---
<h3>
Why is fFastInjector so fast?</h3>
fFastInjector gets its speed from creative use of static variables within a generic static class, optimizer friendly coding, coding to do activities not related to the resolution outside of the resolution piece.<br />
<h4>
Generic static variables</h4>
Generic static variables occur once per type. &nbsp;Understanding this, I can compute the resolver for &lt;T&gt; and store it in InternalResolver&lt;T&gt;. &nbsp;So if I compute the resolver for Class1 and put it in InternalResolver&lt;Class1&gt; there is no conflict when later I compute the resolver for Class2 and put it in InternalResolver&lt;Class2&gt;.<br />
<br />
When I go to call these resolvers, I am getting the result using the type resolution system. &nbsp;This is faster than a dictionary lookup for the generic "Resolve&lt;T&gt;()". &nbsp;For "Resolve(Type type)", I do use a dictionary lookup because that is faster than using reflection to make a method call to "Resolve&lt;T&gt;()"<br />
<h4>
Optimizer friendly coding</h4>
The coding methodology depends on calling InternalResolver&lt;T&gt;.Resolve but most injectors use a syntax that looks more like instance.Resolve&lt;T&gt;(). &nbsp;I don't have any instances but I wanted the syntax to seem more familiar so I take a call to "Injector.Resolve&lt;T&gt;()" and call "InternalResolver&lt;T&gt;.Resolve()". &nbsp;I want to do more testing of this but I believe it to be optimizer friendly such that the outer call will be optimized away leaving us with one less method call.<br />
<h4>
Coding unrelated activities outside of the resolution</h4>
Anything that can be done outside of the resolver should be. &nbsp;In the case of the recursion check, I looked at the most common ways to get a recursion error and I trap those by running the recursion check one time on the first resolve after changing the resolver expression. &nbsp;Once I've done the check, I remove the recursion check so the resolver doesn't have to run it every time.<br />
<h3>
Why is the InjectorFluent&lt;T&gt; object sometimes (or always in the new release) null?</h3>
The interesting thing about the object we use for fluent our fluent methods is that it really doesn't do anything except help us find which static methods to call. &nbsp;Since extension methods can be called on null objects, we don't even need an instance. &nbsp;(You do, however, need a "using fFastInjector;" at the top of your file).<br />
<br />
Take this code for example:<br />
<br />
<pre>Injector
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .SetResolver&lt;MyInterface, MyTestClass&gt;()
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .AddPropertyInjector(v =&gt; v.MyProperty)
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .AddPropertyInjector(v =&gt; v.MyOtherProperty, () =&gt; new MyPropertyClass());
</pre>
<br />
SetResolver&lt;MyInterface, MyTestClass&gt; returns an InjectorFluent&lt;MyInterface&gt; object. <br />
<br />
The fluent object itself doesn't contain any data. &nbsp;It's purpose is to allow me to call InternalResolver&lt;MyInterface&gt; and it accomplishes that part just fine by having a null object of type InjectorFluent&lt;MyInterface&gt; and having extensions method to that InjectorFluent&lt;T&gt; that pass those calls to InternalResolver&lt;MyInterface&gt;.<br />
<h3>
Is the&nbsp;<span style="color: blue; font-family: Consolas; font-size: 13px;">public</span><span style="background-color: white; font-family: Consolas; font-size: 13px;">&nbsp;</span><span style="color: blue; font-family: Consolas; font-size: 13px;">static</span><span style="background-color: white; font-family: Consolas; font-size: 13px;">&nbsp;</span><span style="color: blue; font-family: Consolas; font-size: 13px;">object</span><span style="background-color: white; font-family: Consolas; font-size: 13px;">&nbsp;Resolve(</span><span style="color: #2b91af; font-family: Consolas; font-size: 13px;">Type</span><span style="background-color: white; font-family: Consolas; font-size: 13px;">&nbsp;type)</span>&nbsp;method thread safe?</h3>
When you look at the "Resolve(Type type)" method, you will notice that it does a dictionary lookup for a resolver. &nbsp;If that fails, it call GenericResolve.MakeGenericMethod.<br />
<br />
That resembles unsafe code because we never lock the dictionary, never check to see that another thread isn't creating a resolver at the same time.<br />
<br />
In the case of Resolve(Type type), the dictionary lookup is only there to speed things up.<br />
<br />
The reason any of this is thread-safe is that it depends on the behavior of the initializers for static fields. &nbsp;The initializer should run once and only once prior to the first access to the field. <br />
<br />
The MakeGenericMethod calls InternalResolver&lt;T&gt;.Resolve based on the type we passed in. &nbsp;If our code happens to do this multiple times before the InternalResolver&lt;T&gt; has completed the initialization and put the resolver in the dictionary, it doesn't conflict, it just processes those calls in a thread-safe manner using the slightly slower method.<br />
<h3>
Is the check for infinite recursion safe?</h3>
It can be defeated. &nbsp;If your expression to resolve your type changes the concrete type based on some condition, then the infinite recursion check is no good since it only runs on the first resolution after you change the resolver expression.<br />
<br />
I have considered evaluating the resolver expression and doing the recursion check every time if the resolver expression contains conditional logic or calls an unknown function, but for now I suggest against using conditional logic in the resolver expression to return differing concrete types.
