August 21st Lab Instruction
===========================

### Getting the code

You can either fork and/or clone the repo to your machine or just download the zip file and unzip it.

### Running the code

1. Create a local Kanban database on SQL Server.
  > Visual Studio 2010 or later (including an Express edition) should come with [SQL Server Express LocalDB](http://blogs.msdn.com/b/sqlexpress/archive/2011/07/12/introducing-localdb-a-better-sql-express.aspx)

2. Update EventStore connection string in web.config file to the database created in the first step.
![VS2013 Pro](https://raw.githubusercontent.com/NashDotNet/Kanban/master/vs2013-pro.PNG)
3. Build the solution.
  > Visual Studio should restore all required NuGet packages (make sure missing package option is checked).

4. Run and enjoy!
![Kanban](https://raw.githubusercontent.com/NashDotNet/Kanban/master/kanban-board.PNG)


*We have tested the steps above with both VS2013 pro and express edition.*

### Project Dependencies

![dependencies](https://raw.githubusercontent.com/NashDotNet/Kanban/master/dependencies.PNG)

*Created by [ReSharper](http://www.jetbrains.com/resharper/).*

### References

- [Greg Young's CQRS Class](http://subscriptions.viddler.com/GregYoung)
- [Event Store](http://geteventstore.com/)
