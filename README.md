<h1>Project Name</h1>
debug next.js using vscode

<h2>Project Description</h2>
....

<h2>Motivation</h2>
You want to debug on development specifc function by put breakoing and go step by step . This function can be on the server side or the client side, what are your options ?

options :

- vscode
- chrom dev tools (possible in client side and server side)

We will concentrate on using vs code and .vscode/launch.json . this seems to be the best way because we can debug both server and client side and do it using allready used vscode

i want to debug :
server component
client component
server action
middleware

<h2>Installation</h2>

create .vscode/launch.json in the project root using <a href='https://nextjs.org/docs/app/guides/debugging'>this</a>

install project dependencies

```bash
pnpm i
```


<h2>Usage</h2>

<ol>
<li>put a brakpoint in the source files : .ts , .tsx</li>
<li>start Debug using F5 </li>
<li>choose name </li>
</ol>

once you choose the name e.g. "Next.js: debug server-side" a subsequent F5 will not as for name and will use the prevouse.

If you want to choose new name you need to click "Run and Debug" or shortcut  "Ctrl + shift + D"  and than click F5

<h2>Technologies Used</h2>
next.js
typescript
vscode

<h2>Basic launch.json concepts</h2>
<p>Here is a breakdown of the key concepts and properties used in a <code>launch.json</code> file for debugging in VS Code:</p>
<ul>
<li>
<strong>name</strong>: A user-friendly name for the launch configuration that appears in the VS Code dropdown menu.
</li>
<li>
<strong>type</strong>: The type of debugger to use. Common values include <code>node</code> for Node.js, <code>chrome</code> for Chrome-based browsers, and <code>firefox</code> for Firefox.
</li>
<li>
    <strong>request</strong>: The mode of the debugger. <code>launch</code> starts a new Node.js process (Next.js app) to debug, while <code>attach</code> connects to an already running Node.js process (Next.js app).
</li>
<strong>command</strong>: Used with <code>type: "node-terminal"</code>, this specifies the shell command to run to start the application, such as <code>npm run dev</code>.
</li>
<li>
<strong>url</strong>: The URL that the debugger should open and attach to when the debug session starts. This is typically used for client-side debugging configurations.
</li>
<li>
<strong>reAttach</strong>: A boolean property that, if set to <code>true</code>, allows the debugger to automatically reattach to the target if it disconnects and reconnects, which is useful for debugging server restarts.
</li>
<li>
<strong>pathMappings</strong>: An array of objects that map URLs or paths from the server to the corresponding local file system paths. This is crucial for source-level debugging of web content.
</li>
<li>
<strong>runtimeArgs</strong>: An array of command-line arguments to pass to the runtime executable. For Node.js, this is often used to pass flags like <code>--inspect</code> to enable debugging.
</li>
<li>
<strong>skipFiles</strong>: An array of file globs to skip while debugging. This is useful for stepping over library code or other files you don't need to debug.
</li>
<li>
<strong>serverReadyAction</strong>: An object that specifies an action to perform once a server, started by the debugger, is ready. It can be used to automatically launch a browser to a specific URL.
</li>
<li>
<strong>workspaceFolder</strong>: A predefined variable in VS Code that represents the path to the folder opened in the current workspace. It's often used to construct paths for programs or files.
</li>
</ul>


<h2>Code (configuration)</h2>

This is the launch.json file

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug client-side (Firefox)",
      "type": "firefox",
      "request": "launch",
      "url": "http://localhost:3000",
      "reAttach": true,
      "pathMappings": [
        {
          "url": "webpack://_N_E",
          "path": "${workspaceFolder}"
        }
      ]
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/next/dist/bin/next",
      "runtimeArgs": ["--inspect"],
      "skipFiles": ["<node_internals>/**"],
      "serverReadyAction": {
        "action": "debugWithEdge",
        "killOnServerStop": true,
        "pattern": "- Local:.+(https?://.+)",
        "uriFormat": "%s",
        "webRoot": "${workspaceFolder}"
      }
    }
  ]
}
```

<h2>Demo</h2>

<h3>Debug sever code : middleware</h3>
<ol>
<li>
<strong>Put a breakpoint</strong>  on line 5 of your <code>middleware.ts</code> file.
</li>
<li>
<strong>Start the server</strong> : Click "Run and Debug" (or use the shortcut <code>Ctrl + Shift + D</code>) and select "Next.js: debug server-side" and hit F5. This will start your Next.js app in debug mode.
</li>
<li>
<strong>Navigate</strong> : In the VS Code debug console or terminal, click on the <code>http://localhost:3000/</code> link that appears. This will open the page in your browser and trigger the middleware.
</li>
<li>
<strong>Use the debug icons</strong> : Once the breakpoint is hit, you can use the debug icons to step through the code, inspect variables, and continue execution.
</li>
</ol>
<p>
For all subsequent debugging sessions, you can simply press <code>F5</code> as VS Code remembers the last configuration you used.
</p>

The following is an image of breakpoint hit

<img src='./figs/debug-middleware.png'>

<h3>Debug sever code : server component</h3>
Follow the steps of Debug middleware just put the breakpoint in the Hpme page at line 4


The following is an image of breakpoint hit

<img src='./figs/debug-server-component.png'>

<h3>Debug client code : client component</h3>

<ol>
<li>
<strong>Put a breakpoint</strong> on line 5 of app/page1/page.tsx.
</li>
<li><strong>Start the server</strong> Open your terminal and run the development server manually

```bash
npm run dev
```

</li>
<li>
<strong>Attach the debugger</strong>: Once the server is running, switch to the "Run and Debug" view in VS Code and select the "Next.js: debug client-side" configuration
</li>
<li>
<strong>Start the debugger</strong>: hit F5 or click the green arrow. The debugger will open a new browser window or tab with http://localhost:3000 and attach the debugging tools, allowing you to hit breakpoints in your client components.
</li>
<li><strong>Navigate</strong> in the opened browser to http://localhost:3000/page1 </li>
<li>
<strong>Use the debug icons</strong> once the breakpoint is hit, to step through the code, inspect variables, and continue execution.
</li>
</ol>
<p>

For all subsequent debugging sessions, you can simply press <code>F5</code> as VS Code remembers the last configuration you used.
</p>

The following is an image of breakpoint hit

<img src='./figs/debug-client-component.png'/>


<h3>Debug client code and server side</h3>


<p>
    Using the <strong>"Next.js: debug full stack"</strong> configuration is the most efficient way to debug both your server and client components at the same time. This single configuration automates the process of starting the Next.js development server and attaching both the Node.js (server) and browser (client) debuggers.
</p>

<h4>Step-by-Step Guide</h4>
<ol>
    <li>
        <strong>Set your breakpoints</strong>: Place breakpoints in your code wherever you need them, whether that's in a server component, client component, middleware, or server action.
    </li>
    <li>
        <strong>Start the debugger</strong>: In VS Code's "Run and Debug" view, select the "Next.js: debug full stack" configuration from the dropdown menu and press the green play button. VS Code will automatically start the Next.js server and launch a new browser window.
    </li>
    <li>
        <strong>Trigger the breakpoints</strong>: Navigate to the page you want to debug in the new browser window. The debugger will pause at your breakpoints, allowing you to inspect variables and step through your code on both the server and the client.
    </li>
</ol>

<h4>How It Works</h4>
<p>
    The <code>serverReadyAction</code> property in this configuration is key. It tells VS Code to monitor the terminal output for the <code>Local:</code> URL and, once it finds it, to automatically launch a browser and attach a debugger. This is what provides the seamless, integrated debugging experience.
</p>



 

<h2>open issues</h2>
<ul>
    <li>when to use 'Next.js: debug full stack' / "Next.js: debug client-side" / Next.js: debug server-side</li>
    <li>how monorepo fits here</li>
</ul>

<h2>Points of Interest</h2>
<ul>
    <li>...</li>
   
</ul>

<h2>References</h2>
<ul>
    <li><a href='https://nextjs.org/docs/app/guides/debugging'>Official next.js docs : How to use debugging tools with Next.js</a></li>
    <li><a href='https://youtu.be/6-EczMn-BeU?si=gOeUhjHLeb1Gr1Vv'> node debugging is easy with vs code </a></li>
    <li><a href='https://www.youtube.com/watch?v=_5mGxLZ61J0'> Debugging Next.js in VSCode and Chrome DevTools (comprehensive guide) </a></li>
   
</ul>
