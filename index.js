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
                    console.log("Coppied to clipboard")
                });
        });
    });
}

function changeImage() {
    var img = document.getElementsByClassName("loved")[0];
    img.src="deez nuts";
    return false;
}

function dosubmit (event) {
    event.preventDefault();
    let pfp = document.getElementById("pfp_img")
    pfp.src = document.getElementById("profile").value
    console.log(document.getElementById("profile").value)
    pfp.alt="fuck"
}