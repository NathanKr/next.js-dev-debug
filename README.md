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

<ol>
<li>create .vscode/launch.json in the project root using <a href='https://nextjs.org/docs/app/guides/debugging'>this</a><li>
</ol>

<h2>Usage</h2>
....

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

<!-- <h2>Basic launch.json concepts (or debug concepts ??)</h2>

name
type
request
command
url
reAttach
pathMappings
runtimeArgs
skipFiles
serverReadyAction
workspaceFolder -->

<h2>Code Structure</h2>

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
....

<h2>open issues</h2>
<ul>
    <li>when to use 'Next.js: debug full stack' / "Next.js: debug client-side" / Next.js: debug server-side</li>
    <li>how to create the json file and how to debug</li>
    <li>can i simply use the json file in reference 1</li>
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
