const pets = {
    "Cat 1": "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1e/Cat_1.png/48px-Cat_1.png",
    "Cat 2": "https://stardewvalleywiki.com/mediawiki/images/thumb/8/83/Cat_2.png/48px-Cat_2.png",
    "Cat 3": "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ec/Cat_3.png/48px-Cat_3.png",
    "Dog 1": "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a4/Dog_1.png/48px-Dog_1.png",
    "Dog 2": "https://stardewvalleywiki.com/mediawiki/images/thumb/b/bb/Dog_2.png/48px-Dog_2.png",
    "Dog 3": "https://stardewvalleywiki.com/mediawiki/images/thumb/f/fc/Dog_3.png/48px-Dog_3.png",
    "Horse": "https://stardewvalleywiki.com/mediawiki/images/c/c3/Horse.png"
}
const villagers = {
    "null": "http://fc09.deviantart.net/fs70/f/2012/121/4/9/transparent__blank__by_madhatter2408-d4y5rky.png",
    "Alex": "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
    "Elliott": "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
    "Harvey": "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
    "Sam": "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
    "Sebastian": "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
    "Shane": "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
    "Abigail": "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
    "Emily": "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
    "Haley": "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
    "Leah": "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
    "Maru": "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
    "Penny": "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
    // --
    "Caroline": "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png",
    "Clint": "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
    "Demitrius": "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
    "Dwarf": "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png",
    "Evelyn": "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png",
    "George": "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png",
    "Gus": "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png",
    "Jas": "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png",
    "Jodi": "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png",
    "Kent": "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png",
    "Krobus": "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png",
    "Leo": "https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png",
    "Lewis": "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png",
    "Linus": "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png",
    "Marnie": "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png",
    "Pam": "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png",
    "Pierre": "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png",
    "Robin": "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
    "Sandy": "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png",
    "Vincent": "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png",
    "Willy": "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
    "Wizard": "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png"
}

window.onload = function() {
    let villager_html = ""
    for ([key, value] of Object.entries(villagers)){
        villager_html += `<option value="${value}">${key}</option>`
    }
    // console.log(villager_html)
    // console.log(document.getElementById("first_friend").innerHTML)
    // let first_friend = document.getElementById("first_friend")
    let friends = document.getElementsByClassName("friend")
    for (let f = 0; f < friends.length; f++){
        friends[f].innerHTML = villager_html
    }
    // first_friend.innerHTML = villager_html
}


function copy() {
    html2canvas(document.querySelector("#main"), {
        useCORS: true
    }).then(canvas => {
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
    let friends_input = document.getElementsByClassName("friend")
    let loved_input = document.getElementsByClassName("love_input")
    let hate_input = document.getElementsByClassName("hate_input")

    document.getElementById("name").innerHTML = name
    document.getElementById("bio").innerHTML = bio
    document.getElementById("petname").innerHTML = pet
    document.getElementById("horsename").innerHTML = horse
    document.getElementById("season").innerHTML = birthmonth
    document.getElementById("day0").innerHTML = Math.floor(birthday/10).toString()
    document.getElementById("day1").innerHTML = (birthday-(Math.floor(birthday/10)*10)).toString()
    document.getElementById("pet_img").src = pets[pet_type]
    if (pfp == ""){
        document.getElementById("pfp_img").src = "http://fc09.deviantart.net/fs70/f/2012/121/4/9/transparent__blank__by_madhatter2408-d4y5rky.png"
    }else{
        document.getElementById("pfp_img").src = pfp
    }
    if (full == ""){
        document.getElementById("full-image").src = "http://fc09.deviantart.net/fs70/f/2012/121/4/9/transparent__blank__by_madhatter2408-d4y5rky.png"
    }else{
        document.getElementById("full-image").src = full
    }


    let friend_images = document.getElementsByClassName("friend_images")
    console.log(friend_images[0].src)
    console.log(friends_input[0])
    for (let f=0; f < friend_images.length; f++){
        friend_images[f].src = friends_input[f].value
    }



    let loved_images = document.getElementsByClassName("loved")
    console.log(loved_images[0].src)
    console.log(loved_input[0])
    for (let f=0; f < loved_images.length; f++){
        loved_images[f].src = loved_input[f].value
        if (loved_input[f].value == ""){
            loved_images[f].src = "http://fc09.deviantart.net/fs70/f/2012/121/4/9/transparent__blank__by_madhatter2408-d4y5rky.png"
        }
    }

    let hated_images = document.getElementsByClassName("hated")
    console.log(hated_images[0].src)
    console.log(hate_input[0])
    for (let f=0; f < hated_images.length; f++){
        hated_images[f].src = hate_input[f].value
        if (hate_input[f].value == ""){
            hated_images[f].src = "http://fc09.deviantart.net/fs70/f/2012/121/4/9/transparent__blank__by_madhatter2408-d4y5rky.png"
        }
    }


    // document.getElementById("name").innerHTML = name


    // pfp.src = document.getElementById("profile").value
    // console.log(document.getElementById("profile").value)
    //pfp.alt="fuck"
}