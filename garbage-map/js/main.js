var Main = (function() {
    var url = {
        "productUrl" : "/api/v1/product"
    }

    var productModel = {
        productId : 0,
        productName : "",
        set : function() {
            this.productId = document.getElementById("productId").value;
            this.productName = document.getElementById("productName").value;
        }
    }

    var view = {
        render : function(data) {
            document.getElementById("data").textContent = JSON.stringify(data);
        }
    }

    var service = {
        search : function() {
            return fetch(url.productUrl).then(function(response) {
                return response.json();
            });
        },
        add : function(data) {
            return fetch(url.productUrl, {
                method : 'post',
                headers : new Headers({
                    "Content-type": "application/json"
                }),
                body : data
            })
        }
    }

    return {
        init : function() {
            service.search().then(function(json) {
                view.render(json);
            });

            var submitDom = document.getElementById("submit");
            submitDom.addEventListener("click", function() {
                productModel.set();
                var data = JSON.stringify(productModel);
                service.add(data).then(function(res) {
                    if (res.ok) {
                        service.search().then(function(json) {
                            view.render(json);
                        });
                    } else {
                        window.alert("error occured");
                    }
                })
            });
        }
    }
})();

Main.init();