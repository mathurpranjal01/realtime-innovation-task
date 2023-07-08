window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
if(window.indexedDB){
    //alert("Browser not supported IndexDB");
}

var db;
const request = window.indexedDB.open("employee_list",1);
request.onerror = function(event){
    console.log("Error: " + event.target.result);
};

request.onsuccess = function(event){
    db = request.result;
    console.log("Success" + db);
};

request.onupgradeneeded = function(event){
    var db = request.result;
    var objectStore = db.createObjectStore("employee_list_db");
}