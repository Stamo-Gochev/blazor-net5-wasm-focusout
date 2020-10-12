# blazor-net5-wasm-focusout

## Steps to reproduce

1. Set the [TestNet5Wasm.Server](https://github.com/Stamo-Gochev/blazor-net5-wasm-focusout/tree/master/TestNet5Wasm/TestNet5Wasm/Server) as a startup project.
2. Run the app (Ctrl + F5)
3. On the `Index.razor` page, click on `item 1`

#### Expected:
No error is thrown

#### Actual:
An error is thrown
> Uncaught (in promise) Error: Assertion failed - heap is currently locked
    at y (blazor.webassembly.js:1)
    at Object.beginInvokeDotNetFromJS (blazor.webassembly.js:1)

Using a `@onfocusout` handler does not solve the issue (click on `item 2` to reproduce) as it rhows with another error:
>  Error: System.ArgumentException: There is no event handler associated with this event. EventId: '3'. (Parameter 'eventHandlerId'

> **IMPORTANT:** The issue is not reproducible with the 3.1 version - use the same steps to reproduce as the above with the [TestNet31Wasm](https://github.com/Stamo-Gochev/blazor-net5-wasm-focusout/tree/master/TestNet5Wasm/TestNet31Wasm) app.
