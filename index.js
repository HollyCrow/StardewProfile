function copy() {
    html2canvas(document.querySelector("#main")).then(canvas => {
        canvas.toBlob(function (blob) {
            navigator.clipboard
                .write([
                    new ClipboardItem(
                        Object.defineProperty({}, blob.type, {
                            value: blob,
                            enumerable: true
                        })
                    )
                ])
                .then(function () {
                    console.log("Coppied to clipboard")
                });
        });
    });
}

function dosubmit (event) {
    event.preventDefault();

    let name = document.getElementById("name_input").value;
    let bio = document.getElementById("bio_input").value;
    let pet = document.getElementById("pet_input").value;
    let horse = document.getElementById("horse_input").value;
    let birthmonth = document.getElementById("birthmonth_input").value;
    let birthday = document.getElementById("birthday_input").value;
    let full = document.getElementById("fullbody_input").value;
    let pfp = document.getElementById("pfp_input").value;

    console.log(birthmonth)

    document.getElementById("name").innerHTML = name
    document.getElementById("bio").innerHTML = bio
    document.getElementById("petname").innerHTML = pet
    document.getElementById("horsename").innerHTML = horse
    document.getElementById("season").innerHTML = birthmonth
    document.getElementById("day0").innerHTML = Math.floor(birthday/10).toString()
    document.getElementById("day1").innerHTML = (birthday-(Math.floor(birthday/10)*10)).toString()

    // document.getElementById("name").innerHTML = name


    // pfp.src = document.getElementById("profile").value
    // console.log(document.getElementById("profile").value)
    //pfp.alt="fuck"
}