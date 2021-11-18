var str = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
var url = new URL(str);
var search_params = new URLSearchParams(url.search)


if(search_params.has('id')) {
        var id = url.searchParams.get('id');
        console.log(id);
}


document.querySelector('#orderId').innerHTML += `${id}`