(function () {
    window.invokeFocusOut = function() {
        DotNet.invokeMethodAsync("TestNet5Wasm", "Custom_FocusOut");
    }

    window.document.addEventListener("focusout", function (e) {
        console.log("focus out: " + new Date());

        if (e.target.classList.contains("list-item")) {
            invokeFocusOut();
        }
    });

})();