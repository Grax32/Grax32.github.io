Grax Coding: A FakeDbSet that implements IDbSet and uses IList for data manipulation 

A FakeDbSet that implements IDbSet<T> and uses IList<T> for data manipulation

 If you have ever tried to test code that depends on DbSet<T> or IDbSet<T> by creating a fake that implements IDbSet<T>, you may have found it more complicated than you planned, due to the fact that there are a lot of methods needed to implement the IDbSet<T> interface to just get a minimal amount of functionality from your fake. 

The big secret about this, in my opinion, is that most of the complexity comes from the IQueryable<T> interface. Faking the IDbSet<T> specific methods is a manageable goal if we find an existing object that implements the IQueryable<T> interface for us. 

Luckily, we can create a List<T> object (which implements IEnumerable<T>) and use the AsQueryable<T>() to get an IQueryable<T> that can execute queries using our List<T> as the data source.

I have created a working FakeDbSet<T> that accepts a passed-in List<T> object and implements the IDbSet<T> interface. It takes advantage of the IQueryable<T> from AsQueryable<T> and includes a wrapper around the QueryProvider to observe the CreateQuery and Execute activities. 

<script src="https://gist.github.com/Grax32/5477058.js"></script>
