Grax Coding: Detecting Infinite Recursion with a ThreadStatic Variable in C\#

TLDR: Use ThreadStatic static variables for a performant recursion test.<br />
<br />
As I was building fFastInjector, I found that it was fairly easy to create infinitely recursive configurations of the dependency injection. &nbsp;As fFastInjector examines a constructor to determine what to inject, it calls itself to resolve those injections. <br />
<br />
<pre>Injector.Resolve&lt;MyConcreteClass&gt;()</pre>
can generate a resolution function that looks like <br />
<pre>new MyConcreteClass(Injector.Resolve&lt;IMyService&gt;(), Injector.Resolve&lt;IMySecurity&gt;())</pre>
<br />
A mis-configuration could cause an infinite loop if one of those resolutions pointed back to MyConcreteClass. &nbsp;In order to detect this, I looked at a few options to determine if I was calling the Resolve method for a type that I was already in the middle of resolving.<br />
<br />
First, I tried looking at caller information as shown at&nbsp;<a href="http://msdn.microsoft.com/en-us/library/hh534540.aspx">http://msdn.microsoft.com/en-us/library/hh534540.aspx</a>. &nbsp;I rejected that fairly quickly because I questioned how well it would perform and because I could lose track of the loop if the resolve method called another method that called another resolve method. &nbsp; It was going to be very difficult to determine if I was calling the Resolve method that was in the middle of Resolving and basically involved reviewing the whole stack of calls.<br />
<br />
I could set a static variable and then if it is already set when I enter the resolution function, I can throw the exception.<br />
<br />
<pre>static bool isRecursionTestPending;

static T ResolveWithRecursionCheck()
{
 if (isRecursionTestPending)
 {
  throw new Exception("Recursion detected in type " + typeofT.Name);
 }</pre>
<pre> isRecursionTestPending = true;
 
 var returnValue = ActiveResolverFunction.Invoke();
 
 isRecursionTestPending = false;
 
 return returnValue;
}
</pre>
<br />
The problem with this is that if 2 Resolvers are called at the same time, the 2nd one will fail thinking we have a recursion error because the first one set the isRecursionTestPending variable.<br />
<br />
The answer I found is similar to the above with one very important change. &nbsp;As Philip Cox points out on his <a href="http://philsversion.com/2009/04/01/dealing-with-infinite-recursion/">blog post</a>, we can use a ThreadStatic variable to detect this recursion in a thread-safe way.<br />
<br />
<pre>[ThreadStatic]
static bool isRecursionTestPending;
</pre>
<br />
A thread static variable is a different variable on each of the threads it runs on. &nbsp;So if Thread 1 starts to resolve MyConcreteClass, it will set the&nbsp;isRecursionTestPending variable to true for Thread 1. &nbsp;If, in the course of executing the Resolve method, another call to Resolve&lt;MyConcreteClass&gt;() is discovered, the&nbsp;isRecursionTestPending variable will be true and an exception will be thrown. &nbsp;If Thread 2 calls Resolve&lt;MyConcreteClass&gt;(), Thread 2 will have its own independent isRecursionTestPending variable.<br />
<br />
In my case, this kind of recursion is not allowed, so a boolean is appropriate. &nbsp;You could also use an int to allow recursion to a specific depth or just to track the depth you are at. <br />
<br />
