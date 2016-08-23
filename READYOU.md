<body style='background:grey'>

https://codeship.com/projects/62aa95a0-4a35-0134-4f3f-7683f1944f86/status?branch=master

<h1 style='color:purple; font-weight:bolder'>loot-ytilitu - a Utility Tool: The README</h1>
<ul style='font-size:1.3em'>What's is loot-ytilitu?
  <li style='font-size:.8em'>loot-ytilitu is in short a Utility Tool that displays all the requested information in console as well as store it in log.
  <li style='font-size:.8em'>By default, it is setup to display all successful operations in <p style='font-size:1.5em;color:green'>GREEN</li>
  <li style='font-size:.8em'>By default, it is setup to display all erroneous operations in <p style='font-size:1.5em;color:red'>RED</li>
</ul>

<hr>

<section style='background:red'>
  <h2>Usage</h2>
    <article style='background:yellow'>
      <h3 style ='color:black'>Development Usage</h3>
    </article>  
</section>    

  <p>Install the package as a developer dependency</p>

```
npm i loot-ytilitu --save-dev
```

  <p> In your project root folder, create a folder called logs. This can be done in many ways, here is how to do it using Terminal.</p>

  <p>In Terminal type:</p>

  ```
  mkdir logs
  ```

  <p>At the top of the folders that contain scripts you are running be sure to include this line at the top</p>

  ```
  const utilityTool = require('loot-ytilitu');
  ```

  <hr>

  <section style='background:red'>
    <h2>Example</h2>
  </section>

<p>When running this line in Terminal:</p>

```
DEBUG=true node src/server.js
```
<p>With this line in src/server.js</p>

```
 utilityTool.debug(`Server Active on ${port}`);
 ```
<p>How it shows in console:</p>

```
Thu Aug 18 2016 21:55:48 GMT-0400 (EDT)
Server Active on 3000
```

  <hr>

  <section style='background:red'>
    <h2>Semantic Versioning</h2>
  </section>    

  <p>Visit SemVer to get the latest info on Semantic Versioning:<p> <a href='http://semver.org/spec/v2.0.0.html'>HERE</a>

  <hr>

<p>Contributed by</p> <a href="mailto:smrogers@fullsail.edu">Shaun M. Rogers</a>
