---
layout: pages
permalink: /2013/07/response-to-ffastinjector-concerns.html
title: Response to fFastInjector concerns
tags:
 - software
---
Below are some comments from Daniel de Palme's IOC Container performance benchmark and my responses.<br />
<br />
<a href="http://www.palmmedia.de/blog/2011/8/30/ioc-container-benchmark-performance-comparison">http://www.palmmedia.de/blog/2011/8/30/ioc-container-benchmark-performance-comparison</a>&nbsp;Post #48<br />
<i><span style="background-color: white; color: #333333; font-family: Verdana, Arial, sans-serif; font-size: 14px; text-align: justify;"><br /></span></i>
<i><span style="background-color: white; color: #333333; font-family: Verdana, Arial, sans-serif; font-size: 14px; text-align: justify;">Something to notice about fFastInjector is that it is static, and it is made pretty much only for speed by creating a static generic class for every registration instead of storing them in some sort of collection like all the other (it does use a collection - but only to map resolving by Type to the static generic class).&nbsp;</span></i><br />
<i><br /></i>
fFastInjector is static but that is not only for speed. &nbsp;It also creates a very small and concise code base. <br />
<br />
The thing to remember about dependency injection is that it is all about answering the question of "please give me an instance of (some type)." <br />
<br />
In the case of an interface, the injector needs to determine where and how to get or create an instance.<br />
<br />
<div style="text-align: start;">
In the case of a concrete class, the injector needs to know how to satisfy the dependencies the constructor has specified and which constructor to use.</div>
<div style="text-align: start;">
<br /></div>
<div style="text-align: start;">
In either case, it is a question specific to that type and a static generic class is an ideal place for storing that information.</div>
<br style="background-color: white; color: #333333; font-family: Verdana, Arial, sans-serif; font-size: 14px; text-align: justify;" />
<span style="background-color: white; color: #333333; font-family: Verdana, Arial, sans-serif; font-size: 14px; font-style: italic; text-align: justify;">The thing is that if you use something like MVC everything is resolved using the Type and not using a generic parameter, and then the performance decreases.&nbsp;</span><br />
<i><br /></i>
Only the first resolution is resolved using Type. &nbsp;If you resolve a controller that has multiple dependencies in the constructor, those dependencies are resolved generically, not through a passed type parameter.<br />
<br style="background-color: white; color: #333333; font-family: Verdana, Arial, sans-serif; font-size: 14px; text-align: justify;" />
<span style="background-color: white; color: #333333; font-family: Verdana, Arial, sans-serif; font-size: 14px; font-style: italic; text-align: justify;">So it performs very nice under the test conditions but in a real world scenario it is no different from the other fast containers, and doesn't have the same feature set and seems difficult (if not currently impossible) to extend with custom lifetime registrations (for example perRequest or perSession lifetimes for Web scenarios or perThread etc.).&nbsp;</span><br />
<i><br /></i>
fFastInjector is smaller than other containers and it is very compatible with different project types. &nbsp;In fact, I am very proud that with <a href="http://nuget.org/packages/fFastInjector-Embedded/">fFastInjector-embedded</a>, you can add a small injector to your code by just adding a source file.<br />
<div style="text-align: start;">
<br /></div>
<div style="text-align: start;">
It doesn't have the same feature set as other containers because it is fairly new. &nbsp;This wasn't even a concept in January, when I started working on my presentation for Nebraska Code Camp on generics in C#. &nbsp;This project grew out of that presentation.</div>
<div style="text-align: start;">
<br /></div>
<div style="text-align: start;">
I am working on adding custom lifetime registrations and possibly interception to the next version.</div>
<br style="background-color: white; color: #333333; font-family: Verdana, Arial, sans-serif; font-size: 14px; text-align: justify;" />
<span style="background-color: white; color: #333333; font-family: Verdana, Arial, sans-serif; font-size: 14px; font-style: italic; text-align: justify;">I would recommend that the tests are change to resolve using the most basic way (using the Type and not Generics) to prevent this scenario.&nbsp;</span><br />
<span style="background-color: white; color: #333333; font-family: Verdana, Arial, sans-serif; font-size: 14px; font-style: italic; text-align: justify;">Resolving using the generic parameter is only relevant if you are manually wiring everything up yourself, if you are using auto-wiring which I hope pretty much everybody prefer, then the Type is used.&nbsp;</span><br />
<br />
I think it would be reasonable for the performance benchmark to have 2 adapters for containers that support generic resolution.  One could call the generic resolver and the other could call the method with the type parameter.<br />
<br />
Note that fFastInjector does automatically wire up concrete classes such that a call to Resolve&lt;ConcreteClass&gt;() will attempt to satisfy any parameters the constructor&nbsp;requires&nbsp;(by default, using the constructor with the fewest number of parameters).<br />
<div>
<br />
If you are using the admittedly not well documented <a href="https://nuget.org/packages/fFastInjector-MVC/">fFastInjector-MVC</a>&nbsp;it can automatically wire up your controllers. &nbsp;It should be as simple as&nbsp;</div>
<div>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;"><span style="color: #2b91af;">ControllerBuilder</span>.Current.SetControllerFactory(<span style="color: blue;">new</span>&nbsp;fFastInjector.<span style="color: #2b91af;">fFastInjectorControllerFactory</span>());
</pre>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;">
</pre>
<pre style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: Consolas; font-size: 13px;">
</pre>
<br /></div>
