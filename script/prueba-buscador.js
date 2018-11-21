  <script type="text/javascript">

 
    function buscar(){
      
/**
 * @author: Alexis López Espinoza
 */

var search = document.getElementById("search"),
    food = document.getElementsByTagName("span"),
    forEach = Array.prototype.forEach;

search.addEventListener("search", function(e){
    var choice = this.value;
  
    forEach.call(food, function(f){
        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
            f.parentNode.style.display = "none";        
        else
            f.parentNode.style.display = "block";        
    });
}, false);

    }