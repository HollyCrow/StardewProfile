function copy(){
    html2canvas(document.querySelector("#main")).then(canvas => {
        canvas.toBlob(function(blob) {
            navigator.clipboard
                .write([
                    new ClipboardItem(
                        Object.defineProperty({}, blob.type, {
                            value: blob,
                            enumerable: true
                        })
                    )
                ])
                .then(function() {
                    // do something
                });
        });
        // console.log(canvas.toDataURL())
        // document.body.appendChild(canvas)
    });
}