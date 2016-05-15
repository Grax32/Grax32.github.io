---
layout: pages
permalink: /2011/12/specifying-and-accessing-webresource-to.html
title: Specifying and using a WebResource to access embedded resources
---
Adam Miller had a great <a href="http://blog.milrr.com/2011/12/aspnet-load-image-from-embedded.html#comment-form">post</a> on this blog about returning an embedded resource in an aspx page.  Since I have some experience with embedded resources, I wanted to share instructions to access embedded resources using the WebResource attribute.

If you specify the embedded resource as an web resource, you can access it using a special url.

In your AssemblyInfo.cs, add a using statement for System.Web.UI and a WebResource attribute for each embedded resource you need to access.

Substitute the embedded resource path that is returned from GetManifestResourceNames() for "Your.Resource.Path.gif" and substitute a type from the assembly containing the embedded resource for "ATypeInYourAssembly"

    using System.Web.UI;
    [assembly: WebResource("Your.Resource.Path.gif", "image/gif")]

Then use the link returned from Page.ClientScript.GetWebResourceUrl(typeof(ATypeInYourAssembly), "Your.Resource.Path.gif")
to reference the resource.

