const studentId = "2963037";
const init = () => {
    document.querySelector("#newTask").addEventListener("click", processClick);
}

const processClick = () => {
    let url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks";
    let taskDescription = document.querySelector("#task").value;
    let params = {
        'StudentId': studentId,
        'Description': taskDescription
    };

    ajaxReqest(url, "post", addNewTask, params);
}

const ajaxReqest = (url, method, callback, params, requestType) => {
    let apiKey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
    let xhr = new XMLHttpRequest();

    xhr.open(method, url);

    if (method == "post") {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("x-api-key", apiKey);
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (requestType == "JSON") {
                callback(JSON.parse(xhr.responseText));
            } else if (requestType == "XML") {
                callback(xhr.responseXML);
            } else {
                callback(xhr.responseText);
            }
        }
    }
    if (method == "get") {
        xhr.send(null);
    } else if (method == "post") {
        xhr.send(JSON.stringify(params));
    }

}

const addNewTask = task => {
    console.log("new record was added");
}

const displayTasks = () => {

}
window.onload = init;
