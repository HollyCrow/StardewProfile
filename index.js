const pets = {
    "cat 1": "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1e/Cat_1.png/48px-Cat_1.png",
    "cat 2": "https://stardewvalleywiki.com/mediawiki/images/thumb/8/83/Cat_2.png/48px-Cat_2.png",
    "cat 3": "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ec/Cat_3.png/48px-Cat_3.png",
    "dog 1": "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a4/Dog_1.png/48px-Dog_1.png",
    "dog 2": "https://stardewvalleywiki.com/mediawiki/images/thumb/b/bb/Dog_2.png/48px-Dog_2.png",
    "dog 3": "https://stardewvalleywiki.com/mediawiki/images/thumb/f/fc/Dog_3.png/48px-Dog_3.png",
    "horse": "https://stardewvalleywiki.com/mediawiki/images/c/c3/Horse.png"
}

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
    let pet_type = document.getElementById("pettype_input").value;
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
    document.getElementById("pet_img").src = pets[pet_type]

    // document.getElementById("name").innerHTML = name


    // pfp.src = document.getElementById("profile").value
    // console.log(document.getElementById("profile").value)
    //pfp.alt="fuck"
}



