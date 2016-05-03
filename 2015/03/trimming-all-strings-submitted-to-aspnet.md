Grax Coding: Trimming all strings submitted to ASP.NET

<b>"Usernames cannot end with a space." 
You had the time to code that error message, but not the time to call trim()?</b><br />
&nbsp; &nbsp;&nbsp;<a href="https://twitter.com/shanselman/">@shanselman</a> <a href="https://twitter.com/shanselman/status/575075952767541249">https://twitter.com/shanselman/status/575075952767541249</a><br />
<br />
&nbsp;In my C#/ASP.NET applications, I add the following TrimModelBinder.  This trims every single string that is sent to the server before my controllers even get them.  Before we implemented it, we did a small case study and found no instances of it being necessary to submit leading or trailing spaces.  Since we have had it implemented, we have not once needed to work around it.  Your mileage may vary.

To use, register it in application_start in global.asax or application initialization code that is called from there.
<br />
<br />
<pre>ModelBinders.Binders.Add(typeof(string),new TrimModelBinder());
</pre>
<br />
and here is the model binder code.  It implements IModelBinder and trims submitted strings, if they are found.<br />
<br />
<pre>    public class TrimModelBinder : IModelBinder
    {
        // Requires global.asax.cs to have the following to activate
        // ModelBinders.Binders.Add(typeof(string),new TrimModelBinder());

        /// <summary>
        /// Binds the model to a value by using the specified controller context and binding context.
        /// </summary>
        /// <param name="controllerContext" />The controller context.
        /// <param name="bindingContext" />The binding context.
        /// <returns>The bound value.</returns>
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            var valueResult = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);
            if (valueResult == null || valueResult.AttemptedValue == null)
            {
                return null;
            }

            return (String.IsNullOrWhiteSpace(valueResult.AttemptedValue) ? valueResult.AttemptedValue : valueResult.AttemptedValue.Trim());
        }
</pre>
