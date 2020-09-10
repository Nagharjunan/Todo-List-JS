// obj = {};
// document.getElementById("textbox").addEventListener("keydown",function(event){
//     if(event.keyCode != 13)
//      {

//      }
//      else if(event.keyCode == 13)
//          {
//              var val = event.target.value;
//              obj.dispVal(val)
//          }
// })
// obj = {
//     dispVal: function(val){
//         document.getElementById("clickme").addEventListener("click",function() {
//         var etr1 = document.createElement("div");
//         var h = document.createElement("h2");
//         h.innerText = "asda";
//         etr1.appendChild(h);
//         document.querySelector(".dark").appendChild(etr1);
// })

//     },

// }

// Approach 1

// document.getElementById("textbox").addEventListener("keydown",function(event){
//     if(event.keyCode != 13)
//         {

//         }
//         else if(event.keyCode == 13)
//             {
//                  var val = event.target.value;
//                 var etr1 = document.createElement("div");
//                 var h = document.createElement("h2");
//                 h.setAttribute("class","new_h");
//                 var but = document.createElement("button");
//                 but.setAttribute("class","new_but");
//                 but.innerText = "Completed";
//                 h.innerText = val;
//                 etr1.appendChild(h);
//                 etr1.appendChild(but);
//                 document.querySelector(".dark").appendChild(etr1);

//     but.addEventListener("click",function(event){

//         document.querySelector(".new_h").style.backgroundColor = "green";

//     })
//             }
// })

// document.getElementById("clickme").addEventListener("click",function() {

//     var etr1 = document.createElement("div");
//     var h = document.createElement("h2");
//     h.setAttribute("class","new_h");
//     var but = document.createElement("button");
//     but.setAttribute("class","new_but");
//     var ds = document.querySelector("#textbox");
//     ds = ds.value;
//     but.innerText = "Completed";
//     h.innerText = ds;
//     etr1.appendChild(h);
//     etr1.appendChild(but);

//     document.querySelector(".dark").appendChild(etr1);
//     but.addEventListener("click",function(event){
//         console.log(event.target.parentNode);
//         // document.querySelector(".new_h").style.backgroundColor = "green";
//         // document.querySelector(".new_h").parentElement
//     })

// })

// document.getElementById("new_but")

// approch 1 class based and prototyping

// var arr = [];

// document.getElementById("textbox").addEventListener("keydown",function(event){
//     if(event.keyCode == 13) {
//         arr.push(event.target.value);
//         var t = new operations(event.target.value);
//         t.addNewTodo();
//         t.completeTodo;
//         // operations.addNewTodo(event.target.value);
//         // todoObj.clearInputBox();
//         // console.log(todoObj.todos);
//     }
// });

// document.getElementById("clickme").addEventListener("click",function() {
//     var ds = document.querySelector("#textbox");
//     var t = new operations(ds.value);
//     arr.push(ds.value);
//     t.addNewTodo();
//     // t.completeTodo;
//     // todoObj.clearInputBox();
// });

// class operations {
//     constructor(user_input){
//         this.input = user_input;
//     }
//     completeTodo(){
//         console.log(test1);

//         // this.todos.push(todoName);
//         // this.markCompleted(but);
//         // this.deleteContent(del_but);
//         // this.editContent(edit_but);
//     }

// }

// operations.prototype.addNewTodo = function(){

//     var divEl = document.createElement("div");
//     divEl.setAttribute("class","child");

//     var h = document.createElement("h2");
//     h.setAttribute("class","new_h"+arr.length);

//     var but = document.createElement("button");
//     but.setAttribute("class","new_but"+arr.length);
//     but.innerText = "Completed";

//     var del_but = document.createElement("button");
//     del_but.setAttribute("class","del_but"+arr.length);
//     del_but.innerText = "Delete";

//     var edit_but = document.createElement("button");
//     edit_but.setAttribute("class","edit_but"+arr.length);
//     edit_but.innerText = "Edit";

//     h.innerText = this.input;
//     divEl.appendChild(h);
//     divEl.appendChild(but);
//     divEl.appendChild(del_but);
//     divEl.appendChild(edit_but);

//     document.querySelector(".wrapper").appendChild(divEl);
//     var test = "test";
//     operations.completeTodo(test);

// }

// approach 2 class based without prototyping

// var parentSelector;
// var arr = [];
// update_flag = "false";
// document
//   .getElementById("textbox")
//   .addEventListener("keydown", function (event) {
//     if (update_flag == "false") {
//       if (event.keyCode == 13) {
//         arr.push(event.target.value);
//         var t = new operations(event.target.value);
//         t.newTodo();
//       }
//     } else {
//       if (event.keyCode == 13) {
//         let text = document.querySelector("#textbox").value;
//         var y = new edit_remove();
//         // y.edit(text);
//         var arr_start = parseInt(update_flag);
//         arr.splice(arr_start, 1, text);
//         console.log(arr);
//         var updateH = document.querySelector("." + parentSelector);
//         updateH.innerText = text;
//         update_flag = "false";

//         // var y = new edit_remove();
//         // y.edit(text);
//       }
//     }
//   });

// document.getElementById("clickme").addEventListener("click", function () {
//   var ds = document.querySelector("#textbox");
//   var t = new operations(ds.value);
//   arr.push(ds.value);
//   t.newTodo();
// });

// class operations {
//   parentDiv1 = 0;
//   constructor(user_input) {
//     this.input = user_input;
//     console.log(this.parentDiv1);
//   }

//   newTodo = () => {
//     var divEl = document.createElement("div");
//     divEl.setAttribute("class", "child");

//     var h = document.createElement("h2");
//     h.setAttribute("class", "new_h" + arr.length);

//     var complete_but = document.createElement("button");
//     complete_but.setAttribute("class", "new_but" + arr.length);
//     complete_but.innerText = "Completed";

//     var del_but = document.createElement("button");
//     del_but.setAttribute("class", "del_but" + arr.length);
//     del_but.innerText = "Delete";

//     var edit_but = document.createElement("button");
//     edit_but.setAttribute("class", "edit_but" + arr.length);
//     edit_but.innerText = "Edit";

//     h.innerText = this.input;
//     divEl.appendChild(h);
//     divEl.appendChild(complete_but);
//     divEl.appendChild(del_but);
//     divEl.appendChild(edit_but);

//     document.querySelector(".wrapper").appendChild(divEl);
//     this.completeTodo(complete_but);
//     this.deleteTodo(del_but);
//     this.editTodo(edit_but);
//     console.log(this.parentDiv1);

//     this.clearText();
//     console.log(arr);
//   };

//   completeTodo = (complete_button) => {
//     complete_button.addEventListener("click", function (event) {
//       var parentDiv = event.target.parentNode;
//       parentDiv.querySelector("h2").style.backgroundColor = "green";
//       console.log(this.parentDiv1);
//     });
//   };

//   deleteTodo(delete_button) {
//     delete_button.addEventListener("click", function (event) {
//       let parent = event.target.parentNode;
//       let text_value = parent.querySelector("h2").innerText;
//       var y = new edit_remove();
//       y.check(text_value);
//       parent.remove();
//     });
//   }

//   editTodo = (edit_button) => {
//     edit_button.addEventListener("click", function (event) {
//       var parentDiv = event.target.parentNode;
//       //   console.log(parentDiv);
//       let text = parentDiv.querySelector("h2").innerText;
//       let replace = document.querySelector("#textbox");
//       replace.value = text;
//       var y = new edit_remove();
//       var parse = y.edit(text);
//       // console.log(update_flag);
//       update_flag = parse + "true";
//       console.log(update_flag);
//       parentSelector = parentDiv.querySelector("h2");
//       //   console.log(test2);
//     });
//   };

//   // check(match){
//   //     for(i=0;i<=arr.length;i++){
//   //         if(match == arr[i]){
//   //             console.log(i);
//   //         }
//   //     }
//   // }

//   clearText() {
//     let parent = document.querySelector("#textbox");
//     parent.value = "";
//   }
// }

// class edit_remove {
//   constructor() {}

//   check(test) {
//     for (var i = 0; i <= arr.length; i++) {
//       if (test == arr[i]) {
//         arr.splice(i, 1);
//         return i;
//       }
//     }
//   }
//   edit(text) {
//     for (var i = 0; i <= arr.length; i++) {
//       if (text == arr[i]) {
//         return i;
//       }
//     }

//     // var val = document.querySelector("#textbox").value;
//     // arr.splice(s,1,val);
//     // console.log(arr);
//     // return i;
//   }
// }

// APPROACH 3 CLASS BASED FINAL

var cls_name;
var arr = [];
update_flag = "false";
document
  .getElementById("textbox")
  .addEventListener("keydown", function (event) {
    if (update_flag == "false") {
      if (event.keyCode == 13) {
        addNew();
      }
    } else {
      if (event.keyCode == 13) {
        updateValue();
      }
    }
  });

document.getElementById("clickme").addEventListener("click", function () {
  if (update_flag == "false") {
    addNew();
  } else {
    updateValue();
  }
});

function addNew() {
  var text_value = document.querySelector("#textbox").value;
  arr.push(text_value);
  var t = new operations(text_value);
  t.newTodo();
  clearBox();
}

function updateValue() {
  let final_val = document.querySelector("#textbox").value;
  let check = document.querySelector("." + cls_name);
  for (var i = 0; i < arr.length; i++) {
    if (check.innerText == arr[i]) {
      arr.splice(i, 1, final_val);
    }
  }
  document.querySelector("." + cls_name).innerText = final_val;
  update_flag = "false";
  console.log(arr);
  clearBox();
}

function clearBox() {
  document.querySelector("#textbox").value = "";
}

class operations {
  constructor(user_input) {
    this.user_input = user_input;
  }
  newTodo() {
    var divEl = document.createElement("div");
    divEl.setAttribute("class", "child");

    var heading = document.createElement("h2");
    heading.setAttribute("class", "new_h" + arr.length);

    var complete = document.createElement("button");
    complete.setAttribute("class", "comp_button" + arr.length);
    complete.innerText = "Completed";

    var delete_button = document.createElement("button");
    delete_button.setAttribute("class", "del_button" + arr.length);
    delete_button.innerText = "Delete";

    var edit = document.createElement("button");
    edit.setAttribute("class", "edit_button" + arr.length);
    edit.innerText = "Edit";

    heading.innerText = this.user_input;
    divEl.appendChild(heading);
    divEl.appendChild(complete);
    divEl.appendChild(delete_button);
    divEl.appendChild(edit);
    document.querySelector(".wrapper").appendChild(divEl);

    this.completeTodo(complete);
    this.deleteTodo(delete_button);
    this.editTodo(edit);
    console.log(arr);
  }

  completeTodo(complete) {
    complete.addEventListener("click", function (event) {
      let parent = event.target.parentNode;
      parent.querySelector("h2").style.backgroundColor = "green";
      parent.querySelector("h2").style.color = "white";
      parent.querySelector("h2").style.padding = "4px 15px";
    });
  }

  deleteTodo(delete_button) {
    delete_button.addEventListener("click", function (event) {
      let parent = event.target.parentNode;
      let value = parent.querySelector("h2").innerText;
      var y = new arr_function();
      y.remove_arr_element(value);
      parent.remove();
    });
  }

  editTodo(edit) {
    edit.addEventListener("click", function (event) {
      let parent = event.target.parentNode;
      document.querySelector("#textbox").value = parent.querySelector(
        "h2"
      ).innerText;
      cls_name = parent.querySelector("h2").className;
      update_flag = "true";
      console.log(cls_name);
    });
  }
}

class arr_function {
  constructor() {}
  remove_arr_element(value) {
    for (var i = 0; i <= arr.length; i++) {
      if (value == arr[i]) {
        arr.splice(i, 1);
        console.log(arr);
      }
    }
  }
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Approach 2

// let todoObj ={
//     todos: [],
//     addNewTodo: function (todoName) {
//         var divEl = document.createElement("div");
//         divEl.setAttribute("class","child");

//         var h = document.createElement("h2");
//         h.setAttribute("class",this.todos.length+"new_h");

//         var but = document.createElement("button");
//         but.setAttribute("class",this.todos.length+"new_but");
//         but.innerText = "Completed";

//         var del_but = document.createElement("button");
//         del_but.setAttribute("class",this.todos.length+"del_but");
//         del_but.innerText = "Delete";

//         var edit_but = document.createElement("button");
//         edit_but.setAttribute("class",this.todos.length+"edit_but");
//         edit_but.innerText = "Edit";

//         h.innerText = todoName;
//         divEl.appendChild(h);
//         divEl.appendChild(but);
//         divEl.appendChild(del_but);
//         divEl.appendChild(edit_but);

//         document.querySelector(".wrapper").appendChild(divEl);

//         this.todos.push(todoName);
//         this.markCompleted(but);
//         this.deleteContent(del_but);
//         this.editContent(edit_but);
//     },
//     markCompleted: function(buttonEl) {
//         buttonEl.addEventListener("click",function(event){
//             console.log(event.target.parentNode);
//             let parentDiv = event.target.parentNode;
//             parentDiv.querySelector("h2").style.backgroundColor = "green";
//         })
//     },

//     deleteContent: function(buttonD){
//         buttonD.addEventListener("click",function(event){
//             var element = buttonD.parentNode;
//             var check = todoObj.checkElement(element.querySelector("h2").innerText);
//             todoObj.todos.splice(check,1);
//             console.log(todoObj.todos);
//             element.remove();
//         })
//     },

//     checkElement: function(value1){
//         for(let i=0;i <= todoObj.todos.length;i++){
//             if(value1 == todoObj.todos[i]){
//                 return i;
//             }
//         }
//     },

//     editContent: function(buttonEdit){
//         buttonEdit.addEventListener("click",function(event){
//             var pare = buttonEdit.parentNode;
//             var text = pare.querySelector("h2").innerText;
//             document.getElementById("textbox").value = text;
//             var delVal = buttonEdit;
//             var Val = parseInt(event.target.className); // editBtnClassName
//             todoObj.valueoftext(delVal,Val);
//             // todoObj.deleteContent(buttonEdit);
//             // pare.remove();
//             // var delVal = parseInt(event.target.className);
//             // todoObj.todos.splice(delVal,1)
//             // console.log(todoObj.todos);
//         })
//     },
//     valueoftext: function(modVal,u){
//         var modified = document.getElementById("textbox");
//         modified.addEventListener("keypress",function(event){
//             if(event.keyCode == 46){
//                 todoObj.todos.splice(u,1,event.target.value);
//                 var z = modVal.parentNode;
//                 z.querySelector("h2").innerText = todoObj.todos[u];
//                 todoObj.clearInputBox();
//                 console.log(todoObj.todos);
//             }
//         })

//     },

//     clearInputBox: function() {
//         var ds = document.querySelector("#textbox");
//         ds.value = '';
//     },
// }

// document.getElementById("textbox").addEventListener("keydown",function(event){
//     if(event.keyCode == 13) {
//         todoObj.addNewTodo(event.target.value);
//         todoObj.clearInputBox();
//         // console.log(todoObj.todos);
//     }
// });

// document.getElementById("clickme").addEventListener("click",function() {
//     var ds = document.querySelector("#textbox");
//     todoObj.addNewTodo(ds.value);
//     todoObj.clearInputBox();
// });

//Approch 2 retry:

// toDoList={
//     todo: [],

//     newTodo: function(toDoVar){
//         var divEl = document.createElement("div");
//         divEl.setAttribute("class","child");
//         var h = document.createElement("h2");
//         h.setAttribute("class","new_h"+this.todo.length);
//         var but = document.createElement("button");
//         but.setAttribute("class","new_but"+this.todo.length);
//         but.innerText = "Completed";
//         h.innerText = toDoVar;
//         divEl.appendChild(h);
//         divEl.appendChild(but);
//         document.querySelector(".wrapper").appendChild(divEl);
//         this.todo.push(toDoVar);
//         toDoList.markComplete(but);
//     },

//     markComplete: function(buttonEl){

//                 buttonEl.addEventListener("click",function(event){
//                 console.log(event.target.parentNode);
//                 let parentDiv = event.target.parentNode;
//                 parentDiv.querySelector("h2").style.backgroundColor = "green";
//         })

//     },

// }

// document.getElementById("textbox").addEventListener("keypress",function(event){
//     if(event.keyCode == 13) {
//         toDoList.newTodo(event.target.value);
//     }
//     else if(event.keyCode == 13 && event.target.value == ""){
//         alert("Enter Something");
//     }
// })

// document.getElementById("clickme").addEventListener("click",function(){
//     var text = document.querySelector("#textbox");
//     toDoList.newTodo(text.value);
// })

// approch 2 again retry

// obj = {
//     todo:  [],
//     createNew: function( text_value ){
//         var dicEl = document.createElement("div");
//         dicEl.setAttribute("class","child");

//         var h = document.createElement("h2");
//         h.setAttribute("class","new_h");
//         h.innerText = text_value;

//         var new_button = document.createElement("button");
//         new_button.setAttribute("class","new_button")
//         new_button.innerText = "Completed";

//         dicEl.appendChild(h);
//         dicEl.appendChild(new_button);

//         this.todo.push(text_value);
//         console.log(this.todo);
//         document.querySelector(".wrapper").appendChild(dicEl);
//         this.clear();
//         this.completed(new_button);

//     },

//     clear: function(){
//         var clean = document.querySelector("#textbox");
//         clean.value = '';
//     },

//     completed: function(buttonEl){
//         buttonEl.addEventListener("click",function(event){
//             let parent = event.target.parentNode;
//             parent.querySelector("h2").style.backgroundColor = "green";
//             parent.querySelector("h2").style.color = "white";
//             parent.querySelector("h2").style.padding = "3px 10px";
//         })
//     },

// }

// document.getElementById("textbox").addEventListener("keypress",function(){
//     if(event.keyCode==13){
//         obj.createNew(event.targer.value);
//         obj.clear();
//     }
// })

// document.getElementById("clickme").addEventListener("click",function(){
//     var keyvalue = document.querySelector("#textbox");
//     obj.createNew(keyvalue.value);
//     obj.clear();
// })

// function newfunc(){
//     var toDoVar = getval();
//     var divEl = document.createElement("div");
//     divEl.setAttribute("class","child");
//     var h = document.createElement("h2");
//     h.setAttribute("class","new_h");
//     var but = document.createElement("button");
//     but.setAttribute("class","new_but");
//     but.innerText = "Completed";
//     h.innerText = toDoVar;
//     divEl.appendChild(h);
//     divEl.appendChild(but);
//     document.querySelector(".wrapper").appendChild(divEl);
// }

// function getval(){
//     document.getElementById("textbox").addEventListener("keypress",function(event){
//         var g = event.target.value;
//         return g;

//     })

// }

// document.getElementById("new_but").addEventListener("click",function(event){

//     var back =  document.querySelector("#new_h");
//     console.log(back);

// })

// if(event.keyCode>0)
// {
//     for(var i=event.keyCode;i!=13;)
//     {
//         console.log(event.target.value);

//     }
// }

// var i,arr = [];
// i=event.keyCode;
// while(i!=13)
//     {
//     arr.push(1);
//     }
// console.log(arr);
