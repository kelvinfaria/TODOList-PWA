var TodoList = (function(){
	
	var _list = [],
	_todoList = document.querySelector('.todo-list');
	
	var _handleSubmit = function(name){
	    name.preventDefault();

	    var value = name.target.querySelector('.todo-input').value,
	    data = JSON.parse( localStorage.getItem( 'todoList' ));
	    
		if(!data){ var data = {}; }
			
	    if(value){
		    
	    	var id = new Date().getTime();
	      
			tempData = {
			    id : id,
				title: value
			};
			
			data[id] = tempData;
			localStorage.setItem( 'todoList', JSON.stringify(data) );
			
			_createElement(value, id);
		}
		
		name.target.querySelector('.todo-input').value = "";
	};

	var _removeElement = function(event){
		var element = event.target.parentNode.parentNode;
		element.className += " fadeout";
				
		var transitionEvent = whichTransitionEvent();
		
		element.addEventListener(transitionEvent, function(){
			
			var oldData = JSON.parse(localStorage.getItem('todoList'));
			delete oldData[element.id];	
			localStorage.setItem('todoList', JSON.stringify(oldData));
			
			
		});		
	};
	
	var whichTransitionEvent = function(){
		var t,
		    el = document.createElement("fakeelement");
		
		var transitions = {
			"transition"      : "transitionend",
		    "OTransition"     : "oTransitionEnd",
		    "MozTransition"   : "transitionend",
		    "WebkitTransition": "webkitTransitionEnd"
		}
		
		for (t in transitions){
		    if (el.style[t] !== undefined){
		      return transitions[t];
		    }
		}
	};
	
	var _createElement = function(value, id){
		
		var newElement = document.createElement("div");
		newElement.innerHTML = '<div class="todo-element">' + value + '<i class="todo-delete">x</i></div>';
		newElement.className = "todo-element-wrapper";
		newElement.id = id;
		

		setTimeout(function(){
			newElement.className += " fadein";
		}, 100);
	
		
		_todoList.insertBefore(newElement, _todoList.firstChild);
		
		newElement.querySelector('i').addEventListener('click', _removeElement, false)
	};
	
	var showTodoList = function(){
		var data = JSON.parse( localStorage.getItem( 'todoList' ));
		
		for(var prop in data){
			_createElement(data[prop].title, data[prop].id);
		}
		
		document.querySelector('.todo-form').addEventListener('submit', _handleSubmit, false);	
	}
	
	return {
		showTodoList: showTodoList
	}
	
})();

TodoList.showTodoList();