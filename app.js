var sneakers = {
    nike: {
        nikeType1: {
            brand: "NIKE",
            name: "Dunk Parra Abstract Art",
            price: 10_800,
            image: "url(images/nike-type-1.jpg)"
        },
        nikeType2: {
            brand: "NIKE",
            name: "Air Jordan 4 Seafoam",
            price: 13_600,
            image: "url(images/nike-type-2.jpg)"
        },
        nikeType3: {
            brand: "NIKE",
            name: "Air Jordan 3 Retro Fire",
            price: 8_200,
            image: "url(images/nike-type-3.jpg)"
        },
        nikeType4: {
            brand: "NIKE",
            name: "Air Jordan 5 X Supreme",
            price: 9_400,
            image: "url(images/nike-type-4.jpg)"
        },
        nikeType5: {
            brand: "NIKE",
            name: "Air Max Pulse",
            price: 10_300,
            image: "url(images/nike-type-5.jpg)"
        },
        nikeType6: {
            brand: "NIKE",
            name: "Air Force 1",
            price: 7_700,
            image: "url(images/nike-type-6.jpg)"
        },
        nikeType7: {
            brand: "NIKE",
            name: "Air Jordan 1 Flight Club",
            price: 11_600,
            image: "url(images/nike-type-7.jpg)"
        },
        nikeType8: {
            brand: "NIKE",
            name: "VaporMax 2023",
            price: 12_200,
            image: "url(images/nike-type-8.jpg)"
        }
    },
    adidas: {
        adidasType1: {
            brand: "ADIDAS",
            name: "Yeezy Boost 350 V2",
            price: 10_000,
            image: "url(images/adidas-type-1.jpg)"
        },
        adidasType2: {
            brand: "ADIDAS",
            name: "AdiFOM Q",
            price: 9_900,
            image: "url(images/adidas-type-2.jpg)"
        },
        adidasType3: {
            brand: "ADIDAS",
            name: "UltraBoost 22",
            price: 8_100,
            image: "url(images/adidas-type-3.jpg)"
        },
        adidasType4: {
            brand: "ADIDAS",
            name: "Alpha Bounce Beyond M",
            price: 11_500,
            image: "url(images/adidas-type-4.jpg)"
        },
        adidasType5: {
            brand: "ADIDAS",
            name: "Superstar x Indigo",
            price: 7_600,
            image: "url(images/adidas-type-5.jpg)"
        },
        adidasType6: {
            brand: "ADIDAS",
            name: "4DFWD Pulse",
            price: 11_900,
            image: "url(images/adidas-type-6.jpg)"
        },
        adidasType7: {
            brand: "ADIDAS",
            name: "Adizero Ubersonic 4",
            price: 6_600,
            image: "url(images/adidas-type-7.jpg)"
        },
        adidasType8: {
            brand: "ADIDAS",
            name: "XPLR Boost",
            price: 6_800,
            image: "url(images/adidas-type-8.jpg)"
        }
    },
    puma: {
        pumaType1: {
            brand: "PUMA",
            name: "Lamelo Ball MB.02",
            price: 13_300,
            image: "url(images/puma-type-1.jpg)"
        },
        pumaType2: {
            brand: "PUMA",
            name: "St Runner V2",
            price: 7_100,
            image: "url(images/puma-type-2.jpg)"
        },
        pumaType3: {
            brand: "PUMA",
            name: "Run XX",
            price: 9_900,
            image: "url(images/puma-type-3.jpg)"
        },
        pumaType4: {
            brand: "PUMA",
            name: "RS-X Hard",
            price: 10_800,
            image: "url(images/puma-type-4.jpg)"
        },
        pumaType5: {
            brand: "PUMA",
            name: "BMW M Motorsport LGND",
            price: 13_000,
            image: "url(images/puma-type-5.jpg)"
        },
        pumaType6: {
            brand: "PUMA",
            name: "PERKS AND MINI",
            price: 7_500,
            image: "url(images/puma-type-6.png)"
        },
        pumaType7: {
            brand: "PUMA",
            name: "Plexus Elektrogreen",
            price: 10_400,
            image: "url(images/puma-type-7.jpg)"
        },
        pumaType8: {
            brand: "PUMA",
            name: "Scuderia Ferrari Speedcat",
            price: 8_500,
            image: "url(images/puma-type-8.jpg)"
        }
    },
    reebok: {
        reebokType1: {
            brand: "REEBOK",
            name: "Zig Dynamica",
            price: 12_700,
            image: "url(images/reebok-type-1.jpg)"
        },
        reebokType2: {
            brand: "REEBOK",
            name: "Flexagon Force 4",
            price: 8_400,
            image: "url(images/reebok-type-2.jpg)"
        },
        reebokType3: {
            brand: "REEBOK",
            name: "Nano 2.0",
            price: 11_100,
            image: "url(images/reebok-type-3.jpg)"
        },
        reebokType4: {
            brand: "REEBOK",
            name: "Shaq Attaq",
            price: 13_300,
            image: "url(images/reebok-type-4.jpg)"
        },
        reebokType5: {
            brand: "REEBOK",
            name: "The Answer DMX",
            price: 9_500,
            image: "url(images/reebok-type-5.png)"
        },
        reebokType6: {
            brand: "REEBOK",
            name: "Pump Omni Zone",
            price: 11_500,
            image: "url(images/reebok-type-6.png)"
        },
        reebokType7: {
            brand: "REEBOK",
            name: "Question SNS",
            price: 9_800,
            image: "url(images/reebok-type-7.png)"
        },
        reebokType8: {
            brand: "REEBOK",
            name: "Club C 85",
            price: 6_700,
            image: "url(images/reebok-type-8.png)"
        }
    }
}

var nikeBtn = document.getElementById("nike");
var adidasBtn = document.getElementById("adidas");
var pumaBtn = document.getElementById("puma");
var reebokBtn = document.getElementById("reebok");
var productDisplayArea = document.getElementById("product-display-area");

nikeBtn.addEventListener("click", function () {
    filterAndGenerateCards("nike");
});
adidasBtn.addEventListener("click", function () {
    filterAndGenerateCards("adidas");
});
pumaBtn.addEventListener("click", function () {
    filterAndGenerateCards("puma");
});
reebokBtn.addEventListener("click", function () {
    filterAndGenerateCards("reebok");
});

function filterAndGenerateCards(brand) {
    productDisplayArea.innerHTML = "";
    for (var key in sneakers) {
        if (brand == key) {
            break;
        }
    }
    // console.log(sneakers[key])
    for (var type in sneakers[key]) {
        console.log(sneakers[key][type])
        productDisplayArea.innerHTML += `
        <div class="card-container col-lg-3 col-md-4 col-sm-6 animate__animated animate__zoomIn">
        <div class="card">
          <div class="card-image-area" style="background-image: ${sneakers[key][type].image}">
          </div>
          <div class="card-body">
            <h5 class="card-title company-name">${sneakers[key][type].brand}</h5>
            <h5 class="card-title">${sneakers[key][type].name}</h5>
            <p class="card-text">Rs ${sneakers[key][type].price}</p>
          </div>
        </div>
      </div>
        `
    }
    // console.log(productDisplayArea.innerHTML)
};

function showAllProductsFirst() {
    for (var key in sneakers) {
        for (var type in sneakers[key]) {
            // console.log(sneakers[key][type]);
            productDisplayArea.innerHTML += `
            <div class="card-container col-lg-3 col-md-4 col-sm-6 animate__animated animate__zoomIn">
            <div class="card">
              <div class="card-image-area" style="background-image: ${sneakers[key][type].image}">
              </div>
              <div class="card-body">
                <h5 class="card-title company-name">${sneakers[key][type].brand}</h5>
                <h5 class="card-title">${sneakers[key][type].name}</h5>
                <p class="card-text">Rs ${sneakers[key][type].price}</p>
              </div>
            </div>
          </div>
            `
        }
    }
}

showAllProductsFirst();