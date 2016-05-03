Grax Coding: fFastInjector - World's Fastest Dependency Injector

<span style="color: red;">(2013-6-16: See updated lifestyle section for details on singleton lifestyle)</span><br />
<h2>
What is it?</h2>
fFastInjector is the world's fastest .NET dependency injector/service locator. <br />
<br />
In order to prove that it is the fastest, I downloaded the code that accompanies&nbsp;<a href="http://www.palmmedia.de/blog/2011/8/30/ioc-container-benchmark-performance-comparison" target="_blank">this blog post</a>&nbsp;and added an adapter for fFastInjector. &nbsp;In my tests, it beat every other dependency injector on the list.<br />
<h2>
Why is it awesome?</h2>
fFastInjector is extremely fast and lightweight. &nbsp;It is the fastest and one of the smallest dependency injectors out there. It is easy to add to your project using nuGet, set up a few mappings and be on your way.<br />
<h2>
How do I use it?</h2>
<div>
<div>
Add to your &nbsp;project using nuGet's Install-Package command<br />
<pre><span style="background-color: #cccccc;">Install-Package fFastInjector</span></pre>
<br />
Set resolver for interface</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">fFastInjector.Injector.SetResolver&lt;MyInterface, MyConcreteClass&gt;();</span></pre>
<div>
<br />
Resolve interface. &nbsp;If no resolver is set for an interface, an exception is thrown.</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">var result = Injector.Resolve&lt;MyInterface&gt;();</span></pre>
<div>
<br />
Resolve concrete class. &nbsp;If no resolver is set for a concrete class, this class will be resolved by looking for the constructor with the fewest parameters (preference given to the parameterless constructor). &nbsp;If there are parameters, fFastInjector will attempt to resolve them as well. &nbsp;If they cause an infinite loop with their dependencies, fFastInjector will throw an exception.</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">var result = Injector.Resolve&lt;MyConcreteClass&gt;();</span></pre>
<div>
<br />
Resolve concrete class using a specific expression.<br />
<br />
<pre><span style="background-color: #cccccc;">fFastInjector.Injector.SetResolver&lt;MyConcreteClass&gt;(() =&gt; new MyConcreteClass(new Dependency()));</span></pre>
<pre><span style="background-color: #cccccc;">var result = Injector.Resolve&lt;MyConcreteClass&gt;();</span></pre>
<br />
Resolve class or interface and additionally set a property. &nbsp;This first method will simply use fFastInjector to resolve the value for MyProperty based on the type of MyProperty.</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">fFastInjector.Injector
&nbsp; &nbsp; &nbsp;.SetResolver&lt;MyInterface, MyTestClass&gt;()
&nbsp; &nbsp; &nbsp;.AddPropertyInjector(v =&gt; v.MyProperty);</span>
</pre>
<div>
<br />
Resolve class or interface and additionally set a property. &nbsp;This second method allows you to specify and expression that will be evaluated to set MyProperty.</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">fFastInjector.Injector
&nbsp; &nbsp; &nbsp; .SetResolver&lt;MyInterface, MyTestClass&gt;()
&nbsp; &nbsp; &nbsp; .AddPropertyInjector(v =&gt; v.MyOtherProperty, () =&gt; new MyPropertyClass());</span></pre>
<div>
<br /></div>
</div>
<h3>
Questions (that I anticipated you might ask)</h3>
<h4>
Is it ready for production use?</h4>
There's not a lot of code and my tests have 100% code coverage.<br />
<br />
I do recommend it for production use, assuming you have a proper test phase before you go to production. &nbsp;Once I have used it in production for a reasonable time, I will release the 1.0 version.<br />
<br />
<h4>
What lifestyles does it support?</h4>
Hippy, banker, or metalhead. &nbsp;Kidding. &nbsp;fFastInjector supports Transient and Singleton lifestyles. &nbsp;No lifestyles are specified, but provided your resolver calls "new" for transient lifestyles and just returns an existing instance for the singleton lifestyle, all should be well. &nbsp;I will be looking into other lifestyles but I expect them to be built as add-ons instead of in the base fFastInjector. &nbsp;I expect to build an add-on to support asp.net/MVC that may support a single-request lifestyle and automatically configure controller resolution.<br />
<br />
<span style="color: #cc0000;"><b>Update:</b></span><br />
&nbsp; The next release adds a command to specifically set a singleton resolver. &nbsp;Until that is available, create a static variable, instantiate your singleton, and use the following to resolve:<br />
<pre><span style="background-color: #cccccc;">myStaticVar = new MyConcreteSingleton();</span></pre>
<pre><span style="background-color: #cccccc;">fFastInjector.Injector.SetResolver&lt;IMyInterface&gt;(() =&gt; myStaticVar);</span></pre>
<h4>
Dependency Injection, Inversion of Control, Service Locator, what does it all mean?</h4>
Inversion of control is the technique of making object dependencies known at run-time instead of compile-time. &nbsp;This is accomplished by creating a contract or interface between objects and then using a run-time tool, such as fFastInjector, to determine the dependency for that contract.<br />
<br />
Dependency injection is one technique for inversion of control. &nbsp;The class is created with injection points in the constructor or properties and then those dependencies are injected when the class is constructed. &nbsp;Classes built using this technique have no dependency on the dependency injector, <br />
<br />
To use fFastInjector this way<br />
<br />
<ol>
<li>Create a class with a constructor that has parameters consisting of interfaces to your dependencies. &nbsp;</li>
<li>Call Injector.SetResolver for each of the dependencies</li>
<li>Call Injector.Resolve&lt;MyConcreteClass&gt;() as needed</li>
</ol>
<br />
<br />
Service location is a technique where dependencies are resolved as needed. &nbsp;The class calls the service locator with the interface needed and the service locator returns a concrete reference for that interface.<br />
<br />
To use fFastInjector this way, call Injector.Resolve&lt;IMyInterface&gt;() anywhere in your code that you need IMyInterface.<br />
