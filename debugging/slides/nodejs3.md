### request : launch

Start a program or load an URL

### request : attach

Hook onto a running application running in debug mode:

```bash
node --inspect myApp.js
```

---

### skipFiles

- Reduce the "noise" coming from npm packages
- See also: `debug.javascript.autoAttachSmartPattern`

### args

Command line parameters

### env & envFile

Environment parameters

[Full details](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

---

## ![Debug Buttons](img/DebugButtons.png)

From left to right:

- continue (F5)
- run statement / step over (F10)
- step into (F11)
- step out (shift-F11)
- restart (Cmd-shift-F5)
- stop (shift-f5)
