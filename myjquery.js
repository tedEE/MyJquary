function $(selector) {
    var elements = document.querySelectorAll(selector);
    return new MyJquery(elements);
}


function MyJquery(elements) {

    this.elements = elements;

    this.on = function(eventname, f) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventname, f);
        }

        return this;
	}
     this.addClass = function(name) {
            for (var i = 0; i < this.elements.length; i++) {

                this.elements[i].classList.add(name);
            }

            return this;//СОЗДАНИЕ ЦЕПОЧКИ ... НАДО ЗАВТРА ОПРОБЫВАТЬ
	}


	 this.removeClass = function(name) {
            for (var i = 0; i < this.elements.length; i++) {

                this.elements[i].classList.remove(name);
            }

            return this;
	}


	this.html = function(html) {
            for (var i = 0; i < this.elements.length; i++) {

                this.elements[i].innerHTML = html;
            }

            return this;
	}
    


}