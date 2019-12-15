---
layout: pages
permalink: /2013/04/announcing-ffastmapper-release-052.html
title: Announcing fFastMapper release 0.5.2
tags: [ software, ffastmapper ]
---
Announcing fFastMapper release 0.5.2. &nbsp;Get <a href="http://www.nuget.org/packages?q=ffastmapper" target="_blank">fFastMapper </a>from nuGet.<br />
<br />
fFastMapper is a component (like AutoMapper) to automatically copy values between objects of different types. &nbsp;The default mapping is based on a match of property name and property type.<br />
<br />
I added support for deep mapping. &nbsp;The auto-generated map will look up to 8 levels deep to match properties based on name. <br />
<br />
This will automatically map a name like Person.Address.Street1 with PersonAddressStreet1.<br />
<br />
I also added a portable library version that should support Windows 8 apps, Windows Phone 8, .NET 4.5, and Silverlight 4.0 and higher.<br />
<br />
This version does not match class properties by default. &nbsp;Version 0.5.0 copied the reference resulting in the same reference being in the source and the destination. &nbsp;If you do choose to create a map between properties of the same class type, be aware that it will be the reference being copied, resulting in the same object reference in the source and the copy.<br />
