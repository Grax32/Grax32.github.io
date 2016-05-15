---
layout: pages
permalink: /2014/10/implementing-inotifypropertychanged.html
title: Implementing INotifyPropertyChanged Manually Just Got A Little Easier
---
Implementing INotifyPropertyChanged got a little easier in C# 5.0 in .NET 4.5.  With the addition of the CallerMemberName attribute, you can stop using magic strings* to identify the property that is changing.

<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-EU1bAo_qgMQ/VOesvD1AHYI/AAAAAAAAmPQ/0jzzxqYDHjo/s1600/WP_20141225_023.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-EU1bAo_qgMQ/VOesvD1AHYI/AAAAAAAAmPQ/0jzzxqYDHjo/s1600/WP_20141225_023.jpg" height="112" width="200" /></a></div>
Before the CallerMemberName attribute, you had to some get the name of the property changed. &nbsp;The simplest way is to just type it in in a string like <span style="background-color: yellow;">OnPropertyChanged("BirthDate")</span> but I have also seen some nice solutions using expressions. &nbsp;However, with the CallerMemberName attribute, the compiler will fill in the name of the property.<br />
<br />
The performance is exactly the same as if you typed in the name of the property because the compiled code is actually the same as if you had typed it in. <br />
<br />
When we look at the decompiled code in a program such as ILSpy, we can see that the call to <span style="background-color: yellow;">OnPropertyChanged()</span> has been replaced with <span style="background-color: yellow;">OnPopertyChanged("BirthDate")</span>. &nbsp;The effect is the same as if we had typed it in, until we go to refactor. <br />
<br />
If we changed the name of the property, the compiler will take care of putting the new name into the compiled code without a thought from us.<br />
<br />
<pre>public class PersonViewModel : INotifyPropertyChanged
{
    private void OnPropertyChanged([CallerMemberName]string memberName = "")
    {
        if (PropertyChanged != null)
        {
            PropertyChanged(this, new PropertyChangedEventArgs(memberName));
        }
    }

    private DateTime _BirthDate;
    public DateTime BirthDate
    {
        get { return _BirthDate; }
        set
        {
            _BirthDate = value;
            OnPropertyChanged();
        }
    }

    private string _FirstName;
    public string FirstName
    {
        get { return _FirstName; }
        set
        {
            _FirstName = value;
            OnPropertyChanged();
            OnPropertyChanged("FullName");
        }
    }

    private string _LastName;
    public string LastName
    {
        get { return _LastName; }
        set
        {
            _LastName = value;
            OnPropertyChanged();
            OnPropertyChanged("FullName");
        }
    }

    public string FullName
    {
        get { return ((_FirstName ?? "") + " " + (_LastName ?? "")).Trim(); }
    }

    public event PropertyChangedEventHandler PropertyChanged;
}
</pre>
<br />
In the FirstName and LastName properties above, I made a second call to the OnPropertyChanged to demonstrate that this solution is flexible enough that you can also still pass your own value, if you need to. &nbsp;In this case, I am raising an event to indicate that FullName changed when any of its components have changed. <br />
<br />
<hr />
* Magic strings are strings in the source code that match to something, such as a property name but cannot generally be identified and refactored by refactoring tools.
