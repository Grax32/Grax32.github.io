Grax Coding: fFastInjector 1.0.1 is here.  Brace yourself!

fFastInjector 1.0.1 is here! &nbsp;(I skipped the 1.0.0 release since that programs with that version number always seems to have problems.)<br />
<br />
<h3>
<a href="http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/s1600/IMG_3941crop.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/s1600/IMG_3941crop.jpg" height="200" width="191" /></a>Awesome! What is it?</h3>
<div>
fFastInjector is one of the fastest and smallest dependency injectors available for .NET. &nbsp;It is available as a portable class library that targets .NET framework 4, Windows 8/8.1, and Windows Phone 8.1 or as a file that compiles into your dll.<br />
<br />
<h4>
Version 1.0.1 features</h4>
Version 1.0.1 adds generic resolution, so that if we specify IEnumerable&lt;T&gt; resolves to List&lt;T&gt;, and we ask for a resolution for type IEnumerable&lt;Cat&gt; we will get instance of List&lt;Cat&gt;.</div>
<div>
<br />
Additionally, it adds <a href="https://ffastinjector.codeplex.com/wikipage?title=Generic%20Matching%20Configuration&amp;referringTitle=Documentation">constrained matching</a>, so that I can specify that IEnumerable&lt;Cat&gt; can return a different type than IEnumerable&lt;Dog&gt;.</div>
<h3>
How do I Start Using It?</h3>
<div>
fFastInjector comes in three NuGet packages</div>
<div>
<ul>
<li>fFastInjector-Embedded</li>
<ul>
<li>This package add the Injector.cs file to your project so that compiles into your dll instead of creating a dependency on an outside dll</li>
</ul>
<li>fFastInjector-MVC</li>
<ul>
<li>This package installs fFastInjector for MVC 5 projects. &nbsp;You will need to add a call to&nbsp;<span style="color: #253340; font-family: monospace; font-size: 11px; line-height: 19.0176963806152px;">fFastInjector.fFastInjectorControllerFactory.RegisterControllerFactory();&nbsp;</span>into your Application_Start method in global.asax</li>
</ul>
<li>fFastInjector</li>
<ul>
<li>Installs the dll as a reference in your project</li>
</ul>
</ul>
<div>
<h3>
Hey! That Constrained Generic Matching is Awesome! but I don't want to switch from NInject, Unity, Whatever</h3>
<div>
Just configure a pass-through from your generic resolution in your favorite dependency injection engine into fFastInjector.</div>
<div>
<br /></div>
<div>
For example, the code below configures Unity to pass through any requests for resolutions of IEnumerable&lt;&gt; to fFastInjector.</div>
<div>
<br /></div>
<pre>container.RegisterType(typeof(IEnumerable&lt;&gt;),
     new InjectionFactory((c, type, s) =&gt; fFastInjector.Injector.Resolve(type)));</pre>
<div>
<br /></div>
<div>
and the following code configures fFastInjector to return a List&lt;T&gt; for an IEnumerable&lt;T&gt; unless T inherits from Animal or Cat. &nbsp;Note that Cat inherits from Animal, so types that inherit from Cat will return a CatList since Cat is the more specific type.</div>
<div>
<br /></div>
<pre>fFastInjector.Injector.SetGenericResolver(typeof(IEnumerable&lt;&gt;), typeof(List&lt;&gt;));
fFastInjector.Injector.SetGenericResolver(typeof(IEnumerable&lt;&gt;), typeof(AnimalList&lt;&gt;), typeof(Animal));
fFastInjector.Injector.SetGenericResolver(typeof(IEnumerable&lt;&gt;), typeof(CatList&lt;&gt;), typeof(Cat));</pre>
</div>
<h4>
Ewww! Why is it all Staticky?</h4>
</div>
<div>
fFastInjector uses static variables to store information about resolutions. &nbsp;There is no fFastInjector instance anywhere, just static methods and variables.<br />
<br />
fFastInjector uses a technique with generic static variables to auto-generate, store, and execute the dependency resolution. &nbsp;</div>
<div>
<br /></div>
<div>
Since a static variable is one that exists from the moment it is created until the end of your application's lifetime and dependency resolution is something that happens over the application's entire lifetime it makes sense to store the resolution information and the generated resolver functions in generic static variables.</div>
<div>
<br /></div>
